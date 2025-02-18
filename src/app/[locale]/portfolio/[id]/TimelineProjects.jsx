'use client'
import { Timeline } from 'antd'
import React from 'react'

const TimelineProjects = ({ scopes, translations, lang }) => {
    console.log(scopes.scopes);

    return (
        <div>
            <div className="project-goals">
                <div className="info-title">{translations.scope}</div>
                <Timeline>
                    {scopes?.scopes.map((item, index) => (
                        <Timeline.Item key={index}>
                            <span>{lang == "ar" ? item?.scope_ar : item?.scope_en}</span>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </div>
        </div>
    )
}

export default TimelineProjects