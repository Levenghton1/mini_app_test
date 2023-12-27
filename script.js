document.addEventListener('DOMContentLoaded', function() {
    const outfitContainer = document.getElementById('outfit-container');
    const filterButtons = document.querySelectorAll('.filter-button');

    // Example outfits data with image URLs, descriptions, types, and buy links provided
    const outfits = [
        {
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.jpg',
            description: 'Elegant Evening Dress - Perfect for any formal event.',
            type: 'casual',
            buyLink: 'https://your-buy-link-for-item-1.com'
        },
        {
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.jpg',
            description: 'Casual Summer Dress - Stay cool and stylish.',
            type: 'work',
            buyLink: 'https://your-buy-link-for-item-2.com'
        },
        {
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.jpg',
            description: 'Classic Office Attire - Impress in every business meeting.',
            type: 'date',
            buyLink: 'https://your-buy-link-for-item-3.com'
        }
        // Add more outfits with types and buy links as needed
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

    // Function to filter outfits based on the selected filter
    function filterOutfits(filter) {
        outfitContainer.innerHTML = ''; // Clear the current outfits

        outfits.forEach(outfit => {
            if (filter === 'all' || outfit.type === filter) {
                outfitContainer.appendChild(createOutfitElement(outfit));
            }
        });
    }

    // Event listener for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterOutfits(filter);
        });
    });

    // Initial display of all outfits
    filterOutfits('all');

    // Add a visual indicator for scrollable content (e.g., fading edges)
    outfitContainer.addEventListener('scroll', function() {
        // Check if the container is scrollable and adjust the UI accordingly
        const maxScrollLeft = outfitContainer.scrollWidth - outfitContainer.clientWidth;
        if (outfitContainer.scrollLeft > 0) {
            // Add class to indicate the ability to scroll left
            outfitContainer.classList.add('can-scroll-left');
        } else {
            outfitContainer.classList.remove('can-scroll-left');
        }

        if (outfitContainer.scrollLeft < maxScrollLeft) {
            // Add class to indicate the ability to scroll right
            outfitContainer.classList.add('can-scroll-right');
        } else {
            outfitContainer.classList.remove('can-scroll-right');
        }
    });
});
