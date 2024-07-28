$(document).ready(function() {
    // 初始化 i18n
    $.i18n().load({
        'en': 'locales/en.json',
        'zh-TW': 'locales/zh-TW.json'
    }).done(function() {
        // 設置初始語言
        setLanguage('en');
    });
});

function setLanguage(lang) {
    $.i18n().locale = lang;
    $('body').i18n();
    $('#languageSelect').val(lang);
}

function changeLanguage(lang) {
    console.log("select : ",  lang);
    setLanguage(lang);
}