# 🚀 PeopleFirst HR - Recruitment Automation Platform

PeopleFirst HR is a professional, high-performance recruitment landing page designed to bridge the gap between top-tier tech talent and innovative companies. It combines a cutting-edge "Glassmorphism" frontend with a powerful n8n-driven backend automation workflow to streamline the application process.

## 🌟 Key Features

- **Modern UI/UX**: A stunning, responsive design featuring a glassmorphic aesthetic, custom cursor glow effects, and smooth scroll animations (AOS).
- **Dynamic Career Hub**: An interactive carousel showcasing open positions with role-specific tags and a seamless "Apply Now" transition.
- **Automated Workflow**: Integration with **n8n** for zero-manual-effort application processing.
- **Smart Notifications**: Automated, professionally designed HTML email triggers for both candidates (confirmation) and administrators (new application alert).
- **Interactive Elements**: 
  - Dynamic word rotation in the hero section.
  - Animated statistics counter that triggers on scroll.
  - Real-time form validation with loading states and toast notifications.
- **Responsive Design**: Fully optimized for all devices, from ultra-wide monitors to mobile phones.

## 🛠️ Technology Stack

### Frontend
- **Language**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: [Bootstrap 5](https://getbootstrap.com/)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Animations**: [AOS (Animate On Scroll)](https://michalsB.github.io/AOS/)
- **Typography**: Google Fonts (Poppins, Inter, Manrope)

### Backend & Automation
- **Workflow Engine**: [n8n](https://n8n.io/) (Self-hosted/Cloud)
- **Integration**: REST API / Webhooks
- **Communication**: SMTP / Email Automation

## ⚙️ How It Works (Architecture)

1. **User Application**: The candidate fills out the application form on the frontend.
2. **Webhook Trigger**: Upon submission, data is sent via a `POST` request to a specific **n8n Webhook URL**.
3. **n8n Workflow**: 
   - Receives the JSON payload.
   - Processes the data.
   - Triggers two parallel email workflows.
4. **Email Delivery**:
   - **Candidate**: Receives a "Thank You/Confirmation" email using the `Candidate Template`.
   - **Admin**: Receives a "New Application Alert" with candidate details using the `Admin Template`.

## 📸 Visuals

### Website Frontend
| Hero Section | Career Hub | Application Form |
| :---: | :---: | :---: |
| ![Frontend 1](./Screenshots/Website%20Frontend%20-%201.png) | ![Frontend 2](./Screenshots/Website%20Frontend%20-%202.png) | ![Frontend 3](./Screenshots/Website%20Frontend%20-%203.png) |

### Automation & Emails
| n8n Workflow | Candidate Email | Admin Email |
| :---: | :---: | :---: |
| ![Workflow](./Screenshots/N8N%20WorkFlow.png) | ![Candidate Mail](./Screenshots/Mail%20to%20Candidate.png) | ![Admin Mail](./Screenshots/Mail%20to%20Admin.png) |

## 🚀 Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/peoplefirst-hr.git
   cd peoplefirst-hr
   ```

2. **Frontend Configuration**:
   - Open `js/script.js`.
   - Locate the `fetch` URL (line 136) and replace it with your own **n8n Webhook URL** to receive applications.

3. **n8n Workflow Setup**:
   - Import the n8n workflow JSON (if provided).
   - Configure the Email Node with your SMTP credentials.
   - Ensure the Webhook node is set to `POST` and matches the URL in `script.js`.

4. **Launch**:
   - Simply open `index.html` in any modern web browser.

## 📄 License
This project is developed for professional recruitment purposes. Feel free to use it as a template for your own HR automation projects.

---
*Built with ❤️ and Passion for Technology.*
