document.addEventListener('DOMContentLoaded', function() {
    const outfitContainer = document.getElementById('outfit-container');
    const filterButtons = document.querySelectorAll('.style-filter-btn');

    // Example outfits data with image link and descriptions provided
    const outfits = [
        {
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.webp',
            description: 'Elegant Evening Dress - Perfect for any formal event.',
            buyLink: 'https://www.shein.com'
        },
        {
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.webp',
            description: 'Casual Summer Dress - Stay cool and stylish.',
            buyLink: 'https://www.shein.com'
        },
        {
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.webp',
            description: 'Classic Office Attire - Impress in every business meeting.',
            buyLink: 'https://www.shein.com'
        }
        // ... add more outfits as needed ...
    ];

    // Function to create and return an outfit element
    function createOutfitElement(outfit) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'outfit-item';
        itemDiv.innerHTML = `
            <img class="outfit-image" src="${outfit.imageUrl}" alt="Outfit" />
            <div class="outfit-description">${outfit.description}</div>
            <a href="${outfit.buyLink}" target="_blank" class="buy-button">Buy</a>
        `;
        return itemDiv;
    }

    // Append actual outfits to the container
    outfits.forEach(outfit => {
        outfitContainer.appendChild(createOutfitElement(outfit));
    });

    // Style filter button click handling
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'selected' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('selected'));
            // Add 'selected' class to the clicked button
            button.classList.add('selected');
            // Here you can add the logic to filter outfits based on the selected style
        });
    });

    // Indicate scrollability visually
    function checkScrollable() {
        // Show or hide the scrollbar indicator
        if (outfitContainer.scrollWidth > outfitContainer.clientWidth) {
            outfitContainer.classList.add('can-scroll');
        } else {
            outfitContainer.classList.remove('can-scroll');
        }
    }

    // Initial check
    checkScrollable();

    // Recheck scrollable when window resizes
    window.addEventListener('resize', checkScrollable);

    // Function to scroll the container slightly to indicate to the user that it's scrollable
    function indicateScrollability() {
        if (outfitContainer.scrollWidth > outfitContainer.clientWidth) {
            // Scroll right a little to indicate to the user
            outfitContainer.scrollBy({ left: 20, behavior: 'smooth' });
            // Scroll back to the start
            setTimeout(() => {
                outfitContainer.scrollBy({ left: -20, behavior: 'smooth' });
            }, 1000);
        }
    }

    // Run the scroll indication function
    indicateScrollability();
});

