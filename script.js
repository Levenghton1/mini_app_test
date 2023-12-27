document.addEventListener('DOMContentLoaded', function() {
    const outfitContainer = document.getElementById('outfit-container');

    // Example outfits data with provided image and descriptions
    const outfits = [
        {
            imageUrl: 'http://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.jpg',
            description: 'Elegant Evening Dress - Perfect for any formal event.',
            buyLink: '#'
        },
        {
            imageUrl: 'http://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.jpg',
            description: 'Casual Summer Dress - Stay cool and stylish.',
            buyLink: '#'
        },
        {
            imageUrl: 'http://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.jpg',
            description: 'Classic Office Attire - Impress in every business meeting.',
            buyLink: '#'
        }
    ];

    // Function to create and return an outfit element
    function createOutfitElement(outfit) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'outfit-item';
        itemDiv.innerHTML = `
            <img class="outfit-image" src="${outfit.imageUrl}" alt="${outfit.description}" />
            <div class="outfit-description">${outfit.description}</div>
            <a href="${outfit.buyLink}" target="_blank" class="buy-button">Buy</a>
        `;
        return itemDiv;
    }

    // Append actual outfits to the container
    outfits.forEach(outfit => {
        const outfitElement = createOutfitElement(outfit);
        outfitContainer.appendChild(outfitElement);
    });

    // Clone outfits for visual loop effect
    outfits.forEach(outfit => {
        const clone = createOutfitElement(outfit);
        clone.classList.add('clone'); // Optional: add a class to cloned elements
        outfitContainer.appendChild(clone);
    });

    // Handle the back to chat button
    document.getElementById('back-to-chat').addEventListener('click', function() {
        // Use Telegram Web App API to close the mini app
        if (window.Telegram.WebApp) {
            window.Telegram.WebApp.close();
        }
    });
});
