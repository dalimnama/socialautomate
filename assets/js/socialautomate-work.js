(() => {
    "use strict";
    const projects = {
    "founder": {
        "id": "founder",
        "title": "Founder Thought-Leadership Engine",
        "image": "assets/images/portfolio/01.webp",
        "audience": "Startup founders",
        "focus": "Founder-led LinkedIn content",
        "overview": "A content system that turns a founder's raw ideas, notes, lessons and everyday experiences into a consistent LinkedIn presence, without starting a new writing session each day.",
        "steps": [
            "Start with the material already close to the business: quick notes, voice ideas, customer conversations, company updates and selected photos. These inputs become a working library of the founder's perspective.",
            "The system groups that material into content themes, develops hooks and stories, and drafts posts in the founder's tone. Useful insights and media can support fresh angles without repeating the same message.",
            "The founder reviews the drafts before publication. Approved content moves into a repeatable scheduling rhythm, with room for timely updates as the business evolves."
        ],
        "outcome": "Designed to build a recognizable founder voice, strengthen trust with investors, customers and potential hires, and sustain a LinkedIn presence with less daily content work.",
        "deliverables": [
            "Content organization and theme planning",
            "AI-assisted post drafting",
            "Hook and story development",
            "Founder review and approval workflow",
            "Scheduling-ready output"
        ],
        "cadence": "Daily / recurring",
        "inputs": "Founder notes, ideas, photos and customer questions",
        "tags": [
            "Startup",
            "Founder",
            "LinkedIn"
        ],
        "benefits": [
            "Turns founder notes into publishable LinkedIn posts",
            "Makes thoughtful use of existing insights and media",
            "Keeps the founder voice and publishing rhythm consistent"
        ],
        "provide": "Short notes, lessons, customer insights, selected photos and important company updates. A few examples of your writing help establish the right tone."
    },
    "doctor": {
        "id": "doctor",
        "title": "Doctor Authority System",
        "image": "assets/images/portfolio/02.webp",
        "audience": "Doctors & clinics",
        "focus": "Trust-building authority content",
        "overview": "A content system that turns a doctor's expertise into clear, trustworthy social content that patients can understand and learn from.",
        "steps": [
            "The doctor shares recurring questions, treatment education points, professional insights and relevant clinic updates. These inputs shape a topic plan grounded in the expertise they want to communicate.",
            "The system develops patient-friendly drafts with clear explanations and a professional tone. Messaging stays focused on education, with the doctor checking clinical accuracy and context before approval.",
            "Approved posts are prepared for a repeatable publishing schedule. New questions and education themes feed the next content cycle, making it easier to maintain a useful professional presence."
        ],
        "outcome": "Designed to strengthen professional authority and patient trust, and create more opportunities for relevant organic enquiries through useful, consistent education.",
        "deliverables": [
            "Educational topic planning",
            "Patient-friendly content drafting",
            "Trust-focused messaging",
            "Doctor review and content consistency",
            "Scheduling-ready posts"
        ],
        "cadence": "3–5 posts per week",
        "inputs": "Doctor insights, FAQs, treatment topics and education themes",
        "tags": [
            "Healthcare",
            "Authority",
            "LinkedIn"
        ],
        "benefits": [
            "Translates expertise into patient-friendly content",
            "Supports trust through consistent education",
            "Creates a repeatable review and publishing workflow"
        ],
        "provide": "Frequently asked questions, treatment topics, professional insights, clinic updates and patient education themes approved for public discussion."
    },
    "saas": {
        "id": "saas",
        "title": "SaaS Launch Content Agent",
        "image": "assets/images/portfolio/03.webp",
        "audience": "SaaS founders & product teams",
        "focus": "Launch visibility & demand generation",
        "overview": "A launch-focused content system that brings product updates, new features, screenshots, use cases and founder commentary into a structured social campaign.",
        "steps": [
            "The team shares feature notes, positioning, screenshots and launch dates, along with the customer problems the product addresses. This becomes a focused brief for the launch period.",
            "The system turns that brief into a sequence of content angles: feature explanations, practical use cases, founder perspectives and promotional drafts. Each angle reinforces the same product story from a different starting point.",
            "The team reviews product claims and messaging before the campaign is prepared for scheduling. The sequence can follow the launch calendar and make room for updates as features ship."
        ],
        "outcome": "Designed to improve product visibility, build demand around launch moments and keep the message consistent from the first announcement through follow-up content.",
        "deliverables": [
            "Launch content planning",
            "Campaign post drafting",
            "Feature and use-case storytelling",
            "Founder commentary development",
            "Scheduling-ready campaign content"
        ],
        "cadence": "Launch-cycle based",
        "inputs": "Product updates, feature notes, launch plans and screenshots",
        "tags": [
            "SaaS",
            "Launch",
            "Content"
        ],
        "benefits": [
            "Turns product updates into a clear launch narrative",
            "Creates multiple angles from the same product information",
            "Supports consistent visibility throughout the launch"
        ],
        "provide": "Product notes, screenshots, feature details, use cases, positioning and launch dates, plus any founder commentary the team wants to include."
    },
    "clinic": {
        "id": "clinic",
        "title": "Clinic Patient-Trust Funnel",
        "image": "assets/images/portfolio/04.webp",
        "audience": "Clinics & healthcare brands",
        "focus": "Patient trust & inbound enquiries",
        "overview": "A patient-education content system that helps clinics answer common questions and build trust before someone makes contact.",
        "steps": [
            "The clinic shares service details, frequently asked questions, common concerns and approved treatment explanations. These inputs identify the information people need before considering an enquiry.",
            "The system turns those topics into clear educational posts that explain services and address uncertainty. Drafts connect helpful information with an appropriate next step, without promising treatment outcomes.",
            "The clinic reviews the content before it is prepared for scheduling. A steady cycle of useful answers supports a clearer journey from learning about a service to contacting the care team."
        ],
        "outcome": "Designed to improve trust, support more relevant enquiries and help prospective patients understand the available services before deciding whether to book.",
        "deliverables": [
            "Patient-education content planning",
            "Patient-friendly writing",
            "Trust-focused messaging",
            "Educational post creation and clinic review",
            "Scheduling-ready content"
        ],
        "cadence": "Ongoing",
        "inputs": "Patient FAQs, service information and educational topics",
        "tags": [
            "Clinic",
            "Trust",
            "Inbound"
        ],
        "benefits": [
            "Educates prospective patients before an enquiry",
            "Reduces uncertainty around clinic services",
            "Builds familiarity through consistent, helpful content"
        ],
        "provide": "FAQs, treatment information, common patient concerns, service details and educational topics approved by the clinic for public use."
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
    document.querySelectorAll('[data-project-list], [data-project-paragraphs]').forEach(container => {
        const field = container.dataset.projectList || container.dataset.projectParagraphs;
        const tag = container.hasAttribute('data-project-paragraphs') ? 'p' : 'li';
        container.replaceChildren(...project[field].map(text => {
            const item = document.createElement(tag);
            item.textContent = text;
            return item;
        }));
    });
})();
