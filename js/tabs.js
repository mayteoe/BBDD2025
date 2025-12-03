/**
 * Sincronización de pestañas (Tabs)
 * Cuando se selecciona una pestaña (ej: MariaDB), se seleccionan todas las pestañas
 * con el mismo nombre en la página.
 */
document.addEventListener('DOMContentLoaded', () => {
    const tabSets = document.querySelectorAll('.tabbed-set');

    tabSets.forEach(set => {
        const inputs = set.querySelectorAll('input[type="radio"]');
        const labels = set.querySelectorAll('.tabbed-labels > label');

        inputs.forEach((input, index) => {
            input.addEventListener('change', () => {
                if (input.checked) {
                    const labelText = labels[index].textContent.trim();
                    syncTabs(labelText);
                }
            });
        });
    });

    function syncTabs(selectedLabel) {
        const allSets = document.querySelectorAll('.tabbed-set');

        allSets.forEach(set => {
            const labels = set.querySelectorAll('.tabbed-labels > label');
            const inputs = set.querySelectorAll('input[type="radio"]');

            labels.forEach((label, index) => {
                if (label.textContent.trim() === selectedLabel) {
                    if (!inputs[index].checked) {
                        inputs[index].checked = true;
                        // Disparar evento change manualmente si fuera necesario, 
                        // pero para evitar bucles infinitos mejor solo cambiar la propiedad.
                    }
                }
            });
        });
    }
});
