import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const exports = {};
const events = [];
const browser = { location: { hostname: 'localhost' }, gtag: (...args) => events.push(args) };
const source = ts.transpileModule(fs.readFileSync(new URL('../lib/experiment.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
vm.runInNewContext(source, { exports, window: browser });

test('matches a whole phrase, but never guesses from the first ten characters', () => {
  const examples = [{ quote: "I'm not looking for anything serious right now." }];
  assert.equal(exports.findExactExample(' I’m NOT looking for anything serious right now! ', examples), examples[0]);
  assert.equal(exports.findExactExample("I'm not looking for my keys", examples), undefined);
  assert.equal(exports.findExactExample('Please help: ' + examples[0].quote, examples), undefined);
  assert.equal(exports.findExactExample('   ', examples), undefined);
});

test('analytics payload drops any unapproved fields including text and email', () => {
  const payload = exports.eventPayload({ name: 'demo_feedback', source: 'typed', outcome: 'unmatched', choice: 'not_helpful', text: 'private text', email: 'private@example.com' });
  assert.deepEqual(JSON.parse(JSON.stringify(payload)), { experiment_id: 'demand_v1', input_source: 'typed', match_status: 'unmatched', choice: 'not_helpful' });
});

test('local and preview use cannot generate production demand events', () => {
  const event = { name: 'demo_start', source: 'example' };
  exports.trackExperiment(event);
  browser.location.hostname = 'branch.vercel.app'; exports.trackExperiment(event);
  assert.equal(events.length, 0);
  browser.location.hostname = 'www.decodehistext.com'; exports.trackExperiment(event);
  assert.equal(events.length, 1);
  assert.equal(events[0][1], 'demo_start');
});

test('missing or blocked analytics never breaks the preview', () => {
  browser.gtag = undefined;
  assert.doesNotThrow(() => exports.trackExperiment({ name: 'demo_start', source: 'typed' }));
  browser.gtag = () => { throw new Error('blocked'); };
  assert.doesNotThrow(() => exports.trackExperiment({ name: 'demo_start', source: 'typed' }));
});
