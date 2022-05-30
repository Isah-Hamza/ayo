console.log('start of script');
var menu = document.querySelector('[data-menu]');
var closeBtn = document.querySelector('[data-closeBtn]');
var nav = document.querySelector('[data-nav]');
var report_case_btn = document.querySelector('[data-report_case_btn]');
var reportFasle = document.querySelector('[data-report="false"]');
var reportTrue = document.querySelector('[data-report="true"]');
var prevStep1 = document.querySelector('[data-prevStep1]');
var nextStep1 = document.querySelector('[data-nextStep1]');
var prevStep2 = document.querySelector('[data-prevStep2]');
var nextStep2 = document.querySelector('[data-nextStep2]');
var prevStep3 = document.querySelector('[data-prevStep3]');
var submitReport = document.querySelector('[data-submitReport]');
var section1 = document.querySelector('[data-section="1"]');
var section2 = document.querySelector('[data-section="2"]');
var section3 = document.querySelector('[data-section="3"]');
var selectFile = document.querySelector('[data-selectFile]');
var selectedFile = document.querySelector('[data-selectedFile]');
var submitReportOverlay = document.querySelector('[data-overlay]');
var closeReportOverlay = document.querySelector('[data-closeOverlay]');
var questionHeaders = document.querySelectorAll('[data-questionHeader]');
var questionBodys = document.querySelectorAll('[data-questionBody]');
var items = document.querySelectorAll('[data-item]');
var unselectedDiv = document.querySelector('[data-selected="false"]');
var selectedDiv = document.querySelector('[data-selected="true"]');
var goBackUnselectedBtn = document.querySelector('[data-goBackUnselected]');
var pickedFile;
console.log();
// start faq  
goBackUnselectedBtn === null || goBackUnselectedBtn === void 0 ? void 0 : goBackUnselectedBtn.addEventListener('click', function () {
    selectedDiv.classList.add('hide');
    unselectedDiv.classList.remove('hide');
});
var observer;
var options = {
    root: document.querySelector('.secondContainer'),
    rootMargin: '50px',
    threshold: .5
};
observer = new IntersectionObserver(callback, options);
items.forEach(function (item) {
    observer.observe(item);
});
function callback(items) {
    items.forEach(function (item) {
        var insIntersecting = item.isIntersecting;
        var targetElem = item.target;
        insIntersecting ? targetElem.classList.add('scale') : targetElem.classList.remove('scale');
    });
}
items === null || items === void 0 ? void 0 : items.forEach(function (item) { return item.addEventListener('click', function () {
    var imgSrc = item.children[0].getAttribute('src');
    unselectedDiv.classList.add('hide');
    selectedDiv.classList.remove('hide');
    selectedDiv.querySelector('[data-dynamicImg]').setAttribute('src', imgSrc);
}); });
questionHeaders === null || questionHeaders === void 0 ? void 0 : questionHeaders.forEach(function (header, index) {
    header.addEventListener('click', function () {
        questionBodys.forEach(function (elem, idx) {
            if (index == idx)
                return;
            elem.classList.remove('open');
            elem.setAttribute('style', "height:0px");
            questionHeaders.forEach(function (head, idx) {
                if (index == idx)
                    return;
                var plusIcon = head.querySelector('[data-plus]');
                var timesIcon = head.querySelector('[data-times]');
                plusIcon.classList.remove('hide');
                timesIcon.classList.add('hide');
            });
        });
        var qstnBody = header.parentElement.children[1];
        qstnBody.classList.toggle('open');
        if (qstnBody.classList.contains('open'))
            qstnBody.setAttribute('style', "height:".concat(qstnBody.scrollHeight, "px"));
        else
            qstnBody.setAttribute('style', "height:0px");
        var plusIcon = header.querySelector('[data-plus]');
        var timesIcon = header.querySelector('[data-times]');
        plusIcon.classList.toggle('hide');
        timesIcon.classList.toggle('hide');
    });
});
// end faq  
closeReportOverlay === null || closeReportOverlay === void 0 ? void 0 : closeReportOverlay.addEventListener('click', function () {
    submitReportOverlay.classList.toggle('hide');
});
submitReport === null || submitReport === void 0 ? void 0 : submitReport.addEventListener('click', function () {
    submitReportOverlay.classList.toggle('hide');
});
selectFile === null || selectFile === void 0 ? void 0 : selectFile.addEventListener('change', function (e) {
    pickedFile = e.target.files[0];
    selectedFile.innerText = e.target.files[0].name;
});
report_case_btn === null || report_case_btn === void 0 ? void 0 : report_case_btn.addEventListener('click', function () {
    reportFasle.classList.add('hide');
    reportTrue.classList.remove('hide');
    section1.parentElement.scrollIntoView({ behavior: "smooth" });
});
prevStep1 === null || prevStep1 === void 0 ? void 0 : prevStep1.addEventListener('click', function () {
    reportFasle.classList.remove('hide');
    reportTrue.classList.add('hide');
});
nextStep1 === null || nextStep1 === void 0 ? void 0 : nextStep1.addEventListener('click', function () {
    section1.classList.add('hide');
    section2.classList.remove('hide');
    section2.parentElement.scrollIntoView({ behavior: 'smooth' });
});
prevStep2 === null || prevStep2 === void 0 ? void 0 : prevStep2.addEventListener('click', function () {
    section1.classList.remove('hide');
    section2.classList.add('hide');
    section1.parentElement.scrollIntoView({ behavior: "smooth" });
});
nextStep2 === null || nextStep2 === void 0 ? void 0 : nextStep2.addEventListener('click', function () {
    section2.classList.add('hide');
    section3.classList.remove('hide');
    section3.parentElement.scrollIntoView({ behavior: 'smooth' });
});
prevStep3 === null || prevStep3 === void 0 ? void 0 : prevStep3.addEventListener('click', function () {
    section2.classList.remove('hide');
    section3.classList.add('hide');
    section2.parentElement.scrollIntoView({ behavior: 'smooth' });
});
menu === null || menu === void 0 ? void 0 : menu.addEventListener('click', function () {
    nav.classList.add('open');
});
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', function () {
    nav.classList.remove('open');
});
console.log('end of script');
