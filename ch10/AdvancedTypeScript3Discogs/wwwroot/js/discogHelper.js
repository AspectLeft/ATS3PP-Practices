const searchDiscog = (request, imgId) => {
    return new Promise(() => {
        fetch(request, {
            method: 'GET',
            headers: {
                'user-agent': 'ATS3PPch10'
            }
        })
            .then(response => {
            return response.json();
        })
            .then(responseBody => {
            // We have an image... Let's use it.
            const image = document.getElementById(imgId);
            if (image) {
                if (responseBody && responseBody.images && responseBody.images.length > 0) {
                    image.src = responseBody.images["0"].uri150;
                }
            }
        }).catch(x => {
            console.log(x);
        });
    });
};
//# sourceMappingURL=discogHelper.js.map