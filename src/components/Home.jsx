import React from 'react';
import uwLogo from '/public/img/uwlogo.png';
import wicLogo from '/public/img/wiclogo.png';
import wicLogo2 from '/public/img/wiclogo2.png'
import banner from '/public/img/banner.png';

const Home = ({onNavigateToOverview}) => {
    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            fontFamily: "'Questrial', sans-serif",
            overflow: 'hidden',
            backgroundColor: '#f5f5f5'
        }}>


            <img
                src={banner}
                alt="Banner"
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    height: 'auto',
                    marginBottom: '3rem',
                    marginTop: '0.4rem',
                }}
            />

            {/* LOGOS */}
            <img
                src={wicLogo}
                alt="WIC Logo"
                style={{
                    position: 'absolute',
                    top: '1.8rem',
                    right: '3rem',
                    width: '150px',
                    height: 'auto',
                }}
            />


            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
            }}>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                    <div style={{
                        backgroundColor: 'black',
                        color: 'white',
                        fontWeight: '700',
                        fontSize: '1.25rem',
                        padding: '0.75rem 2rem',
                        borderRadius: '12px',
                        maxWidth: '800px',
                        width: '100%',
                        textAlign: 'center',
                        fontFamily: "'Questrial', sans-serif",
                        letterSpacing: '0.5px',
                        boxSizing: 'border-box',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        textShadow: '0.5px 0.5px 0',
                    }}>
                        INTRODUCTION
                    </div>
                </div>


                <div style={{marginTop: '1.5rem', maxWidth: '65%'}}>
                    <p style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.8',
                        textAlign: 'left',
                        color: '#333',
                    }}>
                        Welcome to DevSecOps Lab In A Box, a hands-on training program designed by Women in Cloud in collaboration with University of Washington and Boeing to help faculty and student build secure, AI-powered, cloud-native applications. With the DevSecOps market expected to surpass $23B by 2030, this program fills critical talent gaps where 40% of students lack real-world experience and 1 in 3 have never heard of DevSecOps.  You'll gain access to real labs, subsidized access to Microsoft certifications, and project-based learning to master Zero Trust, AI safety, and DataOps.  Through this lab, students will develop in-demand skills and confidence to thrive in the modern tech economy.<br/><br/>
                        <strong>Start now—unlock your roadmap, join the lab, and launch your future in secure innovation.</strong>
                    </p>
                </div>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginTop: '2rem'
            }}>
                <button
                    onClick={onNavigateToOverview}
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        fontWeight: '700',
                        fontSize: '1.25rem',
                        padding: '0.75rem 2rem',
                        borderRadius: '12px',
                        maxWidth: '800px',
                        width: '100%',
                        textAlign: 'center',
                        fontFamily: "'Questrial', sans-serif",
                        letterSpacing: '0.5px',
                        boxSizing: 'border-box',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none',
                        textShadow: '0.5px 0.5px 0',
                    }}
                    onMouseOver={e => {
                        e.currentTarget.style.transform = 'translate(-2px, -2px)';
                        e.currentTarget.style.backgroundColor = '#333';
                        e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseOut={e => {
                        e.currentTarget.style.transform = 'translate(0, 0)';
                        e.currentTarget.style.backgroundColor = 'black';
                        e.currentTarget.style.textDecoration = 'none';
                    }}
                >
                    → START YOUR JOURNEY ←
                </button>
            </div>

            <div style={{
                marginTop: '3rem',
                width: '100%',
                maxWidth: '1000px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: "'Questrial', sans-serif",
            }}>

                {/* Section Title */}
                <div style={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    padding: '0.75rem 2rem',
                    borderRadius: '12px',
                    maxWidth: '800px',
                    width: '100%',
                    textAlign: 'center',
                    fontFamily: "'Questrial', sans-serif",
                    letterSpacing: '0.5px',
                    boxSizing: 'border-box',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    textShadow: '0.5px 0.5px 0',
                }}>
                    RESOURCES
                </div>

                {/* Resource Columns */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '75%',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    marginTop: '2rem',
                    marginBottom: '2rem'
                }}>
                    {/* Column 3 - Technical Resources */}
                    <div style={{flex: 1, minWidth: '150px'}}>
                        <div style={{
                            fontFamily: "'Questrial', sans-serif",
                            fontWeight: 'bold',
                            marginBottom: '0.5rem',
                            marginLeft: '1rem',
                            fontSize: '1.125rem',
                            textShadow: '0.4px 0.4px 0 #333',
                        }}>Getting Started
                        </div>
                        <ul style={{paddingLeft: '1.2rem', color: '#333', fontSize: '1rem', lineHeight: '1.6'}}>
                            <li>
                            <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333'}}>
                               Understand DevSecOps Lab In A Box</p>
                            </li>
                            <li>
                            <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333'}}>
                            Access the DevSecOps Gameboard</p>
                            </li>
                            <li>
                            <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333'}}>
                            Watch the Lab Videos</p>
                            </li>
                        </ul>
                    </div>
                    {/* Column 3 - Technical Resources */}
                    <div style={{flex: 1, minWidth: '150px'}}>
                        <div style={{
                            fontFamily: "'Questrial', sans-serif",
                            fontWeight: 'bold',
                            marginBottom: '0.5rem',
                            marginLeft: '1rem',
                            fontSize: '1.125rem',
                            textShadow: '0.4px 0.4px 0 #333',
                        }}>Technical Resources
                        </div>
                        <ul style={{paddingLeft: '1.2rem', color: '#333', fontSize: '1rem', lineHeight: '1.6'}}>
                            <li>
                            <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333'}}>
                            Cloud Provider : Azure & Azure Managed Services</p>
                            </li>
                            <li>
                            <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333'}}>
                            Github / Github Pages</p>
                            </li>
                            <li>
                            <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333'}}>
                            Jenkins/ Docker/ Sonar Qube</p> </li>
                            <li>
                            <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333'}}>
                            Terraform</p>
                            </li>
                        </ul>
                    </div>
                    {/* Column 1 - Certification */}
                    <div style={{flex: 1, minWidth: '250px'}}>
                        <div style={{
                            fontFamily: "'Questrial', sans-serif",
                            fontWeight: 'bold',
                            marginBottom: '0.5rem',
                            fontSize: '1.125rem',
                            textShadow: '0.4px 0.4px 0 #333',
                        }}>WICxDevSecOps Certifications
                        </div>
                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                            <img src={wicLogo2} alt="WIC Logo 2" style={{width: '80px'}}/>
                            <ul style={{paddingLeft: '1.2rem', color: '#333', fontSize: '1rem', lineHeight: '1.6'}}>
                            <li>
                            <a href="https://womenincloud.com/workforce/" target="_blank" rel="noopener noreferrer"
                                   style={{color: '#4B2E83', textDecoration: 'underline'}}>Learn about Women In Cloud Opportunities
                                   </a>
                            </li>
                            <li>
                            <a href="#" target="_blank" rel="noopener noreferrer"
                                   style={{color: '#4B2E83', textDecoration: 'underline'}}>Job Readiness Curriculum
                                   </a>
                            </li>
                            <li>
                            <a href="https://womenincloud.com/devsecops/" target="_blank" rel="noopener noreferrer"
                                   style={{color: '#4B2E83', textDecoration: 'underline'}}>Join the Global Network
                                   </a>
                            </li>
                            </ul>
                        </div>
                    </div>


                    
                </div>
            </div>


            {/* Project Documentation Link */}
            <div style={{
                textAlign: 'left',
                width: '65%',
                marginTop: '1rem',
                fontSize: '1.125rem',
                color: '#333',
                fontFamily: "'Questrial', sans-serif",
                display:"none"
            }}>
                📄 We include our{' '}
                <a
                    href="https://docs.google.com/document/d/1410H9-Ie34mL3dqezcMvww_xJS-xqzh7ZH4NO9728W8/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#4B2E83',
                        textDecoration: 'underline',
                        fontWeight: '600',
                    }}
                >
                    project documentation
                </a>{' '}
                here, including market research analysis.
            </div>


            {/* Credits Section */}
            <div style={{marginTop: '1.5rem', width: '85%', textAlign: 'center',display:"none" }}>
                <div style={{ fontWeight: '600', fontSize: '1.25rem', marginBottom: '0.3rem' }}>
                    🎖️ Core Credits
                </div>
                <div style={{
                    height: '3px',
                    width: '80%',
                    backgroundColor: '#4B2E83',
                    margin: '0 auto 1.5rem auto',
                    borderRadius: '2px',
                }}></div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '2rem',
                    width: '80%',
                    margin: '0 auto',
                }}>
                    {[
                        {
                            title: 'Women in Cloud Team',
                            members: ['Chaitra Vedullapalli', 'Andrea Herrera', 'Chelsea Bland']
                        },
                        {
                            title: 'Boeing WiC Team',
                            members: ['Geetha Sitaraman', 'Jared Kunz', 'Uzma Khan', 'Jennifer R. Davis']
                        },
                        {
                            title: 'UW Student Team XYKK',
                            members: ['Xinyi Wang', 'Jiaqi (Kiki) He', 'Xinya Tang', 'Kevin Ko']
                        }
                    ].map((group, idx) => (
                        <div key={idx} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontWeight: '600',
                                marginBottom: '0.5rem',
                                fontSize: '1.125rem',
                                textShadow: '0.3px 0.3px 0 #aaa',
                            }}>{group.title}</div>
                            <ul style={{
                                listStyle: 'none',
                                paddingLeft: 0,
                                margin: 0,
                            }}>
                                {group.members.map((name, i) => (
                                    <li key={i} style={{ marginBottom: '0.3rem' }}>{name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Acknowledgments Section */}
            <div style={{ marginTop: '1.5rem', width: '85%', textAlign: 'center' , display:"none"}}>
                <div style={{ fontWeight: '600', fontSize: '1.25rem', marginBottom: '0.3rem' }}>
                    ❤ Special Thanks
                </div>
                <div style={{
                    height: '3px',
                    width: '80%',
                    backgroundColor: '#4B2E83',
                    margin: '0 auto 1.5rem auto',
                    borderRadius: '2px',
                }}></div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '2rem',
                    width: '80%',
                    margin: '0 auto',
                }}>
                    {[
                        {
                            title: 'UW 2024 Student Team Info Innovators',
                            members: ['Sirena Akopyan', 'Bhavya Garlapati', 'Eric Kim', 'Mari Woodworth', 'Brandon Mendoza']
                        },
                        {
                            title: 'UW Faculty',
                            members: ['Prof. Steven Gustafson', 'Prof. Simon (Wu-Ping) Wang', 'TA Damian Hodel']
                        }
                    ].map((group, idx) => (
                        <div key={idx} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontWeight: '600',
                                marginBottom: '0.5rem',
                                fontSize: '1.125rem',
                                textShadow: '0.3px 0.3px 0 #aaa',
                            }}>{group.title}</div>
                            <ul style={{
                                listStyle: 'none',
                                paddingLeft: 0,
                                margin: 0,
                            }}>
                                {group.members.map((name, i) => (
                                    <li key={i} style={{ marginBottom: '0.3rem' }}>{name}</li>
                                ))}
                            </ul>
                            {group.title === 'UW 2024 Student Team Info Innovators' && (
                                <div style={{ marginTop: '0.25rem', fontSize: '0.8rem' }}>
                                    <a
                                        href="https://open-devsecops.github.io/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'underline', color: '#4B2E83' }}
                                    >
                                        View their DevOps & DevSecOps tutorial on Amazon AWS
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>





            <div style={{
                position: 'absolute',
                bottom: '2rem',
                right: '2rem',
                fontSize: '1.125rem',
                fontWeight: 'bolder',
                color: '#4B2E83',
                fontFamily: "'Questrial', sans-serif",
                textShadow: '0.5px 0.5px 0',
                display:"none"
            }}>
                DESIGNED BY TEAM XYKK
            </div>

            <img
                src={uwLogo}
                alt="UW Logo"
                style={{
                    position: 'absolute',
                    bottom: '0rem',
                    right: '2rem',
                    width: '200px',
                    height: 'auto',
                    display:"none"
                }}
            />
        </div>
    );
};

export default Home;