import React, { useState, useRef } from 'react';
import Connector from './Connector';
import './RecruitmentFlow.css';

function RecruitmentFlow() {
  // Befintliga state-variabler
  const [activeStep, setActiveStep] = useState(null);
  const [selectedSubStep, setSelectedSubStep] = useState(null);

  // Definiera en ref-array för stegen
  const stepRefs = useRef([]);

  // Dina steg
  const steps = [
    {
      id: 1,
      title: "Uppstart",
      description: ["Planering", "Tidsplan", "Ansvarsfördelning"],
      icon: "🔧",
      details: "Uppstart handlar om att planera och definiera projektets mål.",
      subSteps: [
        {
          title: "Innan uppstartsmöte",
          infoList: [
            "Titta i dokumentet ”Specifikt dokument för medarbetarrekrytering hos förvaltning X” om det är någon speciellt som du behöver tänka på",
            "Utkast på tidplan (titta med fördel i kundens kalender)",
            "Skapa ärendet i rekryteringssystemet, lägg till berörda personer på ärendet och välj roll",
            "Lägg till krav och meriterande i kravprofilen utifrån tidigare underlag. För kund välj roll rekryterande chef",
            "OBS lägg alltid till matchningen. Välj roll matchning",
            "Läs på om rollen, organisationen, enheten och titta eventuellt igenom tidigare material i rekryteringssystemet",
            "Anpassa behovsanalys utifrån tjänsten",
            "Stämma av med Employer Branding (EB) om möjliga annonseringskanaler och bjud ev med dem i slutet av mötet vid svårrekryterad tjänst."
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Under uppstartsmöte",
          infoList: [
            "Rekryteringsprocessens olika steg (se processbilden + tidplan)",
            "Informera om intern och extern annonsering",
            "Gör en behovsanalys utifrån kunds behov (se Behovsanalys för rekryteringspaket)",
            "Fastställ tidsplanen",
            "Anpassa tidplanen vid film och LinkedIn Search.",
            "Besluta om annan annonsering. Sociala media eller/och branschspecifika annonseringskanaler.",
            "Besluta om andra tillval som tester eller search på LinkedIn.",
            "Informera kund om deras tillgång till rekryteringssystemet och exempelvis vikten av att godkänna dokument rekryteringssystemet.",
            "Utforma utkast på kravprofil.",
            "Rekommendation: 4-6 personliga kompetenser. Inga personliga kompetenser är obligatoriska i kravprofilen men vissa är mer frekvent förekommande (ex personlig mognad och samarbetsförmåga).",
            "Om utdrag ur belastningsregistret krävs eller det är en säkerhetsklassad tjänst ska det stå med i kravprofilen.",
            "Diskutera vilka medarbetare som ska vara med i processen så som deltagande på intervjuer och som ska ges läsbehörighet i rekryteringssystemet. Läsbehörighet ges med försiktighet. Vanligtvis har enbart rekryterande chef tillgång till ansökningarna.",
            "Informera rekryterande chefer om deras behörighet i systemet:",
            "Kravprofil: Godkänna",
            "Annons: Godkänna",
            "Urvalgradering: Behörighet att göra gradering i systemet (valfritt) följ definitionen av 1-3.",
            "Utvärderingsfliken: Att ni tillsammans utvärderar kandidaterna efter sista intervjun.",
            "Samla projektgrupp"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Efter uppstartsmöte",
          infoList: [
            "Lägg till medarbetare under ärendedetaljer som fått godkänt av chef att läsa ansökningarna i rekryteringssystemet, välj roll ”läsbehörighet i rekryteringsgrupp”. Om chef eller medarbetare inte finns i systemet, maila rekryteringsenheten@vasteras.se så lägger de till dessa. Därefter kan du lägga till dem i ärendedetaljer som ”rekryterande chef resp. medarbetare med” läsbehörighet i rekryteringsgrupp.",
            "Kravprofilen färdigställs och HR-konsult skickar notifiering om godkännande till kund eller godkänner i systemet på egen hand efter instruktion från kund. Efter godkänd kravprofil skickas notifiering om diarieföring till administrationen. I kravprofilen kryssa för: Inkludera referenser i kandidatutvärderingen. Lägsta utbildningskrav för alla tjänster inom Västerås stad är Gymnasial utbildning men inte gymnasieexamen.",
            "Såvida rekryteringen inte är stängd kan man plussa på tjänster i efterhand under förutsättning att kravprofilen och tjänst är densamma. På en kravprofil för en tillsvidaretjänst kan man plussa på vikariat men det går inte att plussa på en tillsvidaretjänst på en kravprofil för ett vikariat.",
            "HR-konsult skickar alla bokningar i Outlook till berörda parter och efter överenskommelse mejlas tidplanen till rekryterande chef och sparas på ärendet i rekryteringssystemet.",
            "Vid annonsering via sociala media (FB/LinkedIn/Schib.) Skicka foto/filmbeställning till jobbannons@vasteras.se",
            "Vid beställning av LinkedIn-Search följ rutinen på Insidan. Skicka förfrågan så tidigt som möjligt i processen. Tänk på att tjänsten kräver tre veckors annonseringstid.",
            "OBS! Vid justeringar i kravprofilen efter diarieföring är det viktigt att meddela administrationen som gör en ny dokumentation i Ciceron för den nya kravprofilen samt matchningen om det är okej att gå vidare med kravprofilen för annonsering.",
            "Internrekrytering: Rekryterande chef kan välja att annonsera tjänsten externt eller internt. Vid internrekrytering se Rutin för Internrekrytering Västerås stad. Pågående anställning inom staden måste vara ett krav i kravprofilen. Denna tjänst riktar sig till dig som har en pågående anställning på Västerås stad ska stå överst i annonsen."
          ],
          link: "https://www.vasteras.se"
        }
      ],
    },
    {
      id: 2,
      title: "Kravprofil",
      description: ["Kompetenskrav", "Erfarenhetskrav", "Personliga egenskaper"],
      icon: "📋",
      details: "Skapa en detaljerad kravprofil för den lediga tjänsten.",
      subSteps: [
        {
          title: "Test 1",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Test 2",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Test 3",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        }
      ]
    },
    {
      id: 3,
      title: "Annons",
      description: ["Skapa annons", "Publicering", "Marknadsföring"],
      icon: "📢",
      details: "Formulera och publicera en attraktiv jobbannons.",
      subSteps: [
        {
          title: "Test 1",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Test 2",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Test 3",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        }
      ]
    },
    {
      id: 4,
      title: "Urval",
      description: ["CV-granskning", "Screening", "Första urval"],
      icon: "🔍",
      details: "Genomför en noggrann urvalsprocess baserat på kriterier.",
      subSteps: [
        {
          title: "Test 1",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Test 2",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Test 3",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        }
      ]
    },
    {
      id: 5,
      title: "Intervju",
      description: ["Planera intervjuer", "Genomföra", "Utvärdera kandidater"],
      icon: "🎤",
      details: "Genomför strukturerade intervjuer med kandidater.",
      subSteps: [
        {
          title: "Test 1",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Test 2",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Test 3",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        }
      ]
    },
    {
      id: 6,
      title: "Referenser/test",
      description: ["Kontakta referenser", "Testning", "Sammanställa resultat"],
      icon: "📊",
      details: "Kontrollera referenser och genomför tester för validering.",
      subSteps: [
        {
          title: "Test 1",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Test 2",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Test 3",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        }
      ]
    },
    {
      id: 7,
      title: "Beslutsmöte",
      description: ["Val av kandidat", "Erbjudande", "Uppföljning"],
      icon: "🏁",
      details: "Fatta beslut om anställning och erbjud kontrakt.",
      subSteps: [
        {
          title: "Test 1",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Test 2",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        },
        {
          title: "Test 3",
          infoList: [
            "Gå igenom syfte och mål",
            "Samla projektgrupp",
            "Fastställ förväntningar"
          ],
          link: "https://www.vasteras.se"
        }
      ]
    }
  ];

  // Klick-funktioner
  const handleStepClick = (stepId) => {
    if (activeStep === stepId) {
      setActiveStep(null);
      setSelectedSubStep(null);
    } else {
      setActiveStep(stepId);
      setSelectedSubStep(null);
    }
  };

  const handleSubStepClick = (sub) => {
    setSelectedSubStep(sub);
  };

  return (
    <div className="flow-container" style={{ position: 'relative' }}>
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`step-container ${activeStep === step.id ? 'active' : ''}`}
          ref={(el) => (stepRefs.current[index] = el)}
          onClick={() => handleStepClick(step.id)}
        >
          {/* Huvudsteget */}
          <div className={`step ${activeStep === step.id ? 'active' : 'inactive'}`}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <ul>
              {step.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            <div className="step-number">{step.id}</div>
          </div>

          {/* Detaljer + underrubriker om steget är öppet */}
          {activeStep === step.id && (
            <div className="step-details">
              <div className="arrow-down"></div>
              <p>{step.details}</p>
              <p>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  Läs mer
                </a>
              </p>
              <div className="sub-steps">
                {step.subSteps.map((sub, idx) => (
                  <div key={idx} className="sub-step-container">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubStepClick(sub);
                      }}
                    >
                      {sub.title}
                    </button>
                    {selectedSubStep?.title === sub.title && (
                      <div className="substep-info">
                        <h4>{sub.title}</h4>
                        {sub.infoList && (
                          <ul>
                            {sub.infoList.map((bullet, i) => (
                              <li key={i}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                        <a href={sub.link} target="_blank" rel="noopener noreferrer">
                          {sub.link}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Rita Connector-komponenter mellan varje par av steg */}
      {steps.map((_, index) => {
        if (index < steps.length - 1) {
          return (
            <Connector
              key={`connector-${index}`}
              startRef={{ current: stepRefs.current[index] }}
              endRef={{ current: stepRefs.current[index + 1] }}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default RecruitmentFlow;
