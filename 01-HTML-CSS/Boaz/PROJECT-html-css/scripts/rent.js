function updateModels() {
        const manufacturer = document.getElementById("manufacturer").value;
        const modelSelect = document.getElementById("model");
        modelSelect.innerHTML = '';

        //  default 
        const defaultOption = document.createElement("option");
        defaultOption.text = "Select Model";
        defaultOption.value = "";
        modelSelect.add(defaultOption);

        // מודלים שונים לפי סוג רכב
        const models = {
            "Audi": ["A3", "A4", "A6"],
            "Mercedes": ["C-Class", "E-Class", "S-Class"],
            "Corvet": ["Model 1", "Model 2", "Model 3"],
            "BMW": ["3 Series", "5 Series", "7 Series"]
        };

        // מוסיף את האופציות לפי הבחירה של הסוג רכב
        if (manufacturer in models) {
            models[manufacturer].forEach(function(model) {
                const option = document.createElement("option");
                option.text = model;
                option.value = model;
                modelSelect.add(option);
            });
        }
    }