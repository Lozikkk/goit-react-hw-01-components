import React from 'react';

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      <ul class="stat-list">
        {stats.map(num => (
          <li class="item" key={num.id}>
            <span class="label">{num.label}</span>
            <span class="percentage">{num.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
