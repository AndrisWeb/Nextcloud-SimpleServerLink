OCA.Files.fileActions.registerAction({
    name: 'SimpleServerLink',
    displayName: 'Get Server Link',
    mime: 'all',
    permissions: OC.PERMISSION_READ,
    iconClass: 'icon-link',
    actionHandler: async (fileName, context) => {
        const path = context.fileInfo.path || '';
        const fullPath = (path + '/' + fileName).replace(/^\/+/, '');

        const url = 'https://andrisweb.com/s/' + fullPath;
        await navigator.clipboard.writeText(url);
        OC.dialogs.alert('Link copied to clipboard:\n' + url, 'Success');
    },
    isVisible: function (fileName, context) {
        const path = context.fileInfo.path || '';
        return path.startsWith('/StaticServer/');
    }
});
