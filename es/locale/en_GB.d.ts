declare const localeValues: {
    locale: string;
    Table: {
        filterTitle: string;
        filterConfirm: string;
        filterReset: string;
        selectAll: string;
        selectInvert: string;
    };
    Modal: {
        okText: string;
        cancelText: string;
        justOkText: string;
    };
    Popconfirm: {
        okText: string;
        cancelText: string;
    };
    Transfer: {
        searchPlaceholder: string;
        itemUnit: string;
        itemsUnit: string;
    };
    Upload: {
        uploading: string;
        removeFile: string;
        uploadError: string;
        previewFile: string;
        downloadFile: string;
    };
    Empty: {
        description: string;
    };
    Form: {
        defaultValidateMessages: {
            default: string;
            required: string;
            enum: string;
            whitespace: string;
            date: {
                format: string;
                parse: string;
                invalid: string;
            };
            types: {
                string: string;
                method: string;
                array: string;
                object: string;
                number: string;
                date: string;
                boolean: string;
                integer: string;
                float: string;
                regexp: string;
                email: string;
                url: string;
                hex: string;
            };
            string: {
                len: string;
                min: string;
                max: string;
                range: string;
            };
            number: {
                len: string;
                min: string;
                max: string;
                range: string;
            };
            array: {
                len: string;
                min: string;
                max: string;
                range: string;
            };
            pattern: {
                mismatch: string;
            };
        };
    };
};
export default localeValues;
