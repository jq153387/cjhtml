const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function cleanHtml(inputHtml, attributesToRemove, tagsToRemove) {
    if (!inputHtml) return '';

    // Create a temporary DOM element to manipulate the HTML
    const dom = new JSDOM(inputHtml);
    const tempDiv = dom.window.document.createElement('div');
    tempDiv.innerHTML = inputHtml;

    // 1. Remove Attributes
    const attrs = attributesToRemove.split(/\s+/).filter((a) => a.trim() !== '');
    if (attrs.length > 0) {
        const allElements = tempDiv.getElementsByTagName('*');
        for (let i = 0; i < allElements.length; i++) {
            attrs.forEach((attr) => {
                allElements[i].removeAttribute(attr);
            });
        }
    }

    // 2. Remove Tags (Unwrap)
    tagsToRemove.forEach((tag) => {
        if (tag.trim() !== '') {
            const elements = tempDiv.getElementsByTagName(tag);
            // Convert to array to avoid live collection issues when modifying
            const elementsArray = Array.from(elements);
            elementsArray.forEach((el) => {
                // Replace the element with its children (unwrap)
                while (el.firstChild) {
                    el.parentNode.insertBefore(el.firstChild, el);
                }
                el.parentNode.removeChild(el);
            });
        }
    });

    return tempDiv.innerHTML;
}

// Test Cases
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
    },
    {
        name: "Nested tags removal",
        input: "<div><span><a>Link</a></span></div>",
        attrs: "",
        tags: ["span", "a"],
        expected: "<div>Link</div>"
    }
];

let passed = 0;
console.log("Running tests...\n");

tests.forEach((test, index) => {
    const result = cleanHtml(test.input, test.attrs, test.tags);
    if (result === test.expected) {
        console.log(`✅ Test ${index + 1}: ${test.name} PASSED`);
        passed++;
    } else {
        console.log(`❌ Test ${index + 1}: ${test.name} FAILED`);
        console.log(`   Expected: ${test.expected}`);
        console.log(`   Actual:   ${result}`);
    }
});

console.log(`\nPassed ${passed} out of ${tests.length} tests.`);

if (passed === tests.length) {
    process.exit(0);
} else {
    process.exit(1);
}
