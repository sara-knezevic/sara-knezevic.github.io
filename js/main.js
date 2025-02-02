// main.js
function createExperienceItem(experience, index) {
    return `
        <div class="accordion-item">
            <div class="timeline">
                <div class="timeline-line"></div>
                <div class="timeline-dot"></div>
                <div class="timeline-year">${experience.endYear}</div>
            </div>
            <h2 class="accordion-header" id="expHeading${index}">
                <button class="accordion-button collapsed" type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#expCollapse${index}">
                    <div class="d-flex flex-column align-items-start">
                        <span class="fw-bold">${experience.title}</span>
                        <small class="text-muted">${experience.department}</small>
                    </div>
                </button>
            </h2>
            <div id="expCollapse${index}" 
                 class="accordion-collapse collapse" 
                 data-bs-parent="#experienceAccordion">
                <div class="accordion-body">
                    <p>
                        <strong>${experience.organization}</strong><br>
                        <em>${experience.location}</em><br>
                        <small class="text-muted"><em>${experience.period}</em></small>
                    </p>
                    <ul>
                        ${experience.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function createEducationItem(education, index) {
    return `
        <div class="accordion-item">
            <div class="timeline">
                <div class="timeline-line"></div>
                <div class="timeline-dot"></div>
                <div class="timeline-year">${education.endYear}</div>
            </div>
            <h2 class="accordion-header" id="eduHeading${index}">
                <button class="accordion-button collapsed" type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#eduCollapse${index}">
                    <div class="d-flex flex-column align-items-start w-100 me-2">
                        <span class="fw-bold">${education.degree}</span>
                        <small class="text-muted">${education.department}</small>
                        <!-- "Active" badge for mobile (below text) -->
                        ${education.isActive ? '<span class="badge d-md-none mt-2">Present</span>' : ''}
                    </div>
                    <!-- "Active" badge for larger screens (next to arrow) -->
                    <div class="ms-auto d-none d-md-block pe-2">
                        ${education.isActive ? '<span class="badge d-none d-md-inline-block ms-auto">Present</span>' : ''}
                    </div>
                </button>
            </h2>
            <div id="eduCollapse${index}" 
                class="accordion-collapse collapse" 
                data-bs-parent="#educationAccordion">
                <div class="accordion-body">
                    <p>
                        <strong>${education.institution}</strong><br>
                        <em>${education.location}</em><br>
                        <small class="text-muted"><em>${education.period}</em></small>
                    </p>
                    <ul>
                        ${education.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function createAdditionalItem(section, index) {
    let descriptionHtml;

    // Handle different section types
    if (section.title === "Awards & Publications") {
        descriptionHtml = `
            <ul>
                ${section.content.map(item => `
                    <li><strong>${item.title}</strong><br>
                        ${item.details.map(detail => `${detail}`).join('')}
                    </li>
                `).join('')}
            </ul>`;
    } else if (section.title === "Teaching Experience") {
        descriptionHtml = `
            <p>
                <strong>${section.organization}</strong><br>
                <em>${section.location}</em>
            </p>
            <ul>
                ${section.content.map(item => `
                    <li><strong>${item.title}:</strong> ${item.details[0]}</li>
                `).join('')}
            </ul>`;
    } else if (section.title === "Informal Education") {
        descriptionHtml = `
            <ul>
                ${section.content.map(item => `
                    <li><strong>${item.title}</strong> ${item.description} (${item.period})</li>
                `).join('')}
            </ul>`;
    }

    return `
        <div class="accordion-item">
            <h2 class="accordion-header" id="addHeading${index}">
                <button class="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#addCollapse${index}">
                    <div class="d-flex flex-column align-items-start">
                        <span class="fw-bold">${section.title}</span>
                    </div>
                </button>
            </h2>
            <div id="addCollapse${index}"
                 class="accordion-collapse collapse"
                 data-bs-parent="#additionalAccordion">
                <div class="accordion-body">
                    ${descriptionHtml}
                </div>
            </div>
        </div>
    `;
}

function populateSections() {
    // Populate experience section
    const experienceAccordion = document.getElementById('experienceAccordion');
    if (experienceAccordion) {
        const experienceContent = experienceData.experiences
            .map((exp, index) => createExperienceItem(exp, index))
            .join('');
        experienceAccordion.innerHTML = experienceContent;
    }

    // Populate education section
    const educationAccordion = document.getElementById('educationAccordion');
    if (educationAccordion) {
        const educationContent = educationData.education
            .map((edu, index) => createEducationItem(edu, index))
            .join('');
        educationAccordion.innerHTML = educationContent;
    }

    // Populate additional section
    const additionalAccordion = document.getElementById('additionalAccordion');
    if (additionalAccordion) {
        const additionalContent = additionalData.sections
            .map((add, index) => createAdditionalItem(add, index))
            .join('');
        additionalAccordion.innerHTML = additionalContent;
    }
}

document.addEventListener('DOMContentLoaded', populateSections);
document.addEventListener('DOMContentLoaded', function() {
    // Select all accordion buttons NOT inside #additionalAccordion
    const accordionButtons = document.querySelectorAll('.accordion-button:not(#additionalAccordion .accordion-button)');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const collapseElement = document.querySelector(button.getAttribute('data-bs-target'));
            
            // Find the timeline line within the same accordion item
            const timelineLine = button.closest('.accordion-item').querySelector('.timeline-line');
            
            if (collapseElement && timelineLine) {
                if (collapseElement.classList.contains('show')) {
                    timelineLine.style.height = '100%';
                } else {
                    timelineLine.style.height = '0';
                }
            } else {
                console.error('Collapse element or timeline line not found!');
            }
        });
    });
});