
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type == "childList") {
            console.log("DETECTED ADS TO BE SKIPPED")
            checkForSkipButton()
        }
    }
}

function checkForSkipButton() {
    const test = document.getElementsByClassName("ytp-ad-skip-button-modern ytp-button")[0]
    if (test) {
        test.click()
    } else {
        console.log("Disconnecting")
    }
    
}

checkForSkipButton()
const observer = new MutationObserver(callback);

const targetNode = document.getElementsByClassName("video-ads ytp-ad-module")[0]

console.log("running")
if (targetNode) {
    const config = {attributes: false, childList: true, subtree: false }
    observer.observe(targetNode, config)
}
