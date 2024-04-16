document.addEventListener('DOMContentLoaded', function () {
    const filterOptions = document.querySelectorAll('.filter-option');
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('active');
            applyFilters();
        });
    });

    function applyFilters() {
        const selectedYears = Array.from(document.querySelectorAll('.filter-column:nth-child(1) .filter-option.active')).map(opt => opt.getAttribute('data-value'));
        const selectedMonths = Array.from(document.querySelectorAll('.filter-column:nth-child(2) .filter-option.active')).map(opt => opt.getAttribute('data-value'));
    
        const animalElements = document.querySelectorAll('#animalDisplay .animal-img');
        const infoContainer = document.getElementById('animal-info');
        infoContainer.innerHTML = '';  // 清除之前的信息
    
        animalElements.forEach(element => {
            const year = element.getAttribute('data-year');
            const months = element.getAttribute('data-month').split(', ');
            const species = element.getAttribute('data-species');
            const condition = element.getAttribute('data-condition');
            const status = element.getAttribute('data-status');
            const age = element.getAttribute('data-age');
            const animalClass = element.getAttribute('data-class');
    
            const matchesYear = selectedYears.length === 0 || selectedYears.includes(year);
            const matchesMonth = selectedMonths.length === 0 || months.some(month => selectedMonths.includes(month));
    
            const imgElement = element.querySelector('img');
    
            if (matchesYear && matchesMonth && (selectedYears.length > 0 || selectedMonths.length > 0)) {
                imgElement.src = `1/${species}1.png`;
                // 在 #animal-info 中添加信息
                infoContainer.innerHTML += `<div>
                    <h4>${species}</h4>
                    <p>Year: ${year}</p>
                    <p>Month: ${months.join(', ')}</p>
                    <p>Condition: ${condition}</p>
                    <p>Status: ${status}</p>
                    <p>Age: ${age}</p>
                    <p>Class: ${animalClass}</p>
                </div>`;
            } else {
                imgElement.src = `1/${species}.png`;
            }
        });
    }
});