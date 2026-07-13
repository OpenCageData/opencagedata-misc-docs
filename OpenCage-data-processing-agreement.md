## Opencage GmbH Data Processing Agreement 

This document lays out the responsibilities of OpenCage GmbH (German company registration: Berlin (Charlottenburg) HRB 272249), hereafter referred to as OpenCage, to its customers with regards to data protection in general and the European Union’s General Data Protection Regulation (GDPR) specifically.

### 1. OpenCage as Data Processor, Definitions

  * OpenCage is a Data Processor operating on behalf of its customers. 
    
  * Customers are individuals or organizations paying money to use the OpenCage service. Free trial users of the OpenCage Service are not Customers and should not send OpenCage personal data.
  
   * OpenCage's Customers are Data Controllers. 
 
  * “Personal data” means any information relating to an identified or identifiable person.

  * “Data Protection Laws” means EU Directive 95/46/EC, as transposed into domestic legislation of each Member State and as amended, replaced or superseded from time to time, including by the GDPR and laws implementing or supplementing the GDPR and, to the extent applicable, the data protection and privacy laws of the United Kingdom.
  
  * "Services" means the OpenCage geocoding API (application program interface), OpenCage geosearch, and the professional services provided by OpenCage.
  
  * “Sub-processor” means any Data Processor engaged by OpenCage.
  
  * “Data Subject” means the individual to whom Personal Data relates.

### 2. Processing of Personal Data

1. Use of the service implies that OpenCage may process personal data on behalf of the Data Controller in accordance with the requirements of Data Protection Laws. The Data Controller will ensure that instructions to OpenCage for the processing of personal data comply with Data Protection Laws. The Data Controller is solely responsibility for the accuracy, quality, and legality of Personal Data and the means by which it acquires personal data.

2. The inputs to the OpenCage Service provided by the Data Controller are geographic coordinates or placenames/addresses. No other data should be sent to OpenCage. The Data Controller bears sole responsibility for transmission of only geographic data.

3. OpenCage's API makes available various privacy options, most notably the use of an optional `no_record=1` parameter. The Data Controller is advised to make full use of these options, and bears sole responsibility for failure to do so.

