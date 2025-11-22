const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Mock browser environment
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.document = dom.window.document;
global.window = dom.window;

// Import the function (need to use require for this script context, but the file is ESM)
// Since the project is type: module (implied by Next.js usually, or .mjs), I might need to rename this test to .mjs or use dynamic import.
// Let's try dynamic import.

async function runTests() {
    const { cleanHtml } = await import('./utils/cleanHtml.js');

    const tests = [
        {
            name: "Remove attributes",
            input: '<div class="foo" style="color:red">Hello</div>',
            attrs: "class style",
            tags: [],
            expected: "<div>Hello</div>"
        },
        {
            name: "Remove tags (unwrap)",
            input: "<p><span>World</span></p>",
            attrs: "",
            tags: ["span"],
            expected: "<p>World</p>"
        },
        {
            name: "Combined removal",
            input: '<div class="test"><b>Bold</b></div>',
            attrs: "class",
            tags: ["b"],
            expected: "<div>Bold</div>"
        }
    ];

    let passed = 0;
    console.log("Running integration tests...\n");

    for (let i = 0; i < tests.length; i++) {
        const test = tests[i];
        // Re-create temp div for each test implicitly by the function using document.createElement
        const result = cleanHtml(test.input, test.attrs, test.tags);
        if (result === test.expected) {
            console.log(`✅ Test ${i + 1}: ${test.name} PASSED`);
            passed++;
        } else {
            console.log(`❌ Test ${i + 1}: ${test.name} FAILED`);
            console.log(`   Expected: ${test.expected}`);
            console.log(`   Actual:   ${result}`);
        }
    }

    console.log(`\nPassed ${passed} out of ${tests.length} tests.`);

    if (passed === tests.length) {
        process.exit(0);
    } else {
        process.exit(1);
    }
}

runTests();
