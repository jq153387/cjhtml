/**
 * Cleans HTML by removing specified attributes and unwrapping specified tags.
 * @param {string} inputHtml - The HTML string to clean.
 * @param {string} attributesToRemove - Space-separated list of attributes to remove.
 * @param {string[]} tagsToRemove - Array of tag names to unwrap.
 * @returns {string} - The cleaned HTML string.
 */
export function cleanHtml(inputHtml, attributesToRemove, tagsToRemove) {
    if (!inputHtml) return ''

    // Create a temporary DOM element to manipulate the HTML
    // Note: This runs in the browser, so 'document' is available.
    // If running on server, we'd need jsdom, but this is for client-side usage.
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = inputHtml

    // 1. Remove Attributes
    const attrs = attributesToRemove.split(/\s+/).filter((a) => a.trim() !== '')
    if (attrs.length > 0) {
        const allElements = tempDiv.getElementsByTagName('*')
        for (let i = 0; i < allElements.length; i++) {
            attrs.forEach((attr) => {
                allElements[i].removeAttribute(attr)
            })
        }
    }

    // 2. Remove Tags (Unwrap)
    tagsToRemove.forEach((tag) => {
        if (tag.trim() !== '') {
            const elements = tempDiv.getElementsByTagName(tag)
            // Convert to array to avoid live collection issues when modifying
            const elementsArray = Array.from(elements)
            elementsArray.forEach((el) => {
                // Replace the element with its children (unwrap)
                while (el.firstChild) {
                    el.parentNode.insertBefore(el.firstChild, el)
                }
                el.parentNode.removeChild(el)
            })
        }
    })

    return tempDiv.innerHTML
}
