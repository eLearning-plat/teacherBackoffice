<script setup lang="js">
import LineChart from '../ui/chart-line/LineChart.vue';
const colors = ['#388E3C', '#4B92DB'];
const data = [
  {
    'year': 1970,
    'Blog': 2.04,
    'Reaction': 1.53,
  },
  {
    'year': 1971,
    'Blog': 1.96,
    'Reaction': 1.58,
  },
  {
    'year': 1972,
    'Blog': 1.96,
    'Reaction': 1.61,
  },
  {
    'year': 1973,
    'Blog': 1.93,
    'Reaction': 1.61,
  },
  {
    'year': 1974,
    'Blog': 1.88,
    'Reaction': 1.67,
  },
  {
    'year': 1975,
    'Blog': 1.79,
    'Reaction': 1.64,
  },
  {
    'year': 1976,
    'Blog': 1.77,
    'Reaction': 1.62,
  },
  {
    'year': 1977,
    'Blog': 1.74,
    'Reaction': 1.69,
  },
  {
    'year': 1978,
    'Blog': 1.74,
    'Reaction': 1.7,
  },
  {
    'year': 1979,
    'Blog': 1.77,
    'Reaction': 1.67,
  },
  {
    'year': 1980,
    'Blog': 1.79,
    'Reaction': 1.7,
  },
  {
    'year': 1981,
    'Blog': 1.81,
    'Reaction': 1.72,
  },
  {
    'year': 1982,
    'Blog': 1.84,
    'Reaction': 1.73,
  },
  {
    'year': 1983,
    'Blog': 1.77,
    'Reaction': 1.73,
  },
  {
    'year': 1984,
    'Blog': 1.78,
    'Reaction': 1.78,
  },
  {
    'year': 1985,
    'Blog': 1.78,
    'Reaction': 1.81,
  },
  {
    'year': 1986,
    'Blog': 1.82,
    'Reaction': 1.89,
  },
  {
    'year': 1987,
    'Blog': 1.82,
    'Reaction': 1.91,
  },
  {
    'year': 1988,
    'Blog': 1.77,
    'Reaction': 1.94,
  },
  {
    'year': 1989,
    'Blog': 1.76,
    'Reaction': 1.94,
  },
  {
    'year': 1990,
    'Blog': 1.75,
    'Reaction': 1.97,
  },
  {
    'year': 1991,
    'Blog': 1.62,
    'Reaction': 1.99,
  },
  {
    'year': 1992,
    'Blog': 1.56,
    'Reaction': 2.12,
  },
  {
    'year': 1993,
    'Blog': 1.5,
    'Reaction': 2.13,
  },
  {
    'year': 1994,
    'Blog': 1.46,
    'Reaction': 2.15,
  },
  {
    'year': 1995,
    'Blog': 1.43,
    'Reaction': 2.17,
  },
  {
    'year': 1996,
    'Blog': 1.4,
    'Reaction': 2.2,
  },
  {
    'year': 1997,
    'Blog': 1.37,
    'Reaction': 2.15,
  },
  {
    'year': 1998,
    'Blog': 1.34,
    'Reaction': 2.07,
  },
  {
    'year': 1999,
    'Blog': 1.32,
    'Reaction': 2.05,
  },
  {
    'year': 2000,
    'Blog': 1.33,
    'Reaction': 2.07,
  },
  {
    'year': 2001,
    'Blog': 1.31,
    'Reaction': 2.08,
  },
  {
    'year': 2002,
    'Blog': 1.29,
    'Reaction': 2.1,
  },
  {
    'year': 2003,
    'Blog': 1.27,
    'Reaction': 2.15,
  },
  {
    'year': 2004,
    'Blog': 1.27,
    'Reaction': 2.21,
  },
  {
    'year': 2005,
    'Blog': 1.26,
    'Reaction': 2.23,
  },
  {
    'year': 2006,
    'Blog': 1.26,
    'Reaction': 2.29,
  },
  {
    'year': 2007,
    'Blog': 1.27,
    'Reaction': 2.34,
  },
  {
    'year': 2008,
    'Blog': 1.26,
    'Reaction': 2.36,
  },
  {
    'year': 2009,
    'Blog': 1.26,
    'Reaction': 2.36,
  },
  {
    'year': 2010,
    'Blog': 1.25,
    'Reaction': 2.35,
  },
  {
    'year': 2011,
    'Blog': 1.24,
    'Reaction': 2.34,
  },
  {
    'year': 2012,
    'Blog': 1.25,
    'Reaction': 2.39,
  },
  {
    'year': 2013,
    'Blog': 1.22,
    'Reaction': 2.3,
  },
  {
    'year': 2014,
    'Blog': 1.2,
    'Reaction': 2.35,
  },
  {
    'year': 2015,
    'Blog': 1.17,
    'Reaction': 2.39,
  },
  {
    'year': 2016,
    'Blog': 1.16,
    'Reaction': 2.41,
  },
  {
    'year': 2017,
    'Blog': 1.13,
    'Reaction': 2.44,
  },
  {
    'year': 2018,
    'Blog': 1.07,
    'Reaction': 2.45,
  },
  {
    'year': 2019,
    'Blog': 1.03,
    'Reaction': 2.47,
  },
  {
    'year': 2020,
    'Blog': 0.92,
    'Reaction': 2.48,
  },
  {
    'year': 2021,
    'Blog': 0.82,
    'Reaction': 2.51,
  },
]
</script>

<template>
    <LineChart
      :data="data"
      index="year"
      :categories="['Blog', 'Reaction']"
      :y-formatter="(tick, i) => {
        return typeof tick === 'number'
          ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
          : ''
      }"
      :colors="colors"
    />
  </template>