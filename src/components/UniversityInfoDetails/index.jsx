import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "../Select";
import Button from "../Button";
import { Img } from "..";

const UniversityInfoDetails = ({ onNext, onBack, formik }) => {
  const universityFaculties = {
    "Abubakar Tafawa Balewa University, Bauchi": {
      "Agriculture & Agricultural Technology": [
        "Animal Production",
        "Crop Production",
        "Agricultural Economics and Extension",
        "Soil Science",
      ],
      "Engineering & Engineering Technology": [
        "Agricultural & Bio-Resource Engineering",
        "Automobile Engineering",
        "Chemical Engineering",
        "Civil Engineering",
        "Computer & Communication Engineering",
        "Electrical/Electronics Engineering",
        "Mechanical/Production Engineering",
        "Mechatronics and Systems Engineering",
        "Petroleum Engineering",
      ],
      "Environmental Technology": [
        "Architecture",
        "Building Technology",
        "Environmental Management Technology",
        "Estate Management and Valuation",
        "Industrial Design",
        "Survey & Geo-Informatics",
        "Quantity Surveying",
        "Urban & Regional Planning",
      ],
      "Management Sciences": [
        "Banking & Finance Technology",
        "Management and Information Technology",
        "Accounting",
        "Business Management",
        "Technopreneurship",
      ],
      "Technology Education": [
        "Education Foundation",
        "Science Education",
        "Vocational & Technology Education",
        "Library and Information Science",
      ],
      Science: [
        "Mathematical Sciences",
        "Biological Sciences",
        "Chemistry",
        "Geology",
        "Physics",
        "Biochemistry",
        "Microbiology",
        "Ecology",
      ],
      "College of Medical Sciences": [
        "Medicine and Surgery",
        "Medical Laboratory Science",
      ],
    },

    // Add more universities here in the same format
    "Ahmadu Bello University, Zaria": {
      faculties: {
        Administration: [
          "Accounting",
          "Business Administration",
          "Local Government and Development Studies",
          "Public Administration",
          // Add more departments as needed
        ],
        Agriculture: [
          "Agricultural Economics and Rural Sociology",
          "Agronomy",
          "Animal Science",
          "Crop Protection",
          "Plant Science",
          "Soil Science",
          // Add more departments as needed
        ],
        Arts: [
          "Archaeology",
          "English and Literary Studies",
          "History",
          "African Languages and Cultures",
          "Theatre and Performing Arts",
          "French",
          "Arabic",
          // Add more departments as needed
        ],
        Engineering: [
          "Agricultural Engineering",
          "Chemical Engineering",
          "Civil Engineering",
          "Electrical Engineering",
          "Mechanical Engineering",
          "Water Resources and Environmental Engineering",
          // Add more departments as needed
        ],
        "Environmental Design": [
          "Architecture",
          "Building",
          "Fine Arts",
          "Geomatics",
          "Industrial Design",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        Law: [
          "Civil Law",
          "Commercial Law",
          "Public Law",
          "Sharia Law",
          // Add more departments as needed
        ],
        Medicine: [
          "Anatomy",
          "Medical Microbiology",
          "Pathology",
          "Physiology",
          "Radiology",
          "Surgery",
          // Add more departments as needed
        ],
        "Pharmaceutical Sciences": [
          "Clinical Pharmacy and Pharmacy Practice",
          "Pharmacognosy and Drug Development",
          "Pharmaceutical and Medicinal Chemistry",
          "Pharmaceutics and Pharmaceutical Microbiology",
          "Pharmacology and Clinical Pharmacy",
          // Add more departments as needed
        ],
        Science: [
          "Biochemistry",
          "Biological Sciences",
          "Botany",
          "Chemistry",
          "Geography",
          "Geology",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Textile Science and Technology",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Mass Communication",
          "Political Science and International Studies",
          "Sociology",
          // Add more departments as needed
        ],
        "Veterinary Medicine": [
          "Theriogenology and Production",
          "Veterinary Anatomy",
          "Veterinary Medicine",
          "Veterinary Parasitology and Entomology",
          "Veterinary Pathology and Microbiology",
          "Veterinary Pharmacology and Toxicology",
          "Veterinary Physiology",
          "Veterinary Public Health and Preventive Medicine",
          "Veterinary Surgery and Medicine",
          // Add more departments as needed
        ],
      },
    },

    "Bayero University, Kano": {
      faculties: {
        Agriculture: [
          "Agricultural Economics and Extension",
          "Agronomy",
          "Animal Science",
          "Crop Protection",
          "Soil Science",
          "Fisheries and Aquaculture",
          // Add more departments as needed
        ],
        Engineering: [
          "Agricultural Engineering",
          "Civil Engineering",
          "Electrical Engineering",
          "Mechanical Engineering",
          "Mechatronics Engineering",
          "Chemical Engineering",
          "Computer Engineering",
          "Telecommunication Engineering",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Architecture",
          "Building Technology",
          "Urban and Regional Planning",
          "Quantity Surveying",
          "Estate Management",
          "Geography",
          // Add more departments as needed
        ],
        "Life Sciences": [
          "Biological Sciences",
          "Biochemistry",
          "Microbiology",
          "Plant Biology",
          "Zoology",
          // Add more departments as needed
        ],
        "Physical Sciences": [
          "Chemistry",
          "Physics",
          "Mathematics",
          "Statistics",
          "Computer Science",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          "Physiology",
          "Biochemistry",
          "Nutrition and Dietetics",
          // Add more departments as needed
        ],
        "Clinical Sciences": [
          "Medicine and Surgery",
          "Radiology",
          "Ophthalmology",
          "Psychiatry",
          "Paediatrics",
          "Surgery",
          // Add more departments as needed
        ],
        "Allied Health Sciences": [
          "Nursing",
          "Physiotherapy",
          "Dentistry",
          "Medical Laboratory Science",
          "Radiography",
          "Optometry",
          // Add more departments as needed
        ],
        "Pharmaceutical Sciences": [
          "Pharmacy",
          // Add more departments as needed
        ],
        "Computer Science & Information Technology": [
          "Computer Science",
          "Information Technology",
          "Software Engineering",
          "Cyber Security",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Business Administration",
          "Banking and Finance",
          "Public Administration",
          "Marketing",
          // Add more departments as needed
        ],
        Law: [
          "Private Law",
          "Public Law",
          // Add more departments as needed
        ],
        Education: [
          "Science and Technical Education",
          "Educational Foundations",
          "Library and Information Science",
          "Physical and Health Education",
          "Special Education",
          // Add more departments as needed
        ],
      },
    },

    "Federal University of Petroleum Resources, Effurun": {
      faculties: {
        "College of Science": [
          "Industrial Chemistry",
          "Chemistry",
          "Environmental Management and Toxicology",
          "Geology",
          "Geophysics",
          "Computer Science",
          "Mathematics",
          "Physics",
          // Add more departments as needed
        ],
        "College of Engineering and Technology": [
          "Petroleum Engineering",
          "Mechanical Engineering",
          "Chemical Engineering",
          "Electrical and Electronics Engineering",
          "Marine Engineering",
          // Add more departments as needed
        ],
      },
    },

    "Federal University of Technology, Akure": {
      faculties: {
        "School of Agriculture and Agricultural Technology (SAAT)": [
          "Agricultural Engineering",
          "Agricultural Extension and Communication Technology",
          "Agriculture and Resource Economics",
          "Animal Production and Health",
          "Crop Soil and Pest Management",
          "Ecotourism and Wildlife Management",
          "Fisheries and Aquaculture Technology",
          "Forestry and Wood Technology",
          // Add more departments as needed
        ],
        "School of Engineering and Engineering Technology (SEET)": [
          "Civil Engineering",
          "Electrical/Electronics Engineering",
          "Mechanical Engineering",
          "Metallurgical and Materials Engineering",
          "Mining Engineering",
          "Agricultural Engineering",
          "Computer Engineering",
          "Industrial and Production Engineering",
          // Add more departments as needed
        ],
        "School of Environmental Technology (SET)": [
          "Architecture",
          "Building",
          "Estate Management",
          "Industrial Design",
          "Quantity Surveying",
          "Surveying and Geo-informatics",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "School of Sciences (SOS)": [
          "Biochemistry",
          "Biology",
          "Chemistry",
          "Mathematical Sciences",
          "Microbiology",
          "Physics",
          "Statistics",
          "Biotechnology",
          // Add more departments as needed
        ],
        "School of Earth and Mineral Sciences (SEMS)": [
          "Applied Geology",
          "Applied Geophysics",
          "Meteorology",
          "Remote Sensing and Geosciences Information System",
          // Add more departments as needed
        ],
        "School of Computing": [
          "Computer Science",
          "Information Technology",
          "Software Engineering",
          // Add more departments as needed
        ],
        "School of Health and Health Technology": [
          "Human Anatomy",
          "Biomedical Technology",
          "Physiology",
          // Add more departments as needed
        ],
      },
    },

    "Federal University of Technology, Minna": {
      faculties: {
        "Agriculture and Agricultural Technology": [
          "Animal Production",
          "Crop Production",
          "Agricultural Economics and Extension",
          "Soil Science and Land Management",
          "Food Science and Technology",
          "Water Resources, Aquaculture and Fisheries Technology",
          // Add more departments as needed
        ],
        "Engineering and Engineering Technology": [
          "Chemical Engineering",
          "Civil Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          "Agricultural and Bioresources Engineering",
          "Computer Engineering",
          "Telecommunication Engineering",
          "Mechatronics Engineering",
          // Add more departments as needed
        ],
        "Environmental Technology": [
          "Architecture",
          "Building Technology",
          "Estate Management",
          "Surveying and Geoinformatics",
          "Urban and Regional Planning",
          "Quantity Surveying",
          // Add more departments as needed
        ],
        "Management and Information Technology": [
          "Project Management Technology",
          "Transport Management Technology",
          "Entrepreneurship and Business Studies",
          "Library and Information Technology",
          // Add more departments as needed
        ],
        "Life Sciences": [
          "Biological Sciences",
          "Microbiology",
          "Biochemistry",
          "Animal Biology",
          "Plant Biology",
          // Add more departments as needed
        ],
        "Physical Sciences": [
          "Chemistry",
          "Physics",
          "Mathematics",
          "Geology",
          "Statistics",
          // Add more departments as needed
        ],
        "Technology Education": [
          "Industrial and Technology Education",
          "Science Education",
          "Educational Technology",
          // Add more departments as needed
        ],
        "Information and Communication Technology": [
          "Computer Science",
          "Cyber Security Science",
          "Information Technology",
          // Add more departments as needed
        ],
      },
    },

    "Federal University of Technology, Owerri": {
      faculties: {
        "School of Agriculture And Agricultural Technology (SAAT)": [
          "Agricultural Economics",
          "Agricultural Extension",
          "Animal Science and Technology",
          "Crop Science and Technology",
          "Fisheries and Aquaculture Technology",
          "Forestry and Wildlife Technology",
          "Soil Science and Technology",
          // Add more departments as needed
        ],
        "School of Basic Medical Science (SBMS)": [
          "Human Anatomy",
          "Human Physiology",
          // Add more departments as needed
        ],
        "School of Biological Science (SOBS)": [
          "Biochemistry",
          "Biology",
          "Biotechnology",
          "Microbiology",
          "Forensic Science",
          // Add more departments as needed
        ],
        "School of Engineering and Engineering Technology (SEET)": [
          "Agricultural and Bioresources Engineering",
          "Biomedical Engineering",
          "Chemical Engineering",
          "Civil Engineering",
          "Electrical and Electronics Engineering",
          "Food Science and Technology",
          "Material and Metallurgical Engineering",
          "Mechanical Engineering",
          "Petroleum Engineering",
          "Polymer and Textile Engineering",
          // Add more departments as needed
        ],
        "School of Environmental Science (SOES)": [
          "Architecture",
          "Building Technology",
          "Environmental Technology",
          "Quantity Surveying",
          "Surveying & Geo-Informatics",
          "Urban & Regional Planning",
          // Add more departments as needed
        ],
        "School of Health Technology (SOHT)": [
          "Public Health Technology",
          "Prosthesis And Orthopedics",
          "Optometry",
          "Dental Technology",
          "Biomedical Technology",
          // Add more departments as needed
        ],
        "School of Information and Communication Technology (SICT)": [
          "Computer Science",
          "Cybersecurity",
          "Information Technology",
          "Software Engineering",
          // Add more departments as needed
        ],
        "School of Management Technology (SMAT)": [
          "Transport Management Technology",
          "Project Management Technology",
          "Maritime Management Technology",
          "Management Technology",
          "Financial Management Technology",
          "Information Management Technology",
          // Add more departments as needed
        ],
        "School of Physical Sciences (SOPS)": [
          "Statistics",
          "Science Laboratory Technology",
          "Physics",
          "Mathematics",
          "Geology",
          "Chemistry",
          // Add more departments as needed
        ],
      },
    },

    "Michael Okpara University of Agriculture, Umudike": {
      faculties: {
        "Agricultural Economics, Rural Sociology, and Extension": [
          "Agricultural Economics",
          "Agric Extension & Rural Development",
          "Agric-Extension & Rural Sociology",
          // Add more departments as needed
        ],
        "Applied Food Sciences and Tourism": [
          "Food Science & Technology",
          "Human Nutrition & Dietetics",
          "Hotel Management & Tourism",
          // Add more departments as needed
        ],
        "Animal Science and Animal Production": [
          "Animal Production",
          "Animal Breeding and Physiology",
          // Add more departments as needed
        ],
        "Crop and Soil Sciences": [
          "Agronomy",
          "Soil Science",
          "Crop Science",
          // Add more departments as needed
        ],
        "Engineering and Engineering Technology": [
          "Agricultural & Bioresources Engineering",
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Engineering",
          "Electrical/Electronics Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "Natural Resources and Environmental Management": [
          "Forestry & Environmental Mgt.",
          "Environmental Management & Toxicology",
          // Add more departments as needed
        ],
        "Natural Science": [
          "Biochemistry",
          "Microbiology",
          "Zoology & Environmental Biology",
          "Plant Science & Biotechnology",
          "Statistics",
          "Mathematics",
          "Physics",
          "Chemistry",
          // Add more departments as needed
        ],
        Education: [
          "Education & Biology",
          "Education & Chemistry",
          "Education & Computer Science",
          "Education & Integrated Science",
          "Education & Mathematics",
          "Education & Physics",
          "Home Economics & Education",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Business Administration",
          "Entrepreneurial Studies",
          "Industrial Relations & Personnel Management",
          // Add more departments as needed
        ],
        "Veterinary Medicine": [
          "Veterinary Medicine",
          // Add more departments as needed
        ],
      },
    },

    "Modibbo Adama University of Technology, Yola": {
      faculties: {
        Agriculture: [
          "Animal Science and Range Management",
          "Crop Production and Horticulture",
          "Fisheries",
          "Forestry and Wildlife Management",
          "Soil Science",
          "Agricultural Economics and Extension",
          // Add more departments as needed
        ],
        Engineering: [
          "Agricultural and Environmental Engineering",
          "Chemical Engineering",
          "Civil Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          "Mechatronics Engineering",
          "Petroleum Engineering",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Architecture",
          "Building",
          "Geography",
          "Industrial Design",
          "Surveying and Geoinformatics",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "Life Sciences": [
          "Biochemistry",
          "Biological Sciences",
          "Microbiology",
          // Add more departments as needed
        ],
        "Physical Sciences": [
          "Chemistry",
          "Computer Science",
          "Geology",
          "Mathematics",
          "Physics",
          "Statistics",
          // Add more departments as needed
        ],
        "Management and Information Technology": [
          "Accounting",
          "Banking and Finance",
          "Business Management",
          "Information Technology",
          "Library and Information Science",
          // Add more departments as needed
        ],
        "Technology Education": [
          "Agricultural Education",
          "Biology Education",
          "Business Education",
          "Chemistry Education",
          "Construction Technology Education",
          "Electrical and Electronics Technology Education",
          "Integrated Science Education",
          "Mathematics Education",
          "Mechanical Technology Education",
          "Physics Education",
          // Add more departments as needed
        ],
        "School of General Studies": [
          "Pre-Degree Programme",
          "Remedial Programme",
          // Add more departments as needed
        ],
        "School of Postgraduate Studies": [
          "Postgraduate Diploma",
          "Master’s Degree",
          "Doctor of Philosophy",
          // Add more departments as needed
        ],
      },
    },

    "National Open University of Nigeria, Lagos": {
      faculties: {
        "Agricultural Sciences": [
          "Agricultural Economics and Extension",
          "Animal Science and Fisheries",
          "Crop Production and Protection",
          "Soil and Land Resources Management",
          "Agricultural Science Education",
          // Add more departments as needed
        ],
        Arts: [
          "English Language",
          "French and International Studies",
          "Philosophy",
          "Religious Studies",
          // Add more departments as needed
        ],
        Computing: [
          "Computer Science",
          "Cyber Security",
          "Information Technology",
          "Software Engineering",
          // Add more departments as needed
        ],
        Education: [
          "Arts and Social Science Education",
          "Educational Foundations",
          "Science Education",
          "Library and Information Science",
          "Human Kinetics and Health Education",
          // Add more departments as needed
        ],
        "Health Sciences": [
          "Nursing",
          "Public Health",
          "Environmental Health Science",
          // Add more departments as needed
        ],
        Law: [
          "Public Law",
          "Private and Commercial Law",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Business Administration",
          "Public Administration",
          "Financial Studies",
          "Entrepreneurial Studies",
          // Add more departments as needed
        ],
        Sciences: [
          "Mathematics",
          "Biological Sciences",
          "Chemistry",
          "Physics",
          "Environmental Sciences",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Mass Communication",
          "Political Science",
          "Criminology and Security Studies",
          // Add more departments as needed
        ],
      },
    },

    "Nigeria Police Academy, Wudil": {
      faculties: {
        Law: [
          "Department of Law",
          "Department of Criminology",
          // Add more departments as needed
        ],
        "Social and Management Sciences": [
          "Department of Accounting",
          "Department of Management Studies",
          "Department of Sociology",
          "Department of Political Science",
          "Department of Psychology",
          "Department of Social Work",
          // Add more departments as needed
        ],
        Humanities: [
          "Department of English",
          "Department of History and International Studies",
          "Department of Linguistics",
          "Department of French",
          "Department of Hausa",
          "Department of Igbo",
          "Department of Yoruba",
          // Add more departments as needed
        ],
        Science: [
          "Department of Biology",
          "Department of Chemistry",
          "Department of Computer Science",
          "Department of Mathematics",
          "Department of Physics",
          "Department of Biochemistry",
          // Add more departments as needed
        ],
        "Basic Medical Science": [
          "Department of Forensic Science",
          // Add more departments as needed
        ],
        "Engineering and Technology": [
          "Department of Electrical Engineering",
          "Department of Mechanical Engineering",
          "Department of Civil Engineering",
          // Add more departments as needed
        ],
        "Environmental Studies": [
          "Department of Geography and Environmental Management",
          // Add more departments as needed
        ],
      },
    },

    "Nigerian Defence Academy, Kaduna": {
      faculties: {
        Engineering: [
          "Civil Engineering",
          "Electrical and Electronic Engineering",
          "Mechanical Engineering",
          "Mechatronic Engineering",
          // Add more departments as needed
        ],
        Science: [
          "Biological Sciences",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Physics",
          // Add more departments as needed
        ],
        "Arts and Social Sciences": [
          "Accounting",
          "Economics",
          "Geography",
          "History & War Studies",
          "Political Science and Defence Studies",
          "Psychology",
          // Add more departments as needed
        ],
        "Military Science and Interdisciplinary Studies": [
          "Intelligence and Cyber Security Studies",
          "Logistics and Supply Chain Management",
          "Military Science",
          // Add more departments as needed
        ],
        "Management Sciences": [
          // Departments under Management Sciences (if available)
          // Add more departments as needed
        ],
      },
    },

    "Nnamdi Azikiwe University, Awka": {
      faculties: {
        Agriculture: [
          "Agricultural Economics and Extension",
          "Animal Science and Production",
          "Crop Science and Horticulture",
          "Fisheries and Aquaculture",
          "Food Science and Technology",
          "Forestry and Wildlife Management",
          "Soil Science and Land Resources Management",
          // Add more departments as needed
        ],
        Arts: [
          "English Language and Literature",
          "History and International Studies",
          "Linguistics",
          "Modern European Languages",
          "Music",
          "Philosophy",
          "Religion and Human Relations",
          "Theatre and Film Studies",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          "Physiology",
          "Medical Biochemistry",
          // Add more departments as needed
        ],
        Biosciences: [
          "Applied Microbiology and Brewing",
          "Biochemistry",
          "Botany",
          "Parasitology and Entomology",
          "Zoology",
          // Add more departments as needed
        ],
        Education: [
          "Adult Education",
          "Guidance and Counselling",
          "Science Education",
          "Early Childhood and Primary Education",
          "Human Kinetics and Health Education",
          // Add more departments as needed
        ],
        Engineering: [
          "Agricultural and Bioresources Engineering",
          "Chemical Engineering",
          "Civil Engineering",
          "Electrical Engineering",
          "Electronics and Computer Engineering",
          "Industrial and Production Engineering",
          "Mechanical Engineering",
          "Metallurgical and Materials Engineering",
          "Polymer and Textile Engineering",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Architecture",
          "Building",
          "Environmental Management",
          "Estate Management",
          "Fine and Applied Arts",
          "Geography and Meteorology",
          "Quantity Surveying",
          "Surveying and Geoinformatics",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "Health Sciences and Technology": [
          "Medical Laboratory Science",
          "Medical Radiography and Radiological Science",
          "Nursing Science",
          "Optometry",
          "Physiotherapy",
          // Add more departments as needed
        ],
        Law: [
          "Public and Private Law",
          "International Law and Jurisprudence",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accountancy",
          "Banking and Finance",
          "Business Administration",
          "Cooperative Economics and Management",
          "Marketing",
          "Public Administration",
          // Add more departments as needed
        ],
        Medicine: [
          "Medicine and Surgery",
          "Community Medicine",
          "Pharmacology and Therapeutics",
          "Pathology",
          "Pediatrics",
          // Add more departments as needed
        ],
        "Pharmaceutical Sciences": [
          "Clinical Pharmacy and Pharmacy Management",
          "Pharmaceutical and Medicinal Chemistry",
          "Pharmaceutics",
          "Pharmacognosy and Traditional Medicine",
          "Pharmacology and Toxicology",
          // Add more departments as needed
        ],
        "Physical Sciences": [
          "Computer Science",
          "Geological Sciences",
          "Mathematics",
          "Physics and Industrial Physics",
          "Pure and Industrial Chemistry",
          "Statistics",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Mass Communication",
          "Political Science",
          "Psychology",
          "Sociology",
          // Add more departments as needed
        ],
      },
    },

    "Obafemi Awolowo University, Ile-Ife": {
      faculties: {
        "Faculty of Agriculture": [
          "Agricultural Economics",
          "Animal Sciences",
          "Crop Production & Protection",
          "Soil Science and Land Resources Management",
          "Family, Nutrition & Consumer Sciences",
          "Agricultural Extension and Rural Development",
          // Add more departments as needed
        ],
        "Faculty of Arts": [
          "Dramatic Arts",
          "English",
          "Foreign Languages",
          "History",
          "Linguistics and African Languages",
          "Music",
          "Philosophy",
          "Religious Studies",
          // Add more departments as needed
        ],
        "Faculty of Basic Medical Sciences": [
          "Anatomy and Cell Biology",
          "Medical Biochemistry",
          "Physiological Sciences",
          "Medical Pharmacology and Therapeutics",
          "Chemical Pathology",
          "Haematology and Immunology",
          "Medical Microbiology and Parasitology",
          "Morbid Anatomy and Forensic Medicine",
          "Nursing Science",
          "Medical Rehabilitation",
          // Add more departments as needed
        ],
        "Faculty of Clinical Sciences": [
          "Anaesthesia",
          "Community Health",
          "Dermatology and Venerology",
          "Medicine",
          "Mental Health",
          "Obstetrics, Gynaecology and Perinatology",
          "Ophthalmology",
          "Orthopaedics and Traumatology",
          "Paediatrics and Child Health",
          "Radiology",
          "Surgery",
          // Add more departments as needed
        ],
        "Faculty of Dentistry": [
          "Child Dental Health",
          "Oral and Maxillofacial Surgery and Oral Pathology",
          "Preventive and Community Dentistry",
          "Restorative Dentistry",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Educational Foundations and Counselling",
          "Arts and Social Sciences Education",
          "Science and Technology Education",
          "Educational Management",
          "Physical and Health Education",
          "Adult Education and Lifelong Learning",
          "Education Technology and Library Studies",
          // Add more departments as needed
        ],
        "Faculty of Environmental Design and Management": [
          "Fine and Applied Arts",
          "Architecture",
          "Building",
          "Estate Management",
          "Quantity Surveying",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "Faculty of Technology": [
          "Agricultural and Environmental Engineering",
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Science and Engineering",
          "Electronic and Electrical Engineering",
          "Food Science and Technology",
          "Mechanical Engineering",
          "Materials Science and Engineering",
          // Add more departments as needed
        ],
        "Faculty of Science": [
          "Biochemistry",
          "Botany",
          "Chemistry",
          "Geology and Applied Geophysics",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Statistics",
          "Zoology",
          // Add more departments as needed
        ],
        // Additional faculties and departments can be added here as needed
      },
    },

    "University of Abuja, Gwagwalada": {
      faculties: {
        Agriculture: [
          "Crop Science",
          "Animal Science",
          "Agricultural Economics and Extension",
          "Soil Science",
          "Food and Nutrition Science",
          "Water Resources, Aquaculture, and Fisheries",
          // Add more departments as needed
        ],
        Engineering: [
          "Chemical Engineering",
          "Mechanical Engineering",
          "Civil Engineering",
          "Electrical Electronics Engineering",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Geography",
          "Political Science",
          "International Relations and Sociology",
          // Add more departments as needed
        ],
        Science: [
          "Biological Sciences",
          "Computer Science",
          "Chemistry",
          "Microbiology",
          "Physics",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Business Administration",
          "Accounting",
          "Banking and Finance",
          "Public Administration",
          // Add more departments as needed
        ],
        Arts: [
          "English and Literary Studies",
          "History and Diplomatic Studies",
          "Linguistics",
          "Philosophy",
          "Theatre Arts",
          "Christian Religious Studies",
          "Islamic Studies",
          // Add more departments as needed
        ],
        Law: [
          "Private Law",
          "Public Law",
          // Add more departments as needed
        ],
        Education: [
          "Arts and Social Science Education",
          "Educational Foundations",
          "Educational Management",
          "Guidance & Counselling Psychology",
          "Library and Information Science",
          "Science & Environmental Education",
          // Add more departments as needed
        ],
        "Health Sciences": [
          "Medicine and Surgery",
          // Add more departments as needed
        ],
      },
    },

    "University of Agriculture, Abeokuta": {
      faculties: {
        "College Of Management Sciences (COLMAS)": [
          "Accounting",
          "Banking and Finance",
          "Business Enterprise Management",
          "Economics",
          "Entrepreneurial Studies",
          // Add more departments as needed
        ],
        "College Of Environmental Resources Management (COLERM)": [
          "Aquaculture and Fisheries Management",
          "Environmental Management and Toxicology",
          "Forestry and Wildlife Management",
          "Water Resources Management and Agrometeorology",
          // Add more departments as needed
        ],
        "College Of Animal Science & Livestock Production (COLANIM)": [
          "Animal Breeding and Genetics",
          "Animal Physiology",
          "Animal Production and Health",
          "Pasture and Range Management",
          // Add more departments as needed
        ],
        "College Of Agricultural Management & Rural Development (COLAMRUD)": [
          "Agricultural Economics and Farm Management",
          "Agricultural Extension and Rural Development",
          "Agricultural Administration",
          "Communication and General Studies",
          // Add more departments as needed
        ],
        "College Of Plant Science & Crop Production (COLPLANT)": [
          "Crop Protection",
          "Horticulture",
          "Plant Breeding and Seed Technology",
          "Plant Physiology and Crop Production",
          "Soil Science and Land Management",
          // Add more departments as needed
        ],
        "College Of Biological Sciences (COLBIOS)": [
          "Biochemistry",
          "Microbiology",
          "Applied Zoology",
          "Applied Botany",
          // Add more departments as needed
        ],
        "College Of Food Science & Human Ecology (COLFHEC)": [
          "Food Science and Technology",
          "Home Science and Management",
          "Nutrition and Dietetics",
          "Foodservice and Tourism",
          // Add more departments as needed
        ],
        "College Of Veterinary Medicine (COLVET)": [
          "Veterinary Anatomy",
          "Veterinary Physiology & Pharmacology",
          "Veterinary Pathology",
          "Veterinary Microbiology & Parasitology",
          "Veterinary Medicine & Surgery",
          "Veterinary Public Health & Reproduction",
          // Add more departments as needed
        ],
        "College Of Engineering (COLENG)": [
          "Agricultural Engineering",
          "Civil Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "College Of Physical Sciences (COLPHY)": [
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Physics",
          "Statistics",
          // Add more departments as needed
        ],
      },
    },

    "University of Agriculture, Makurdi": {
      faculties: {
        Agronomy: [
          "Crop Production",
          "Soil Science",
          "Plant Breeding and Seed Science",
          "Crop and Environmental Protection",
          // Add more departments as needed
        ],
        "Animal Science": [
          "Animal Breeding and Physiology",
          "Animal Nutrition",
          "Animal Production",
          // Add more departments as needed
        ],
        "Agricultural Economics & Extension": [
          "Agricultural Economics",
          "Agricultural Extension and Communication",
          "Agricultural Business and Financial Management",
          // Add more departments as needed
        ],
        "Agricultural & Science Education": [
          "Education and Biology",
          "Education and Chemistry",
          "Education and Physics",
          "Education and Integrated Science",
          // Add more departments as needed
        ],
        Engineering: [
          "Agricultural Engineering",
          "Civil Engineering",
          "Electrical/Electronic Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "Food Technology": [
          "Food Science and Technology",
          "Home Science and Management",
          // Add more departments as needed
        ],
        "Forestry & Fisheries": [
          "Fisheries and Aquaculture",
          "Forestry",
          "Wildlife and Range Management",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Business Management",
          "Agricultural Economics and Farm Management",
          // Add more departments as needed
        ],
        Science: [
          "Biochemistry",
          "Botany",
          "Microbiology",
          "Chemistry",
          "Physics",
          "Mathematics/Statistics",
          // Add more departments as needed
        ],
        "Veterinary Medicine": [
          "Veterinary Anatomy",
          "Veterinary Medicine",
          "Veterinary Microbiology",
          // Add more departments as needed
        ],
      },
    },

    "University of Benin, Benin City": {
      faculties: {
        Agriculture: [
          "Agricultural Economics & Extension Services",
          "Animal Science",
          "Crop Science",
          "Fisheries",
          "Forestry & Wildlife",
          "Soil Science",
          // Add more departments as needed
        ],
        Arts: [
          "English and Literature",
          "Fine and Applied Arts",
          "Foreign Languages",
          "History and International Studies",
          "Linguistics",
          "Philosophy",
          "Religious Studies",
          "Theatre Arts",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          "Medical Biochemistry",
          "Nursing Science",
          "Physiology",
          // Add more departments as needed
        ],
        Engineering: [
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Engineering",
          "Electrical/Electronics Engineering",
          "Mechanical Engineering",
          "Petroleum Engineering",
          "Production Engineering",
          "Structural Engineering",
          "Marine Engineering",
          "Metallurgical and Materials Engineering",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Architecture",
          "Estate Management",
          "Fine Arts",
          "Quantity Surveying",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        Law: [
          "Private and Property Law",
          "Public Law",
          "Commercial and Industrial Law",
          // Add more departments as needed
        ],
        "Life Sciences": [
          "Biochemistry",
          "Botany",
          "Microbiology",
          "Zoology",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Insurance",
          "Marketing",
          "Public Administration",
          // Add more departments as needed
        ],
        Pharmacy: [
          "Clinical Pharmacy & Pharmacy Practice",
          "Pharmaceutical Chemistry",
          "Pharmaceutical Microbiology & Biotechnology",
          "Pharmaceutics & Pharmaceutical Technology",
          "Pharmacognosy",
          "Pharmacology & Toxicology",
          // Add more departments as needed
        ],
        "Physical Sciences": [
          "Chemistry",
          "Computer Science",
          "Geology",
          "Mathematics",
          "Physics",
          "Statistics",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Geography and Regional Planning",
          "Political Science and Public Administration",
          "Sociology and Anthropology",
          // Add more departments as needed
        ],
        Education: [
          "Adult and Non-Formal Education",
          "Curriculum and Instructional Technology",
          "Educational Management",
          "Educational Psychology",
          "Health, Safety, and Environmental Education",
          "Human Kinetics and Sports Science",
          "Library and Information Science",
          "Vocation and Technical Education",
          // Add more departments as needed
        ],
        Dentistry: [
          "Oral and Maxillofacial Surgery",
          "Child Dental Health",
          "Preventive Dentistry",
          "Restorative Dentistry",
          // Add more departments as needed
        ],
        Medicine: [
          "Anaesthesia",
          "Community Health",
          "Medicine",
          "Obstetrics and Gynecology",
          "Ophthalmology",
          "Paediatrics",
          "Pathology",
          "Psychiatry",
          "Radiology",
          "Surgery",
          // Add more departments as needed
        ],
      },
    },

    "University of Calabar, Calabar": {
      faculties: {
        "Agriculture, Forestry & Wildlife Resource Management": [
          "Agricultural Economics",
          "Agricultural Extension and Rural Sociology",
          "Animal Science",
          "Crop Science",
          "Forestry and Wildlife Resources Management",
          "Soil Science",
          // Add more departments as needed
        ],
        "Allied Medical Sciences": [
          "Nursing Science",
          "Medical Laboratory Science",
          "Radiography and Radiological Science",
          "Physiotherapy",
          "Public Health",
          // Add more departments as needed
        ],
        Arts: [
          "English and Literary Studies",
          "History and International Studies",
          "Linguistics and Nigerian Languages",
          "Philosophy",
          "Religious and Cultural Studies",
          "Theatre and Media Studies",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          "Biochemistry",
          "Human Physiology",
          "Pharmacology",
          "Pathology",
          // Add more departments as needed
        ],
        "Biological Sciences": [
          "Botany",
          "Genetics and Biotechnology",
          "Microbiology",
          "Zoology and Environmental Biology",
          "Science Laboratory Technology",
          // Add more departments as needed
        ],
        "Clinical Sciences": [
          "Medicine and Surgery",
          "Community Medicine",
          "Obstetrics and Gynecology",
          "Pediatrics",
          "Radiology",
          // Add more departments as needed
        ],
        Education: [
          "Arts and Social Science Education",
          "Curriculum and Teaching",
          "Educational Administration and Planning",
          "Library and Information Science",
          "Science Education",
          // Add more departments as needed
        ],
        "Engineering & Technology": [
          "Civil Engineering",
          "Electrical/Electronic Engineering",
          "Mechanical Engineering",
          "Petroleum Engineering",
          "Chemical Engineering",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Architecture",
          "Estate Management",
          "Geography and Environmental Science",
          "Urban and Regional Planning",
          "Quantity Surveying",
          // Add more departments as needed
        ],
        Law: [
          "Commercial and Industrial Law",
          "Private and Property Law",
          "Public and International Law",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Management",
          "Marketing",
          "Public Administration",
          // Add more departments as needed
        ],
        Oceanography: [
          "Fisheries and Aquaculture",
          "Marine Science",
          // Add more departments as needed
        ],
        Pharmacy: [
          "Clinical Pharmacy and Pharmacy Management",
          "Pharmaceutical Chemistry",
          "Pharmacognosy and Herbal Medicine",
          "Pharmaceutics and Pharmaceutical Technology",
          // Add more departments as needed
        ],
        "Physical Sciences": [
          "Computer Science",
          "Mathematics",
          "Physics",
          "Statistics",
          "Pure and Applied Chemistry",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Political Science",
          "Sociology",
          "Social Work",
          "Tourism Studies",
          // Add more departments as needed
        ],
      },
    },

    "University of Ibadan, Ibadan": {
      faculties: {
        "Agriculture and Forestry": [
          "Agricultural Economics",
          "Agronomy",
          "Forest Resources Management",
          "Aquaculture and Fisheries Management",
          "Social and Environmental Forestry",
          "Wildlife and Ecotourism Management",
          // Add more departments as needed
        ],
        Arts: [
          "Arabic and Islamic Studies",
          "Communication and Language Arts",
          "European Studies",
          "History",
          "Philosophy",
          "Religious Studies",
          "Theatre Arts",
          // Add more departments as needed
        ],
        "College of Medicine": [
          "Biochemistry",
          "Epidemiology, Medical Statistics, and Environmental Health",
          "Health Policy and Management",
          "Medicine",
          "Obstetrics and Gynaecology",
          "Physiology",
          "Psychiatry",
          // Add more departments as needed
        ],
        Education: [
          "Adult Education",
          "Guidance and Counselling",
          "Human Kinetics and Health Education",
          "Teacher Education",
          // Add more departments as needed
        ],
        Pharmacy: [
          "Clinical Pharmacy and Pharmacy Administration",
          "Pharmaceutical Chemistry",
          "Pharmaceutics and Industrial Pharmacy",
          "Pharmacognosy",
          "Pharmacology and Toxicology",
          // Add more departments as needed
        ],
        Science: [
          "Botany",
          "Chemistry",
          "Geology",
          "Microbiology",
          "Physics",
          "Zoology",
          "Statistics",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Geography",
          "Political Science",
          "Psychology",
          "Sociology",
          // Add more departments as needed
        ],
        Technology: [
          "Agricultural and Environmental Engineering",
          "Civil Engineering",
          "Electrical and Electronics Engineering",
          "Food Technology",
          "Industrial and Production Engineering",
          "Mechanical Engineering",
          "Petroleum Engineering",
          "Wood Products Engineering",
          // Add more departments as needed
        ],
        "Veterinary Medicine": [
          "Veterinary Anatomy",
          "Veterinary Medicine",
          "Veterinary Pathology",
          "Veterinary Public Health and Preventive Medicine",
          "Veterinary Surgery and Radiology",
          // Add more departments as needed
        ],
        // Add additional faculties and departments as needed
      },
    },

    "University of Ilorin, Ilorin": {
      faculties: {
        Agriculture: [
          "Agricultural Economics and Farm Management",
          "Agricultural Extension and Rural Development",
          "Agronomy",
          "Animal Production",
          "Aquaculture and Fisheries",
          "Crop Protection",
          "Forest Resources Management",
          "Home Economics and Food Science",
          // Add more departments as needed
        ],
        Arts: [
          "Arabic",
          "English",
          "French",
          "History and International Studies",
          "Linguistics and Nigerian Languages",
          "Performing Arts",
          "Religions",
          "Yoruba",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          "Physiology",
          "Nursing Science",
          // Add more departments as needed
        ],
        "Clinical Sciences": [
          "Anaesthesia",
          "Behavioural Sciences",
          "Epidemiology and Community Medicine",
          "Family Medicine",
          "Medicine",
          "Nursing",
          "Obstetrics and Gynaecology",
          "Ophthalmology",
          "Otorhinolaryngology (ORL)",
          "Paediatrics",
          "Radiology",
          "Surgery",
          // Add more departments as needed
        ],
        "Communication and Information Sciences": [
          "Computer Science",
          "Information and Communication Science",
          "Library and Information Science",
          "Mass Communication",
          "Telecommunication Science",
          // Add more departments as needed
        ],
        Education: [
          "Adult and Primary Education",
          "Arts Education",
          "Counsellor Education",
          "Educational Management",
          "Educational Technology",
          "Health Promotion and Environmental Health Education",
          "Human Kinetics Education",
          "Science Education",
          "Social Sciences Education",
          // Add more departments as needed
        ],
        "Engineering and Technology": [
          "Agricultural and Biosystems Engineering",
          "Biomedical Engineering",
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Engineering",
          "Electrical and Electronics Engineering",
          "Food Engineering",
          "Materials Engineering",
          "Mechanical Engineering",
          "Water Resources and Environmental Engineering",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Architecture",
          "Estate Management",
          "Quantity Surveying",
          "Surveying and Geoinformatics",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        Law: [
          "Common Law",
          "Common and Islamic Law",
          // Add more departments as needed
        ],
        "Life Sciences": [
          "Biochemistry",
          "Microbiology",
          "Plant Biology",
          "Zoology",
          "Optometry and Vision Science",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Business Administration",
          "Finance",
          "Industrial Relations and Personnel Management",
          "Marketing",
          "Public Administration",
          // Add more departments as needed
        ],
        "Pharmaceutical Sciences": [
          "Clinical Pharmacy",
          "Pharmaceutical and Medicinal Chemistry",
          "Pharmaceutical Microbiology and Biotechnology",
          "Pharmaceutics and Industrial Pharmacy",
          "Pharmacognosy and Drug Development",
          "Pharmacology and Toxicology",
          // Add more departments as needed
        ],
        "Physical Sciences": [
          "Chemistry",
          "Geology",
          "Geophysics",
          "Industrial Chemistry",
          "Mathematics",
          "Physics",
          "Statistics",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Criminology and Security Studies",
          "Economics",
          "Geography and Environmental Management",
          "Political Science",
          "Psychology",
          "Social Work",
          "Sociology",
          // Add more departments as needed
        ],
        "Veterinary Medicine": [
          "Veterinary Anatomy",
          "Veterinary Medicine",
          "Veterinary Microbiology",
          "Veterinary Parasitology and Entomology",
          "Veterinary Pathology",
          "Veterinary Pharmacology and Toxicology",
          "Veterinary Physiology and Biochemistry",
          "Veterinary Public Health and Preventive Medicine",
          "Veterinary Surgery and Radiology",
          "Theriogenology and Production",
          // Add more departments as needed
        ],
      },
    },

    "University of Jos, Jos": {
      faculties: {
        Agriculture: [
          "Agricultural Economics and Extension",
          "Animal Production",
          "Crop Production",
          // Add more departments as needed
        ],
        Arts: [
          "English Language",
          "History and International Studies",
          "Religious Studies",
          "Linguistics and Nigerian Languages",
          "Theatre and Film Studies",
          // Add more departments as needed
        ],
        Education: [
          "Arts Education",
          "Educational Administration and Planning",
          "Science and Technology Education",
          "Social Science Education",
          "Special Education and Rehabilitation Sciences",
          // Add more departments as needed
        ],
        Engineering: [
          "Civil Engineering",
          "Electrical/Electronics Engineering",
          "Mechanical Engineering",
          "Mining Engineering",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Architecture",
          "Building",
          "Estate Management",
          "Geography and Planning",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        Law: [
          "Commercial Law",
          "Public Law",
          "Private Law",
          "International Law and Jurisprudence",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Business Administration",
          "Banking and Finance",
          "Insurance",
          "Marketing",
          // Add more departments as needed
        ],
        "Natural Sciences": [
          "Biochemistry",
          "Chemistry",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Zoology",
          "Geology and Mining",
          "Plant Science and Biotechnology",
          // Add more departments as needed
        ],
        "Pharmaceutical Sciences": [
          "Clinical Pharmacy and Pharmacy Practice",
          "Pharmaceutical Chemistry",
          "Pharmaceutical Microbiology",
          "Pharmaceutics and Pharmaceutical Technology",
          "Pharmacology and Toxicology",
          "Pharmacognosy",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Political Science",
          "Psychology",
          "Sociology",
          "Criminology and Security Studies",
          // Add more departments as needed
        ],
        "Veterinary Medicine": [
          "Veterinary Anatomy",
          "Veterinary Physiology",
          "Veterinary Pathology and Microbiology",
          "Veterinary Pharmacology and Toxicology",
          // Add more departments as needed
        ],
        "Health Sciences": [
          "Medicine and Surgery",
          "Medical Laboratory Science",
          "Nursing Science",
          "Dentistry and Dental Surgery",
          "Anatomy",
          "Physiology",
          // Add more departments as needed
        ],
      },
    },

    "University of Lagos, Lagos": {
      faculties: {
        Arts: [
          "Linguistics",
          "Philosophy",
          "Creative Arts",
          "English",
          "History and Strategic Studies",
          "European Languages and Integration Studies",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          "Anatomic and Molecular Pathology",
          "Biochemistry",
          "Medical Laboratory Science",
          "Microbiology and Parasitology",
          "Pharmacology, Therapeutics and Toxicology",
          "Physiology",
          // Add more departments as needed
        ],
        Engineering: [
          "Chemical Engineering",
          "Civil and Environmental Engineering",
          "Electrical & Electronics Engineering",
          "Mechanical Engineering",
          "System Engineering",
          "Surveying and Geo-informatics",
          "Metallurgical and Materials Engineering",
          // Add more departments as needed
        ],
        "Environmental Science": [
          "Architecture",
          "Building",
          "Estate Management",
          "Quantity Surveying",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        Law: [
          "Commercial and Industrial Law",
          "Jurisprudence and International Law",
          "Private and Property Law",
          "Public Law",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Actuarial Science and Insurance",
          "Banking and Finance",
          "Business Administration",
          "Industrial Relations & Personnel Management",
          // Add more departments as needed
        ],
        "Clinical Sciences": [
          "Medicine and Surgery",
          "Radiology",
          "Nursing",
          "Obstetrics and Gynecology",
          "Ophthalmology",
          "Pediatrics",
          "Psychiatry",
          // Add more departments as needed
        ],
        "Dental Sciences": [
          "Oral and Maxillofacial Surgery",
          "Preventive Dentistry",
          "Restorative Dentistry",
          "Child Dental Health",
          // Add more departments as needed
        ],
        Education: [
          "Adult Education",
          "Early Childhood Education",
          "Education Management",
          "Human Kinetics Education",
          "Arts and Social Science Education",
          "Science and Technology Education",
          // Add more departments as needed
        ],
        Science: [
          "Biochemistry",
          "Botany",
          "Cell Biology & Genetics",
          "Chemistry",
          "Computer Science",
          "Geoscience",
          "Marine Sciences",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Zoology",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Geography",
          "Mass Communication",
          "Political Science",
          "Psychology",
          "Social Work",
          "Sociology",
          // Add more departments as needed
        ],
        Pharmacy: [
          "Pharmacognosy",
          "Pharmacology",
          "Clinical Pharmacy",
          "Pharmaceutical Chemistry",
          "Pharmaceutical Microbiology",
          // Add more departments as needed
        ],
      },
    },

    "University of Maiduguri, Maiduguri": {
      faculties: {
        "Agricultural Science": [
          "Agriculture",
          "Fisheries",
          "Forestry and Wildlife",
          "Animal Science",
          // Add more departments as needed
        ],
        "Allied Health Science": [
          "Physiotherapy",
          "Radiography",
          "Nursing Sciences",
          "Medical Laboratory Science",
          // Add more departments as needed
        ],
        Arts: [
          "Arabic Studies",
          "English",
          "French",
          "Fulfulde",
          "Hausa",
          "History",
          "Islamic Studies",
          "Kanuri",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          // Add more departments as needed
        ],
        Dentistry: [
          "Dental Surgery",
          // Add more departments as needed
        ],
        Education: [
          "Adult Education",
          "Agricultural Education",
          "Arabic Education",
          "Biology Education",
          "Business Education",
          "Chemistry Education",
          "Economics Education",
          "English Education",
          "Geography Education",
          "Hausa Education",
          "Health Education",
          "History Education",
          "Islamic Studies Education",
          "Mathematics Education",
          "Physical Education",
          "Physics Education",
          "Library and Information Science",
          // Add more departments as needed
        ],
        Engineering: [
          "Agric. and Environmental Resources Engineering",
          "Civil and Water Resources Engineering",
          "Chemical Engineering",
          "Computer Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        Law: [
          "Law",
          "Sharia Law",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Marketing",
          "Public Administration",
          // Add more departments as needed
        ],
        Pharmacy: [
          "Pharmacy",
          // Add more departments as needed
        ],
        Science: [
          "Biochemistry",
          "Botany",
          "Chemistry",
          "Computer Science",
          "Environmental Biology",
          "Geology",
          "Industrial Chemistry",
          "Mathematics",
          "Microbiology",
          "Petroleum Chemistry",
          "Physics",
          "Statistics",
          "Zoology",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Geography",
          "Mass Communication",
          "Political Science",
          "Sociology and Anthropology",
          // Add more departments as needed
        ],
        "Veterinary Medicine": [
          "Veterinary Medicine",
          // Add more departments as needed
        ],
      },
    },

    "University of Nigeria, Nsukka": {
      faculties: {
        Agriculture: [
          "Agricultural Economics",
          "Agricultural Extension",
          "Animal Science",
          "Soil Science",
          "Nutrition and Dietetics",
          "Home Science and Management",
          "Food Science and Technology",
          "Crop Science",
          // Add more departments as needed
        ],
        Arts: [
          "Archaeology and Tourism",
          "English and Literary Studies",
          "Fine and Applied Arts",
          "Foreign Languages and Literature",
          "History and International Studies",
          "Linguistics, Igbo and Other Nigerian Languages",
          "Mass Communication",
          "Music",
          "Theatre and Film Studies",
          // Add more departments as needed
        ],
        "Biological Sciences": [
          "Biochemistry",
          "Microbiology",
          "Plant Science and Biotechnology",
          "Zoology and Environmental Biology",
          // Add more departments as needed
        ],
        Education: [
          "Adult Education",
          "Arts Education",
          "Computer Education",
          "Educational Foundations",
          "Library and Information Science",
          "Human Kinetics and Health Education",
          "Science Education",
          "Social Science Education",
          // Add more departments as needed
        ],
        Engineering: [
          "Agricultural and Bioresources Engineering",
          "Civil Engineering",
          "Electrical Engineering",
          "Electronics Engineering",
          "Mechanical Engineering",
          "Metallurgical and Materials Engineering",
          "Water Resources and Environmental Engineering",
          // Add more departments as needed
        ],
        "Environmental Studies": [
          "Architecture",
          "Estate Management",
          "Geoinformatics and Surveying",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        Law: [
          "Public and Private Law",
          "International Law and Jurisprudence",
          // Add more departments as needed
        ],
        Medicine: [
          "Anatomy",
          "Medical Biochemistry",
          "Pharmacology and Therapeutics",
          "Physiology",
          "Surgery",
          "Medicine",
          "Obstetrics and Gynecology",
          "Pediatrics",
          "Psychiatry",
          "Radiology",
          // Add more departments as needed
        ],
        "Pharmaceutical Sciences": [
          "Pharmaceutical and Medicinal Chemistry",
          "Pharmacology and Toxicology",
          "Pharmaceutics",
          "Clinical Pharmacy and Pharmacy Management",
          // Add more departments as needed
        ],
        "Physical Sciences": [
          "Computer Science",
          "Geology",
          "Mathematics",
          "Physics and Astronomy",
          "Pure and Industrial Chemistry",
          "Statistics",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Geography",
          "Philosophy",
          "Political Science",
          "Psychology",
          "Public Administration and Local Government",
          "Religion",
          "Social Work",
          "Sociology and Anthropology",
          // Add more departments as needed
        ],
        "Veterinary Medicine": [
          "Veterinary Anatomy",
          "Veterinary Medicine",
          "Veterinary Surgery and Radiology",
          "Veterinary Pathology and Microbiology",
          "Veterinary Public Health and Preventive Medicine",
          // Add more departments as needed
        ],
        "Vocational Technical Education": [
          "Agricultural Education",
          "Business Education",
          "Home Economics Education",
          "Industrial Technical Education",
          // Add more departments as needed
        ],
      },
    },

    "University of Port Harcourt, Port Harcourt": {
      faculties: {
        Humanities: [
          "English Studies",
          "Foreign Languages and Literatures",
          "History and Diplomatic Studies",
          "Philosophy",
          "Religious and Cultural Studies",
          "Theatre and Film Studies",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Political Science",
          "Sociology",
          "Geography and Environmental Management",
          "Psychology",
          // Add more departments as needed
        ],
        Engineering: [
          "Chemical Engineering",
          "Civil and Environmental Engineering",
          "Electrical/Electronics Engineering",
          "Mechanical Engineering",
          "Petroleum Engineering",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Finance and Banking",
          "Management",
          "Marketing",
          "Hospitality Management and Tourism",
          // Add more departments as needed
        ],
        "Natural and Applied Sciences": [
          "Biochemistry",
          "Biology",
          "Chemistry",
          "Computer Science",
          "Geology",
          "Mathematics and Statistics",
          "Microbiology",
          "Physics",
          // Add more departments as needed
        ],
        "Pharmaceutical Sciences": [
          "Pharmaceutical and Medicinal Chemistry",
          "Pharmacology",
          "Pharmacy Practice",
          "Clinical Pharmacy and Management",
          // Add more departments as needed
        ],
        Education: [
          "Adult and Non-Formal Education",
          "Curriculum Studies and Educational Technology",
          "Educational Foundations",
          "Educational Management and Planning",
          "Educational Psychology, Guidance, and Counselling",
          // Add more departments as needed
        ],
        "Health Sciences": [
          "Medicine and Surgery",
          "Nursing",
          "Anatomy",
          "Physiology",
          "Medical Laboratory Science",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          "Biochemistry",
          "Physiology",
          // Add more departments as needed
        ],
        Dentistry: [
          "Oral Pathology and Oral Medicine",
          "Preventive Dentistry",
          "Restorative Dentistry",
          // Add more departments as needed
        ],
        Law: [
          "Public Law",
          "Private and Property Law",
          "Commercial and Industrial Law",
          "Jurisprudence and International Law",
          // Add more departments as needed
        ],
      },
    },

    "University of Uyo, Uyo": {
      faculties: {
        Agriculture: [
          "Agricultural Economics And Extension",
          "Home Economics",
          "Fisheries And Aquaculture",
          "Environmental Health Management",
          "Agronomy",
          "Animal Science",
          "Soil Science",
          "Forestry And Wildlife",
          "Food Science And Technology",
          "Crop Science",
          "Agro Forestry",
          // Add more departments as needed
        ],
        Arts: [
          "History And International Studies",
          "Foreign Languages",
          "Religious Cultural Studies",
          "Communication Arts",
          "Music",
          "Linguistics And Nigerian Languages",
          "French",
          "Theatre Arts",
          "English",
          "Philosophy",
          "Linguistics – Efik",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Biochemistry",
          "Physiology",
          "Anatomy",
          // Add more departments as needed
        ],
        "Business Administration": [
          "Marketing",
          "Banking And Finance",
          "Accounting",
          "Insurance",
          "Business Management",
          "Business Administration",
          // Add more departments as needed
        ],
        "Clinical Sciences": [
          "Medical Microbiology And Parasitology",
          "Community Health",
          "Orthopaedics/Traumatology",
          "Haematology",
          "Obstetrics & Gynaecology",
          "Paediatrics",
          "Ophthalmology",
          "Clinical Pharmacology And Therapeutics",
          "Medicine And Surgery",
          // Add more departments as needed
        ],
        Education: [
          "Educational Technology And Library Science",
          "Early Childhood And Special Education",
          "Vocational Education",
          "Physical And Health Education",
          "Educational Foundation",
          "Curriculum Studies Educational Management And Planning",
          "Science Education",
          "Institute Of Education",
          // Add more departments as needed
        ],
        Engineering: [
          "Chemical Engineering",
          "Mechanical Engineering",
          "Electrical/Electronics Engineering",
          "Computer Engineering",
          "Agricultural Engineering",
          "Petroleum Engineering",
          "Food Engineering",
          "Civil Engineering",
          // Add more departments as needed
        ],
        "Environmental Studies": [
          "Urban And Regional Planning",
          "Geoinformatics And Surveying",
          "Environmental Management",
          "Environmental Management And Conservation",
          "Waste Management Studies",
          "Architecture",
          "Quantity Surveying",
          "Fine And Industrial Arts",
          "Estate Management",
          // Add more departments as needed
        ],
        Law: [
          "Public Law",
          "Private Law",
          "International Law And Jurisprudence",
          // Add more departments as needed
        ],
        Pharmacy: [
          "Pharmacology And Toxicology",
          "Pharmacognosy And Natural Medicine",
          "Pharmaceutics And Pharmaceutical Technology",
          // Add more departments as needed
        ],
        Science: [
          "Zoology",
          "Botany And Ecological Studies",
          "Physics",
          "Medical Microbiology And Parasitology",
          "Computer Science",
          "Biology",
          "Brewing Science And Technology",
          "Statistics",
          "Microbiology",
          "Mathematics",
          "Chemistry",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Sociology And Anthropology",
          "Political Science And Public Administration",
          "Economics",
          "Psychology",
          "Geography And Regional Planning",
          // Add more departments as needed
        ],
        "Communication and Media Studies": [
          "Journalism",
          "Public Relations",
          "Advertising and Marketing Communications",
          "Broadcasting",
          "Film and Multimedia Studies",
          "Information and Media Studies",
          "Strategic and Corporate Communication",
          // Add more departments as needed
        ],
      },
    },

    "Usmanu Danfodiyo University, Sokoto": {
      faculties: {
        Agriculture: [
          "Agricultural Economics and Extension",
          "Animal Science",
          "Crop Science",
          "Soil Science",
          "Forestry and Fisheries",
          // Add more departments as needed
        ],
        "Arts and Islamic Studies": [
          "Arabic",
          "English",
          "French",
          "History",
          "Islamic Studies",
          "Linguistics",
          "Nigerian Languages",
          "Religious Studies",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Business Administration",
          "Public Administration",
          // Add more departments as needed
        ],
        Law: [
          "Islamic Law",
          "Public Law and Jurisprudence",
          "Private and Business Law",
          // Add more departments as needed
        ],
        Science: [
          "Biological Sciences",
          "Chemistry",
          "Geography",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Pure and Applied Chemistry",
          "Zoology",
          // Add more departments as needed
        ],
        "Education and Extension Services": [
          "Adult Education",
          "Educational Foundations",
          "Science Education",
          "Library and Information Science",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
        "Veterinary Medicine": [
          "Veterinary Anatomy",
          "Veterinary Medicine",
          "Veterinary Parasitology and Entomology",
          "Veterinary Public Health and Preventive Medicine",
          "Veterinary Surgery and Radiology",
          // Add more departments as needed
        ],
        "Pharmaceutical Sciences": [
          "Clinical Pharmacy and Pharmacy Practice",
          "Pharmaceutical and Medicinal Chemistry",
          "Pharmaceutics and Pharmaceutical Microbiology",
          "Pharmacognosy and Ethnopharmacy",
          "Pharmacology and Toxicology",
          // Add more departments as needed
        ],
        "College of Health Sciences": [
          "Anatomy",
          "Physiology",
          "Medical Laboratory Science",
          "Radiography",
          "Nursing Science",
          // Add more departments as needed
        ],
      },
    },

    "Abia State University, Uturu": {
      faculties: {
        Agriculture: [
          "Agricultural Economics/Extension",
          "Animal Science and Fisheries",
          "Crop Production/Protection",
          "Food Science and Technology",
          "Soil Science",
          // Add more departments as needed
        ],
        "Biological Sciences": [
          "Animal and Environmental Biology",
          "Biochemistry",
          "Plant Science and Biotechnology",
          "Microbiology",
          // Add more departments as needed
        ],
        "Physical Sciences": [
          "Industrial Chemistry",
          "Computer Science",
          "Mathematics",
          "Statistics",
          // Add more departments as needed
        ],
        "Business Administration": [
          "Accountancy",
          "Banking and Finance",
          "Economics",
          "Management",
          "Marketing",
          // Add more departments as needed
        ],
        Medicine: [
          "Human Anatomy",
          "Human Physiology",
          "Medical Biochemistry",
          "Community Medicine",
          "Pharmacology",
          "Pathology",
          "Pediatrics",
          "Medicine",
          "Surgery",
          "Obstetrics and Gynecology",
          // Add more departments as needed
        ],
        "Health Sciences": [
          "Medical Laboratory Science",
          "Nursing Science",
          "Optometry",
          "Public Health",
          // Add more departments as needed
        ],
        Education: [
          "Curriculum and Teaching Education",
          "Educational Administration/Planning",
          "Educational Foundations",
          "Psychological Foundations",
          "Science Education",
          "Vocational Education",
          // Add more departments as needed
        ],
        Engineering: [
          "Computer Engineering",
          "Electrical/Electronic Engineering",
          "Mechanical Engineering",
          "Information and Communication Technology",
          "Surveying and Geo-Informatics",
          // Add more departments as needed
        ],
        "Environmental Studies": [
          "Architecture",
          "Building",
          "Environmental Resource Management",
          "Estate Management",
          "Fine and Applied Arts",
          "Geography and Planning",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        Humanities: [
          "Religious Studies/Philosophy",
          "Linguistics and Communications Studies/Igbo",
          "English Language/Literature",
          "Foreign Languages and Translation Studies",
          "History and International Relations",
          // Add more departments as needed
        ],
        Law: [
          "Law",
          // Add more departments as needed
        ],
        "Social Science": [
          "Library and Information Sciences",
          "Mass Communication",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
      },
    },

    "Adamawa State University, Mubi": {
      faculties: {
        Agriculture: [
          "Agricultural Economics and Extension",
          "Animal Production",
          "Crop Science",
          "Fisheries and Aquaculture",
          // Add more departments as needed
        ],
        "Arts, Social, and Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics",
          "Marketing",
          "Mass Communication",
          "Political Science and Administration",
          "Sociology",
          // Add more departments as needed
        ],
        "Science and Science Education": [
          "Biochemistry",
          "Botany",
          "Chemistry",
          "Computer Science",
          "Geography",
          "Geology",
          "Mathematics",
          "Pure and Applied Physics",
          "Zoology",
          // Add more departments as needed
        ],
        Education: [
          "Arts and Social Science Education",
          "Educational Foundation",
          "Science Education",
          "Vocational and Technical Education",
          // Add more departments as needed
        ],
        Law: [
          "Law",
          // Add more departments as needed
        ],
      },
    },

    "Adekunle Ajasin University, Akungba": {
      faculties: {
        Administration: [
          "Accountancy/Accounting",
          "Business Administration",
          "Public Administration",
          "Transport and Planning",
          // Add more departments as needed
        ],
        "Arts and Humanities": [
          "English Studies",
          "History and International Studies",
          "Linguistics",
          "Linguistics / Yoruba",
          "Mass Communication",
          "Philosophy",
          "Religious Studies",
          "Yoruba",
          // Add more departments as needed
        ],
        Education: [
          "Adult Education",
          "Computer Education",
          "Education & Accountancy",
          "Education & Economics",
          "Education & Mathematics",
          "Education & Physics",
          "Education & Religious Studies",
          "Education & Yoruba",
          "Education and Biology",
          "Education and Chemistry",
          "Education and English Language",
          "Education and Geography",
          "Education and History",
          "Education and Integrated Science",
          "Education and Political Science",
          "Education and Social Studies",
          "Educational Management",
          "Guidance & Counselling",
          "Health Education",
          "Human Kinetics",
          "Technical Education",
          // Add more departments as needed
        ],
        "Engineering/Technology/Environmental Design and Management": [
          "Architecture",
          "Building",
          "Urban and Regional Planning",
          "Estate Management",
          "Quantity Surveying",
          // Add more departments as needed
        ],
        Law: [
          "Law",
          "Public and Private International Law",
          // Add more departments as needed
        ],
        Science: [
          "Biochemistry",
          "Chemistry",
          "Computer Science",
          "Geology",
          "Geophysics",
          "Industrial Chemistry",
          "Industrial Mathematics",
          "Mathematics",
          "Microbiology",
          "Physics with Electronics",
          "Plant Science and Biotechnology",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Geography and Planning",
          "Political Science",
          "Psychology",
          "Sociology",
          // Add more departments as needed
        ],
      },
    },

    "Akwa Ibom State University, Uyo": {
      faculties: {
        Agriculture: [
          "Agricultural Economics and Extension",
          "Animal Science",
          "Crop Science",
          "Soil Science",
          "Fisheries and Aquaculture",
          "Forestry and Wildlife Management",
          // Add more departments as needed
        ],
        Arts: [
          "English",
          "Philosophy",
          "Religious and Cultural Studies",
          "History and International Studies",
          "Performing Arts (Theatre Arts)",
          // Add more departments as needed
        ],
        "Biological Sciences": [
          "Botany",
          "Zoology",
          "Microbiology",
          // Add more departments as needed
        ],
        Education: [
          "Curriculum Studies",
          "Educational Foundations",
          "Guidance and Counseling",
          "Library and Information Science",
          "Science Education",
          // Add more departments as needed
        ],
        Engineering: [
          "Chemical/Petrochemical Engineering",
          "Civil Engineering",
          "Electrical/Electronics Engineering",
          "Marine Engineering/Naval Architecture",
          "Mechanical Engineering",
          "Agricultural Engineering",
          // Add more departments as needed
        ],
        "Physical Sciences": [
          "Chemistry",
          "Physics",
          "Mathematics/Statistics",
          "Computer Science",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Mass Communication",
          "Political Science",
          "Public Administration",
          "Sociology and Anthropology",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Business Administration",
          "Marketing",
          "Banking and Finance",
          // Add more departments as needed
        ],
      },
    },

    "Ambrose Alli University, Ekpoma": {
      faculties: {
        Agriculture: [
          "Agricultural Economics and Extension",
          "Animal Science",
          "Crop Science",
          "Soil Science",
          "Forestry and Wildlife Management",
          // Add more departments as needed
        ],
        Arts: [
          "English and Literature",
          "Fine and Applied Arts",
          "Music",
          "Theatre Arts",
          "Languages (French, German, Spanish)",
          // Add more departments as needed
        ],
        "Basic Sciences": [
          "Biochemistry",
          "Biology",
          "Botany",
          "Chemistry",
          "Geology",
          "Mathematics",
          "Physics",
          "Zoology",
          // Add more departments as needed
        ],
        "Clinical Sciences": [
          "Anatomy",
          "Human Physiology",
          "Medicine and Surgery",
          "Nursing",
          "Pharmacy",
          // Add more departments as needed
        ],
        Education: [
          "Business Education",
          "Educational Administration and Planning",
          "Guidance and Counselling",
          // Add more subject-specific education departments as needed
        ],
        "Engineering and Technology": [
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Engineering",
          "Electrical/Electronics Engineering",
          "Mechanical Engineering",
          "Petroleum Engineering",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Environmental Biology",
          "Environmental Management",
          "Fisheries and Aquaculture",
          "Geography and Regional Planning",
          // Add more departments as needed
        ],
        Law: [
          "Constitutional Law",
          "Criminal Law",
          "Commercial Law",
          "Family Law",
          "International Law",
          "Public Law",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Entrepreneurship",
          "Marketing",
          "Public Administration",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Political Science",
          "Sociology",
          "Psychology",
          "Geography",
          // Add more departments as needed
        ],
        "Veterinary Medicine": [
          "Veterinary Anatomy",
          "Veterinary Physiology",
          "Veterinary Medicine and Surgery",
          "Animal Health and Husbandry",
          // Add more departments as needed
        ],
        Humanities: [
          "History and International Studies",
          "Philosophy",
          "Religious Studies",
          "Cultural Studies",
          // Add more departments as needed
        ],
      },
    },

    "Anambra State University, Uli": {
      faculties: {
        Agriculture: [
          "Agricultural Economics & Extension",
          "Animal Science",
          "Crop Science and Horticulture",
          "Soil Science",
          // Add more departments as needed
        ],
        Arts: [
          "English",
          "Igbo Language & Linguistics",
          "Music",
          "Philosophy",
          "Religion & Society",
          "Theatre Arts",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          "Physiology",
          // Add more departments as needed
        ],
        Education: [
          "Arts and Social Science Education",
          "Business Education",
          "Education Foundation",
          "Human Kinetics",
          "Library and Information Science",
          "Science Education",
          "Technology Education",
          // Add more departments as needed
        ],
        Engineering: [
          "Chemical Engineering",
          "Civil Engineering",
          "Electrical/Electronic Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Architecture",
          "Estate Management",
          "Environmental Management",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        Law: [
          "Law",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accountancy",
          "Banking & Finance",
          "Business Administration",
          "Entrepreneurship",
          "Marketing",
          // Add more departments as needed
        ],
        Medicine: [
          "Medicine & Surgery",
          // Add more departments as needed
        ],
        "Pharmaceutical Sciences": [
          "Pharmacy",
          // Add more departments as needed
        ],
        "Physical Sciences": [
          "Computer Science",
          "Geology",
          "Industrial Physics",
          "Mathematics",
          "Pure & Industrial Chemistry",
          "Statistics",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Political Science",
          "Public Administration",
          "Mass Communication",
          // Add more departments as needed
        ],
      },
    },

    "Bauchi State University, Gadau": {
      faculties: {
        "Arts & Humanities": [
          "Arabic Studies",
          "English and Literary Studies",
          "Islamic Studies",
          "Nigerian Languages and Linguistics (Hausa)",
          // Add more departments as needed
        ],
        Education: [
          "Education & Arabic",
          "Education & Christian Religious Studies",
          "Education & Computer Science",
          "Education & Islamic Studies",
          "Education & Mathematics",
          "Education & Physics",
          "Education and Biology",
          "Education and Chemistry",
          "Education and English Language",
          "Education and Hausa",
          // Add more departments as needed
        ],
        Science: [
          "Biochemistry",
          "Botany",
          "Chemistry",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Science Laboratory Technology",
          "Zoology",
          // Add more departments as needed
        ],
        "Social Science": [
          "Economics",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Business Administration",
          "Public Administration",
          // Add more departments as needed
        ],
        Law: [
          "Law",
          // Add more departments as needed
        ],
        "Pharmaceutical Sciences": [
          "Pharmacology",
          "Physiology",
          "Public Health Technology",
          // Add more departments as needed
        ],
      },
    },

    "Benue State University, Makurdi": {
      faculties: {
        Agriculture: [
          "Agriculture",
          "Agricultural Economics",
          "Agricultural Education",
          "Agricultural Extension",
          "Animal Production",
          "Crop and Environmental Protection",
          "Fisheries and Aquaculture Technology",
          "Food Science and Technology",
          "Forestry and Wildlife Management",
          "Home Science and Management",
          "Soil Science",
          // Add more departments as needed
        ],
        Arts: [
          "English Language and Literature",
          "French",
          "History and International Studies",
          "Linguistics and Nigerian Languages",
          "Mass Communication",
          "Philosophy",
          "Religious Studies",
          // Add more departments as needed
        ],
        Education: [
          "Adult Education",
          "Agricultural Education",
          "Business Education",
          "Curriculum and Teaching",
          "Educational Foundation and Management",
          "Library and Information Science",
          "Physical and Health Education",
          "Science Education",
          "Vocational and Technical Education",
          // Add more departments as needed
        ],
        Law: [
          "Commercial Law",
          "International Law and Jurisprudence",
          "Private and Property Law",
          "Public Law",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Management",
          "Entrepreneurship",
          "Marketing",
          "Public Administration",
          "Sociology",
          // Add more departments as needed
        ],
        Science: [
          "Biochemistry",
          "Biological Sciences",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Plant Science and Biotechnology",
          "Statistics",
          "Zoology",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Geography and Environmental Management",
          "Political Science",
          "Psychology",
          "Sociology",
          "Social Work",
          // Add more departments as needed
        ],
      },
    },

    "Cross River State University of Technology, Calabar": {
      faculties: {
        "Biological Sciences": [
          "Microbiology",
          "Animal Health and Environmental Biology",
          "Plant Science and Biotechnology",
          // Add more departments as needed
        ],
        Education: [
          "Educational Management",
          "Vocational and Technical Education",
          "Human Kinetics and Health Education",
          "Educational Foundations and Administration",
          "Curriculum and Instructional Technology",
          "Library and Information Science",
          "Guidance and Counselling",
          // Add more departments as needed
        ],
        Engineering: [
          "Civil Engineering",
          "Electrical/Electronic Engineering",
          "Mechanical Engineering",
          "Wood Product Engineering",
          // Add more departments as needed
        ],
        "Communication Technology": [
          "Mass Communication",
          // Add more departments as needed
        ],
        "Environmental Science": [
          "Visual Arts and Technology",
          "Urban and Regional Planning",
          "Estate Management",
          // Add more departments as needed
        ],
        Architecture: [
          "Architecture",
          "Architectural Design",
          "Sustainable Architecture and Urban Design",
          // Add more departments as needed
        ],
        "Physical Science": [
          "Computer Science",
          "Biochemistry",
          "Chemistry",
          "Physics",
          "Mathematics",
          "Statistics",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accountancy",
          "Business Administration",
          "Marketing",
          "Hospitality and Tourism",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Human Anatomy and Forensic Anthropology",
          "Human Physiology",
          "Medical Biochemistry",
          // Add more departments as needed
        ],
        "Agriculture and Forestry": [
          "Agronomy",
          "Agricultural Economics and Extension",
          "Animal Sciences",
          "Fishery and Aquatic Sciences",
          "Forestry and Wildlife Management",
          // Add more departments as needed
        ],
      },
    },

    "Delta State University, Abraka": {
      faculties: {
        Arts: [
          "English and Literary Studies",
          "Fine and Applied Arts",
          "History and Inter-Religious Studies",
          "Linguistics",
          "Modern Languages",
          "Music",
          "Philosophy",
          "Religious Studies",
          "Theatre Arts",
          // Add more departments as needed
        ],
        Education: [
          "Educational Administration and Policy Studies",
          "Educational Foundations",
          "Human Kinetics, Recreation and Sports Science",
          "Library and Information Science",
          "Science Education",
          "Social Science Education",
          "Technical and Business Education",
          // Add more departments as needed
        ],
        Science: [
          "Animal and Environmental Biology",
          "Biochemistry",
          "Botany",
          "Chemistry",
          "Computer Science",
          "Geology",
          "Industrial Chemistry",
          "Mathematics",
          "Microbiology",
          "Physics",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Accounting and Finance",
          "Business Administration",
          "Economics",
          "Geography and Regional Planning",
          "Mass Communication",
          "Political Science",
          "Psychology",
          "Sociology",
          // Add more departments as needed
        ],
        Agriculture: [
          "Agricultural Economics and Extension",
          "Agronomy, Wildlife and Forestry",
          "Animal Science",
          "Fisheries",
          "Soil Science",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Banking & Finance",
          "Business Administration",
          "Marketing",
          // Add more departments as needed
        ],
        "Environmental Studies": [
          "Architecture",
          "Building Technology",
          "Estate Management",
          "Fine and Applied Arts",
          "Quantity Surveying",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        Law: [
          "Private and Property Law",
          "Public Law",
          "Business Law",
          // Add more departments as needed
        ],
        Engineering: [
          "Chemical Engineering",
          "Civil and Environmental Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          "Petroleum Engineering",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          "Medical Biochemistry",
          "Physiology",
          // Add more departments as needed
        ],
        "Clinical Sciences": [
          "Community Medicine",
          "Family Medicine",
          "Medicine and Surgery",
          "Nursing Science",
          // Add more departments as needed
        ],
      },
    },

    "Ebonyi State University, Abakaliki": {
      faculties: {
        "Agriculture & Natural Resources Management": [
          "Animal Science",
          "Agricultural Economics & Extension",
          "Fishery & Aqua-Culture",
          "Food Science and Technology",
          "Soil Science & Environmental Management",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          "Medical Biochemistry",
          "Physiology",
          // Add more departments as needed
        ],
        "Clinical Medicine": [
          "Medicine and Surgery",
          "Community Medicine",
          "Internal Medicine",
          "Surgery",
          "Pharmacology",
          // Add more departments as needed
        ],
        Education: [
          "Arts and Social Science Education",
          "Science and Computer Education",
          "Human Kinetic and Health Education",
          "Educational Foundations and Administration",
          "Home Economics",
          "Guidance and Counselling",
          "Technology and Vocational Education",
          // Add more departments as needed
        ],
        "Health Science & Technology": [
          "Medical Laboratory Science",
          "Nursing Science",
          "Public Health Technology",
          // Add more departments as needed
        ],
        Law: [
          "Civil Law",
          "Business Law",
          "International Law & Jurisprudence",
          "Private & Property Law",
          "Public Law",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accountancy",
          "Banking and Finance",
          "Business Management",
          "Marketing",
          "Public Administration",
          // Add more departments as needed
        ],
        Science: [
          "Biochemistry",
          "Applied Biology",
          "Applied Microbiology",
          "Biotechnology",
          "Computer Science",
          "Geology/Exploration",
          "Industrial Chemistry",
          "Industrial Mathematics & Statistics",
          "Industrial Physics",
          // Add more departments as needed
        ],
        "Social Sciences & Humanities": [
          "Economics",
          "Mass Communication",
          "Political Science",
          "Psychology",
          "Sociology and Anthropology",
          "English Language/Literature",
          "History and International Relations",
          "Philosophy and Religion",
          "Language and Linguistics",
          "Social Works",
          "Library and Information Science",
          // Add more departments as needed
        ],
      },
    },

    "Ekiti State University, Ado-Ekiti": {
      faculties: {
        "Agricultural Sciences": [
          "Agricultural Economics and Extension",
          "Animal Production & Health Sciences",
          "Crop, Horticulture and Landscape Design",
          "Soil Resources and Environmental Management",
          // Add more departments as needed
        ],
        Arts: [
          "English and Literary Studies",
          "French",
          "History and International Studies",
          "Linguistics and Nigerian Languages",
          "Philosophy",
          "Religious Studies",
          // Add more departments as needed
        ],
        Education: [
          "Adult Education",
          "Educational Management",
          "Guidance and Counselling",
          "Library and Information Science",
          "Science Education",
          "Social Science Education",
          // Add more departments as needed
        ],
        Engineering: [
          "Civil Engineering",
          "Computer Engineering",
          "Electrical/Electronic Engineering",
          "Mechanical Engineering",
          "Chemical Engineering",
          "Agricultural and Bio-Environmental Engineering",
          // Add more departments as needed
        ],
        Law: [
          "Private and Business Law",
          "Public Law",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics",
          "Entrepreneurship",
          "Industrial Relations and Personnel Management",
          // Add more departments as needed
        ],
        Science: [
          "Biochemistry",
          "Chemistry",
          "Computer Science",
          "Geology",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Plant Science and Biotechnology",
          "Zoology",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Geography and Planning Science",
          "Political Science",
          "Psychology",
          "Sociology",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          "Physiology",
          // Add more departments as needed
        ],
        "Clinical Sciences": [
          "Community Medicine",
          "Medicine and Surgery",
          "Nursing",
          "Medical Laboratory Science",
          // Add more departments as needed
        ],
      },
    },

    "Enugu State University of Science and Technology, Enugu": {
      faculties: {
        Administration: [
          "Accountancy/Accounting",
          "Business Administration",
          "Cooperative And Rural Development",
          "Insurance And Risk Management",
          "Marketing",
          "Public Administration",
          // Add more departments as needed
        ],
        Agriculture: [
          "Agric-Economics And Extension",
          "Agronomy And Ecological Management",
          "Animal Science And Fisheries Management",
          "Food Science And Technology",
          // Add more departments as needed
        ],
        Education: [
          "Adult Education",
          "Agricultural Science And Education",
          "Education & Mathematics",
          "Education And Biology",
          "Education And Chemistry",
          "Educational Administration & Supervision",
          "Educational Foundations",
          "Educational Management",
          "Guidance & Counselling",
          "Physical And Health Education",
          "Technology And Vocational Education",
          "Vocational And Technical Education",
          // Add more departments as needed
        ],
        "Engineering/Technology/Environmental": [
          "Agricultural Engineering",
          "Architecture",
          "Building Technology",
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Engineering",
          "Electrical/Electronics Engineering",
          "Estate Management",
          "Land Surveying",
          "Mechanical/Production Engineering",
          "Metallurgical And Materials Engineering",
          "Quantity Surveying",
          "Surveying And Geoinformatics",
          "Urban And Regional Planning",
          // Add more departments as needed
        ],
        Law: [
          "Law",
          // Add more departments as needed
        ],
        "Medical/Pharmaceutical/Health Sciences": [
          "Anatomy",
          "Medicine And Surgery",
          // Add more departments as needed
        ],
        Sciences: [
          "Applied Biochemistry",
          "Applied Microbiology",
          "Biochemistry",
          "Biology",
          "Computer Science",
          "Geology And Mining",
          "Industrial Chemistry",
          "Industrial Mathematics/Statistics",
          "Industrial Physics",
          "Mathematics And Statistics",
          "Microbiology",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Geography And Meteorology",
          "Mass Communication",
          "Political Science",
          "Psychology",
          "Sociology And Anthropology",
          // Add more departments as needed
        ],
      },
    },

    "Gombe State University, Gombe": {
      faculties: {
        "Arts and Social Sciences": [
          "English",
          "History",
          "Islamic Studies",
          "Christian Religious Studies",
          "Political Science",
          "Economics",
          "Sociology",
          "Geography",
          "Linguistics",
          "Literature in English",
          "Theatre Arts",
          // Add more departments as needed
        ],
        Education: [
          "Arts and Social Sciences Education",
          "Education Foundation",
          "Science Education (Biology, Physics, Computer Science)",
          "Education and English Language",
          "Education and Mathematics",
          "Education and Chemistry",
          "Education and Economics",
          "Education and Geography",
          "Education and History",
          "Education and Islamic Studies",
          // Add more departments as needed
        ],
        Law: [
          "Private Law",
          "Public Law",
          "Sharia Law",
          // Add more departments as needed
        ],
        Science: [
          "Biological Sciences",
          "Biochemistry",
          "Botany",
          "Chemistry",
          "Computer Science",
          "Geography",
          "Geology",
          "Mathematical Sciences",
          "Microbiology",
          "Physics",
          "Zoology",
          "Science Laboratory Technology",
          // Add more departments as needed
        ],
        "Medical Sciences": [
          "Human Anatomy",
          "Human Physiology",
          "Medical Biochemistry",
          "Chemical Pathology",
          "Clinical Pharmacology & Therapeutics",
          "Hematology & Blood Transfusion",
          "Histopathology",
          "Medical Microbiology & Immunology",
          "Anaesthesia",
          "E.N.T",
          "Internal Medicine",
          "Community Medicine",
          "General Surgery",
          "Paediatrics",
          "Obstetrics and Gynaecology",
          "Ophthalmology",
          "Radiology",
          // Add more departments as needed
        ],
        "Pharmaceutical Sciences": [
          "Pharmacognosy and Drug Development",
          "Pharmacology and Therapeutics",
          "Pharmaceutics and Pharmaceutical Technology",
          "Clinical Pharmacy and Pharmacy Practice",
          "Pharmaceutics and Medicinal Chemistry",
          "Pharmaceutical Microbiology",
          // Add more departments as needed
        ],
      },
    },

    "Ibrahim Badamasi Babangida University, Lapai": {
      faculties: {
        "Natural Sciences": [
          "Biochemistry",
          "Biology",
          "Chemistry",
          "Computer Science",
          "Geography",
          "Mathematics",
          "Microbiology",
          "Physics",
          // Add more departments as needed
        ],
        "Education & Arts": [
          "Counselling Psychology",
          "Continuing Education",
          "History and International Studies",
          "Human Kinetic and Health Education",
          "Science Education",
          // Add more departments as needed
        ],
        "Management & Social Sciences": [
          "Accounting",
          "Actuarial Science",
          "Business Administration",
          "Economics",
          "Political Science",
          "Public Administration",
          "Sociology",
          "Transport Management",
          // Add more departments as needed
        ],
        "Languages & Communication Studies": [
          "Arabic",
          "English",
          "French",
          "Islamic Studies",
          "Mass Communication",
          // Add more departments as needed
        ],
        Agriculture: [
          "Agricultural Economics and Extension",
          "Animal Production",
          "Crop Production",
          "Fisheries and Aquaculture",
          "Forestry and Wildlife Management",
          // Add more departments as needed
        ],
        "Applied Science and Technology": [
          "Biotechnology",
          "Food Science and Technology",
          "Geology",
          // Add more departments as needed
        ],
      },
    },

    "Ignatius Ajuru University of Education, Port Harcourt": {
      faculties: {
        Education: [
          "Curriculum Studies and Instructional Technology",
          "Educational Foundations",
          "Educational Psychology, Guidance and Counseling",
          "Library and Information Science",
          "Primary Education Studies",
          "Special Education",
          "Adult and Non-Formal Education",
          "Physical and Health Education",
          // Add more departments as needed
        ],
        Humanities: [
          "English and Communication Arts",
          "French and International Studies",
          "History and Diplomatic Studies",
          "Religious and Cultural Studies",
          "Music",
          "Fine and Applied Arts",
          "Theatre Arts",
          // Add more departments as needed
        ],
        "Natural and Applied Sciences": [
          "Biology",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Physics",
          "Integrated Science",
          "Human Kinetics",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Marketing",
          "Office and Information Management",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Political Science",
          "Sociology",
          "Geography and Environmental Studies",
          // Add more departments as needed
        ],
        "Vocational and Technical Education": [
          "Agricultural Science Education",
          "Home Economics",
          "Industrial Technical Education",
          "Business Education",
          // Add more departments as needed
        ],
      },
    },

    "Imo State University, Owerri": {
      faculties: {
        "Agriculture & Veterinary Medicine": [
          "Agricultural Economics, Extension & Rural Development",
          "Soil Science and Biotechnology",
          "Animal Science and Fisheries",
          // Add more departments as needed
        ],
        Engineering: [
          "Civil Engineering",
          "Electrical & Electronics Engineering",
          "Mechanical Engineering",
          "Agricultural Engineering",
          "Food Science and Technology",
          // Add more departments as needed
        ],
        Sciences: [
          "Biochemistry",
          "Microbiology",
          "Physics",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          // Add more departments as needed
        ],
        Humanities: [
          "English Language and Literary Studies",
          "History and International Studies",
          "Philosophy",
          "Religious Studies",
          "French",
          "Linguistics",
          // Add more departments as needed
        ],
        "Health Sciences": [
          "Medicine and Surgery",
          "Medical Laboratory Science",
          "Nursing Science",
          "Optometry",
          "Public Health",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Architecture",
          "Building",
          "Estate Management",
          "Fine and Applied Arts",
          "Geography and Environmental Management",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        Education: [
          "Curriculum Studies and Educational Technology",
          "Educational Foundations",
          "Guidance and Counselling",
          "Science Education",
          "Library and Information Science",
          "Physical and Health Education",
          // Add more departments as needed
        ],
        "Business Administration": [
          "Accounting",
          "Banking and Finance",
          "Business Management",
          "Insurance and Actuarial Science",
          "Marketing",
          "Hospitality and Tourism Management",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Political Science",
          "Psychology",
          "Sociology",
          "Mass Communication",
          // Add more departments as needed
        ],
        Law: [
          "Private and Property Law",
          "Public and International Law",
          "Commercial Law",
          "Jurisprudence and International Law",
          // Add more departments as needed
        ],
      },
    },

    "Kaduna State University, Kaduna": {
      faculties: {
        Arts: [
          "Arabic",
          "Christian Religious Studies",
          "English Language",
          "French",
          "History",
          "Islamic Studies",
          // Add more departments as needed
        ],
        Science: [
          "Biochemistry",
          "Biological Sciences",
          "Chemistry",
          "Computer Science",
          "Geography",
          "Mathematics",
          "Microbiology",
          "Physics",
          // Add more departments as needed
        ],
        "Social and Management Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Mass Communication",
          "Political Science",
          "Public Administration",
          "Sociology",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Architecture",
          "Building",
          "Environmental Management",
          "Estate Management",
          "Geography",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        Medicine: [
          "Medicine and Surgery",
          "Pharmacology",
          "Anatomy",
          "Physiology",
          // Add more departments as needed
        ],
        "Agricultural Sciences": [
          "Agricultural Economics and Extension",
          "Animal Science",
          "Crop Science",
          // Add more departments as needed
        ],
      },
    },

    "Kano University of Science and Technology, Wudil": {
      faculties: {
        "Agriculture and Agricultural Technology": [
          "Agricultural Economics and Extension",
          "Animal Science",
          "Crop Science",
          "Soil Science",
          "Food Science and Technology",
          "Fisheries and Aquaculture",
          // Add more departments as needed
        ],
        Engineering: [
          "Civil Engineering",
          "Electrical Engineering",
          "Mechanical Engineering",
          "Agricultural Engineering",
          "Mechatronics Engineering",
          "Automobile Engineering",
          "Chemical Engineering",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Architecture",
          "Urban and Regional Planning",
          "Estate Management",
          "Geography",
          "Environmental Management",
          // Add more departments as needed
        ],
        "Science and Technology Education": [
          "Science Education",
          "Educational Foundations",
          "Technology Education",
          // Add more departments as needed
        ],
        Computing: [
          "Computer Science",
          "Software Engineering",
          "Information Technology",
          // Add more departments as needed
        ],
        "Earth and Environmental Sciences": [
          "Geology",
          "Geophysics",
          "Meteorology and Climate Science",
          "Geography",
          // Add more departments as needed
        ],
        "Management and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Public Administration",
          "Economics",
          "Sociology",
          // Add more departments as needed
        ],
      },
    },

    "Kebbi State University of Science and Technology, Aliero": {
      faculties: {
        "Faculty of Agriculture": [
          "Agricultural Economics and Extension",
          "Crop Science",
          "Animal Science",
          "Fisheries and Aquaculture",
          "Forestry and Wildlife Management",
          // Add more departments as needed
        ],
        "Faculty of Engineering": [
          "Civil Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          "Computer Engineering",
          // Add more departments as needed
        ],
        "Faculty of Science": [
          "Biochemistry",
          "Biology",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Microbiology",
          "Physics",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Educational Foundations",
          "Science Education",
          "Arts and Social Science Education",
          // Add more departments as needed
        ],
        "Faculty of Environmental Science": [
          "Architecture",
          "Building",
          "Urban and Regional Planning",
          "Quantity Surveying",
          // Add more departments as needed
        ],
        "Faculty of Management Sciences": [
          "Accounting",
          "Business Administration",
          "Public Administration",
          // Add more departments as needed
        ],
      },
    },

    "Kogi State University, Anyigba": {
      faculties: {
        "Faculty of Agriculture": [
          "Agricultural Economics and Extension",
          "Animal Science",
          "Crop Production",
          "Soil Science",
          "Fisheries and Aquaculture",
          // Add more departments as needed
        ],
        "Faculty of Arts and Humanities": [
          "English Language",
          "History and International Studies",
          "Philosophy",
          "Religious Studies",
          "Theatre and Media Arts",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Educational Foundations",
          "Curriculum and Instruction",
          "Educational Psychology",
          "Science Education",
          "Arts and Social Science Education",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Public Law",
          "Private and Business Law",
          "Islamic Law",
          // Add more departments as needed
        ],
        "Faculty of Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Public Administration",
          // Add more departments as needed
        ],
        "Faculty of Medicine": [
          "Medicine and Surgery",
          "Anatomy",
          "Physiology",
          "Medical Laboratory Science",
          "Nursing Science",
          // Add more departments as needed
        ],
        "Faculty of Natural Sciences": [
          "Biochemistry",
          "Botany",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Zoology",
          // Add more departments as needed
        ],
        "Faculty of Social Sciences": [
          "Economics",
          "Geography and Planning",
          "Mass Communication",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
      },
    },

    "Kwara State University, Malete": {
      faculties: {
        "Faculty of Agriculture and Veterinary Sciences": [
          "Agricultural Economics and Extension Services",
          "Animal Production, Fisheries and Aquaculture",
          "Crop Production",
          "Food Science and Technology",
          // Add more departments as needed
        ],
        "Faculty of Administration": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Public Administration",
          // Add more departments as needed
        ],
        "Faculty of Arts": [
          "Arabic Language and Literature",
          "Christian Studies",
          "English Language",
          "History and International Studies",
          "Islamic Studies",
          "Linguistics",
          "Performing Arts",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Business Education",
          "Early Childhood Education",
          "Human Kinetics",
          "Library and Information Science",
          "Special Education",
          // Add more departments as needed
        ],
        "Faculty of Engineering": [
          "Aeronautic and Astronautical Engineering",
          "Agricultural Engineering",
          "Civil Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          "Material Science",
          // Add more departments as needed
        ],
        "Faculty of Science": [
          "Biochemistry",
          "Chemistry",
          "Computer Science",
          "Geology",
          "Industrial Chemistry",
          "Mathematics",
          "Microbiology",
          "Plant and Environmental Biology",
          "Physics",
          "Statistics",
          "Zoology",
          // Add more departments as needed
        ],
        "Faculty of Social Sciences": [
          "Mass Communication",
          "Economics",
          "Political Science",
          "Sociology",
          "Geography",
          "Hospitality and Tourism Management",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Common Law",
          "Common and Islamic Law",
          // Add more departments as needed
        ],
      },
    },

    "Ladoke Akintola University of Technology, Ogbomoso": {
      faculties: {
        "Faculty of Agricultural Sciences": [
          "Agricultural Economics",
          "Agricultural Extension and Rural Development",
          "Crop Production and Soil Science",
          "Crop and Environmental Protection",
          "Animal Nutrition and Bio-Technology",
          "Animal Production and Health",
          // Add more departments as needed
        ],
        "Faculty of Engineering and Technology": [
          "Agricultural Engineering",
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Engineering",
          "Electronic and Electrical Engineering",
          "Food Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "Faculty of Environmental Sciences": [
          "Architecture",
          "Fine and Applied Arts",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "Faculty of Pure and Applied Science": [
          "Pure and Applied Biology",
          "Pure and Applied Chemistry",
          "Pure and Applied Mathematics",
          "Pure and Applied Physics",
          "General Studies",
          "Earth Science",
          "Science Laboratory Technology",
          "Statistics",
          // Add more departments as needed
        ],
        "Faculty of Management Sciences": [
          "Management and Accounting",
          "Transport Management",
          "Marketing",
          "Economics",
          "Business Management",
          // Add more departments as needed
        ],
        "Faculty of Computing and Informatics": [
          "Computer Science",
          "Cyber Security Science",
          "Information System Science",
          // Add more departments as needed
        ],
        "Faculty of Food and Consumer Sciences": [
          "Food Science",
          "Nutrition and Dietetics",
          // Add more departments as needed
        ],
        "College of Health Sciences": [
          "Medical Microbiology and Pathology",
          "Physiology",
          "Biochemistry",
          "Medical Laboratory Science",
          "Morbid Anatomy / Histo-pathology",
          "Haematology and Blood Transfusion",
          "Chemical Pathology",
          "Community Medicine",
          "Medicine",
          "Surgery",
          "Radiology",
          "Paediatrics",
          "Obstetrics",
          "Ophthalmology",
          "Psychiatry",
          "Anaesthesia",
          "Nursing",
          // Add more departments as needed
        ],
      },
    },

    "Lagos State University, Ojo": {
      faculties: {
        Arts: [
          "English Language",
          "History and International Studies",
          "Philosophy",
          "Linguistics, African and Asian Studies",
          "Creative Arts (Music, Theatre Arts, Visual Arts)",
          "Foreign Languages (French, Portuguese)",
          "Religious Studies (Christian Religious Studies, Islamic Studies)",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Political Science",
          "Sociology",
          "Geography and Planning",
          "Psychology",
          "Social Work",
          "Public Administration",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Industrial Relations and Personnel Management",
          "Insurance",
          "Marketing",
          "Management Technology",
          // Add more departments as needed
        ],
        Law: [
          "Public Law",
          "Private and Property Law",
          "Islamic Law",
          "Jurisprudence and International Law",
          "Commercial and Industrial Law",
          // Add more departments as needed
        ],
        Science: [
          "Biochemistry",
          "Botany",
          "Chemistry",
          "Computer Science",
          "Fisheries",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Zoology",
          // Add more departments as needed
        ],
        Engineering: [
          "Chemical and Polymer Engineering",
          "Electronics and Computer Engineering",
          "Mechanical Engineering",
          "Civil Engineering",
          "Aeronautical and Astronautical Engineering",
          "Industrial and Systems Engineering",
          // Add more departments as needed
        ],
        Education: [
          "Educational Foundations",
          "Curriculum Studies",
          "Science Education (Mathematics, Physics, Chemistry, Biology)",
          "Arts and Social Science Education",
          "Educational Management",
          "Library and Information Science",
          "Physical and Health Education",
          "Technology and Vocational Education",
          // Add more departments as needed
        ],
        "Clinical Sciences": [
          "Medicine and Surgery",
          "Dentistry",
          "Nursing",
          "Pharmacology",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Physiology",
          "Anatomy",
          // Add more departments as needed
        ],
        "School of Communication": [
          "Journalism",
          "Public Relations and Advertising",
          "Broadcasting",
          // Add more departments as needed
        ],
        "School of Transport": [
          "Transport Management and Operations",
          "Logistics and Transport Studies",
          // Add more departments as needed
        ],
      },
    },

    "Nasarawa State University, Keffi": {
      faculties: {
        "Faculty of Administration": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Public Administration",
          "Entrepreneurship",
          "Taxation",
          // Add more departments as needed
        ],
        "Faculty of Arts": [
          "Arabic Studies",
          "Christian Religious Studies",
          "English Language",
          "French",
          "Hausa",
          "History",
          "Islamic Studies",
          "Languages and Linguistics",
          "Theatre Arts",
          // Add more departments as needed
        ],
        "Faculty of Social Science": [
          "Economics",
          "Mass Communication",
          "Political Science",
          "Psychology",
          "Sociology",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Chemistry",
          "Computer Science",
          "Geology",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Plant Science and Biotechnology",
          "Zoology",
          // Add more departments as needed
        ],
        "Faculty of Agriculture": [
          "Agric-Economics and Extension",
          "Agronomy",
          "Animal Science",
          "Fisheries and Aquaculture",
          "Forestry and Wildlife Management",
          // Add more departments as needed
        ],
        "Faculty of Environmental Science": [
          "Environmental Resources Management",
          "Estate Management",
          "Geography",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Educational Foundations",
          "Science Technology and Mathematics",
          "Educational Management",
          "Guidance and Counselling",
          "Special Education",
          "Social Science Education",
          "Arts and Humanities Education",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Islamic Law and Jurisprudence",
          "Public and International Law",
          "Private and Business Law",
          // Add more departments as needed
        ],
        "College of Medicine & Health Sciences": [
          "Community Health Science",
          "Health Information Management",
          // Add more departments as needed
        ],
      },
    },

    "Niger Delta University, Wilberforce Island": {
      faculties: {
        Agriculture: [
          "Agricultural Economics and Rural Sociology",
          "Crop and Soil Science",
          "Fisheries and Aquatic Studies",
          "Forestry and Wildlife Management",
          "Animal Science",
          // Add more departments as needed
        ],
        Arts: [
          "English and Literary Studies",
          "History and Diplomacy",
          "Philosophy and Religious Studies",
          "Fine and Applied Arts",
          "Theatre Arts",
          // Add more departments as needed
        ],
        "Basic Medical Sciences": [
          "Anatomy",
          "Physiology",
          "Biochemistry",
          // Add more departments as needed
        ],
        "Clinical Sciences": [
          "Community Health Medicine",
          "Internal Medicine",
          "Obstetrics and Gynaecology",
          "Paediatrics",
          "Psychiatry",
          "Surgery",
          // Add more departments as needed
        ],
        Education: [
          "Curriculum and Instruction",
          "Educational Foundations",
          "Vocational/Industrial Education",
          "Library and Information Science",
          // Add more departments as needed
        ],
        Engineering: [
          "Agricultural Engineering",
          "Chemical/Petroleum Engineering",
          "Civil Engineering",
          "Electrical/Electronic Engineering",
          "Marine Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "Environmental Sciences": [
          "Architecture",
          "Building Technology",
          "Environmental Management",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        Law: [
          "Jurisprudence and International Law",
          "Private and Property Law",
          "Public and International Law",
          // Add more departments as needed
        ],
        "Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Marketing",
          "Management Technology",
          // Add more departments as needed
        ],
        Nursing: [
          "Community Health Nursing",
          "Maternal and Child Health Nursing",
          "Medical-Surgical Nursing",
          "Psychiatric and Mental Health Nursing",
          // Add more departments as needed
        ],
        Pharmacy: [
          "Clinical Pharmacy and Pharmacy Practice",
          "Pharmaceutical Chemistry",
          "Pharmacognosy and Herbal Medicine",
          "Pharmaceutics and Pharmaceutical Technology",
          "Pharmaceutical Microbiology and Biotechnology",
          // Add more departments as needed
        ],
        Science: [
          "Biochemistry",
          "Biological Sciences",
          "Computer Science",
          "Geology",
          "Mathematics",
          "Physics",
          "Pure and Applied Chemistry",
          // Add more departments as needed
        ],
        "Social Sciences": [
          "Economics",
          "Geography and Environmental Management",
          "Political Science",
          "Sociology",
          "Mass Communication",
          // Add more departments as needed
        ],
      },
    },

    "Northwest University, Kano": {
      faculties: {
        "Faculty of Administration": [
          "Accounting",
          "Business Administration",
          // Add more departments as needed
        ],
        "Faculty of Arts": [
          "Arabic Studies",
          "English Language",
          "History",
          "Islamic Religious Studies",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Arabic Studies Education",
          "Biology Education",
          "Chemistry Education",
          "Economics Education",
          "English Language Education",
          "Geography Education",
          "History Education",
          "Islamic Studies Education",
          "Mathematics Education",
          "Physics Education",
          // Add more departments as needed
        ],
        "Faculty of Science": [
          "Biochemistry",
          "Biology",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Physics",
          // Add more departments as needed
        ],
        "Faculty of Social Science": [
          "Economics",
          "Geography",
          "International Studies",
          // Add more departments as needed
        ],
      },
    },

    "Olabisi Onabanjo University, Ago-Iwoye": {
      faculties: {
        "Faculty of Arts": [
          "English Language",
          "History and Diplomatic Studies",
          "Nigerian and Foreign Languages",
          "Philosophy",
          "Religious Studies",
          // Add more departments as needed
        ],
        "Faculty of Administration and Management Sciences": [
          "Accounting",
          "Business Administration",
          "Transport Management",
          "Banking and Finance",
          "Taxation",
          "Public Administration",
          // Add more departments as needed
        ],
        "Faculty of Social Sciences": [
          "Sociology",
          "Economics",
          "Geography",
          "Political Sciences",
          "Psychology",
          "Library and Information Science",
          "Mass Communication",
          // Add more departments as needed
        ],
        "Faculty of Basic Medical Sciences": [
          "Hematology and Blood Transfusion",
          "Chemical Pathology",
          "Medical Microbiology and Parasitology",
          "Morbid Anatomy Histopathology",
          "Physiology",
          "Anatomy",
          // Add more departments as needed
        ],
        "Faculty of Clinical Sciences": [
          "Community Medicine and Primary Care",
          "Medicine",
          "Anaesthesia",
          "Surgery",
          "Radiology",
          "Paediatrics",
          "Obstetrics and Gynecology",
          // Add more departments as needed
        ],
        "Faculty of Pharmacy": [
          "Pharmacy/Biopharmacy",
          "Pharmacology",
          "Pharmaceutics/Pharmaceutical Technology",
          "Pharmaceutical Medicinal Chemistry",
          "Pharmaceutical Microbiology",
          // Add more departments as needed
        ],
        "Faculty of Engineering and Environmental Sciences": [
          "Computer Engineering",
          "Mechanical Engineering",
          "Electrical/Electronics Engineering",
          "Civil Engineering",
          "Fine and Applied Arts",
          "Urban and Regional Planning",
          "Architecture",
          // Add more departments as needed
        ],
        "Faculty of Agricultural Sciences": [
          "Crop Production",
          "Animal Production",
          "Home and Hotel Management",
          // Add more departments as needed
        ],
        "Faculty of Science": [
          "Applied Zoology",
          "Biochemistry",
          "Chemical Sciences",
          "Computer Science",
          "Geology",
          "Industrial Chemistry",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Plant Science",
          "Statistics",
          // Add more departments as needed
        ],
      },
    },

    "Ondo State University of Science and Technology, Okitipupa": {
      faculties: {
        "Faculty of Science": [
          "Biochemistry",
          "Botany",
          "Biological Sciences",
          "Chemical Sciences",
          "Food Science and Technology",
          "Geophysics",
          "Geology",
          "Industrial Chemistry",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Statistics",
          "Zoology",
          // Add more departments as needed
        ],
        "Faculty of Engineering and Engineering Technology": [
          "Polymer Engineering",
          "Chemical Engineering",
          "Gas Engineering",
          "Industrial Production Engineering",
          "Metallurgical and Material Engineering",
          "Petroleum Engineering",
          "Mechanical Engineering",
          "Electrical Engineering",
          "Civil Engineering",
          // Add more departments as needed
        ],
        "Faculty of Agriculture, Food and Natural Resources": [
          // Add departments as available or required
        ],
        "Faculty of Information and Communications Technology": [
          "Communications Technology",
          "Computer Science",
          "Computer Science and Information Technology",
          // Add more departments as needed
        ],
        // Other faculties or departments can be added as necessary
      },
    },

    "Osun State University, Osogbo": {
      faculties: {
        "College of Agriculture": [
          "Agricultural Economics",
          "Agricultural Extension and Rural Development",
          "Animal Science",
          "Crop Production and Protection",
          "Fisheries and Wildlife Management",
          "Soil Science",
          // Add more departments as needed
        ],
        "College of Education": [
          "Arts and Social Science Education",
          "Science, Technology, and Mathematics Education",
          "Educational Foundations and Counselling",
          "Library and Information Science",
          // Add more departments as needed
        ],
        "College of Humanities and Culture": [
          "History and International Studies",
          "Linguistics and Communication Studies",
          "English and Literary Studies",
          // Add more departments as needed
        ],
        "College of Law": [
          "Public Law",
          "Private and Property Law",
          // Add more departments as needed
        ],
        "College of Management and Social Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
        "College of Health Sciences": [
          "Anatomy",
          "Medical Biochemistry",
          "Physiology",
          "Nursing Science",
          // Add more departments as needed
        ],
        "College of Science, Engineering and Technology": [
          "Computer Science",
          "Civil Engineering",
          "Electrical/Electronics Engineering",
          "Mechanical Engineering",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biological Sciences",
          // Add more departments as needed
        ],
      },
    },

    "Plateau State University, Bokkos": {
      faculties: {
        "Faculty of Arts": [
          "English",
          "History and International Studies",
          "Theatre Arts",
          // Add more departments as needed
        ],
        "Faculty of Social Sciences": [
          "Economics",
          "Mass Communication",
          "Political Science",
          "Psychology",
          "Sociology",
          // Add more departments as needed
        ],
        "Faculty of Management Sciences": [
          "Accounting",
          "Management Studies",
          "Banking and Finance",
          "Business Administration",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Geography",
          // Add more departments as needed
        ],
        "Faculty of Environmental Sciences": [
          "Geography and Planning",
          "Environmental Management",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Educational Foundations",
          "Science and Technology Education",
          "Arts and Social Science Education",
          // Add more departments as needed
        ],
      },
    },

    "Rivers State University of Science and Technology, Port Harcourt": {
      faculties: {
        "Faculty of Agriculture": [
          "Agricultural and Environmental Engineering",
          "Agricultural Economics and Extension",
          "Animal Science",
          "Crop Science",
          "Fisheries Management",
          "Forestry and WildLife",
          // Add more departments as needed
        ],
        "Faculty of Engineering": [
          "Chemical/Petrochemical Engineering",
          "Civil Engineering",
          "Computer Engineering",
          "Electrical Engineering",
          "Marine Engineering",
          "Mechanical Engineering",
          "Petroleum Engineering",
          // Add more departments as needed
        ],
        "Faculty of Environmental Sciences": [
          "Architecture",
          "Estate Management",
          "Surveying and Geo-informatics",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "Faculty of Science": [
          "Biochemistry",
          "Biological Sciences",
          "Chemistry",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Plant Science and Biotechnology",
          // Add more departments as needed
        ],
        "Faculty of Management Sciences": [
          "Accounting",
          "Business Administration",
          "Marketing",
          "Banking and Finance",
          "Office and Information Management",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Educational Administration and Planning",
          "Educational Management",
          "Science Education",
          "Business Education",
          "Technical Education",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Law",
          // Add more departments as needed
        ],
        "Faculty of Humanities": [
          "English Language",
          "History and Diplomatic Studies",
          "Philosophy",
          "Religious Studies",
          "Theatre Arts",
          // Add more departments as needed
        ],
        "Faculty of Social Sciences": [
          "Political Science",
          "Psychology",
          "Sociology",
          "Criminology and Penology",
          // Add more departments as needed
        ],
        "Faculty of Medical Sciences": [
          "Anatomy",
          "Physiology",
          "Medical Laboratory Science",
          // Add more departments as needed
        ],
        "Faculty of Communication and Media Studies": [
          "Mass Communication",
          // Add more departments as needed
        ],
      },
    },

    "Sokoto State University, Sokoto": {
      faculties: {
        "Faculty of Arts and Social Sciences": [
          "Arabic and Islamic Studies",
          "Economics",
          "English Language and Linguistics",
          "History",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
        "Faculty of Science": [
          "Biochemistry",
          "Biological Sciences",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Statistics",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Educational Foundations",
          "Science Education",
          "Arts and Social Science Education",
          // Add more departments as needed
        ],
      },
    },

    "Tai Solarin University of Education, Ijebu-Ode": {
      faculties: {
        "College of Specialised and Professional Education (COSPED)": [
          "Educational Management",
          "Library and Information Science",
          "Childhood Education",
          "Educational Technology",
          "Adult Education",
          "Counselling Psychology and Educational Foundation",
          // Add more departments as needed
        ],
        "College of Science and Information Technology (COSIT)": [
          "Human Kinetics and Health Education",
          "Physics",
          "Computer and Information Sciences",
          "Biological Sciences",
          "Chemical Sciences",
          "Mathematics",
          // Add more departments as needed
        ],
        "College of Humanities (COHUM)": [
          "Creative Arts",
          "French",
          "Religious Studies",
          "English",
          "History and Diplomatic Studies",
          "Yoruba",
          // Add more departments as needed
        ],
        "College of Social and Management Sciences (COSMAS)": [
          "Sociological Studies",
          "Political Science",
          "Geography and Environmental Management",
          "Economics",
          // Add more departments as needed
        ],
        "College of Vocational and Technical Education (COVTED)": [
          "Business Education",
          "Agricultural Science",
          "Home Economics and Hotel Management",
          "Technical Education",
          // Add more departments as needed
        ],
      },
    },

    "Taraba State University, Jalingo": {
      faculties: {
        "Faculty of Agriculture": [
          "Agronomy",
          "Animal Science",
          "Agricultural Economics & Extension",
          // Add more departments as needed
        ],
        "Faculty of Engineering": [
          "Agricultural and Bio-Resources Engineering",
          "Civil and Water Resources Engineering",
          "Electrical and Electronic Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "Faculty of Science": [
          "Biological Sciences",
          "Chemistry",
          "Physics",
          "Mathematics and Statistics",
          "Computer Science",
          // Add more departments as needed
        ],
        "Faculty of Arts": [
          "Language and Linguistics",
          "Religious Studies",
          "History and Archaeology",
          // Add more departments as needed
        ],
        "Faculty of Social & Management Sciences": [
          "Political Science and International Relations",
          "Geography",
          "Sociology",
          "Mass Communication",
          "Economics",
          "Business Administration",
          "Accountancy",
          "Public Administration",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Science Education",
          "Arts and Social Sciences Education",
          "Educational Foundations",
          // Add more departments as needed
        ],
      },
    },

    "Umaru Musa Yar'Adua University, Katsina": {
      faculties: {
        "Faculty of Humanities": [
          "Arabic Studies",
          "English Language",
          "French Language",
          "Nigerian Language (Hausa)",
          "History",
          "Islamic Studies",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Biology",
          "Chemistry",
          "Industrial Chemistry",
          "Computer Science",
          "Geography",
          "Mathematics",
          "Physics",
          "Microbiology",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Education and Arabic",
          "Education and Biology",
          "Education and Chemistry",
          "Education and Economics",
          "Education and English Language",
          "Education and Geography",
          "Education and Hausa",
          "Education and History",
          "Education and Islamic Studies",
          "Education and Mathematics",
          "Education and Physics",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Islamic Law",
          "Common Law",
          // Add more departments as needed
        ],
        "Faculty of Social and Management Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "International Relations",
          "Political Science",
          "Public Administration",
          "Sociology",
          "Local Government and Development Studies",
          // Add more departments as needed
        ],
        "Faculty of Agriculture": [
          "Agricultural Science",
          "Forestry and Wildlife Management",
          "Fisheries and Aquaculture",
          // Add more departments as needed
        ],
      },
    },

    "Yobe State University, Damaturu": {
      faculties: {
        "Faculty of Arts and Education": [
          "Arabic",
          "Islamic Studies",
          "Hausa",
          "English",
          "History",
          "Education",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Sharia Law",
          "Civil Law",
          // Add more departments as needed
        ],
        "Faculty of Medical Sciences": [
          "Anatomy",
          "Biochemistry",
          "Physiology",
          "MBBS (Medicine and Surgery)",
          // Add more departments as needed
        ],
        "Faculty of Science": [
          "Biological Science",
          "Chemistry",
          "Computer Science",
          "Mathematics and Statistics",
          "Physics",
          // Add more departments as needed
        ],
        "Faculty of Social and Management Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Geography",
          "Political Science",
          "Public Administration",
          "Sociology",
          // Add more departments as needed
        ],
      },
    },

    "Zamfara State University, Talata Mafara": {
      faculties: {
        "Faculty of Science": [
          "Biochemistry and Molecular Biology",
          "Biology",
          "Chemistry",
          "Computer Science",
          "Geology",
          "Mathematics",
          "Physics",
          "Statistics",
          // Add more departments as needed
        ],
        "Faculty of Arts and Humanities": [
          "Arabic Studies",
          "English Language",
          "History and International Studies",
          "Islamic Studies",
          "Mass Communication",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Early Childhood Education",
          "Education and Arabic",
          "Education and Biology",
          "Education and Chemistry",
          "Education and Economics",
          "Education and English Language",
          "Education and History",
          "Education and Integrated Science",
          "Education and Islamic Studies",
          "Education and Mathematics",
          "Education and Physics",
          "Primary Education Studies",
          // Add more departments as needed
        ],
        "Faculty of Social and Management Sciences": [
          "Accounting",
          "Economics",
          "Public Health",
          // Add more departments as needed
        ],
        "Faculty of Health Sciences": [
          "Human Nutrition and Dietetics",
          "Nursing Science",
          "Physiotherapy",
          // Add more departments as needed
        ],
      },
    },

    "Achievers University, Owo": {
      faculties: {
        "Faculty of Clinical Sciences": [
          "Medicine and Surgery (MBBS)",
          // Add more departments as needed
        ],
        "Faculty of Pharmacy": [
          "Doctor of Pharmacy (Pharm. D.)",
          // Add more departments as needed
        ],
        "Faculty of Nursing Sciences": [
          "Nursing Science (B.NSc.)",
          // Add more departments as needed
        ],
        "Faculty of Medical Laboratory Science": [
          "Medical Laboratory Science (B.MLS)",
          // Add more departments as needed
        ],
        "Faculty of Allied Health Sciences": [
          "Doctor of Physiotherapy (DPT)",
          "Public Health (B.Sc.)",
          "Health Information Management (B.Sc.)",
          // Add more departments as needed
        ],
        "Faculty of Basic Medical Sciences": [
          "Human Anatomy (B.Sc.)",
          "Human Physiology (B.Sc.)",
          // Add more departments as needed
        ],
        "College of Engineering and Technology": [
          "Electrical and Electronics Engineering (B.Eng.)",
          "Computer Engineering (B.Eng.)",
          "Mechatronics Engineering (B.Eng.)",
          "Biomedical Engineering (B.Eng.)",
          "Mechanical Engineering (B.Eng.)",
          "Civil and Environmental Engineering (B.Eng.)",
          // Add more departments as needed
        ],
        "College of Law": [
          "Bachelor of Laws (LL.B.)",
          // Add more departments as needed
        ],
        "College of Natural and Applied Sciences": [
          "Microbiology (B.Sc.)",
          "Industrial Chemistry (B.Sc.)",
          "Biochemistry (B.Sc.)",
          "Computer Science (B.Sc.)",
          "Geology (B.Sc.)",
          "Plant Science and Biotechnology (B.Sc.)",
          "Remote Sensing and Geoscience Information System (B.Sc.)",
          // Add more departments as needed
        ],
        "College of Social and Management Sciences": [
          "Accounting (B.Sc.)",
          "Business Administration (B.Sc.)",
          "Economics (B.Sc.)",
          "Political Science (B.Sc.)",
          "International Relations (B.Sc.)",
          "Public Administration (B.Sc.)",
          "Sociology (B.Sc.)",
          "Criminology and Security Studies (B.Sc.)",
          "Mass Communication (B.Sc.)",
          "Procurement Management (B.Sc.)",
          "Banking and Finance (B.Sc.)",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Guidance and Counselling (B.Ed.)",
          "Library and Information Science (B.LIS)",
          "Chemistry Education (B.Sc. Ed.)",
          "Biology Education (B.Sc. Ed.)",
          // Add more departments as needed
        ],
      },
    },

    "Adeleke University, Ede": {
      faculties: {
        "Faculty of Arts": [
          "English Studies",
          "History & International Studies",
          "Religious Studies",
          // Add more departments as needed
        ],
        "Faculty of Basic Medical Sciences": [
          "Anatomy",
          "Nursing",
          "Public Health",
          "Physiology",
          // Add more departments as needed
        ],
        "Faculty of Business & Social Sciences": [
          "Accounting",
          "Economics",
          "Business Administration",
          "Library Information Science",
          "Mass Communication",
          "Political Science",
          "Public Administration",
          // Add more departments as needed
        ],
        "Faculty of Engineering": [
          "Agricultural Engineering",
          "Civil Engineering",
          "Electronic & Electrical Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Law",
          // Add more departments as needed
        ],
        "Faculty of Science": [
          "Physics",
          "Microbiology",
          "Chemistry",
          "Biochemistry",
          "Computer Science",
          "Biological Sciences",
          "Mathematics",
          // Add more departments as needed
        ],
      },
    },

    "Afe Babalola University, Ado-Ekiti": {
      faculties: {
        "College of Engineering": [
          "Electrical and Electronics Engineering",
          "Computer Engineering",
          "Mechanical Engineering",
          "Mechatronics Engineering",
          "Civil Engineering",
          "Petroleum Engineering",
          "Chemical Engineering",
          // Add more departments as needed
        ],
        "College of Medicine and Health Sciences": [
          "Medicine and Surgery (MBBS)",
          "Nursing Sciences",
          "Medical Laboratory Science",
          "Anatomy",
          "Physiology",
          "Human Nutrition and Dietetics",
          "Pharmacology",
          "Public Health",
          "Pharmacy (Pharm.D)",
          "Dentistry (B.DS)",
          "Optometry (OD)",
          // Add more departments as needed
        ],
        "College of Law": [
          "Law (LL.B)",
          // Add more departments as needed
        ],
        "College of Sciences": [
          "Biotechnology",
          "Biochemistry",
          "Chemistry",
          "Industrial Chemistry",
          "Computer Science",
          "Geology",
          "Physics with Electronics",
          "Petroleum Chemistry",
          "Mathematics",
          "Microbiology",
          // Add more departments as needed
        ],
        "College of Social and Management Sciences": [
          "Economics",
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Tourism and Events Management",
          "Political Science",
          "International Relations and Diplomacy",
          "Peace and Conflict Studies",
          "Intelligence and Security Studies",
          "Social Justice",
          "Communication and Media Studies",
          "Psychology and Guidance & Counseling",
          "Sociology",
          // Add more departments as needed
        ],
        "College of Agriculture": [
          "Animal Science",
          "Agricultural Economics",
          "Extension Education",
          "Crop Science",
          "Soil Science",
          // Add more departments as needed
        ],
        "College of Arts and Humanities": [
          "Performing Arts",
          "English",
          "History and International Studies",
          "Linguistics",
          // Add more departments as needed
        ],
      },
    },

    "African University of Science and Technology, Abuja": {
      faculties: {
        "Computing and Information Technology": [
          "Computer Science",
          "Software Engineering",
          "Management of Information Technology",
          // Add more departments as needed
        ],
        "Science and Science Education": [
          "Mathematical Modelling",
          "Applied Statistics",
          "Geoinformatics and GIS",
          "Pure and Applied Mathematics",
          "Space Physics",
          "Theoretical and Applied Physics",
          // Add more departments as needed
        ],
        Engineering: [
          "Aerospace Engineering",
          "Mechanical Engineering",
          "Civil Engineering",
          "Materials Science and Engineering",
          "Petroleum and Energy Resources Engineering",
          "Systems Engineering",
          // Add more departments as needed
        ],
        "Administration, Business and Management Sciences": [
          "Accounting",
          "Public Administration",
          "Public Policy",
          // Add more departments as needed
        ],
        "Biological Sciences and Engineering": [
          "Biological Sciences",
          "Energy and Environment",
          // Add more departments as needed
        ],
      },
    },

    "Ajayi Crowther University, Oyo": {
      faculties: {
        "Faculty of Agriculture": [
          "Agricultural Economics and Extension",
          "Crop and Animal Sciences",
          // Add more departments as needed
        ],
        "Faculty of Basic Medical Sciences": [
          "Medical Laboratory Science",
          // Add more departments as needed
        ],
        "Faculty of Communication and Media Studies": [
          "Communication and Media Studies",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Science Education",
          "Educational Management",
          "Guidance and Counselling",
          // Add more departments as needed
        ],
        "Faculty of Engineering": [
          "Civil Engineering",
          "Computer Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "Faculty of Environmental Studies": [
          "Architecture",
          "Estate Management",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "Faculty of Humanities": [
          "English",
          "History and International Relations",
          "Religious Studies",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Private and Business Law",
          "Public and International Law",
          // Add more departments as needed
        ],
        "Faculty of Management Sciences": [
          "Accounting and Finance",
          "Business Administration",
          // Add more departments as needed
        ],
        "Faculty of Natural Sciences": [
          "Biological Sciences",
          "Chemical Sciences",
          "Computer Science",
          "Mathematics",
          "Physics",
          // Add more departments as needed
        ],
        "Faculty of Social Sciences": [
          "Economics",
          "Mass Communication",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
      },
    },

    "Al-Hikmah University, Ilorin": {
      faculties: {
        "Faculty of Humanities and Social Sciences": [
          "History and International Studies",
          "Islamic Studies",
          "Arabic",
          "English",
          "Mass Communication",
          "Political Science and Public Administration",
          "Sociology",
          // Add more departments as needed
        ],
        "Faculty of Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Educational Management",
          "Guidance and Counselling",
          "Islamic Studies Education",
          "Arabic Education",
          "English Education",
          "Economics Education",
          "Political Science Education",
          "Social Studies Education",
          "Agriculture Science Education",
          "Biology Education",
          "Chemistry Education",
          "Computer Science Education",
          "Mathematics Education",
          "Physics Education",
          "Library and Information Science",
          "Educational Technology",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Microbiology",
          "Biology",
          "Industrial Chemistry",
          "Geology and Mineral Sciences",
          "Petroleum Chemistry",
          "Statistics",
          "Physics",
          "Mathematics",
          "Industrial Mathematics",
          "Physics with Electronics",
          "Computer Science",
          "Cyber Security",
          "Information Systems",
          "Software Engineering",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Common Law",
          "Common and Islamic Law",
          // Add more departments as needed
        ],
        "Faculty of Health Sciences": [
          "Public Health",
          "Medical Laboratory Science",
          "Human Anatomy",
          "Human Physiology",
          "Nursing Science",
          // Add more departments as needed
        ],
        "Faculty of Agriculture": [
          "Agriculture",
          // Add more departments as needed
        ],
      },
    },

    "Al-Qalam University, Katsina": {
      faculties: {
        "College of Natural and Applied Sciences": [
          "Biological Sciences",
          "Chemistry",
          "Physics",
          "Science Laboratory Technology",
          // Add more departments as needed
        ],
        "College of Humanities": [
          "African Languages",
          "English Language",
          "Islamic Studies",
          // Add more departments as needed
        ],
        "College of Education": [
          "Education",
          // Add more departments as needed
        ],
        "College of Social and Management Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
        "College of Computing and Information Science": [
          "Computer Science and Information Technology",
          "Software Engineering and Cyber Security",
          // Add more departments as needed
        ],
      },
    },

    "American University of Nigeria, Yola": {
      faculties: {
        "School of Arts and Sciences (SAS)": [
          "BSc Communications & Multimedia Design",
          "BSc Natural & Environmental Sciences",
          "BSc Petroleum Chemistry",
          "BA Economics",
          "BA Politics & International Studies",
          "BA English Language & Literature",
          // Add more departments as needed
        ],
        "School of Business & Entrepreneurship (SBE)": [
          "BSc Business Administration (with specialties)",
          "BSc Accounting",
          "BSc Finance",
          "BSc Marketing",
          "BSc Entrepreneurship Management",
          // Add more departments as needed
        ],
        "School of Law (SOL)": [
          "LL.B (Bachelor of Laws)",
          // Add more departments as needed
        ],
        "School of Engineering (SOE)": [
          "BEng Chemical Engineering",
          "BEng Computer Engineering",
          "BEng Electrical/Electronics Engineering",
          "BEng Telecommunication Engineering",
          // Add more departments as needed
        ],
        "School of Information Technology & Computing (SITC)": [
          "BSc Software Engineering",
          "BSc Data Science & Analytics",
          "BSc Computer Science",
          "BSc Information Systems",
          "BSc Telecommunications & Wireless Technologies",
          // Add more departments as needed
        ],
        "School of Basic Medical and Allied Health Sciences (SBMAHS)": [
          "BSc Nursing Science",
          "BSc Public Health",
          // Add more departments as needed
        ],
      },
    },

    "Augustine University, Ilara": {
      faculties: {
        "Faculty of Humanities, Management and Social Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics",
          "English Language",
          "Mass Communication",
          "Philosophy",
          // Add more departments as needed
        ],
        "Faculty of Science": [
          "Biochemistry",
          "Biological Sciences",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Microbiology",
          "Physics",
          // Add more departments as needed
        ],
        "Faculty of Engineering": [
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "Faculty of Allied Health Sciences": [
          "Nursing Science",
          "Medical Laboratory Science",
          // Add more departments as needed
        ],
      },
    },

    "Babcock University, Ilishan-Remo": {
      faculties: {
        "Faculty of Agriculture": [
          "Agriculture",
          "Nutrition and Dietetics",
          // Add more departments as needed
        ],
        "Faculty of Arts and Humanities": [
          "Christian Religious Knowledge/Studies",
          "English and Literary Studies",
          "French",
          "History and International Studies",
          "Music",
          "Religious Studies",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Business Education",
          "Education & Economics",
          "Education and English Language",
          "Educational Administration & Planning",
          "Guidance & Counselling",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Law",
          // Add more departments as needed
        ],
        "Faculty of Medicine, Pharmacy and Health Sciences": [
          "Anatomy",
          "Medical Laboratory Science",
          "Medicine and Surgery",
          "Nursing/Nursing Science",
          "Physiology",
          "Public Health",
          // Add more departments as needed
        ],
        "Faculty of Science": [
          "Biochemistry",
          "Biology",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Microbiology",
          "Physics Electronics",
          // Add more departments as needed
        ],
        "Faculty of Social Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics",
          "Marketing",
          "Mass Communication",
          "Political Science",
          "Public Administration",
          "Social Work",
          // Add more departments as needed
        ],
      },
    },

    "Baze University, Abuja": {
      faculties: {
        "Faculty of Computer Science and Information Technology": [
          "Communication Technology",
          "Computer Science",
          "Computing for Business",
          "Cyber Security",
          "Information Systems Management",
          "Information Technology",
          "Software Engineering",
          // Add more departments as needed
        ],
        "Faculty of Engineering": [
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          "Mechatronics Engineering",
          "Petroleum and Gas Engineering",
          "Telecommunication Engineering",
          // Add more departments as needed
        ],
        "Faculty of Environmental Sciences": [
          "Architecture",
          "Building",
          "Estate Management",
          "Quantity Surveying",
          "Surveying and Geo-informatics",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Private and Commercial Law",
          "Public and International Law",
          "Law (LLB)",
          // Add more departments as needed
        ],
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Management",
          "Economics",
          "Insurance and Actuarial Science",
          "International Relations and Diplomacy",
          "Marketing",
          "Mass Communication",
          "Political Science",
          "Psychology",
          "Public Administration",
          "Sociology and Anthropology",
          // Add more departments as needed
        ],
        "Faculty of Medical and Health Sciences": [
          "Human Anatomy",
          "Human Physiology",
          "Public Health",
          "Radiography and Radiation Science",
          "Medical Laboratory Science (BMLS)",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Biological Sciences",
          "Biotechnology",
          "Financial Mathematics",
          "Microbiology",
          "Petroleum Chemistry",
          "Physics with Computing",
          // Add more departments as needed
        ],
        "College of Medicine": [
          "Medicine and Surgery (MBBS)",
          // Add more departments as needed
        ],
      },
    },

    "Bells University of Technology, Ota": {
      faculties: {
        "College of Engineering": [
          "Biomedical Engineering",
          "Civil and Environmental Engineering",
          "Computer Engineering",
          "Electrical Electronics Engineering",
          "Mechanical Engineering",
          "Mechatronics Engineering",
          "Telecommunication Engineering",
          // Add more departments as needed
        ],
        "College of Natural and Applied Sciences": [
          "Physics with Electronics",
          "Applied Mathematics with Statistics",
          "Biochemistry",
          "Microbiology",
          "Biotechnology",
          "Chemistry",
          "Industrial Chemistry",
          "Food Science and Technology",
          // Add more departments as needed
        ],
        "College of Management Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Finance and Banking",
          "Management Technology",
          // Add more departments as needed
        ],
        "College of Environmental Sciences": [
          "Architecture",
          "Building Technology",
          "Estate Management",
          "Quantity Surveying",
          "Surveying and Geoinformatics",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "College of Food Sciences": [
          "Food Technology",
          // Add more departments as needed
        ],
      },
    },

    "Benson Idahosa University, Benin City": {
      faculties: {
        "Faculty of Agriculture and Agricultural Technology": [
          "Agricultural Economics and Extension Services",
          "Agronomy and Environmental Management",
          "Animal Science and Animal Technology",
          // Add more departments as needed
        ],
        "Faculty of Arts and Education": [
          "English Studies",
          "Education",
          "Christian Religious Studies",
          "Political Science and Public Administration",
          "International Studies and Diplomacy",
          // Add more departments as needed
        ],
        "Faculty of Basic and Applied Sciences": [
          "Biochemistry",
          "Microbiology",
          "Chemistry",
          "Computer Science",
          "Physics and Energy Studies",
          "Mathematics",
          "Mass Communication",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Private and Property Law",
          "Public Law",
          // Add more departments as needed
        ],
        "Faculty of Social and Management Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Banking and Finance",
          "Mass Communication",
          "Sociology and Anthropology",
          // Add more departments as needed
        ],
        "Faculty of Engineering": [
          "Civil Engineering",
          "Mechanical Engineering",
          "Electrical and Electronics Engineering",
          // Add more departments as needed
        ],
      },
    },

    "Bingham University, Auta Balefi": {
      faculties: {
        "Faculty of Agriculture": [
          "Agric Economics and Extension",
          "Animal Science",
          "Crop Science",
          "Soil Science",
          // Add more departments as needed
        ],
        "Faculty of Basic Medical Sciences": [
          "Anatomy",
          "Medical Biochemistry",
          "Pharmacology",
          "Physiology",
          // Add more departments as needed
        ],
        "Faculty of Environmental Sciences": [
          "Architecture",
          "Building Technology",
          "Estate Management",
          "Quantity Surveying",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "Faculty of Humanities, Management and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "English Language",
          "History and International Studies",
          "Mass Communication",
          "Political Science",
          "Social Work",
          "Sociology",
          // Add more departments as needed
        ],
        "Faculty of Law": ["Law"],
        "Faculty of Science and Technology": [
          "Biochemistry",
          "Computer Science",
          "Geology",
          "Industrial Chemistry",
          "Industrial Mathematics",
          "Industrial Physics",
          "Microbiology",
          "Statistics",
          // Add more departments as needed
        ],
        "Faculty of Veterinary Medicine": [
          "Veterinary Anatomy",
          "Veterinary Medicine",
          "Veterinary Parasitology & Entomology",
          "Veterinary Pathology",
          "Veterinary Pharmacology & Toxicology",
          "Veterinary Physiology & Biochemistry",
          "Veterinary Public Health & Preventive Medicine",
          "Veterinary Surgery & Theriogenology",
          // Add more departments as needed
        ],
        "Faculty of Pharmaceutical Sciences": [
          "Bachelor of Pharmacy (B.Pharm)",
          // Add more departments as needed
        ],
        "Faculty of Clinical Sciences": [
          "Medicine and Surgery (MBBS)",
          "Public Health (B.Sc.)",
          // Add more departments as needed
        ],
      },
    },

    "Bowen University, Iwo": {
      faculties: {
        "College of Health Sciences": [
          "Medicine and Surgery",
          "Physiology",
          "Nursing Science",
          "Public Health",
          // Add more departments as needed
        ],
        "Faculty of Agriculture": [
          "Agricultural Economics and Extension",
          "Animal Science and Fisheries Management",
          "Crop Production and Soil Management",
          // Add more departments as needed
        ],
        "Faculty of Science and Science Education": [
          "Biochemistry",
          "Microbiology",
          "Industrial Chemistry",
          "Computer Science",
          "Mathematics",
          "Physics",
          "Biological Sciences",
          // Add more departments as needed
        ],
        "Faculty of Social and Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics",
          "Mass Communication",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
        "Faculty of Humanities": [
          "English Language",
          "History and International Studies",
          "Philosophy and Religious Studies",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Public Law",
          "Private and Commercial Law",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Educational Management",
          "Guidance and Counselling",
          "Library and Information Science",
          // Add more departments as needed
        ],
        "College of Environmental Science": [
          "Architecture",
          "Estate Management",
          "Surveying and Geoinformatics",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "College of Computing and Communication Studies": [
          "Information Technology",
          "Communication Studies",
          // Add more departments as needed
        ],
      },
    },

    "Caleb University, Imota": {
      faculties: {
        "College of Pure and Applied Sciences": [
          "Biochemistry",
          "Chemistry",
          "Computer Science",
          "Industrial Chemistry",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Plant Science and Biotechnology",
          "Statistics",
          "Zoology and Aquaculture",
          // Add more departments as needed
        ],
        "College of Environmental Sciences": [
          "Architecture",
          "Building",
          "Estate Management",
          "Quantity Surveying",
          // Add more departments as needed
        ],
        "College of Social and Management Sciences": [
          "Accounting",
          "Business Administration",
          "Criminology and Security Studies",
          "Economics",
          "Mass Communication",
          "Political Science",
          "Psychology",
          // Add more departments as needed
        ],
        "College of Arts and Humanities": [
          "Christian Religious Studies",
          "English and Literary Studies",
          "History and Diplomatic Studies",
          "Philosophy",
          // Add more departments as needed
        ],
      },
    },

    "Caritas University, Enugu": {
      faculties: {
        "Faculty of Engineering": [
          "Chemical Engineering",
          "Computer Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "Faculty of Environmental Sciences": [
          "Architecture",
          "Estate Management",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Political Science",
          "Marketing",
          "Mass Communication",
          // Add more departments as needed
        ],
        "Faculty of Natural Sciences": [
          "Biochemistry",
          "Computer Science",
          "Industrial Chemistry",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Environmental Science",
          // Add more departments as needed
        ],
      },
    },

    "Chrisland University, Abeokuta": {
      faculties: {
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Biotechnology",
          "Computer Science",
          "Cybersecurity",
          "Industrial Chemistry",
          "Industrial Mathematics",
          "Microbiology",
          "Physics with Electronics",
          "Software Engineering",
          "Statistics",
          // Add more departments as needed
        ],
        "Faculty of Basic Medical Sciences": [
          "Nursing",
          "Physiotherapy",
          "Public Health",
          "Medical Laboratory Science",
          // Add more departments as needed
        ],
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Entrepreneurship",
          "International Relations",
          "Mass Communication",
          "Political Science",
          "Public Administration",
          "Sociology",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Law",
          // Add more departments as needed
        ],
        "Faculty of Arts and Humanities": [
          "English",
          "History and Diplomatic Studies",
          "Linguistics and Communication Studies",
          // Add more departments as needed
        ],
      },
    },

    "Christopher University, Mowe": {
      faculties: {
        "School of Business Studies": [
          "Accounting",
          "Business Administration",
          "Banking and Finance",
          "Marketing",
          // Add more departments as needed
        ],
        "School of Humanities": [
          "English Language",
          "Literature in English",
          "Philosophy",
          "History and Diplomatic Studies",
          // Add more departments as needed
        ],
        "School of Social Sciences": [
          "Economics",
          "Political Science",
          "Psychology",
          "Sociology",
          // Add more departments as needed
        ],
        "School of Science and Technology": [
          "Computer Science",
          "Biochemistry",
          "Microbiology",
          "Mathematics",
          // Add more departments as needed
        ],
      },
    },

    "Covenant University, Ota": {
      faculties: {
        "College of Science and Technology": [
          "Architecture",
          "Building Technology",
          "Estate Management",
          "Biological Sciences",
          "Biochemistry",
          "Chemistry",
          "Computer and Information Sciences",
          "Mathematics",
          "Physics",
          // Add more departments as needed
        ],
        "College of Engineering": [
          "Civil Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          "Petroleum Engineering",
          "Chemical Engineering",
          "Computer Engineering",
          // Add more departments as needed
        ],
        "College of Business and Social Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics and Development Studies",
          "Mass Communication",
          "Political Science and International Relations",
          "Sociology",
          "Demography and Social Statistics",
          "Policy and Strategic Studies",
          // Add more departments as needed
        ],
        "College of Leadership and Development Studies": [
          "Psychology",
          "Political Science",
          "International Relations",
          "Policy and Strategic Studies",
          "Languages and General Studies",
          // Add more departments as needed
        ],
      },
    },

    "Crawford University, Igbesa": {
      faculties: {
        "College of Business and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Finance",
          "Marketing",
          "Sociology",
          "Criminology and Security Studies",
          "Industrial and Personnel Management",
          // Add more departments as needed
        ],
        "College of Natural and Applied Sciences": [
          "Biochemistry",
          "Microbiology",
          "Industrial Chemistry",
          "Physics with Electronics",
          "Mathematics and Statistics",
          "Computer Science",
          "Geology and Mineral Sciences",
          "Information and Communication Technology",
          // Add more departments as needed
        ],
        "College of Agriculture": [
          "Agricultural Economics and Farm Management",
          "Agricultural Extension and Rural Development",
          "Animal Production and Fisheries",
          "Crop Production",
          "Soil Science and Environmental Management",
          // Add more departments as needed
        ],
      },
    },

    "Crescent University, Abeokuta": {
      faculties: {
        "Bola Ajibola College of Law": [
          "Law",
          // Add more departments as needed
        ],
        "College of Environmental Sciences": [
          "Architecture",
          "Estate Management",
          "Urban and Regional Planning",
          "Environmental Management",
          // Add more departments as needed
        ],
        "College of Information and Communication Technology": [
          "Computer Science",
          "Information Technology",
          "Telecommunication Management",
          // Add more departments as needed
        ],
        "College of Natural and Applied Sciences": [
          "Biochemistry",
          "Chemistry",
          "Microbiology",
          "Physics",
          "Mathematics",
          // Add more departments as needed
        ],
        "College of Arts, Social and Management Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Mass Communication",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
      },
    },

    "Elizade University, Ilara-Mokin": {
      faculties: {
        "Faculty of Basic and Applied Sciences": [
          "Applied Geophysics",
          "Biotechnology",
          "Computer Science",
          "Environmental Management & Toxicology",
          "Microbiology",
          "Physics (Electronics)",
          // Add more departments as needed
        ],
        "Faculty of Engineering": [
          "Automotive Engineering",
          "Civil Engineering",
          "Computer Engineering",
          "Electrical & Electronics Engineering",
          "Industrial & Production Engineering",
          "Information & Communication Technology Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "Faculty of Humanities": [
          "English",
          "History and Diplomatic Studies",
          "International Relations",
          "Performing Arts",
          // Add more departments as needed
        ],
        "Faculty of Social and Management Sciences": [
          "Accounting",
          "Banking & Finance",
          "Business Administration",
          "Economics",
          "Hotel Management & Tourism",
          "Human Resource Management",
          "Mass Communication",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Private & Property Law",
          "Public & International Law",
          // Add more departments as needed
        ],
      },
    },

    "Evangel University, Akaeze": {
      faculties: {
        "College of Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Management",
          "Marketing",
          // Add more departments as needed
        ],
        "College of Science": [
          "Biology",
          "Microbiology",
          "Biochemistry",
          "Chemistry",
          "Mathematics",
          "Physics",
          "Nursing Science",
          // Add more departments as needed
        ],
        "College of Arts and Social Sciences": [
          "English Language",
          "Psychology",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
      },
    },

    "Fountain University, Osogbo": {
      faculties: {
        "College of Natural and Applied Sciences": [
          "Biological Sciences",
          "Chemical Sciences",
          "Industrial and Environmental Chemistry",
          "Physics and Electronics",
          "Mathematical and Computer Sciences",
          "Biochemistry",
          "Microbiology",
          "Environmental Health Science",
          // Add more departments as needed
        ],
        "College of Management and Social Sciences": [
          "Accounting and Finance",
          "Business Administration",
          "Economics",
          "Mass Communication",
          "Political Science and Public Administration",
          "Sociology and Industrial Relations",
          // Add more departments as needed
        ],
        "College of Basic Medical and Health Sciences": [
          "Medical Laboratory Sciences",
          "Nursing",
          "Public Health",
          // Add more departments as needed
        ],
        "College of Law": [
          "Private and Islamic Law",
          "Public and International Law",
          // Add more departments as needed
        ],
      },
    },

    "Godfrey Okoye University, Ugwuomu-Nike": {
      faculties: {
        "Faculty of Arts": [
          "English and Literary Studies",
          "History, International Studies and Diplomacy",
          "Philosophy",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Educational Management",
          "Guidance and Counselling",
          "Arts and Social Science Education",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Law",
          // Add more departments as needed
        ],
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Mass Communication",
          "Political Science",
          "Sociology",
          "Economics",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Computer Science",
          "Biochemistry",
          "Microbiology",
          "Physics",
          "Mathematics and Statistics",
          "Geology",
          "Chemistry",
          // Add more departments as needed
        ],
      },
    },

    "Gregory University, Uturu": {
      faculties: {
        "Faculty of Agriculture": [
          "Agriculture",
          "Hotel Management and Tourism",
          // Add more departments as needed
        ],
        "Faculty of Arts and Humanities": [
          "English and Literary Studies",
          "French",
          "History and International Studies",
          "Theatre Arts",
          "Literature in English",
          // Add more departments as needed
        ],
        "Faculty of Engineering, Technology, and Environmentals": [
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          "Petroleum Engineering",
          "Estate Management",
          "Quantity Surveying",
          "Surveying and Geoinformatics",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "Faculty of Law and Legal Studies": [
          "Law",
          // Add more departments as needed
        ],
        "Faculty of Medicine, Pharmacy, and Health Sciences": [
          "Anatomy",
          "Medical Biochemistry",
          "Medicine and Surgery",
          "Physiology",
          // Add more departments as needed
        ],
        "Faculty of Sciences": [
          "Biochemistry",
          "Biology",
          "Chemistry",
          "Computer Science",
          "Geology",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Statistics",
          // Add more departments as needed
        ],
        "Faculty of Social Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics",
          "Mass Communication",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
      },
    },

    "Hallmark University, Ijebu-Itele": {
      faculties: {
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Botany",
          "Chemistry",
          "Computer Science",
          "Industrial Chemistry",
          "Industrial Physics",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Zoology",
          // Add more departments as needed
        ],
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics",
          "Marketing",
          "Information and Communication Science",
          // Add more departments as needed
        ],
      },
    },

    "Hezekiah University, Umudi": {
      faculties: {
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Industrial Chemistry",
          "Computer Science",
          "Physics with Electronics",
          "Mathematics and Statistics",
          "Microbiology",
          "Plant Science and Biotechnology",
          // Add more departments as needed
        ],
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Marketing",
          "Political Science",
          "Public Administration",
          "Sociology",
          // Add more departments as needed
        ],
        "Faculty of Humanities": [
          "English and Literary Studies",
          "History and International Studies",
          "Religious Studies",
          // Add more departments as needed
        ],
      },
    },

    "Igbinedion University, Okada": {
      faculties: {
        "College of Arts and Social Sciences": [
          "Sociology",
          "Political Science",
          "International Relations",
          "Theatre Arts",
          "Mass Communication",
          "Economics",
          "English",
          "Geography",
          // Add more departments as needed
        ],
        "College of Business and Management Studies": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          // Add more departments as needed
        ],
        "College of Engineering": [
          "Civil Engineering",
          "Computer Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          "Petroleum Engineering",
          // Add more departments as needed
        ],
        "College of Health Sciences": [
          "Anatomy",
          "Biochemistry",
          "Medicine and Surgery",
          "Medical Laboratory Science",
          "Nursing",
          "Physiology",
          // Add more departments as needed
        ],
        "College of Law": [
          "Law",
          // Add more departments as needed
        ],
        "College of Natural and Applied Sciences": [
          "Chemistry",
          "Computer Science",
          "Microbiology",
          // Add more departments as needed
        ],
        "College of Pharmacy": [
          "Pharmacy",
          // Add more departments as needed
        ],
      },
    },

    "Joseph Ayo Babalola University, Ikeji-Arakeji": {
      faculties: {
        "College of Agricultural Sciences": [
          "Agricultural Economics and Extension",
          "Animal Science and Livestock Production",
          "Soil Science",
          "Crop Science and Production",
          // Add more departments as needed
        ],
        "College of Environmental Sciences": [
          "Architecture",
          "Estate Management",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "College of Humanities": [
          "English",
          "History and International Studies",
          "Religious Studies",
          "Philosophy",
          // Add more departments as needed
        ],
        "College of Natural Sciences": [
          "Biochemistry",
          "Microbiology",
          "Industrial Chemistry",
          "Physics",
          "Mathematics",
          "Computer Science",
          // Add more departments as needed
        ],
        "College of Social Sciences": [
          "Economics",
          "Political Science",
          "Mass Communication",
          "Sociology",
          // Add more departments as needed
        ],
        "College of Management Sciences": [
          "Accounting",
          "Business Administration",
          "Industrial Relations and Human Resources Management",
          "Entrepreneurship",
          // Add more departments as needed
        ],
        "College of Law": [
          "Law",
          // Add more departments as needed
        ],
      },
    },

    "Kings University, Ode-Omu": {
      faculties: {
        "Faculty of Science": [
          "Biochemistry",
          "Biotechnology",
          "Botany",
          "Microbiology",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Physics",
          // Add more departments as needed
        ],
        "Faculty of Humanities": [
          "English Language",
          "Religious Studies",
          "History",
          // Add more departments as needed
        ],
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Political Science",
          "International Relations",
          // Add more departments as needed
        ],
      },
    },

    "Kwararafa University, Wukari": {
      faculties: {
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Political Science",
          "Public Administration",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Computer Science",
          "Biology",
          "Chemistry",
          "Physics",
          "Mathematics",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Education Management",
          "Guidance and Counselling",
          "Education Technology",
          // Add more departments as needed
        ],
      },
    },

    "Landmark University, Omu-Aran": {
      faculties: {
        "College of Agricultural Sciences": [
          "Agricultural Economics and Extension",
          "Animal Science",
          "Crop and Soil Sciences",
          // Add more departments as needed
        ],
        "College of Science and Engineering": [
          "Biochemistry",
          "Computer Science",
          "Mechanical Engineering",
          "Electrical and Information Engineering",
          "Civil Engineering",
          "Chemical Engineering",
          "Industrial Chemistry",
          "Physics",
          // Add more departments as needed
        ],
        "College of Business and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "International Relations",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
      },
    },

    "Lead City University, Ibadan": {
      faculties: {
        "Faculty of Social Sciences": [
          "Economics",
          "Sociology",
          "Psychology",
          "Public Administration",
          "Political Science",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Law",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Computer Science",
          "Microbiology",
          "Biochemistry",
          "Physics",
          "Chemistry",
          "Mathematics",
          // Add more departments as needed
        ],
        "Faculty of Environmental Sciences": [
          "Architecture",
          "Urban and Regional Planning",
          "Estate Management",
          "Building",
          "Environmental Management",
          // Add more departments as needed
        ],
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Banking and Finance",
          "Marketing",
          "Human Resource Management",
          "Mass Communication",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Educational Management",
          "Guidance and Counselling",
          "Science Education",
          "Arts Education",
          // Add more departments as needed
        ],
        "Faculty of Health Sciences": [
          "Nursing Science",
          "Medical Laboratory Science",
          "Public Health",
          "Human Nutrition and Dietetics",
          // Add more departments as needed
        ],
      },
    },

    "Madonna University, Okija": {
      faculties: {
        "Faculty of Engineering": [
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Engineering",
          "Electrical / Electronic Engineering",
          "Mechanical Engineering",
          "Petroleum Engineering",
          // Add more departments as needed
        ],
        "Faculty of Social Sciences": [
          "Mass Communication",
          "Economics",
          "International Relations",
          "Political Science",
          "Public Administration",
          "Sociology",
          "Psychology",
          // Add more departments as needed
        ],
        "Faculty of Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Management",
          "Marketing",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Law",
          // Add more departments as needed
        ],
        "Faculty of Health Sciences": [
          "Medicine and Surgery",
          "Nursing Science",
          "Medical Laboratory Science",
          "Public Health",
          "Optometry",
          // Add more departments as needed
        ],
        "Faculty of Pharmacy": [
          "Pharmacy",
          // Add more departments as needed
        ],
        "Faculty of Basic Medical Sciences": [
          "Anatomy",
          "Physiology",
          // Add more departments as needed
        ],
        "Faculty of Natural Sciences": [
          "Biochemistry",
          "Microbiology",
          "Industrial Chemistry",
          "Computer Science",
          // Add more departments as needed
        ],
        "Faculty of Education and Arts": [
          "Business Education",
          "Computer Science Education",
          "English Language",
          // Add more departments as needed
        ],
      },
    },

    "McPherson University, Seriki Sotayo": {
      faculties: {
        "Faculty of Basic Medical Sciences": [
          "Nursing Science",
          "Medical Laboratory Science",
          "Public Health",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Microbiology",
          "Biotechnology",
          "Industrial Chemistry",
          "Physics",
          "Statistics",
          "Software Engineering",
          "Information Technology",
          "Computer Science",
          // Add more departments as needed
        ],
        "Faculty of Humanities, Social and Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics",
          "International Relations",
          "Mass Communication",
          "History and International Studies",
          "Languages",
          "Religion and Peace Studies",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Law",
          // Add more departments as needed
        ],
      },
    },

    "Michael and Cecilia Ibru University, Agbara-Otor": {
      faculties: {
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Marketing",
          "Political Science",
          "Public Administration",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Biotechnology",
          "Computer Science",
          "Cyber Security",
          "Industrial Chemistry",
          "Industrial Mathematics",
          "Industrial Physics",
          "Microbiology",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Law",
          // Add more departments as needed
        ],
        "Faculty of Arts and Humanities": [
          "English and Literary Studies",
          "Theatre and Film Studies",
          "Music",
          // Add more departments as needed
        ],
      },
    },

    "Mountain Top University, Makogi Oba": {
      faculties: {
        "College of Basic and Applied Sciences (CBAS)": [
          "Biological Sciences",
          "Chemical Sciences",
          "Computer Science and Mathematics",
          "Food Science and Technology",
          "Geosciences",
          "Physics",
          // Add more departments as needed
        ],
        "College of Humanities, Management & Social Sciences (CHMS)": [
          "Accounting and Finance",
          "Business Administration",
          "Economics",
          "Fine and Applied Arts",
          "Languages",
          "Mass Communication",
          "Music",
          "Philosophy and Religion Studies",
          // Add more departments as needed
        ],
      },
    },

    "Nile University of Nigeria, Abuja": {
      faculties: {
        "Faculty of Engineering": [
          "Civil Engineering",
          "Computer Engineering",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          "Petroleum and Gas Engineering",
          // Add more departments as needed
        ],
        "Faculty of Environmental Sciences": [
          "Architecture",
          "Urban and Regional Planning",
          "Estate Management",
          "Building Technology",
          "Quantity Surveying",
          // Add more departments as needed
        ],
        "Faculty of Management Sciences": [
          "Accounting",
          "Business Administration",
          "Banking and Finance",
          "Public Administration",
          "Economics",
          // Add more departments as needed
        ],
        "Faculty of Arts and Social Sciences": [
          "Mass Communication",
          "Political Science and International Relations",
          "English Language and Literature",
          "Economics",
          "Psychology",
          // Add more departments as needed
        ],
        "Faculty of Computing": [
          "Computer Science",
          "Software Engineering",
          "Information Technology",
          "Cyber Security",
          // Add more departments as needed
        ],
        "College of Health Sciences": [
          "Medicine and Surgery (MBBS)",
          "Human Anatomy",
          "Human Physiology",
          "Public Health",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Law (LLB)",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Biology",
          "Chemistry",
          "Physics",
          "Microbiology",
          "Biotechnology",
          // Add more departments as needed
        ],
      },
    },

    "Novena University, Ogume": {
      faculties: {
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Microbiology",
          "Computer Science",
          "Chemistry",
          "Mathematics",
          "Physics",
          // Add more departments as needed
        ],
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Mass Communication",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
        "Faculty of Health Sciences": [
          "Public and Community Health",
          "Nursing",
          "Medical Laboratory Science",
          // Add more departments as needed
        ],
        "Faculty of Arts": [
          "English Language",
          // Add more departments as needed
        ],
        "Faculty of Environmental Sciences": [
          "Environmental Management",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
      },
    },

    "Obong University, Obong Ntak": {
      faculties: {
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Computer Science",
          "Microbiology",
          // Add more departments as needed
        ],
        "Faculty of Arts and Humanities": [
          "Language and Literary Studies",
          "Christian Religious Studies",
          // Add more departments as needed
        ],
        "Faculty of Management Sciences": [
          "Accounting",
          "Business Administration",
          "Marketing",
          // Add more departments as needed
        ],
        "Faculty of Social Sciences": [
          "Economics",
          "Mass Communication",
          "Public Administration",
          "Sociology",
          "International Relations",
          "Peace Studies and Conflict Resolution",
          // Add more departments as needed
        ],
      },
    },

    "Oduduwa University, Ipetumodu": {
      faculties: {
        "College of Engineering and Technology": [
          "Computer Engineering",
          "Electronic/Electrical Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "College of Environmental Design and Management": [
          "Architecture",
          "Estate Management",
          "Quantity Surveying",
          // Add more departments as needed
        ],
        "College of Management and Social Sciences": [
          "Accounting",
          "Banking & Finance",
          "Business Administration",
          "Economics",
          "International Relations",
          "Mass Communication/Media Technology",
          "Political Science",
          "Public Administration",
          // Add more departments as needed
        ],
        "College of Natural and Applied Sciences": [
          "Biological Sciences",
          "Chemical Sciences (Industrial Chemistry, Chemistry, and Biochemistry)",
          "Computer Science",
          "Mathematics and Statistics",
          "Microbiology",
          "Physics",
          // Add more departments as needed
        ],
      },
    },

    "Pan-Atlantic University, Lagos": {
      faculties: {
        "School of Management and Social Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Finance",
          // Add more departments as needed
        ],
        "School of Media and Communication": [
          "Mass Communication",
          "Journalism and Media Studies",
          "Information Science and Media Studies",
          "Digital Media",
          // Add more departments as needed
        ],
        "School of Science and Technology": [
          "Computer Science",
          "Electrical and Electronics Engineering",
          "Mechanical Engineering",
          "Software Engineering",
          "Mechatronics Engineering",
          // Add more departments as needed
        ],
      },
    },

    "Paul University, Awka": {
      faculties: {
        "Faculty of Arts": [
          "English Language",
          "English Literature",
          "History and International Relations",
          "Religious Studies",
          "Mass Communication",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Botany",
          "Chemistry",
          "Computer Science",
          "Mathematics",
          "Physics",
          "Zoology",
          // Add more departments as needed
        ],
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics",
          "Political Science",
          "Public Administration",
          "Sociology",
          // Add more departments as needed
        ],
      },
    },

    "Redeemer's University, Ede": {
      faculties: {
        "Faculty of Basic Medical Sciences": [
          "Biochemistry",
          "Human Anatomy",
          "Human Physiology",
          "Nursing Science",
          "Physiotherapy",
          // Add more departments as needed
        ],
        "Faculty of Engineering": [
          "Civil Engineering",
          "Computer Engineering",
          "Electrical & Electronic Engineering",
          "Mechanical Engineering",
          // Add more departments as needed
        ],
        "Faculty of Built Environment Studies": [
          "Architecture",
          "Building Technology",
          "Estate Management",
          "Quantity Surveying",
          "Surveying & Geoinformatics",
          "Urban & Regional Planning",
          // Add more departments as needed
        ],
        "Faculty of Humanities": [
          "Christian Religious Studies",
          "English",
          "French",
          "History & International Studies",
          "Philosophy",
          "Theatre Arts & Film Studies",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Law",
          // Add more departments as needed
        ],
        "Faculty of Management Sciences": [
          "Accounting",
          "Finance",
          "Business Administration",
          "Public Administration",
          "Insurance",
          "Marketing",
          "Transport Management",
          "Actuarial Science",
          // Add more departments as needed
        ],
        "Faculty of Natural Sciences": [
          "Applied Geophysics",
          "Computer Science",
          "Cyber Security",
          "Environmental Management & Toxicology",
          "Geology",
          "Industrial Chemistry",
          "Mathematics and Statistics",
          "Information Technology",
          "Meteorology",
          "Microbiology",
          "Petroleum Chemistry",
          "Physics with Electronics",
          "Statistics",
          // Add more departments as needed
        ],
        "Faculty of Social Sciences": [
          "Economics",
          "Mass Communication",
          "Political Science",
          "Psychology",
          "Sociology",
          "Tourism Studies",
          // Add more departments as needed
        ],
      },
    },

    "Renaissance University, Enugu": {
      faculties: {
        "College of Arts and Social Sciences": [
          "Economics",
          "English Language",
          "History and International Studies",
          "Mass Communication",
          "Political Science",
          "Sociology and Anthropology",
          // Add more departments as needed
        ],
        "College of Science": [
          "Biotechnology",
          "Biochemistry",
          "Microbiology",
          "Industrial Chemistry",
          "Industrial Mathematics",
          "Physics with Electronics",
          "Computer Science",
          // Add more departments as needed
        ],
        "College of Health Science": [
          "Nursing Science",
          "Public Health",
          "Physiotherapy",
          "Medical Laboratory Science",
          "Radiography and Radiation Science",
          // Add more departments as needed
        ],
        "College of Management Science": [
          "Accounting",
          "Banking and Finance",
          "Business Management",
          "Marketing",
          // Add more departments as needed
        ],
      },
    },

    "Rhema University, Aba": {
      faculties: {
        "Faculty of Basic and Applied Sciences": [
          "Biochemistry",
          "Computer Science",
          "Industrial Chemistry",
          "Microbiology",
          "Physics",
          "Statistics",
          // Add more departments as needed
        ],
        "Faculty of Humanities and Social Sciences": [
          "Economics",
          "Mass Communication",
          "Political Science/Public Administration",
          "Sociology",
          // Add more departments as needed
        ],
        "Faculty of Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Marketing",
          // Add more departments as needed
        ],
      },
    },

    "Ritman University, Ikot Ekpene": {
      faculties: {
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Biology",
          "Chemistry",
          "Computer Science",
          "Cyber Security",
          "Industrial Chemistry",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Software Engineering",
          // Add more departments as needed
        ],
        "Faculty of Social and Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Economics",
          "Industrial Relations and Personnel Management",
          "Mass Communication",
          "Political Science and Public Administration",
          "Sociology",
          "Management",
          // Add more departments as needed
        ],
        "Faculty of Humanities": [
          "History and International Studies",
          "Language and Literary Studies",
          // Add more departments as needed
        ],
      },
    },

    "Salem University, Lokoja": {
      faculties: {
        "Faculty of Law": [
          "Law",
          // Add more departments as needed
        ],
        "Faculty of Natural and Applied Sciences": [
          "Biotechnology",
          "Microbiology",
          "Information Technology",
          "Computer Science",
          // Add more departments as needed
        ],
        "Faculty of Social and Management Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Mass Communication",
          "Criminology and Security Studies",
          // Add more departments as needed
        ],
        "Faculty of Arts and Humanities": [
          "English Language",
          "History and Diplomatic Studies",
          // Add more departments as needed
        ],
      },
    },

    "Samuel Adegboyega University, Ogwa": {
      faculties: {
        "College of Basic and Applied Sciences": [
          "Biochemistry",
          "Chemistry",
          "Computer Science",
          "Industrial Chemistry",
          "Mathematics",
          "Microbiology",
          "Physics",
          "Statistics",
          // Add more departments as needed
        ],
        "College of Humanities": [
          "English Language",
          "History and Diplomatic Studies",
          "Philosophy",
          "Religious Studies",
          "French",
          // Add more departments as needed
        ],
        "College of Management and Social Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Economics",
          "Mass Communication",
          "Public Administration",
          // Add more departments as needed
        ],
      },
    },

    "Southwestern University, Okun-Owa": {
      faculties: {
        "Faculty of Pure and Applied Sciences": [
          "Chemistry",
          "Industrial Chemistry",
          "Biochemistry",
          "Biology",
          "Physics",
          "Physics & Electronics",
          "Computer Science",
          "Mathematics",
          // Add more departments as needed
        ],
        "Faculty of Social & Management Sciences": [
          "Accounting",
          "Banking & Finance",
          "Business Administration",
          "Marketing",
          "Management Information Science",
          "Economics",
          "Mass Communication",
          "Political Science",
          "International Relations",
          // Add more departments as needed
        ],
      },
    },

    "Summit University, Offa": {
      faculties: {
        "College of Humanities": [
          "Arabic and Islamic Studies",
          "English and Literary Studies",
          // Add more departments as needed
        ],
        "College of Natural and Applied Sciences": [
          "Biological Sciences",
          "Chemical Sciences",
          "Mathematics and Computer Sciences",
          // Add more departments as needed
        ],
        "College of Social and Management Sciences": [
          "Mass Communication",
          "Management and Accounting",
          "Economics",
          "Political Science",
          // Add more departments as needed
        ],
      },
    },

    "Tansian University, Umunya": {
      faculties: {
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Chemistry",
          "Computer Science",
          "Industrial Chemistry",
          "Information and Communication Technology",
          "Microbiology",
          "Physics",
          "Physics and Electronics",
          // Add more departments as needed
        ],
        "Faculty of Management and Social Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Criminology and Security Studies",
          "Economics",
          "Economics and Statistics",
          "International Relations",
          "Mass Communication",
          "Philosophy and Religious Studies",
          "Political Science",
          "Public Administration",
          "Statistics",
          // Add more departments as needed
        ],
        "Faculty of Education": [
          "Special Education",
          "Arts Education",
          "Science Education",
          "Social Science and Vocational Education",
          // Add more departments as needed
        ],
        "Faculty of Environmental Sciences": [
          "Architecture",
          "Estate Management",
          "Urban and Regional Planning",
          // Add more departments as needed
        ],
        "Faculty of Health Sciences": [
          "Nursing Science",
          "Medical Laboratory Science",
          "Public Health",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Civil Law",
          // Add more departments as needed
        ],
      },
    },

    "University of Mkar, Mkar": {
      faculties: {
        "College of Arts": [
          "English Language",
          "History and International Studies",
          "Religious Studies",
          // Add more departments as needed
        ],
        "College of Science and Education": [
          "Biological Sciences",
          "Chemistry",
          "Mathematics and Statistics",
          "Physics",
          "Education",
          // Add more departments as needed
        ],
        "College of Social and Management Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Political Science",
          "Sociology",
          // Add more departments as needed
        ],
        "College of Food Science and Technology": [
          "Food Science and Technology",
          "Home Science and Management",
          // Add more departments as needed
        ],
      },
    },

    "Veritas University, Abuja": {
      faculties: {
        "College of Natural and Applied Sciences": [
          "Industrial Chemistry",
          "Biochemistry",
          "Applied Microbiology",
          "Computer Science",
          "Physics with Electronics",
          // Add more departments as needed
        ],
        "College of Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Administration",
          "Marketing and Advertising",
          "Entrepreneurship",
          "Public Administration",
          // Add more departments as needed
        ],
        "College of Humanities": [
          "English and Literary Studies",
          "History and International Relations",
          "Philosophy",
          "Religious Studies",
          // Add more departments as needed
        ],
        "College of Social Sciences": [
          "Mass Communication",
          "Economics",
          "Political Science and Diplomacy",
          // Add more departments as needed
        ],
        "College of Education": [
          "Business Education",
          "Educational Management",
          "Education and English",
          "Education and Economics",
          "Guidance and Counselling",
          "Science Education",
          // Add more departments as needed
        ],
        Law: [
          "Law",
          // Add more departments as needed
        ],
      },
    },

    "Wellspring University, Benin City": {
      faculties: {
        "College of Natural and Applied Sciences": [
          "Biochemistry",
          "Biology",
          "Chemistry",
          "Computer Science",
          "Microbiology",
          "Mathematics",
          "Physics",
          // Add more departments as needed
        ],
        "College of Social and Management Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Entrepreneurship",
          "Political Science",
          "Public Administration",
          // Add more departments as needed
        ],
        "College of Health Sciences": [
          "Medical Laboratory Science",
          "Nursing",
          "Public Health",
          // Add more departments as needed
        ],
        "College of Computing": [
          "Information Technology",
          "Cyber Security",
          "Software Engineering",
          // Add more departments as needed
        ],
      },
    },

    "Wesley University, Ondo": {
      faculties: {
        "College of Natural and Applied Sciences": [
          "Biotechnology",
          "Biochemistry",
          "Microbiology",
          "Industrial Chemistry",
          "Industrial Mathematics",
          "Physics with Electronics",
          "Computer Science",
          // Add more departments as needed
        ],
        "College of Arts and Social Sciences": [
          "Economics",
          "English Language",
          "History and International Studies",
          "Mass Communication",
          "Political Science",
          "Sociology and Anthropology",
          // Add more departments as needed
        ],
        "College of Health Sciences": [
          "Nursing Science",
          "Public Health",
          "Physiotherapy",
          "Medical Laboratory Science",
          "Radiography and Radiation Science",
          // Add more departments as needed
        ],
        "College of Management Sciences": [
          "Accounting",
          "Banking and Finance",
          "Business Management",
          "Marketing",
          // Add more departments as needed
        ],
      },
    },

    "Western Delta University, Oghara": {
      faculties: {
        "Faculty of Natural and Applied Sciences": [
          "Biochemistry",
          "Computer Science",
          "Geology and Petroleum Studies",
          "Industrial Chemistry",
          "Microbiology",
          "Physics with Electronics",
          "Environmental Management and Toxicology",
          "Cyber Security",
          "Information Technology",
          // Add more departments as needed
        ],
        "Faculty of Social and Management Sciences": [
          "Accounting",
          "Business Administration",
          "Economics",
          "Mass Communication",
          "Political Science and Public Administration",
          "Criminology and Security Studies",
          "International Relations",
          // Add more departments as needed
        ],
        "Faculty of Law": [
          "Law",
          // Add more departments as needed
        ],
      },
    },
  };

  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(
    formik.values.faculty || "",
  );

  // Initialize faculties and departments based on initial university and faculty
  useEffect(() => {
    if (formik.values.university_name) {
      const availableFaculties = Object.keys(
        universityFaculties[formik.values.university_name]?.faculties || {},
      );
      setFaculties(availableFaculties);

      if (
        formik.values.faculty &&
        availableFaculties.includes(formik.values.faculty)
      ) {
        const availableDepartments =
          universityFaculties[formik.values.university_name]?.faculties[
            formik.values.faculty
          ] || [];
        setDepartments(availableDepartments);
      }
    }
  }, [formik.values.university_name, formik.values.faculty]);

  const handleUniversityChange = (e) => {
    const university = e.target.value;
    setFaculties(Object.keys(universityFaculties[university]?.faculties || {}));
    setDepartments([]); // Clear departments when university changes
    setSelectedFaculty(""); // Clear selected faculty
    formik.setFieldValue("university_name", university);
    formik.setFieldValue("faculty", "");
    formik.setFieldValue("department", "");
  };

  const handleFacultyChange = (e) => {
    const faculty = e.target.value;
    setSelectedFaculty(faculty);
    const availableDepartments =
      universityFaculties[formik.values.university_name]?.faculties[faculty] ||
      [];
    setDepartments(availableDepartments);
    formik.setFieldValue("faculty", faculty);
    formik.setFieldValue("department", "");
  };

  const handleDepartmentChange = (e) => {
    formik.setFieldValue("department", e.target.value);
  };

  // const handleNext = () => {
  //   formik.setTouched({});
  //   formik.validateForm().then(errors => {
  //     if (Object.keys(errors).length === 0) {
  //       onNext();
  //     } else {
  //       console.log('Validation errors:', errors);
  //     }
  //   });
  // };

  return (
    <div className="max-w-lg mx-auto mt-1 p-5 shadow-lg rounded-lg bg-white bg-opacity-10">
      {/* Form Container */}
      <div className="flex flex-col items-center gap-2">
        <Img
          src="images/img_logo.png"
          alt="Logo"
          className="h-20 w-50 object-contain"
        />
      </div>
      <h2
        className="text-center text-2xl mb-4 mt-3 text-white !important"
        style={{ color: "white" }}
      >
        Academic Information
      </h2>
      {/* <Heading as="h2" className="text-white text-center mb-4 font-normal" style={{ color: 'white' }}>
        Let&rsquo;s get started by collecting some basic information
      </Heading> */}

      <Select
        label={
          <span className="text-white font-normal" style={{ color: "white" }}>
            University Name
          </span>
        }
        name="university_name"
        options={Object.keys(universityFaculties).map((uni) => ({
          value: uni,
          label: uni,
        }))}
        value={formik.values.university_name}
        onChange={handleUniversityChange}
        className="mb-4"
      />

      <Select
        label={
          <span className="text-white font-normal" style={{ color: "white" }}>
            Faculty
          </span>
        }
        name="faculty"
        options={faculties.map((faculty) => ({
          value: faculty,
          label: faculty,
        }))}
        value={selectedFaculty}
        onChange={handleFacultyChange}
        className="mb-4"
        disabled={faculties.length === 0}
      />

      <Select
        label={
          <span className="text-white font-normal" style={{ color: "white" }}>
            Department
          </span>
        }
        name="department"
        options={departments.map((department) => ({
          value: department,
          label: department,
        }))}
        value={formik.values.department}
        onChange={handleDepartmentChange}
        className="mb-4"
        disabled={departments.length === 0}
      />

      <div className="flex flex-col gap-2 mt-4">
        <Button
          className="bg-foundation-primary_color-p400 hover:bg-foundation-primary_color-p300 text-white !important rounded-lg w-full py-2"
          style={{ color: "white" }}
          rightIcon={
            <Img
              src="images/img_chevron-right.svg"
              alt="Arrow Right"
              className="h-[12px] w-[12px]"
            />
          }
          onClick={onNext} // Use handleNext to validate before proceeding
        >
          Next
        </Button>

        <Button
          className="bg-gray-300 hover:bg-gray-400 text-black rounded-lg w-full py-2"
          leftIcon={
            <Img
              src="images/img_chevronleft.svg"
              alt="Chevron-left"
              className="h-[12px] w-[12px]"
            />
          }
          onClick={onBack}
        >
          Go back
        </Button>
      </div>
    </div>
  );
};

// PropTypes validattion for better type safety
UniversityInfoDetails.propTypes = {
  role: PropTypes.object.isRequired,
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  formik: PropTypes.shape({
    values: PropTypes.shape({
      university_name: PropTypes.string.isRequired,
      faculty: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    setTouched: PropTypes.func.isRequired,
    validateForm: PropTypes.func.isRequired,
  }).isRequired,
};

export default UniversityInfoDetails;
