function createProjectCard(project) {
    return `
        <div class="col">
            <div class="project-card h-100 d-flex flex-column">
                <img src="${project.image}" class="card-img-top w-100" alt="${project.title}">
                <div class="card-body d-flex flex-column flex-grow-1">
                    <!-- Title and tags container with fixed height -->
                    <div class="title-tags-container">
                        <h5 class="card-title">${project.title}</h5>
                    </div>
                    <div class="tags my-2">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <!-- Description -->
                    <p class="card-text flex-grow-1">${project.shortDescription}</p>
                </div>
                <!-- Footer with button -->
                <div class="card-footer mt-auto px-2">
                    <button class="btn btn-custom w-100 mb-4" data-bs-toggle="modal" data-bs-target="#${project.id}Modal">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createProjectModal(project) {
    return `
        <div class="modal fade" id="${project.id}Modal" tabindex="-1">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">${project.title}</h4>
                        <button type="button" class="btn-close custom-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <!-- Image Column -->
                                <div class="col-md-6 p-0">
                                    <div class="image-container">
                                        <img src="${project.image}" class="img-fluid" alt="${project.title}" style="object-fit: fit; height: auto;">
                                    </div>
                                    <div class="mt-3 px-3"> <!-- Add padding for content below the image -->
                                        <h5 class="mb-3">Technologies Used:</h5>
                                        <div class="mb-4">
                                            ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                                        </div>
                                        <!-- Buttons -->
                                        <div class="d-flex flex-column flex-md-row gap-3">
                                            <a href="${project.links.github}" class="btn btn-custom btn-sm ${project.links.github === '#' ? 'disabled' : ''}">
                                                <i class="bi bi-github me-2"></i>View Source
                                            </a>
                                            <a href="${project.links.demo}" class="btn btn-custom btn-sm ${project.links.demo === '#' ? 'disabled' : ''}">
                                                <i class="bi bi-link-45deg me-2"></i>Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <!-- Description Column -->
                                <div class="col-md-6 p-3 p-md-5">
                                    <h5 class="mb-3">Project Description:</h5>
                                    <p class="mb-4" style="text-align: justify;">${project.fullDescription}</p>
                                    <h5 class="mb-3">Key Features:</h5>
                                    <ul class="mb-4" style="text-align: justify;">
                                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                                    </ul>
                                    <h5 class="mb-3">Project Impact:</h5>
                                    <p style="text-align: justify;">${project.impact}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    const modalContainer = document.createElement('div');
    modalContainer.id = 'projectModals';
    document.body.appendChild(modalContainer);

    // Create cards and modals
    projectsData.projects.forEach(project => {
        projectsGrid.innerHTML += createProjectCard(project);
        modalContainer.innerHTML += createProjectModal(project);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Populate projects first
    populateProjects();

    const uniqueTags = new Set();
    projectsData.projects.forEach(project => {
        project.tags.forEach(tag => uniqueTags.add(tag.toLowerCase()));
    });

    // Generate filter buttons
    const filterButtonsContainer = document.getElementById('filter-buttons');
    uniqueTags.forEach(tag => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-custom';
        button.setAttribute('data-filter', tag);
        button.textContent = tag === 'ai' ? 'AI' : tag.charAt(0).toUpperCase() + tag.slice(1); // Capitalize first letter or keep "AI" in all caps
        filterButtonsContainer.appendChild(button);
    });

    // Then set up filters
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            projectCards.forEach(card => {
                const parentColumn = card.closest('.col');
                const cardTags = Array.from(card.querySelectorAll('.tag'))
                    .map(tag => tag.textContent.toLowerCase());
                
                if (filter === 'all' || cardTags.includes(filter.toLowerCase())) {
                    parentColumn.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 100);
                } else {
                    parentColumn.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });
});