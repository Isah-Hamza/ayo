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
const questionHeaders = document.querySelectorAll('[data-questionHeader]');
const questionBodys = document.querySelectorAll('[data-questionBody]');

let pickedFile:File;


// start faq    
// questionHeader?.addEventListener('click', () => {
//     questionBody.classList.toggle('open');
//     if(questionBody.classList.contains('open'))
//         questionBody.setAttribute('style', `height:${questionBody.scrollHeight}px`)
//     else
//         questionBody.setAttribute('style', `height:0px`)
//     const plusIcon = questionHeader.querySelector('[data-plus]');
//     const timesIcon = questionHeader.querySelector('[data-times]');
//     plusIcon.classList.toggle('hide');
//     timesIcon.classList.toggle('hide');
// })


questionHeaders?.forEach(header => {
    header.addEventListener('click', () => {
        const qstnBody = header.parentElement.children[1];
        qstnBody.classList.toggle('open')
        if(qstnBody.classList.contains('open'))
            qstnBody.setAttribute('style', `height:${qstnBody.scrollHeight}px`)
        else
            qstnBody.setAttribute('style', `height:0px`)
        const plusIcon = header.querySelector('[data-plus]');
        const timesIcon = header.querySelector('[data-times]');
        plusIcon.classList.toggle('hide');
        timesIcon.classList.toggle('hide');
    })
})

// end faq  

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