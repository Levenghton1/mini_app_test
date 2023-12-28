document.addEventListener('DOMContentLoaded', function() {
    const outfitContainer = document.getElementById('outfit-container');
    const filterButtons = document.querySelectorAll('.style-filter-btn');

    // Example outfits data with image link, descriptions, prices, and categories
    const outfits = [
        {
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.webp',
            description: 'Elegant Evening Dress - Perfect for any formal event.',
            price: '$49.99',
            buyLink: 'https://www.shein.com',
            category: 'Formal'
        },
        {
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.webp',
            description: 'Casual Summer Dress - Stay cool and stylish.',
            price: '$39.99',
            buyLink: 'https://www.shein.com',
            category: 'Casual'
        },
        {
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/29/8a/17012205597f16183bee6edab5c089c9e67accc0c1_thumbnail_405x552.webp',
            description: 'Classic Office Attire - Impress in every business meeting.',
            price: '$59.99',
            buyLink: 'https://www.shein.com',
            category: 'Business'
        }
        // ... add more outfits as needed ...
    ];

    // Function to create and return an outfit element
    function createOutfitElement(outfit) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'outfit-item';
        itemDiv.innerHTML = `
            <img class="outfit-image" src="${outfit.imageUrl}" alt="${outfit.description}" />
            <div class="outfit-description">${outfit.description}</div>
            <div class="outfit-price">${outfit.price}</div>
            <a href="${outfit.buyLink}" target="_blank" class="buy-button">Buy</a>
        `;
        return itemDiv;
    }

   // Append all outfits to the container initially
    outfits.forEach(outfit => {
        outfitContainer.appendChild(createOutfitElement(outfit));
    });

    // Style filter button click handling
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.classList.contains('selected')) {
                // If the button is already selected, remove the selection and show all items
                filterButtons.forEach(btn => btn.classList.remove('selected'));
                showAllOutfits();
            } else {
                // Remove 'selected' class from all buttons and add to the clicked one
                filterButtons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                // Filter the outfits based on the selected category
                filterOutfits(button.textContent);
            }
        });
    });

    // Function to filter and display outfits based on the selected category
    function filterOutfits(category) {
        outfitContainer.innerHTML = ''; // Clear current outfits
        outfits.filter(outfit => outfit.category === category)
               .forEach(outfit => outfitContainer.appendChild(createOutfitElement(outfit)));
    }

    // Function to show all outfits
    function showAllOutfits() {
        outfitContainer.innerHTML = ''; // Clear current outfits
        outfits.forEach(outfit => outfitContainer.appendChild(createOutfitElement(outfit)));
    }
});
