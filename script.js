const proteinCOntent = [
    {
        FoodItem: "Salmon",
        Quantity: "100g",
        Content: "25g",
      },
      {
        FoodItem: "Tofu",
        Quantity: "150g",
        Content: "18g",
      },
      {
        FoodItem: "Cottage Cheese",
        Quantity: "200g",
        Content: "28g",
      },
      {
        FoodItem: "Turkey Breast",
        Quantity: "100g",
        Content: "29g",
      },
      {
        FoodItem: "Quinoa",
        Quantity: "1 cup cooked",
        Content: "8g",
      },
      {
        FoodItem: "Lentils",
        Quantity: "1 cup cooked",
        Content: "18g",
      },
      {
        FoodItem: "Chickpeas",
        Quantity: "1 cup cooked",
        Content: "15g",
      },
      {
        FoodItem: "Peanut Butter",
        Quantity: "2 tablespoons",
        Content: "8g",
      },
];
const carboContent = [
    {
        FoodItem: "Brown Rice",
        Quantity: "1 cup cooked",
        Content: "45g",
      },
      {
        FoodItem: "Sweet Potato",
        Quantity: "1 medium",
        Content: "26g",
      },
      {
        FoodItem: "Oats",
        Quantity: "1 cup cooked",
        Content: "54g",
      },
      {
        FoodItem: "Banana",
        Quantity: "1 medium",
        Content: "27g",
      },
      {
        FoodItem: "Quinoa",
        Quantity: "1 cup cooked",
        Content: "39g",
      },
      {
        FoodItem: "Whole Wheat Bread",
        Quantity: "2 slices",
        Content: "24g",
      },
      {
        FoodItem: "Pasta",
        Quantity: "1 cup cooked",
        Content: "43g",
      },
      {
        FoodItem: "Apples",
        Quantity: "1 medium",
        Content: "25g",
      },
];
const fatContent = [
    {
        FoodItem: "Avocado",
        Quantity: "1 medium",
        Content: "21g",
      },
      {
        FoodItem: "Olive Oil",
        Quantity: "1 tablespoon",
        Content: "14g",
      },
      {
        FoodItem: "Almonds",
        Quantity: "1 ounce",
        Content: "14g",
      },
      {
        FoodItem: "Salmon",
        Quantity: "3 ounces",
        Content: "13g",
      },
      {
        FoodItem: "Chia Seeds",
        Quantity: "2 tablespoons",
        Content: "9g",
      },
      {
        FoodItem: "Walnuts",
        Quantity: "1 ounce",
        Content: "18g",
      },
      {
        FoodItem: "Peanut Butter",
        Quantity: "2 tablespoons",
        Content: "16g",
      },
      {
        FoodItem: "Cheese (Cheddar)",
        Quantity: "1 ounce",
        Content: "9g",
      },
];
const fiberContent = [
    {
        FoodItem: "Broccoli",
        Quantity: "1 cup cooked",
        Content: "5g",
    },
    {
        FoodItem: "Raspberries",
        Quantity: "1 cup",
        Content: "8g",
    },
    {
        FoodItem: "Oat Bran",
        Quantity: "1/2 cup",
        Content: "7g",
    },
    {
        FoodItem: "Chia Seeds",
        Quantity: "2 tablespoons",
        Content: "10g",
    },
    {
        FoodItem: "Lentils",
        Quantity: "1 cup cooked",
        Content: "15g",
    },
];

const vitaminContent = [
    {
        FoodItem: "Spinach",
        Quantity: "1 cup cooked",
        Content: "987% DV (Vitamin K), 47% DV (Vitamin C)",
    },
    {
        FoodItem: "Carrots",
        Quantity: "1 medium",
        Content: "428% DV (Vitamin A), 10% DV (Vitamin K)",
    },
    {
        FoodItem: "Oranges",
        Quantity: "1 medium",
        Content: "93% DV (Vitamin C)",
    },
    {
        FoodItem: "Almonds",
        Quantity: "1 ounce",
        Content: "7% DV (Calcium), 76% DV (Vitamin E)",
    },
    {
        FoodItem: "Salmon",
        Quantity: "3 ounces",
        Content: "79% DV (Vitamin D), 59% DV (Vitamin B12)",
    },
];

