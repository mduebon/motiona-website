import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Spacing */}
      <div className="h-20" />

      {/* Main Content */}
      <div className="container max-w-5xl py-16 px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          {isDE ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h1>

        {/* Introduction */}
        <div className="prose prose-slate max-w-none mb-8 space-y-4">
          <p className="text-lg text-slate-700 leading-relaxed">
            We are very delighted that you have shown interest in our enterprise. Data protection is of a particularly high priority for the management of the Dübon Engineering GmbH. The use of the Internet pages of the Dübon Engineering GmbH is possible without any indication of personal data; however, if a data subject wants to use special enterprise services via our website, processing of personal data could become necessary. If the processing of personal data is necessary and there is no statutory basis for such processing, we generally obtain consent from the data subject.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The processing of personal data, such as the name, address, e-mail address, or telephone number of a data subject shall always be in line with the General Data Protection Regulation (GDPR), and in accordance with the country-specific data protection regulations applicable to the Dübon Engineering GmbH. By means of this data protection declaration, our enterprise would like to inform the general public of the nature, scope, and purpose of the personal data we collect, use and process. Furthermore, data subjects are informed, by means of this data protection declaration, of the rights to which they are entitled.
          </p>
          <p className="text-slate-700 leading-relaxed">
            As the controller, the Dübon Engineering GmbH has implemented numerous technical and organizational measures to ensure the most complete protection of personal data processed through this website. However, Internet-based data transmissions may in principle have security gaps, so absolute protection may not be guaranteed. For this reason, every data subject is free to transfer personal data to us via alternative means, e.g. by telephone.
          </p>
        </div>

        {/* Section 1: Definitions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            1. Definitions
          </h2>
          <p className="text-slate-700 mb-4">
            The data protection declaration of the Dübon Engineering GmbH is based on the terms used by the European legislator for the adoption of the General Data Protection Regulation (GDPR). Our data protection declaration should be legible and understandable for the general public, as well as our customers and business partners. To ensure this, we would like to first explain the terminology used.
          </p>
          <p className="text-slate-700 mb-6">
            In this data protection declaration, we use, inter alia, the following terms:
          </p>

          <div className="space-y-6 pl-4">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Personal data</h3>
              <p className="text-slate-700">
                Personal data means any information relating to an identified or identifiable natural person ("data subject"). An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Data subject</h3>
              <p className="text-slate-700">
                Data subject is any identified or identifiable natural person, whose personal data is processed by the controller responsible for the processing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Processing</h3>
              <p className="text-slate-700">
                Processing is any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Restriction of processing</h3>
              <p className="text-slate-700">
                Restriction of processing is the marking of stored personal data with the aim of limiting their processing in the future.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Profiling</h3>
              <p className="text-slate-700">
                Profiling means any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person's performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Pseudonymisation</h3>
              <p className="text-slate-700">
                Pseudonymisation is the processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of additional information, provided that such additional information is kept separately and is subject to technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Controller or controller responsible for the processing</h3>
              <p className="text-slate-700">
                Controller or controller responsible for the processing is the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Processor</h3>
              <p className="text-slate-700">
                Processor is a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Recipient</h3>
              <p className="text-slate-700">
                Recipient is a natural or legal person, public authority, agency or another body, to which the personal data are disclosed, whether a third party or not. However, public authorities which may receive personal data in the framework of a particular inquiry in accordance with Union or Member State law shall not be regarded as recipients; the processing of those data by those public authorities shall be in compliance with the applicable data protection rules according to the purposes of the processing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Third party</h3>
              <p className="text-slate-700">
                Third party is a natural or legal person, public authority, agency or body other than the data subject, controller, processor and persons who, under the direct authority of the controller or processor, are authorised to process personal data.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Consent</h3>
              <p className="text-slate-700">
                Consent of the data subject is any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Controller Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            2. Name and Address of the controller
          </h2>
          <p className="text-slate-700 mb-4">
            Controller for the purposes of the General Data Protection Regulation (GDPR), other data protection laws applicable in Member states of the European Union and other provisions related to data protection is:
          </p>
          <div className="bg-slate-50 p-6 rounded-lg space-y-2">
            <p className="font-semibold text-slate-900">Dübon Engineering GmbH</p>
            <p className="text-slate-700">Teichäcker 4</p>
            <p className="text-slate-700">72127 Kusterdingen</p>
            <p className="text-slate-700">Deutschland</p>
            <p className="text-slate-700 mt-4">
              <span className="font-semibold">Phone:</span> +49707113841610
            </p>
            <p className="text-slate-700">
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:mail@duebon-engineering.de" className="text-teal-600 hover:text-teal-700">
                mail@duebon-engineering.de
              </a>
            </p>
            <p className="text-slate-700">
              <span className="font-semibold">Website:</span>{' '}
              <a href="https://www.duebon-engineering.de" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">
                www.duebon-engineering.de
              </a>
            </p>
          </div>
        </section>

        {/* Section 3: Collection of general data */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            3. Collection of general data and information
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            The website of the Dübon Engineering GmbH collects a series of general data and information when a data subject or automated system calls up the website. This general data and information are stored in the server log files. Collected may be (1) the browser types and versions used, (2) the operating system used by the accessing system, (3) the website from which an accessing system reaches our website (so-called referrers), (4) the sub-websites, (5) the date and time of access to the Internet site, (6) an Internet protocol address (IP address), (7) the Internet service provider of the accessing system, and (8) any other similar data and information that may be used in the event of attacks on our information technology systems.
          </p>
          <p className="text-slate-700 leading-relaxed">
            When using these general data and information, the Dübon Engineering GmbH does not draw any conclusions about the data subject. Rather, this information is needed to (1) deliver the content of our website correctly, (2) optimize the content of our website as well as its advertisement, (3) ensure the long-term viability of our information technology systems and website technology, and (4) provide law enforcement authorities with the information necessary for criminal prosecution in case of a cyber-attack. Therefore, the Dübon Engineering GmbH analyzes anonymously collected data and information statistically, with the aim of increasing the data protection and data security of our enterprise, and to ensure an optimal level of protection for the personal data we process. The anonymous data of the server log files are stored separately from all personal data provided by a data subject.
          </p>
        </section>

        {/* Section 4: Contact possibility */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            4. Contact possibility via the website
          </h2>
          <p className="text-slate-700 leading-relaxed">
            The website of the Dübon Engineering GmbH contains information that enables a quick electronic contact to our enterprise, as well as direct communication with us, which also includes a general address of the so-called electronic mail (e-mail address). If a data subject contacts the controller by e-mail or via a contact form, the personal data transmitted by the data subject are automatically stored. Such personal data transmitted on a voluntary basis by a data subject to the data controller are stored for the purpose of processing or contacting the data subject. There is no transfer of this personal data to third parties.
          </p>
        </section>

        {/* Section 5: Routine erasure */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            5. Routine erasure and blocking of personal data
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            The data controller shall process and store the personal data of the data subject only for the period necessary to achieve the purpose of storage, or as far as this is granted by the European legislator or other legislators in laws or regulations to which the controller is subject to.
          </p>
          <p className="text-slate-700 leading-relaxed">
            If the storage purpose is not applicable, or if a storage period prescribed by the European legislator or another competent legislator expires, the personal data are routinely blocked or erased in accordance with legal requirements.
          </p>
        </section>

        {/* Section 6: Rights of the data subject */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            6. Rights of the data subject
          </h2>
          
          <div className="space-y-6 pl-4">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Right of confirmation</h3>
              <p className="text-slate-700">
                Each data subject shall have the right granted by the European legislator to obtain from the controller the confirmation as to whether or not personal data concerning him or her are being processed. If a data subject wishes to avail himself of this right of confirmation, he or she may, at any time, contact any employee of the controller.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Right of access</h3>
              <p className="text-slate-700 mb-3">
                Each data subject shall have the right granted by the European legislator to obtain from the controller free information about his or her personal data stored at any time and a copy of this information. Furthermore, the European directives and regulations grant the data subject access to the following information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-3">
                <li>the purposes of the processing;</li>
                <li>the categories of personal data concerned;</li>
                <li>the recipients or categories of recipients to whom the personal data have been or will be disclosed;</li>
                <li>where possible, the envisaged period for which the personal data will be stored;</li>
                <li>the existence of the right to request rectification, erasure, or restriction of processing;</li>
                <li>the existence of the right to lodge a complaint with a supervisory authority;</li>
                <li>where the personal data are not collected from the data subject, any available information as to their source;</li>
                <li>the existence of automated decision-making, including profiling.</li>
              </ul>
              <p className="text-slate-700">
                If a data subject wishes to avail himself of this right of access, he or she may, at any time, contact any employee of the controller.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Right to rectification</h3>
              <p className="text-slate-700">
                Each data subject shall have the right granted by the European legislator to obtain from the controller without undue delay the rectification of inaccurate personal data concerning him or her. Taking into account the purposes of the processing, the data subject shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Right to erasure (Right to be forgotten)</h3>
              <p className="text-slate-700 mb-3">
                Each data subject shall have the right granted by the European legislator to obtain from the controller the erasure of personal data concerning him or her without undue delay, where one of the following grounds applies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>The personal data are no longer necessary in relation to the purposes for which they were collected;</li>
                <li>The data subject withdraws consent and there is no other legal ground for the processing;</li>
                <li>The data subject objects to the processing and there are no overriding legitimate grounds;</li>
                <li>The personal data have been unlawfully processed;</li>
                <li>The personal data must be erased for compliance with a legal obligation;</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Right of restriction of processing</h3>
              <p className="text-slate-700 mb-3">
                Each data subject shall have the right to obtain restriction of processing where one of the following applies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>The accuracy of the personal data is contested by the data subject;</li>
                <li>The processing is unlawful and the data subject opposes erasure;</li>
                <li>The controller no longer needs the data but they are required by the data subject for legal claims;</li>
                <li>The data subject has objected to processing pending verification.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Right to data portability</h3>
              <p className="text-slate-700">
                Each data subject shall have the right to receive the personal data concerning him or her in a structured, commonly used and machine-readable format, and have the right to transmit those data to another controller without hindrance, where the processing is based on consent or contract and is carried out by automated means.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Right to object</h3>
              <p className="text-slate-700 mb-3">
                Each data subject shall have the right to object, on grounds relating to his or her particular situation, at any time, to processing of personal data concerning him or her. The Dübon Engineering GmbH shall no longer process the personal data unless we can demonstrate compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject.
              </p>
              <p className="text-slate-700">
                If the Dübon Engineering GmbH processes personal data for direct marketing purposes, the data subject shall have the right to object at any time to such processing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Automated individual decision-making, including profiling</h3>
              <p className="text-slate-700">
                Each data subject shall have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning him or her, unless the decision is necessary for entering into a contract, is authorized by law, or is based on the data subject's explicit consent.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Right to withdraw data protection consent</h3>
              <p className="text-slate-700">
                Each data subject shall have the right to withdraw his or her consent to processing of personal data at any time. If the data subject wishes to exercise this right, he or she may contact any employee of the Dübon Engineering GmbH.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Legal basis */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            7. Legal basis for the processing
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Art. 6(1) lit. a GDPR serves as the legal basis for processing operations for which we obtain consent. If the processing of personal data is necessary for the performance of a contract, the processing is based on Article 6(1) lit. b GDPR. The same applies to processing operations necessary for pre-contractual measures. Where processing is required to comply with a legal obligation, the processing is based on Art. 6(1) lit. c GDPR. In rare cases, processing may be necessary to protect vital interests, based on Art. 6(1) lit. d GDPR. Finally, processing operations could be based on Article 6(1) lit. f GDPR for legitimate interests pursued by our company or a third party, except where such interests are overridden by the data subject's interests or fundamental rights and freedoms.
          </p>
        </section>

        {/* Section 8: Legitimate interests */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            8. The legitimate interests pursued by the controller or by a third party
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Where the processing of personal data is based on Article 6(1) lit. f GDPR our legitimate interest is to carry out our business in favor of the well-being of all our employees and the shareholders.
          </p>
        </section>

        {/* Section 9: Storage period */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            9. Period for which the personal data will be stored
          </h2>
          <p className="text-slate-700 leading-relaxed">
            The criteria used to determine the period of storage of personal data is the respective statutory retention period. After expiration of that period, the corresponding data is routinely deleted, as long as it is no longer necessary for the fulfillment of the contract or the initiation of a contract.
          </p>
        </section>

        {/* Section 10: Provision of personal data */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            10. Provision of personal data as statutory or contractual requirement
          </h2>
          <p className="text-slate-700 leading-relaxed">
            We clarify that the provision of personal data is partly required by law (e.g. tax regulations) or can also result from contractual provisions. Sometimes it may be necessary to conclude a contract that the data subject provides us with personal data, which must subsequently be processed by us. The data subject is, for example, obliged to provide us with personal data when our company signs a contract with him or her. The non-provision of the personal data would have the consequence that the contract could not be concluded. Before personal data is provided, the data subject must contact any employee who will clarify whether the provision of the personal data is required by law or contract or is necessary for the conclusion of the contract.
          </p>
        </section>

        {/* Section 11: Automated decision-making */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            11. Existence of automated decision-making
          </h2>
          <p className="text-slate-700 leading-relaxed">
            As a responsible company, we do not use automatic decision-making or profiling.
          </p>
        </section>
      </div>
    </div>
  );
}
