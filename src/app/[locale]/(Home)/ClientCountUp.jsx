'use client';
import CountUp from 'react-countup';

const ClientCountUp = ({ start, end, duration, separator, suffix }) => {
    return (
        <CountUp
            start={start}
            end={end}
            duration={duration}
            separator={separator}
            suffix={suffix}
        />
    );
};

export default ClientCountUp;
