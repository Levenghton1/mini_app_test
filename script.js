document.addEventListener('DOMContentLoaded', function() {
    const outfitContainer = document.getElementById('outfit-container');

    // Example outfits data with image link and descriptions provided
    const outfits = [
        {
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.jpg',
            description: 'Elegant Evening Dress - Perfect for any formal event.',
            buyLink: 'https://your-buy-link-for-item-1.com'
        },
        {
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.jpg',
            description: 'Casual Summer Dress - Stay cool and stylish.',
            buyLink: 'https://your-buy-link-for-item-2.com'
        },
        {
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.jpg',
            description: 'Classic Office Attire - Impress in every business meeting.',
            buyLink: 'https://your-buy-link-for-item-3.com'
        }
        // ... add more outfits if needed ...
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
        outfitContainer.appendChild(createOutfitElement(outfit));
    });

    // Optionally, remove the "Back to Chat" button from the DOM
    const backToChatButton = document.getElementById('back-to-chat');
    if (backToChatButton) {
        backToChatButton.parentNode.removeChild(backToChatButton);
    }

    // Add a visual indicator for scrollable content (e.g., fading edges)
    outfitContainer.addEventListener('scroll', function() {
        // Check if the container is scrollable and adjust the UI accordingly
        const maxScrollLeft = outfitContainer.scrollWidth - outfitContainer.clientWidth;
        if (outfitContainer.scrollLeft > 0) {
            // Add class to indicate ability to scroll left
            outfitContainer.classList.add('can-scroll-left');
        } else {
            outfitContainer.classList.remove('can-scroll-left');
        }

        if (outfitContainer.scrollLeft < maxScrollLeft) {
            // Add class to indicate ability to scroll right
            outfitContainer.classList.add('can-scroll-right');
        } else {
            outfitContainer.classList.remove('can-scroll-right');
        }
    });
});
