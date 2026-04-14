import artificialIntelligence from "./courses/artificial-intelligence.json";
import auditAndAccounting from "./courses/audit-and-accounting.json";
import businessLaw from "./courses/business-law.json";
import businessProcessImprovement from "./courses/business-process-improvement.json";
import construction from "./courses/construction.json";
import contractManagementAndProcurement from "./courses/contract-management-and-procurement.json";
import corporateFinance from "./courses/corporate-finance.json";
import corporateIslamicLaw from "./courses/corporate-islamic-law.json";
import cyberLaw from "./courses/cyber-law.json";
import cybersecurity from "./courses/cybersecurity.json";
import dataAnalytics from "./courses/data-analytics.json";
import digitalTransformation from "./courses/digital-transformation.json";
import disputeManagement from "./courses/dispute-management.json";
import drivingOrganisationalChange from "./courses/driving-organisational-change.json";
import employeeWellbeingAndDiversity from "./courses/employee-wellbeing-and-diversity.json";
import engineering from "./courses/engineering.json";
import environmentalSocialAndGovernance from "./courses/environmental-social-and-governance.json";
import executiveCoachingAndMentoring from "./courses/executive-coaching-and-mentoring.json";
import facilitiesManagement from "./courses/facilities-management.json";
import financialModelling from "./courses/financial-modelling.json";
import financialRegulationAndCompliance from "./courses/financial-regulation-and-compliance.json";
import fraudDetection from "./courses/fraud-detection.json";
import governanceAndRiskManagement from "./courses/governance-and-risk-management.json";
import hospitalityTourismAndEventsManagement from "./courses/hospitality-tourism-and-events-management.json";
import islamicFinanceAndLaw from "./courses/islamic-finance-and-law.json";
import learningAndDevelopment from "./courses/learning-and-development.json";
import legalReasoning from "./courses/legal-reasoning.json";
import legislativeAndPolicyFramework from "./courses/legislative-and-policy-framework.json";
import logisticsAndSupplyChainManagement from "./courses/logistics-and-supply-chain-management.json";
import miniMba from "./courses/mini-mba.json";
import neurodiversityInTheWorkplace from "./courses/neurodiversity-in-the-workplace.json";
import officeAdministration from "./courses/office-administration.json";
import oilAndGas from "./courses/oil-and-gas.json";
import performanceManagement from "./courses/performance-management.json";
import personalEffectiveness from "./courses/personal-effectiveness.json";
import projectManagement from "./courses/project-management.json";
import publicAndMediaRelations from "./courses/public-and-media-relations.json";
import realEstate from "./courses/real-estate.json";
import recruitmentAndTalentAcquisition from "./courses/recruitment-and-talent-acquisition.json";
import renewableEnergy from "./courses/renewable-energy.json";
import reportingAndBudgeting from "./courses/reporting-and-budgeting.json";
import salesAndMarketing from "./courses/sales-and-marketing.json";
import sportsBusiness from "./courses/sports-business.json";
import strategicLeadership from "./courses/strategic-leadership.json";
import strategicPlanningAndManagement from "./courses/strategic-planning-and-management.json";
import sustainabilityAndClimateScience from "./courses/sustainability-and-climate-science.json";

export interface CourseTopic {
  title: string;
  bullets: string[];
}

export interface CourseSchedule {
  date: string;
  venue: string;
  duration: string;
  price: string;
}

export interface CourseData {
  id: string;
  title: string;
  category: string;
  description: string;
  whoShouldAttend: string;
  pastDelegates: string[];
  outcomes: string[];
  topics: CourseTopic[];
  schedule: CourseSchedule[];
}

const courses: Record<string, CourseData> = {
  "artificial-intelligence": artificialIntelligence as CourseData,
  "audit-and-accounting": auditAndAccounting as CourseData,
  "business-law": businessLaw as CourseData,
  "business-process-improvement": businessProcessImprovement as CourseData,
  "construction": construction as CourseData,
  "contract-management-and-procurement": contractManagementAndProcurement as CourseData,
  "corporate-finance": corporateFinance as CourseData,
  "corporate-islamic-law": corporateIslamicLaw as CourseData,
  "cyber-law": cyberLaw as CourseData,
  "cybersecurity": cybersecurity as CourseData,
  "data-analytics": dataAnalytics as CourseData,
  "digital-transformation": digitalTransformation as CourseData,
  "dispute-management": disputeManagement as CourseData,
  "driving-organisational-change": drivingOrganisationalChange as CourseData,
  "employee-wellbeing-and-diversity": employeeWellbeingAndDiversity as CourseData,
  "engineering": engineering as CourseData,
  "environmental-social-and-governance": environmentalSocialAndGovernance as CourseData,
  "executive-coaching-and-mentoring": executiveCoachingAndMentoring as CourseData,
  "facilities-management": facilitiesManagement as CourseData,
  "financial-modelling": financialModelling as CourseData,
  "financial-regulation-and-compliance": financialRegulationAndCompliance as CourseData,
  "fraud-detection": fraudDetection as CourseData,
  "governance-and-risk-management": governanceAndRiskManagement as CourseData,
  "hospitality-tourism-and-events-management": hospitalityTourismAndEventsManagement as CourseData,
  "islamic-finance-and-law": islamicFinanceAndLaw as CourseData,
  "learning-and-development": learningAndDevelopment as CourseData,
  "legal-reasoning": legalReasoning as CourseData,
  "legislative-and-policy-framework": legislativeAndPolicyFramework as CourseData,
  "logistics-and-supply-chain-management": logisticsAndSupplyChainManagement as CourseData,
  "mini-mba": miniMba as CourseData,
  "neurodiversity-in-the-workplace": neurodiversityInTheWorkplace as CourseData,
  "office-administration": officeAdministration as CourseData,
  "oil-and-gas": oilAndGas as CourseData,
  "performance-management": performanceManagement as CourseData,
  "personal-effectiveness": personalEffectiveness as CourseData,
  "project-management": projectManagement as CourseData,
  "public-and-media-relations": publicAndMediaRelations as CourseData,
  "real-estate": realEstate as CourseData,
  "recruitment-and-talent-acquisition": recruitmentAndTalentAcquisition as CourseData,
  "renewable-energy": renewableEnergy as CourseData,
  "reporting-and-budgeting": reportingAndBudgeting as CourseData,
  "sales-and-marketing": salesAndMarketing as CourseData,
  "sports-business": sportsBusiness as CourseData,
  "strategic-leadership": strategicLeadership as CourseData,
  "strategic-planning-and-management": strategicPlanningAndManagement as CourseData,
  "sustainability-and-climate-science": sustainabilityAndClimateScience as CourseData,
};

export function getCourseById(id: string): CourseData | null {
  return courses[id] || null;
}

export function getAllCourseIds(): string[] {
  return Object.keys(courses);
}
