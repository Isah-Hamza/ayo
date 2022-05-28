console.log('start of script');

const menu = document.querySelector('[data-menu]');
const closeBtn = document.querySelector('[data-closeBtn]');
const nav = document.querySelector('[data-nav]');
const report_case_btn = document.querySelector('[data-report_case_btn]');
const reportFasle = document.querySelector('[data-report="false"]');
const reportTrue = document.querySelector('[data-report="true"]');
const prevStep1 = document.querySelector('[data-prevStep1]');
const nextStep1 = document.querySelector('[data-nextStep1]');
const prevStep2 = document.querySelector('[data-prevStep2]');
const nextStep2 = document.querySelector('[data-nextStep2]');
const prevStep3 = document.querySelector('[data-prevStep3]');
const submitReport = document.querySelector('[data-submitReport]') as HTMLButtonElement ;
const section1 = document.querySelector('[data-section="1"]');
const section2 = document.querySelector('[data-section="2"]');
const section3 = document.querySelector('[data-section="3"]');
const selectFile  = document.querySelector('[data-selectFile]') as HTMLInputElement ;
const selectedFile = document.querySelector('[data-selectedFile]') as HTMLParagraphElement ;
const submitReportOverlay = document.querySelector('[data-overlay]') as HTMLDivElement ;
const closeReportOverlay = document.querySelector('[data-closeOverlay]');


let pickedFile:File;

// selectFile?.addEventListener('click', () => {
//     console.log(selectedFile)
// })



closeReportOverlay?.addEventListener('click', () => {
    submitReportOverlay.classList.toggle('hide');
})

submitReport?.addEventListener('click', () => {
    submitReportOverlay.classList.toggle('hide');
})

selectFile?.addEventListener('change',(e: Event) => {
    pickedFile = e.target.files[0];
    selectedFile.innerText = e.target.files[0].name;
})

report_case_btn?.addEventListener('click', () => {
    reportFasle.classList.add('hide');
    reportTrue.classList.remove('hide');
    section1.parentElement.scrollIntoView({behavior:"smooth"})
})

prevStep1?.addEventListener('click', () => {
    reportFasle.classList.remove('hide');
    reportTrue.classList.add('hide');
})

nextStep1?.addEventListener('click', () => {
    section1.classList.add('hide');
    section2.classList.remove('hide');
    section2.parentElement.scrollIntoView({behavior:'smooth'});
})

prevStep2?.addEventListener('click', () => {
    section1.classList.remove('hide');
    section2.classList.add('hide');
    section1.parentElement.scrollIntoView({behavior:"smooth"})
})

nextStep2?.addEventListener('click', () => {
    section2.classList.add('hide');
    section3.classList.remove('hide');
    section3.parentElement.scrollIntoView({behavior:'smooth'})
})

prevStep3?.addEventListener('click', () => {
    section2.classList.remove('hide');
    section3.classList.add('hide');
    section2.parentElement.scrollIntoView({behavior:'smooth'});
})

menu?.addEventListener('click', () => {
    nav.classList.add('open');
})


closeBtn?.addEventListener('click', () => {
    nav.classList.remove('open');
})



console.log('end of script');