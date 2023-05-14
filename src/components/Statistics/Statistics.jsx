import PropTypes from 'prop-types';
import css from './statistics.module.css'

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.statList}>
                {stats.map((stat) => {
                    const bgColor = {
                        backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 100%, 30%)`,
                    };
                    return (
                        <li className={css.item} style={bgColor} key={stat.id}>
                            <span className={css.label}>{stat.label}</span>
                            <span className={css.percentage}>{stat.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

export default Statistics