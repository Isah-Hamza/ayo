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
var pickedFile;
// selectFile?.addEventListener('click', () => {
//     console.log(selectedFile)
// })
selectFile.addEventListener('change', function (e) {
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
