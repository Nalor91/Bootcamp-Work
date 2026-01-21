SELECT * FROM analytics;

-- 1. Find the record with id 1880
SELECT * FROM analytics 
  WHERE id = 1880;

-- 2. Find the ID and app_name of apps last updated on '2018-08-01'
SELECT id, app_name FROM analytics
   WHERE last_updated = '2018-08-01';

-- 3. Count the number of apps in each category
SELECT category, COUNT(*) FROM analytics 
  GROUP BY category;

-- 4. Find the top 5 apps with the highest number of reviews
SELECT * FROM analytics 
  ORDER BY reviews DESC 
  LIMIT 5;

-- 5. Find the app with a rating of 4.8 or higher and the highest number of reviews
SELECT * FROM analytics 
  WHERE rating >= 4.8 
  ORDER BY reviews DESC
  LIMIT 1;

-- 6. Find the average rating for each category, ordered from highest to lowest average rating
SELECT category, AVG(rating) FROM analytics 
  GROUP BY category 
  ORDER BY avg DESC;

-- 7. Find the name, price, and rating of the lowest priced app with a rating below 3
SELECT app_name, price, rating FROM analytics 
  WHERE rating < 3 
  ORDER BY price DESC 
  LIMIT 1;

-- 8. Find all the apps with less than or equal to 50 installs and a non-null rating, ordered by rating from highest to lowest
SELECT * FROM analytics 
  WHERE min_installs <= 50 
    AND rating IS NOT NULL 
  ORDER BY rating DESC;

-- 9. Find the names of apps with a rating below 3 and at least 10,000 reviews
SELECT app_name FROM analytics
  WHERE rating < 3 AND reviews >= 10000;

-- 10. Find the top 10 apps priced between $0.10 and $1.00.
SELECT * FROM analytics
  WHERE price BETWEEN 0.1 and 1 
  ORDER BY reviews DESC 
  LIMIT 10;

-- 11. Find the most out of date app
SELECT * FROM analytics
  ORDER BY last_updated LIMIT 1;

-- 12. Find the highest priced app.
SELECT * FROM analytics
  ORDER BY price DESC LIMIT 1;

-- 13. Count all the reviews in the Google Play Store
SELECT SUM(reviews) AS "All the Reviews" FROM analytics;

-- 14. Find all the categories with more than 300 apps
SELECT category FROM analytics 
  GROUP BY category 
  HAVING COUNT(*) > 300;

-- 15. Find the app with the highest ratio of installs to reviews (min_installs / reviews) among apps with at least 100,000 installs
SELECT app_name, reviews, min_installs,  min_installs / reviews AS proportion
  FROM analytics
  WHERE min_installs >= 100000
  ORDER BY proportion DESC
  LIMIT 1;
