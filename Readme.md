# Supportability Review - Rancher Extension

The **Supportability Review** (SR) extension helps proactively validate your Kubernetes cluster configuration and environment to ensure it's production-ready and support-aligned.

It provides:

- **Best Practice Validation**: Verifies that your cluster design adheres to **SUSE-recommended architecture** for optimal supportability.
- **Support Matrix Compliance**: Checks whether your cluster meets all **SUSE supportability requirements** for reliable and successful operation.
- **CVE Awareness**: Alerts you to **known CVEs (Common Vulnerabilities and Exposures)** that may affect your cluster components.

---

## Installation Guide

Follow the steps below to install the Supportability Review extension inside Rancher UI:

### 1. Open Extensions Menu

- Navigate to the **bottom-left hamburger menu** in the Rancher UI.
- Click on **Extensions → Available / All Extensions**.

![Alt text](/image/hamburger-extension-icon.png)

### 2. Add Rancher Repositories

- Click the **three dots** (⋮) on the extensions page.
- Select **"Add Rancher Repositories"**.
- Wait a few seconds while the repository syncs.
- You will now see the **Supportability Review** extension listed.

![Alt text](/image/add-extension-repo.png)
### 3. Install the Extension

- Click on the **Supportability Review** entry.
- Click the **Install** button.

Once installed, a new **"Cattle-Men" icon** will appear in the side menu.

---

## Post-Installation Setup

### 4. Install the Supportability Review Operator

- Click the **Supportability Review (SR) icon** in the sidebar.
- Press the button: `Add Supportability Review Operator Repository`.
- Then click `Install Supportability Review Operator`.

![Alt text](/image/dashboard-add-operator-repo.png)
During the installation process, you can configure the following components (we recommend keeping the default settings):

- **Collector Configuration**: Choose container images and resources for data collection.
- **Analyzer Configuration**: Set analyzer image and thresholds.
- **Redis Configuration**: Redis image, memory, and persistence options.
- **Resource Limits**: Customize CPU/Memory requests and limits for pods.

![Alt text](/image/install-supportability-operator.png)

![Alt text](/image/collector-config.png)

---

##  Getting Started

### 5. Create a Review Bundle

- Click the **"Get Started"** button from the Dashboard to begin creating your first review report.
- You will be redirected to the **Create Review** page with two tabs:

  #### a. Basic Tab
  - Enter a custom bundle name (default: `review-bundle`).
![Alt text](/image/create-review.png)
  #### b. Advanced Tab
  - Change the namespace for Sonobuoy.
  - Add node tolerations.
  - Write a bundle description.

> we recommend keeping the default values

> **Prime customers** can obtain a full supportability review by opening a Rancher support case and sharing the generated review bundle.  
You can also preview what a full report looks like by clicking the **[View Sample Report](https://suse.my.salesforce.com/sfc/p/#1i000000gLOd/a/Tr00000EFJwk/2gpLmKqcybjI6R_YjwtXwx4qNnKFsOSTmf8SNQvQLbQ)** link.

---

## View and Manage Review Bundles

- After creation, a review job is launched and enters a `Running` state.
- Navigate to the **Review Bundles** tab to see:
  - A list of all previously created bundles, including:
    - Number of clusters
    - Number of passed checks
    - Bundle size
![Alt text](/image/completed-review-sidebar.png)
- Click on the bundle name to view a detailed visual report of your local cluster.
- On the right side of each bundle entry, click the **three-dot menu (⋮)** to:
  - **Download** the bundle
  - **View** the report
![Alt text](/image/review-visual-report.png)
---

## Feedback & Issues

If you encounter any bugs, installation issues, or have suggestions for improvement,please [open an issue](https://github.com/rancher/supportability-review-app/issues) in this repository.

For further assistance, including detailed results, remediations, or a full supportability review, feel free to contact us at:
 **ranchersupportnow@suse.com**

---
