import React, { useState } from 'react';
import { Camera, Home, FileText, Phone, ShieldCheck, CheckCircle, ArrowRight, ArrowLeft, DollarSign, User, Briefcase, AlertCircle, Search, MessageSquare, FilePlus, FileCheck } from 'lucide-react';

const WizardApp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);
  const [formData, setFormData] = useState({
    applicantName: '',
    address: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
    socialSecurityNumber: 'to be provided securely',
    driversLicense: 'to be provided securely',
    assetDetails: '',
    assetPrice: '',
    downPayment: 'to be structured based on principal\'s interest leverage',
    loanAmount: '',
  });
  
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  
  const steps = [
    {
      title: "Finding & Initial Contact",
      icon: <Search size={24} />,
      description: "Find your asset and make initial contact",
      substeps: [
        {
          title: "Find the Asset",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Strategy Guidelines:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Focus on high net worth assets (luxury homes, penthouses, high-end vehicles)</li>
                <li>For real estate: Use platforms like Zillow to locate properties</li>
                <li>For vehicles: Identify dealerships for luxury brands (e.g., Rolls Royce)</li>
                <li>Select fully furnished/ready properties to avoid unnecessary logistics</li>
                <li>It's more ideal to find a house first because high-end cars require appropriate parking</li>
              </ul>
              <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-200">
                <span className="font-semibold text-blue-800">Pro Tip:</span> Why rent when you can own? Consider purchasing a penthouse or luxury property rather than renting. "We are not peasants."
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Asset Details (Address/Make & Model)</label>
                <textarea 
                  className="w-full p-2 border rounded-md"
                  rows="2"
                  placeholder="Enter property address or vehicle make/model"
                  value={formData.assetDetails}
                  onChange={(e) => handleInputChange('assetDetails', e.target.value)}
                />
              </div>
              
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Asset Price</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter price"
                  value={formData.assetPrice}
                  onChange={(e) => handleInputChange('assetPrice', e.target.value)}
                />
              </div>
            </div>
          )
        },
        {
          title: "Show Interest",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Initial Contact Strategy:</h3>
              <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                <p><span className="font-semibold">Email Template:</span> "Hello, I'm interested in [property address/vehicle]. Could you please send me a purchase agreement? I'm planning to explore financing options through my bank first."</p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Make an inquiry showing interest in the property/asset</li>
                <li>Request a purchase agreement/buyer's order immediately</li>
                <li>State that you plan to finance through "your bank" (strategic positioning)</li>
                <li>Keep conversation brief and professional</li>
              </ul>
              <div className="mt-4 bg-yellow-50 p-3 rounded border border-yellow-200">
                <span className="font-semibold flex items-center"><AlertCircle size={16} className="mr-1" /> Expectation:</span> After showing interest, expect a phone call from a seller or agent who will ask preliminary questions.
              </div>
            </div>
          )
        },
        {
          title: "Handle Initial Call",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Call Handling Script:</h3>
              <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                <p><span className="font-semibold">When asked about your interest:</span> "I have friends in the area and have been eyeing this property for some time. Now that it's available, I'd like to move forward."</p>
                <p className="mt-2"><span className="font-semibold">When asked about financing:</span> "I'd like to compare rates. Could you provide a purchase agreement so I can take it to my bank? If that doesn't work out, I can explore financing options with you."</p>
                <p className="mt-2"><span className="font-semibold">If asked how soon you're looking to move:</span> "I'm ready to proceed as soon as the transaction can be completed."</p>
              </div>
              <h3 className="font-bold text-lg mt-4 mb-2">Important Considerations:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Remain confident and professional</li>
                <li>Decline tours until later in the process - they often lead to more questions</li>
                <li>Position yourself as a high-value client from the start</li>
                <li>Keep the first call brief - it's just an introduction</li>
                <li>Request documents to be sent via email so you can "compare rates with your bank"</li>
              </ul>
              <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-200">
                <span className="font-semibold text-blue-800">Expected Outcome:</span> They will send you a purchase agreement/buyer's order and likely an application form.
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "Application",
      icon: <FileText size={24} />,
      description: "Complete and submit your application with strategic terminology",
      substeps: [
        {
          title: "Preparation & Personal Info",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Personal Information Form:</h3>
              <p className="text-sm text-gray-700 mb-4">Enter your personal information that will appear on the application.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Applicant Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Your full legal name"
                    value={formData.applicantName}
                    onChange={(e) => handleInputChange('applicantName', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Your current address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Your phone number"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <input 
                    type="date" 
                    className="w-full p-2 border rounded-md"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Social Security Number</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md bg-gray-100"
                    placeholder="to be provided securely"
                    value={formData.socialSecurityNumber}
                    onChange={(e) => handleInputChange('socialSecurityNumber', e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">You can simply put "to be provided securely"</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Driver's License Number</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md bg-gray-100"
                    placeholder="to be provided"
                    value={formData.driversLicense}
                    onChange={(e) => handleInputChange('driversLicense', e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">You can simply put "to be provided"</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan/Lease Amount</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Amount of loan/lease"
                    value={formData.loanAmount}
                    onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-4 bg-yellow-50 p-3 rounded border border-yellow-200">
                <span className="font-semibold flex items-center"><AlertCircle size={16} className="mr-1" /> Important:</span> Reading and understanding what to put on the application is crucial. This is for the readers, not those who simply copy and paste without understanding.
              </div>
            </div>
          )
        },
        {
          title: "Strategic Application Fields",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Strategic Terminology Guide:</h3>
              <p className="text-sm text-gray-700 mb-4">These are the exact phrases to use for financial/employment fields on your application.</p>
              
              <table className="min-w-full bg-white rounded-lg overflow-hidden border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">Application Field</th>
                    <th className="p-3 text-left">Strategic Response</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Employment Status</td>
                    <td className="p-3">"Independent financial authority, principal interest leveraging"</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="p-3">Source of Income</td>
                    <td className="p-3">"Financial entitlements derived from secured interest and asset-based leverage"</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Annual Income</td>
                    <td className="p-3">"N/A - This acquisition is supported by structured financial mechanisms rather than traditional income"</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="p-3">Business Name (if applicable)</td>
                    <td className="p-3">"Not applicable" (because "this transaction is structured under the authority of the principal")</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Employer Entity</td>
                    <td className="p-3">"Self-governed principal interest holder"</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="p-3">Length of Time in Position</td>
                    <td className="p-3">"Indefinite financial structuring based on secured assets and contractual rights" (or "10 years" if they require a specific timeframe)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Financial Instruments Utilized</td>
                    <td className="p-3">"UCC-backed financial claims and secured interest"</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="p-3">Down Payment</td>
                    <td className="p-3">"To be structured based on principal's interest leverage"</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Reference/Supporting Documents (Bank Account)</td>
                    <td className="p-3">"Account details for verification" (You can provide a Fidelity account if you have one)</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-200">
                <span className="font-semibold text-blue-800">Explanation Note:</span> These answers position your transaction as non-traditional and based on structured financial mechanisms. We are talking like bosses, not workers.
              </div>
            </div>
          )
        },
        {
          title: "Pre-Submission Steps",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Pre-Submission Checklist:</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-green-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <p>Before submitting, reach out to let them know you have documentation for their finance team/legal team</p>
                </div>
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-green-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <p>Mention you'll be putting a POA on file as well</p>
                </div>
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-green-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <p>Ensure all strategic terminology is correctly entered as specified</p>
                </div>
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-green-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <p>Double-check that personal information is accurate</p>
                </div>
              </div>
              <div className="mt-4 bg-yellow-50 p-3 rounded border border-yellow-200">
                <span className="font-semibold flex items-center"><AlertCircle size={16} className="mr-1" /> Important:</span> It's better to establish these terms and conditions at the beginning of the transaction. If they say no to your approach, they are saying no to your whole secured finance packet.
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "Post-Application",
      icon: <MessageSquare size={24} />,
      description: "Handle follow-up calls and communications strategically",
      substeps: [
        {
          title: "Purpose of Follow-up Call",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">What to Expect:</h3>
              <p className="mb-3">After submitting your application with the strategic terminology, the lender/seller will likely call to ask questions about your application. They will want to:</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Verify income sources and asset reserves</li>
                <li>Confirm down payment and earnest money details</li>
                <li>Review the unusual financial structures mentioned in your application</li>
                <li>Clarify aspects of your application they don't understand</li>
              </ul>
              
              <h3 className="font-bold text-lg mt-4 mb-2">Call Opening Script:</h3>
              <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                "Good [morning/afternoon]. I'm calling to follow up on my [mortgage/vehicle] application. My name is [your name], and I received a notice requesting additional information. I'd like to understand what details are needed so we can move forward smoothly."
              </div>
            </div>
          )
        },
        {
          title: "Common Questions & Responses",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Strategic Responses:</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="font-medium text-gray-800">Q: "Can you explain your income source?"</p>
                  <p className="text-gray-700 ml-4">"My income derives from financial instruments, security interests, and structured financial allocations."</p>
                </div>
                
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="font-medium text-gray-800">Q: "Can you verify the Fidelity account?"</p>
                  <p className="text-gray-700 ml-4">"Yes, I have assets held in that account. If needed, I can provide a verification letter directly from the institution."</p>
                  <p className="text-xs text-gray-500 ml-4 mt-1">Note: They're only asking if you can verify the account exists, not showing the funds in the account.</p>
                </div>
                
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="font-medium text-gray-800">Q: "Are you using any borrowed or gifted funds?"</p>
                  <p className="text-gray-700 ml-4">"No. All funds are structured within my personal and financial holdings."</p>
                </div>
                
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="font-medium text-gray-800">Q: "Why are you structuring your financing this way?"</p>
                  <p className="text-gray-700 ml-4">"This is a strategy commonly used in high net worth real estate transactions to optimize financial leverage."</p>
                </div>
                
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="font-medium text-gray-800">Q: "We don't traditionally do it this way. I'm confused."</p>
                  <p className="text-gray-700 ml-4">"This is a strategy commonly used in high net worth real estate transactions to optimize financial leverage. Could you please connect me with a higher officer or private banking division?"</p>
                </div>
              </div>
              
              <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-200">
                <span className="font-semibold text-blue-800">Key Tips:</span>
                <ul className="list-disc pl-5 mt-1">
                  <li>Stay confident, speaking in a way that positions you as knowledgeable</li>
                  <li>Use professional terminology, avoiding casual terms</li>
                  <li>Keep it brief - provide only what they ask for</li>
                  <li>If they push back, redirect without becoming combative</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          title: "Handling Resistance",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Escalation Script:</h3>
              <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                "This is a high value transaction. I'd like to speak with a senior lending specialist or private banking advisor to ensure we align on the best structure."
              </div>
              
              <h3 className="font-bold text-lg mb-2">Power Move:</h3>
              <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                "If you sense resistance, shift the narrative: 'This is a high value transaction. I'd like to speak with a senior lending specialist or private banking advisor to ensure we align on the best structure.' This keeps you positioned as a high-level client, not just another borrower."
              </div>
              
              <h3 className="font-bold text-lg mb-2">Resistance Management:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>We are <strong>expecting pushback</strong> - mentally prepare for it</li>
                <li>Remain calm and professional - never become combative</li>
                <li>Request escalation rather than arguing with lower-level staff</li>
                <li>Maintain confident positioning as a high-value client</li>
                <li>If they approve everything, you're in the final stretch</li>
                <li>If they request more documents, prepare them following the same principles</li>
                <li>If they seem confused, request a higher level banking officer or private banking division</li>
              </ul>
              
              <div className="mt-4 bg-purple-50 p-3 rounded border border-purple-200">
                <span className="font-semibold text-purple-800">Mental Preparation:</span> "Remember, we are expecting pushback. It's OK. It takes a lot of stress and anxiety off when we understand they're going to say no. They're not going to understand what this is because if they did, they would not be on the other side of that phone."
              </div>
            </div>
          )
        },
        {
          title: "Document Security",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Security Protocol:</h3>
              
              <div className="mb-3">
                <p className="font-semibold mb-1">When it's safe to send ID:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>If requested via corporate email (e.g., name@companydomain.com)</li>
                  <li>If you initiated the process through their official financing or dealership</li>
                  <li>If needed for identification purposes (standard for high value transactions)</li>
                </ul>
              </div>
              
              <div className="mb-3">
                <p className="font-semibold mb-1">When NOT to send ID:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>If requested from generic email (Gmail, Yahoo, etc.)</li>
                  <li>If they haven't clearly explained why they need it</li>
                  <li>If you're in inquiry stage and not official application approval</li>
                </ul>
              </div>
              
              <div className="mb-3">
                <p className="font-semibold mb-1">Smart Privacy Moves:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Control submission: use a secure document portal if they provide one</li>
                  <li>Blur sensitive details on ID (ID number) unless necessary</li>
                  <li>Watermark the image with "For [Company] Application Only" to prevent misuse</li>
                </ul>
              </div>
              
              <div className="mt-4 bg-red-50 p-3 rounded border border-red-200">
                <span className="font-semibold text-red-800">Security Request Script:</span> "Can you confirm if there is a secure portal for submitting identity verification? I want to ensure my information is handled with the highest level of privacy and security."
              </div>
              
              <p className="text-sm text-gray-700 mt-4">High value clients like Warren Buffett or Bill Gates would not just send their ID because a level one salesperson asked. Position yourself as a high-value client who takes security seriously.</p>
            </div>
          )
        }
      ]
    },
    {
      title: "Documentation",
      icon: <FilePlus size={24} />,
      description: "Prepare and submit required documentation",
      substeps: [
        {
          title: "Required Documentation",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Documentation Package Overview:</h3>
              <p className="mb-3">Once your POA is accepted, your tender payment documentation needs to be accepted. The following documents should be prepared:</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Power of Attorney (POA) document</li>
                <li>Tender payment documentation</li>
                <li>UCC-backed financial claims documentation</li>
                <li>Secure interest documentation</li>
                <li>Purchase agreement (possibly with your modifications)</li>
              </ul>
              
              <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-200">
                <span className="font-semibold text-blue-800">Strategic Tip:</span> Submit documents as a complete package rather than individually to establish the interconnected nature of your financial structure.
              </div>
              
              <h3 className="font-bold text-lg mt-4 mb-2">Document Upload (Coming Soon):</h3>
              <div className="bg-gray-200 p-6 rounded-lg border border-gray-300 flex flex-col items-center justify-center">
                <FilePlus size={36} className="text-gray-500 mb-2" />
                <p className="text-gray-600">Document upload functionality will be available in a future update</p>
              </div>
            </div>
          )
        },
        {
          title: "Legal Team Interaction",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Legal Team Interaction Strategy:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-blue-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-500 text-xs font-bold">1</span>
                  </div>
                  <p>Maintain consistent terminology when discussing your financial structure</p>
                </div>
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-blue-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-500 text-xs font-bold">2</span>
                  </div>
                  <p>Continue positioning as a high net worth transaction throughout all communications</p>
                </div>
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-blue-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-500 text-xs font-bold">3</span>
                  </div>
                  <p>Respond to questions with precise, professional language</p>
                </div>
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-blue-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-500 text-xs font-bold">4</span>
                  </div>
                  <p>If they reject documentation, request specific written explanation</p>
                </div>
              </div>
              <div className="mt-4 bg-yellow-50 p-3 rounded border border-yellow-200">
                <span className="font-semibold flex items-center"><AlertCircle size={16} className="mr-1" /> Note:</span> Be prepared for multiple rounds of review. Expect pushback but remain professional.
              </div>
              
              <h3 className="font-bold text-lg mt-4 mb-2">Key Terminology for Legal Discussions:</h3>
              <div className="bg-white p-3 rounded border border-gray-200">
                <ul className="list-disc pl-5 space-y-1">
                  <li>"High net worth transaction"</li>
                  <li>"Structured financial mechanisms"</li>
                  <li>"Principal's interest leverage"</li>
                  <li>"Security instruments"</li>
                  <li>"Asset-based funding"</li>
                  <li>"Contractual principal leverage"</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          title: "Finalization",
          content: (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Closing Process:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete necessary signatures on all documentation</li>
                <li>Verify all terms align with your original intent</li>
                <li>Finalize transaction using principal's interest leverage</li>
                <li>Take possession of asset</li>
                <li>Ensure all documentation is properly filed and stored</li>
              </ul>
              
              <h3 className="font-bold text-lg mt-4 mb-2">Asset Possession Strategy:</h3>
              <p className="mb-3">Once all documentation is finalized and the transaction is complete, take possession of your asset:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>For vehicles: Schedule a pickup at the dealership</li>
                <li>For real estate: Coordinate key transfer and move-in dates</li>
                <li>Ensure all property/asset documents are securely stored</li>
                <li>Consider setting up a secure storage solution for all transaction documentation</li>
              </ul>
              
              <div className="mt-4 bg-green-50 p-3 rounded border border-green-200">
                <span className="font-semibold text-green-800">Success Mindset:</span> "We are bosses, not peasants. This transaction represents the proper leveraging of our rightful financial positioning."
              </div>
            </div>
          )
        }
      ]
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setExpandedSection(null);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setExpandedSection(null);
    }
  };

  const toggleExpand = (index) => {
    if (expandedSection === index) {
      setExpandedSection(null);
    } else {
      setExpandedSection(index);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 p-6 text-white">
          <h1 className="text-2xl font-bold">High Net Worth Asset Acquisition</h1>
          <p className="text-blue-100 mt-1">Strategic Wealth Positioning System</p>
        </div>
        
        {/* Progress Bar */}
        <div className="p-4 border-b">
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center ${index <= currentStep ? 'text-blue-800' : 'text-gray-400'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
                  index < currentStep ? 'bg-blue-800 text-white' : 
                  index === currentStep ? 'border-2 border-blue-800 text-blue-800' : 
                  'border-2 border-gray-300 text-gray-400'
                }`}>
                  {step.icon}
                </div>
                <span className="text-xs text-center">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div 
              className="absolute top-0 left-0 h-full bg-blue-800 rounded-full"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Current Step Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-1 flex items-center">
            {steps[currentStep].icon} 
            <span className="ml-2">{steps[currentStep].title}</span>
          </h2>
          <p className="text-gray-600 mb-6">{steps[currentStep].description}</p>
          
          <div className="space-y-4">
            {steps[currentStep].substeps.map((substep, index) => (
              <div 
                key={index} 
                className="border rounded-lg overflow-hidden"
              >
                <div 
                  className={`p-4 flex justify-between items-center cursor-pointer ${expandedSection === index ? 'bg-blue-50 border-b' : 'bg-gray-50'}`}
                  onClick={() => toggleExpand(index)}
                >
                  <h3 className="font-medium">{substep.title}</h3>
                  <div className={`transform transition-transform ${expandedSection === index ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                {expandedSection === index && (
                  <div className="p-4">
                    {substep.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="p-6 bg-gray-50 flex justify-between">
          <button 
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentStep === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white border border-blue-800 text-blue-800 hover:bg-blue-50'
            }`}
          >
            <ArrowLeft size={16} className="mr-2" /> Previous
          </button>
          
          <button 
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentStep === steps.length - 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-800 text-white hover:bg-blue-900'
            }`}
          >
            Next <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-6 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Briefcase size={24} className="mr-2" /> Key Terminology Reference
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-blue-800">Essential Terms</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <DollarSign size={16} className="mr-2 mt-1 text-green-600 flex-shrink-0" />
                  <span><strong>High net worth transaction</strong> - Positioning phrase for all interactions</span>
                </li>
                <li className="flex items-start">
                  <DollarSign size={16} className="mr-2 mt-1 text-green-600 flex-shrink-0" />
                  <span><strong>Structured financial mechanisms</strong> - Alternative to traditional income</span>
                </li>
                <li className="flex items-start">
                  <DollarSign size={16} className="mr-2 mt-1 text-green-600 flex-shrink-0" />
                  <span><strong>Principal's interest leverage</strong> - Core financial concept</span>
                </li>
                <li className="flex items-start">
                  <DollarSign size={16} className="mr-2 mt-1 text-green-600 flex-shrink-0" />
                  <span><strong>Security instruments</strong> - Basis for transaction authority</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-blue-800">Advanced Terminology</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <DollarSign size={16} className="mr-2 mt-1 text-green-600 flex-shrink-0" />
                  <span><strong>Asset-based funding</strong> - Funding source description</span>
                </li>
                <li className="flex items-start">
                  <DollarSign size={16} className="mr-2 mt-1 text-green-600 flex-shrink-0" />
                  <span><strong>Contractual principal leverage</strong> - Authority basis</span>
                </li>
                <li className="flex items-start">
                  <DollarSign size={16} className="mr-2 mt-1 text-green-600 flex-shrink-0" />
                  <span><strong>Financial entitlements derived from secured interest</strong> - Income source</span>
                </li>
                <li className="flex items-start">
                  <DollarSign size={16} className="mr-2 mt-1 text-green-600 flex-shrink-0" />
                  <span><strong>UCC-backed financial claims</strong> - Legal framework reference</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 border-t border-blue-100">
          <div className="flex items-start">
            <ShieldCheck size={24} className="text-blue-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-blue-800">Strategy Reminder</h3>
              <p className="text-blue-800">Remember: "We are bosses, not peasants." Expect pushback but remain professional. Control information flow and consistently position as a high-value client. Never become combative when facing resistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardApp;
