(() => {
    "use strict";
    const projects = {
    "founder": {
        "id": "founder",
        "title": "Founder Thought-Leadership Engine",
        "image": "assets/images/portfolio/01.webp",
        "audience": "Startup founders",
        "focus": "Founder-led LinkedIn content",
        "overview": "A content system that turns a founder's ideas, notes and experience into a consistent LinkedIn presence while they focus on building the company.",
        "challenge": "Building, selling, fundraising and hiring compete for the same time. This workflow keeps the founder's perspective at the centre of the content without requiring a fresh writing session for every post.",
        "steps": [
            "Capture ideas from founder notes, conversations and recurring customer questions.",
            "Draft posts around the founder's expertise, positioning and voice.",
            "Review and refine each draft before scheduling approved content."
        ],
        "outcome": "Designed to support a recognisable founder voice and a steady publishing rhythm, giving investors, customers and future hires more opportunities to understand the founder's thinking.",
        "deliverables": [
            "Founder voice and content themes",
            "AI-assisted LinkedIn drafts",
            "Review and publishing workflow"
        ]
    },
    "doctor": {
        "id": "doctor",
        "title": "Doctor Authority System",
        "image": "assets/images/portfolio/02.webp",
        "audience": "Doctors",
        "focus": "Professional educational content",
        "overview": "An educational content workflow that helps a doctor explain their expertise through useful, approachable LinkedIn posts.",
        "challenge": "Doctors have limited time to turn their knowledge into public-facing content. The system organises common questions into drafts that remain under the doctor's editorial control.",
        "steps": [
            "Collect common patient questions and doctor-approved educational topics.",
            "Create clear, professional drafts based on the doctor's expertise.",
            "Route every draft to the doctor for review before scheduling publication."
        ],
        "outcome": "Designed to build a consistent professional presence and make expertise easier to understand, while retaining clinician review of every post.",
        "deliverables": [
            "Educational topic library",
            "Professional content drafts",
            "Doctor review and approval workflow"
        ]
    },
    "saas": {
        "id": "saas",
        "title": "SaaS Launch Content Agent",
        "image": "assets/images/portfolio/03.webp",
        "audience": "SaaS founders and teams",
        "focus": "Product launch storytelling",
        "overview": "A launch-focused content agent that connects product updates, customer problems and founder insights into a coherent LinkedIn publishing plan.",
        "challenge": "Launch teams need to explain why a product matters while shipping it. This workflow turns scattered release notes and product ideas into a structured content sequence.",
        "steps": [
            "Gather product positioning, release notes and the problems the product addresses.",
            "Draft launch posts, use-case explanations and founder perspectives.",
            "Review claims and messaging, then schedule the approved launch sequence."
        ],
        "outcome": "Designed to make the product story more consistent before, during and after launch, with less manual coordination of individual posts.",
        "deliverables": [
            "Launch content themes and sequence",
            "Use-case and product-update drafts",
            "Team review and scheduling workflow"
        ]
    },
    "clinic": {
        "id": "clinic",
        "title": "Clinic Patient-Trust Funnel",
        "image": "assets/images/portfolio/04.webp",
        "audience": "Clinics and care teams",
        "focus": "Patient education and enquiries",
        "overview": "A clinic content system that connects educational posts with clear information about services and how to make an enquiry.",
        "challenge": "Prospective patients need understandable information before contacting a clinic. This workflow helps a care team publish useful answers consistently without adding a separate writing workload to every week.",
        "steps": [
            "Map common patient questions to relevant services and approved clinic information.",
            "Draft educational posts with a clear next step for readers who want to learn more.",
            "Have the clinic review each post before publishing and directing readers to its enquiry channel."
        ],
        "outcome": "Designed to support patient trust and a clearer route from learning about the clinic to making an enquiry, with the clinic retaining final approval.",
        "deliverables": [
            "Patient-question content themes",
            "Service-aware educational drafts",
            "Clinic approval and enquiry workflow"
        ]
    }
};
    const valid = id => Object.prototype.hasOwnProperty.call(projects, id);
    if (!document.querySelector("[data-work-details]")) return;
    const slugs = {
        "founder-thought-leadership": "founder",
        "doctor-authority-system": "doctor",
        "saas-launch-agent": "saas",
        "clinic-patient-trust": "clinic"
    };
    const requested = new URLSearchParams(window.location.search).get("project");
    const selected = Object.prototype.hasOwnProperty.call(slugs, requested) ? slugs[requested] : requested;
    const project = projects[valid(selected) ? selected : "founder"];
    document.title = project.title + " | Socialautomate";
    document.querySelectorAll("[data-project-field]").forEach(element => {
        element.textContent = project[element.dataset.projectField];
    });
    document.querySelectorAll("[data-project-image]").forEach(image => {
        image.src = project.image;
        image.alt = project.title;
    });
    ["steps", "deliverables"].forEach(field => {
        const list = document.querySelector(`[data-project-list="${field}"]`);
        list.replaceChildren(...project[field].map(text => {
            const item = document.createElement("li");
            item.textContent = text;
            return item;
        }));
    });
})();
