const locators = {
    LOGIN: {
        TF_WORKSPACE: '#workspace',
        TF_USER: '#username',
        TF_PASSWORD: '#password',
        BTN_ACCESS: '#submit_button',
        MESSAGE_ERROR: '.nm-text'
    },
    MAIN: {
        IMG_MENU: '.icon-menu',
        MENU_LOCALS: '[href="/CenterWeb/serviceLocal"]'
    },
    LIST_LOCAL: {
        BTN_NEW_LOCAL: '#addServiceLocal',
        TF_SEARCH: '#genericFilter',
        BTN_SEARCH: '#serviceLocalList_doSearch',
        FN_XP_FIND_LOCAL: description => `//td[contains(text(),'${description}')]`

    },
    DETAIL_LOCAL: {
        TF_DESCRIPTION: '#serviceLocal_description',
        TF_CORPORATE_NAME: '#serviceLocal_corporateName',
        BTN_SAVE: '#formServiceLocal_doSave'

    }
}

export default locators;