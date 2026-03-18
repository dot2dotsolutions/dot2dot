// Data Store for Module Details
const serviceData = {
    'network': {
        title: 'Network Services',
        icon: '🌐',
        details: [
            'LAN setup, configuration, and optimization',
            'VLAN design and logical segmentation',
            'IP addressing schema and network planning',
            'On-premise Firewall configuration and rule management',
            'Site-to-site and Remote Access VPN setup (No cloud)',
            'Local network monitoring tools deployment',
            'Advanced troubleshooting of connectivity issues',
            'Bandwidth control and traffic shaping within LAN'
        ]
    },
    'server': {
        title: 'Server & Virtualization',
        icon: '🖥️',
        details: [
            'Installation & configuration of Windows/Linux servers',
            'Active Directory (AD) setup and Domain Controller management',
            'File server and shared storage architecture',
            'Print server configuration and management',
            'Application server setup (ERP, Internal Apps)',
            'Virtualization implementation (VMware vSphere / Hyper-V / Proxmox)',
            'Server performance tuning and resource allocation',
            'Centralized log monitoring and analysis'
        ]
    },
    'sysadmin': {
        title: 'System Administration',
        icon: '⚙️',
        details: [
            'OS installation, hardening, and lifecycle maintenance',
            'User identity and access management (IAM)',
            'Complex Group Policy Object (GPO) configuration',
            'Offline software deployment across the enterprise',
            'Patch management via internal WSUS or local repos',
            'Scripting for routine administrative tasks'
        ]
    },
    'security': {
        title: 'Cybersecurity (Local Infrastructure)',
        icon: '🛡️',
        details: [
            'Next-gen Firewall setup and strict rule management',
            'Enterprise Antivirus/Endpoint security deployment',
            'Network Access Control (NAC) implementation',
            'Internal vulnerability scanning and penetration testing',
            'Security hardening of servers, PCs, and network devices',
            'USB and peripheral device control policies',
            'Incident response for local breaches and ransomware recovery'
        ]
    },
    'backup': {
        title: 'Backup & Disaster Recovery',
        icon: '💾',
        details: [
            'Local backup solutions (NAS, SAN, External Drives)',
            'Automated backup scheduling and verification',
            'Disaster Recovery (DR) planning without cloud dependency',
            'Rapid data restoration services',
            'RAID configuration and hardware redundancy setup',
            'Immutable backup strategies to prevent ransomware encryption'
        ]
    },
    'support': {
        title: 'IT Support & Maintenance',
        icon: '🔧',
        details: [
            'Annual Maintenance Contracts (AMC)',
            'Dedicated onsite technical support engineers',
            'Secure remote support within LAN/VPN boundaries',
            'Desktop, laptop, server, and network troubleshooting',
            'Preventive maintenance schedules to avoid downtime'
        ]
    },
    'software': {
        title: 'Software & Application Services',
        icon: '📊',
        details: [
            'Installation and configuration of business software',
            'On-premise ERP/CRM deployment and customization',
            'Local Database setup (MySQL, SQL Server, PostgreSQL)',
            'Custom software development for specific business needs',
            'Integration of disparate software systems within the local network'
        ]
    },
    'consulting': {
        title: 'IT Consulting & Infrastructure Planning',
        icon: '📈',
        details: [
            'Comprehensive office IT setup planning',
            'Scalable network expansion roadmaps',
            'Server capacity planning and load forecasting',
            'Cost optimization strategies (CapEx vs OpEx)',
            'Technology audits and legacy system assessment'
        ]
    },
    'compliance': {
        title: 'Compliance & Security Audits',
        icon: '✅',
        details: [
            'Internal IT infrastructure audits',
            'Creation of data access and security policies',
            'Audit log generation and reporting',
            'Support for local regulatory standards (GDPR, HIPAA, etc.)',
            'Risk assessment and mitigation planning'
        ]
    },
    'training': {
        title: 'Training & Documentation',
        icon: '🎓',
        details: [
            'Employee training on system usage and security awareness',
            'Creation of Standard Operating Procedures (SOPs)',
            'Detailed documentation of network and server architecture',
            'Disaster Recovery runbooks and troubleshooting guides',
            'Knowledge transfer sessions for internal IT teams'
        ]
    }
};

// Modal Logic
const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalIcon = document.getElementById('modal-icon');
const modalList = document.getElementById('modal-list');

function openModal(serviceKey) {
    const data = serviceData[serviceKey];
    if (!data) return;

    // Populate Content
    modalTitle.innerText = data.title;
    modalIcon.innerText = data.icon;
    modalList.innerHTML = '';

    data.details.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerText = item;
        li.style.animation = `fadeInUp 0.4s ease-out ${index * 0.1}s backwards`;
        modalList.appendChild(li);
    });

    // Show Modal
    modal.style.display = 'flex';
    // Small delay to allow display:flex to apply before adding opacity class for transition
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300); // Wait for transition
}

// Close on outside click
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Close on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});