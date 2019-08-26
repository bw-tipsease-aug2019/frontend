import React from 'react'
import TipCard from './TipCard'

export default function TipList(props) {
    return (
        <div className="tip-list">
            {/* props.tips.map() */}
            <TipCard />
            <TipCard />
            <TipCard />
            <TipCard />
            <TipCard />
            <TipCard />
        </div>
    )
}