const mineralContent = [
    {
        FoodItem: "Kale",
        Quantity: "1 cup cooked",
        Content: "9% DV (Calcium), 26% DV (Magnesium)",
    },
    {
        FoodItem: "Bananas",
        Quantity: "1 medium",
        Content: "8% DV (Potassium), 1% DV (Iron)",
    },
    {
        FoodItem: "Pumpkin Seeds",
        Quantity: "1 ounce",
        Content: "23% DV (Iron), 37% DV (Magnesium)",
    },
    {
        FoodItem: "Yogurt",
        Quantity: "1 cup",
        Content: "49% DV (Calcium), 12% DV (Phosphorus)",
    },
    {
        FoodItem: "Sweet Potatoes",
        Quantity: "1 medium",
        Content: "7% DV (Potassium), 20% DV (Manganese)",
    },
];

const proteinSheet = document.querySelector(".excel-sheet-Pro");
const carboSheet = document.querySelector(".excel-sheet-Carbo");
const FatSheet = document.querySelector(".excel-sheet-Fat");
const fiberSheet = document.querySelector(".excel-sheet-Fiber");
const vitaminSheet = document.querySelector(".excel-sheet-Vitamin");
const mineralSheet = document.querySelector(".excel-sheet-Mineral");

const protein = document.getElementById("Protein");
const carbohydrates = document.getElementById("Carbo");
const Fat = document.getElementById("Fat");
const fiberButton = document.getElementById("Fiber");
const vitaminButton = document.getElementById("Vitamin");
const mineralButton = document.getElementById("Mineral");


protein.addEventListener("click", (event) => {
    toggleSheet(proteinSheet, proteinCOntent);
});

carbohydrates.addEventListener("click", (event) => {
    toggleSheet(carboSheet, carboContent);
});

Fat.addEventListener("click", (event) => {
    toggleSheet(FatSheet, fatContent);
});

fiberButton.addEventListener("click", () => {
    toggleSheet(fiberSheet, fiberContent);
});

vitaminButton.addEventListener("click", () => {
    toggleSheet(vitaminSheet, vitaminContent);
});

mineralButton.addEventListener("click", () => {
    toggleSheet(mineralSheet, mineralContent);
});

function toggleSheet(sheet, content) {
    sheet.innerHTML = "";
    sheet.style.display = sheet.style.display === "none" ? "block" : "none";

    if (sheet.style.display === "block") {
        // Header row
        const headerRow = document.createElement("div");
        headerRow.classList = "excel-row header-row";

        const foodItemHeader = document.createElement("div");
        foodItemHeader.innerHTML = "Food Item";
        foodItemHeader.classList = "FoodItem";
        headerRow.appendChild(foodItemHeader);

        const quantityHeader = document.createElement("div");
        quantityHeader.innerHTML = "Quantity";
        quantityHeader.classList = "Quantity";
        headerRow.appendChild(quantityHeader);

        const contentHeader = document.createElement("div");
        contentHeader.innerHTML = "Content";
        contentHeader.classList = "Content";
        headerRow.appendChild(contentHeader);

        sheet.appendChild(headerRow);

        // Data rows
        content.forEach(item => {
            const row = document.createElement("div");
            row.classList = "excel-row";

            const foodItem = document.createElement("div");
            foodItem.innerHTML = item.FoodItem;
            foodItem.classList = "FoodItem";
            row.appendChild(foodItem);

            const quantity = document.createElement("div");
            quantity.innerHTML = item.Quantity;
            quantity.classList = "Quantity";
            row.appendChild(quantity);

            const content = document.createElement("div");
            content.innerHTML = item.Content;
            content.classList = "Content";
            row.appendChild(content);

            sheet.appendChild(row);
        });

      
    }
}
