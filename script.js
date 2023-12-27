document.addEventListener('DOMContentLoaded', function() {
    const outfitContainer = document.getElementById('outfit-container');

    // Example outfits data - replace with actual API call/response handling
    const outfits = [
        {
            imageUrl: 'http://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.jpg',
            description: 'Elegant Evening Dress - Perfect for any formal event.',
            buyLink: 'your-purchase-link-for-item-1'
        },
        {
            imageUrl: 'http://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.jpg',
            description: 'Casual Summer Dress - Stay cool and stylish.',
            buyLink: 'your-purchase-link-for-item-2'
        },
        {
            imageUrl: 'http://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.jpg',
            description: 'Classic Office Attire - Impress in every business meeting.',
            buyLink: 'your-purchase-link-for-item-3'
        }
        // ... more outfits
    ];

    // Create HTML for each outfit
    outfits.forEach(outfit => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'outfit-item';
        itemDiv.innerHTML = `
            <img class="outfit-image" src="${outfit.imageUrl}" alt="${outfit.description}" />
            <p>${outfit.description}</p>
            <a href="${outfit.buyLink}" target="_blank" class="buy-button">Buy</a>
        `;
        outfitContainer.appendChild(itemDiv);
    });

    // Handle the back to chat button
    document.getElementById('back-to-chat').addEventListener('click', function() {
        // Use Telegram Web App API to close the mini app
        if (window.Telegram.WebApp) {
            window.Telegram.WebApp.close();
        }
    });
});