4. OpenCage lays out a full and accurate description of its data protection practices on its website at 
[https://opencagedata.com/gdpr](https://opencagedata.com/gdpr). This description is updated from time to time as and when practices change. 

### 3. Rights of Data Subjects

1. The Data Controller is solely responsible for the collecting of all necessary consent from Data Subjects to allow OpenCage to process personal data on its behalf.

2. OpenCage will, to the extent legally permitted, promptly notify the Data Controller if it receives a request from a Data Subject for access to, or deletion of, that person’s personal data. OpenCage will not respond to a Data Subject request without the Data Controllers prior written consent except to confirm that the request relates to the Data Controller. The Data Controller is solely responsible for completing such request as required by law.

### 4. Personnel

1. OpenCage ensures that its personnel engaged in the processing of personal data are informed of the confidential nature of the personal data, have received appropriate training on their responsibilities and have agreed to confidentiality obligations that survive the termination of that persons’ employment or engagement by OpenCage.

2. OpenCage shall take commercially reasonable steps to ensure the reliability of any OpenCage personnel engaged in the processing of personal data and that access to personal data by OpenCage is limited to those OpenCage personnel who require such access to perform the Services.

3. OpenCage’s data protection officer can be reached by email at dataprotection@opencagedata.com

### 5. Sub-Processors

1. The Data Controller agrees OpenCage may engage third-party Sub-Processors to provide the Services and such Sub-processors may access personal data, and appoint additional levels of Sub-Processors, only for purposes of providing the services OpenCage retained them to provide and not for any other purpose.

2. OpenCage agrees to be liable for the acts and omissions of its Sub-Processors to the same extent OpenCage would be liable if performing the services of each Sub-Processor directly under the terms of this agreement.

3. List of Sub-Processors

 Service | Impacts | Purpose | Location | Privacy / GDPR policy |
| --- | --- | --- | --- | --- |
| Heroku (Salesforce) | Website visitors | Hosting (website) | EU | [Policy](https://www.salesforce.com/company/privacy/) |
| Fathom Analytics | Website visitors | Site analytics | EU | [Policy](https://usefathom.com/data/) |
| Thunderforest | Website visitors | Map tiles (on demo page) | EU | [Policy](https://www.thunderforest.com/privacy/) |
| hCaptcha | Website visitors | Abuse / bot prevention | US | [Policy](https://www.hcaptcha.com/privacy) |
| Postmark (ActiveCampaign) | Registered users | Transactional emails | US | [Policy](https://wildbit.com/privacy-policy) |
| rsync.net | Registered users | Database backups, encrypted | CH | [Policy](https://www.rsync.net/resources/regulatory/gdpr.html) |
| Instatus | Website visitors | Hosting (status page) | EU | [Policy](https://instatus.com/privacy) |
| Hetzner | geocoding API & geosearch users | Hosting | EU | [Security (pdf)](https://www.hetzner.de/pdf/en/Sicherheit_en.pdf) |
| Stripe | Customers | Payment processing | EU / US | [Policy](https://stripe.com/privacy) |
| Quaderno | Customers | Invoicing | EU | [GDPR](https://quaderno.io/blog/how-quaderno-complies-with-gdpr/) |
| Baremetrics | Customers | Business analytics | US | [GDPR](https://baremetrics.com/gdpr) |

_As of 13 July 2026, detailed descriptions of each Sub-Processor available [on the OpenCage GDPR page](https://opencagedata.com/gdpr)._

### 6. Technical & organisational measures (TOMs)

In line with Art. 32 GDPR ("Security of processing"), we maintain the technical and organisational measures below to protect personal data.
These mesaures are reviewed regularly and updated as the service evolves.

1. Confidentiality

- **Physical access control.** Our servers are hosted in data centres in the EU that are certified to DIN ISO/IEC 27001. Physical access to servers is controlled by the data centre operator via access control systems, video surveillance, and 24/7 monitoring.
- **Logical access control.** Access to production systems requires individual, named accounts, strong authentication, and SSH keys rather than passwords. Two-factor authentication is enforced on the critical third-party services OpenCage relies upon.
- **Authorisation control.** Access to personal data follows the principle of least privilege: employees are granted only the access needed for their role. Administrative access is limited to a small number of authorised staff.
- **Data minimisation.** OpenCage collects only the data needed. Customers can use [the optional no\_record parameter](https://opencagedata.com/api#no_record-param) so that geocoding queries are never stored.
- **Separation control.** Test, development, and production environments are kept separate. Different customers' data is logically separated within systems.

2. Integrity

- **Encryption.** All traffic to the OpenCage website is encrypted in transit via TLS/HTTPS. User database backups are encrypted before leaving our systems.
- **Transfer control.** Backups are encrypted. 3rd-party services have no ability to decrypt them. OpenCage never sees or stores paymnet card numbers.
- **Input / accountability control.** Access to and changes within production systems are logged, and can be traced if relevant.

3. Availability & resilience

- **Backups.** The OpenCage user database is regularly and automatically backed up to an encrypted, geographically separate location.
- **Redundancy.** OpenCage infrastructure runs across multiple sites in the EU to provide resilience and continued availability.
- **Monitoring.** OpenCage systems are continuously monitored, with a public [status page](https://status.opencagedata.com) for service availability.
- **Deletion & retention.** Personal data is deleted according to a published [retention schedule](https://opencagedata.com/gdpr#data-deletion). Customer queries are never used to train AI or machine learning systems.

4. Regular review, assessment & evaluation

- **Vulnerability management.** OpenCage publishes its [security policies](https://opencagedata.com/security-policy).
- **Subprocessor management.** OpenCage selects Sub-Processors that offer sufficient guarantees under the GDPR, and lists them transparently in the Sub-Processors table above.
- **Data protection by design and by default.** Privacy considerations are built into how OpenCage designs and operates services, including offering opt-out query logging and keeping data within the EU.
- **Ongoing review.** These measures are reviewed periodically and whenever infrastructure or processing activities change materially.

### 7. Security

1. OpenCage agrees to implement and maintain the administrative, technical, and physical safeguards of personal data stored using the Services. 

### 8. Security Breach Management and Notification

1. If OpenCage becomes aware of unlawful access to the Data Controller's personal data stored through the Services, or unauthorized access to the Services resulting in loss, disclosure, or alteration of the Data Controller's personal data (“Security Breach”), OpenCage will promptly: (a) notify the Data Controller of the Security Breach; (b) investigate the Security Breach and provide the Data Controller with information known to OpenCage about the Security Breach; and (c) follow its policies and procedures to mitigate the effects and to minimize any damage resulting from the Security Breach.

2. The Data Controller agrees that an unsuccessful Security Breach attempt will not be subject to Section 7.1 above. An unsuccessful Security Breach attempt is one that results in no unauthorized access to the Data Controller's personal data or to the Services storing your Personal Data, and may include, without limitation, pings and other broadcast attacks on firewalls or edge servers, port scans, unsuccessful log-on attempts, denial of service attacks, packet sniffing (or other unauthorized access to traffic data that does not result in access beyond IP addresses or headers) or similar incidents.

3. Notification(s) of Security Breaches, if any, will be delivered to one or more of the Customer’s business, technical or administrative contacts by any means OpenCage selects, including via email. It is Customer’s sole responsibility to ensure it maintains accurate contact information on OpenCage’s support systems at all times.

4. OpenCage’s report of and/or response to a Security Breach under this Section will not be construed as an admission by OpenCage to fault or liability with respect to the Security Breach.

### 9. Deletion of Customer Data

1. OpenCage agrees to delete Customer personal data in accordance with OpenCage’s procedures and Data Protection Laws.

2. At a Customer's request, OpenCage will provide the Customer with a certification of deletion of personal data.

### 10. Legal Effect

1. This agreement comes into effect from the 25th of May 2018 for all existing customers, or from the time of purchase of an OpenCage service (subscription or one-time purchase) It expires with cessation of the Customer's OpenCage subscription or the utilization of all requests from a one-time purchase.




