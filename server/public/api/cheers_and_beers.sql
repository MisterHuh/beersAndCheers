-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 12, 2019 at 09:47 AM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cheers_and_beers`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `created`) VALUES
(50, '2019-11-09 23:54:26');

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `brewery` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `abv` decimal(3,1) UNSIGNED NOT NULL,
  `ibu` tinyint(3) UNSIGNED NOT NULL,
  `availability` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(300) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `brewery`, `abv`, `ibu`, `availability`, `type`, `price`, `description`, `image`) VALUES
(1, 'The Patsy®', 'Barley Forge Brewery', '6.6', 37, 'Year Round', 'Rye Stout', 999, 'The Patsy® is Barley Forge’s coconut rye stout, winner of a prestigious 2018 World Beer Cup Silver award in the Field Beer category. Brewed with US 2-row malt, flaked rye, chocolate rye, and various English specialty malts, this medium-bodied beer features a rye spiciness balanced with dark chocolate and espresso, as well as copious amounts of toasted coconut. This beer pairs well with pulled pork, braised brisket, gorgonzola cheese and chocolate desserts.', './images/productList/bf_thePatsy.png'),
(2, 'The Orange Curtain®', 'Barley Forge Brewery', '6.2', 96, 'Year Round', 'IPA', 999, 'The Orange Curtain® is Barley Forge’s India Pale Ale. Focusing on “old school” hop flavor over hop bitterness, our IPA features Warrior, Centennial and Cascade hops against a nicely rounded malt backbone that provides a medium bodied accompaniment. This combination has citrus notes worthy of the name, which is a nickname for Orange County, California where the brewery is located. This beer pairs well with spicy Thai or Vietnamese food, burgers, or oily, full-flavored fish such as salmon.', './images/productList/bf_theOrangeCurtain.png'),
(3, 'Future Tripping®', 'Barley Forge Brewery', '9.3', 100, 'Year Round', 'Double IPA', 999, 'This DIPA is brewed with a simple grain bill of Two Row, Pale Ale Malt & some Cara-Pils. A late addition of Dextrose is added to the boil to lighten the body and boost the gravity. A tried & true hop combination of Simcoe & Amarillo are showcased in this hop-forward beer. Simcoe provides a unique passionfruit-pine flavor & aroma combined with Amarillo’s citrus characteristics will keep you coming back for more. Future Tripping is finished off with a hefty amount of Simcoe & Amarillo in the dry hop. Boasting 100+ IBUs, you will find this beer to be quite balanced and not too bitter as it weighs in at 9.3% ABV.', './images/productList/bf_futureTripping.png'),
(4, 'The Black Dahlia®', 'Barley Forge Brewery', '11.0', 27, 'Year Round', 'Belgian Style Dark Ale', 999, 'The Black Dahlia® is our Belgian Strong Dark ale. This beer is brewed as an homage to the great Trappist holiday beers from Belgium. Brewed with Belgian Pils, Munich malt, a host of Belgian specialty grains, and a generous portion of dark Belgian candi sugar, this 11.0% ABV beer is a great one to age as it will continue to improve for years. This beer pairs well with braised beef dishes, steak, and dark chocolate desserts.', './images/productList/bf_theBlackDahlia.png'),
(5, 'NOM NOM®', 'Barley Forge Brewery', '5.8', 127, 'Year Round', 'Hefeweizen', 999, 'Nom Nom® is our German Hefeweizen brewed with real mango. Starting with with Pilsner, Wheat & Munich malts, we add pure mango juice powder directly into the boil., then just enough Northern Brewer hops strike a synergistic balance between malt sweetness and bitterness. A traditional Hefeweizen yeast is used, which produces a slight banana and clove aroma. To top it all off, we add some natural mango extract to the brite tank to round out the mango flavor. This delicious offering pairs perfectly with friends and food alike.', './images/productList/bf_nomNom.png'),
(6, 'Longfin Lager', 'Ballast Point Brewery', '4.5', 17, 'Year Round', 'Lager', 999, 'A classic German-Style beer, brewed in San Diego. Our Longfin Lager has become one of the go-to beers with the team at the brewery. A solidly balanced Helles that finishes clean with a hint of hops, it would easily fit in at any German beer garden. But we think it’s perfect for enjoying on the beach, the boat or anywhere else you can put an ice chest full of beer.\r\n', './images/productList/bp_longfin.png'),
(7, 'Citrus Cove', 'Ballast Point Brewery', '4.2', 5, 'Limited Release', 'Session Ale', 999, 'The gateway to an easy get-away. Citrus Cove captures the salty spray of an ocean wind mingled with a bright tropical character that begs one refreshing sip after the other. Crisp, lemon citrus acidity leads the way to a nice, dry, salt and lime zest finish. The result is a surprisingly fresh take on the classic Gose style, turning all hours into happy hour.', './images/productList/bp_citrusCove.png'),
(8, 'Passing Haze', 'Ballast Point Brewery', '4.2', 30, 'Limited Release', 'Session IPA', 999, 'A guiding light among foggy beers. Passing Haze IPA is an off-the-charts exploration of the India Pale Ale. We’ve loaded the hop cannons and fired a late addition blast bursting this incredibly sessionable IPA with juicy, tropical citrus hops. The result is an easy drinking treasure trove of hop gold.', './images/productList/bp_passingHaze.png'),
(9, 'Fathom', 'Ballast Point Brewery', '6.9', 59, 'Year Round', 'IPA', 999, 'A smooth with just the right amount of depth. Fathom IPA highlights our favorite characteristics of the west-coast IPA style. This crisp and clean brew features a touch of malt on the surface with an ocean of zesty orange and piney hops below. The result is a refreshing, easy drinking IPA with just the right amount of depth.', './images/productList/bp_fathom.png'),
(10, 'Lager', 'Ballast Point Brewery', '4.2', 10, 'Year Round', 'Lager', 999, 'Bright, refreshing, and fit for adventure. Our Ballast Point Lager is the quintessential cooler beer for lively adventures or leisurely days. At only 99 calories, this incredibly bright lager still packs a ton of flavor. Brewed with 100% 2-Row barley and a light touch of Apollo hops, Ballast Point Lager is a refreshing choice for any occasion. Whether you’re docked or at sea, it’s the perfect companion for whatever destination lies ahead.', './images/productList/bp_lager.png'),
(16, 'Tropic Of Thunder', 'Stone Brewery', '5.8', 45, 'Year Round', 'Lager', 999, 'Imagine you set sail for a three hour tour. Let’s say from the Port of Escondido (work with us here). The weather started getting rough. Your tiny ship (but not lunch, thankfully) was tossed. Long story short: You’re marooned on a remote island somewhere near the Tropic of Thunder. The good news is that the Capt. of the S.S. Stone and her brewing kit were among the small cast of colorful characters that survived the rough voyage with you. Mainstays Citra & Mosaic along with newcomer Cashmere hops are joined by their juicy tropical aromas of citrus, pineapple and coconut (try stringing all that together in a catchy tune). The rescue ship will find you all soon enough. For now, set aside the non-working cell phone and lack of social media (again, work with us here), kick back and revel in your moment of tropical island lagoon serenity.', './images/productList/st_tropicOfThunder.png'),
(17, 'Xocoveza', 'Stone Brewery', '8.1', 50, 'Special Release', 'Stout', 999, 'This is a beloved stout. When first introduced as a limited special collaboration release with San Diego homebrewer Chris Banker (after his recipe won our annual homebrew competition) and Cerveceria Insurgente, it was an instant hit and fans began clamoring for its return. Seeing as how its amazing flavor profile is evocative of Mexican hot chocolate, featuring coffee, pasilla peppers, vanilla, cinnamon, nutmeg and a generous amount of chocolate, we concluded it was the perfect stout to re-release in celebration of the Holidays and the entire winter season. This is now a highly anticipated yearly tradition that we are pleased to present from us to you, and makes a perfect wintry gift from you to your friends, loved ones, or simply to yourself. Cheers!', './images/productList/st_xocoveza.png'),
(18, 'Reveneful Spirit', 'Stone Brewery', '8.1', 53, 'Special Release', 'Imperial IPA', 999, 'In the late summer of 2017 we debuted Stone Vengeful Spirit IPA, a tropical IPA brewed with pineapple & mandarin orange. Its purpose was to demonstrate the gloriousness whole fruit can add to our IPAs. It did so, with a vengeance. So we tasked ourselves with creating an even bigger and more aggressive version of the beer, packing it with extra hops alongside real citrus & tropical fruit. The result is Stone Revengeful Spirit Imperial IPA: a beer, like revenge itself, best served cold.', './images/productList/st_revengefulSpirit.png'),
(19, 'White Geist', 'Stone Brewery', '4.7', 12, 'Special Release', 'Berlinre Weisse', 999, 'Our tartly refreshing, kettle-soured Stone Berliner Weisse gained its orthodox sour and acidic character from a specially selected Lactobacillus strain sourced from local Berlin cultures. To ensure a properly Stone, and therefore iconoclastic, Berliner Weisse, we upped the ABV to a healthy 4.7% and hopped the beer with new German varieties, Huell Melon and Callista. The beer embodies the liveliness of summer with the fruity tang of lemon and melon, further complimented by the tartness of rhubarb and gooseberries.', './images/productList/st_whiteGeist.png'),
(20, 'Ghost Hammer', 'Stone Brewery', '6.7', 56, 'Seasonal Release', 'IPA', 999, 'A fermenting beer never slumbers. Consequently, there is always scattered activity tending our precious beers throughout the dark hours. In these late nights and wee hours that hallowed responsibility falls to the shoulders of the overnight Brew Crew. These brewing soloists brave the long nights, often alone, to do what needs to be done. Most areas of the brewery are dark or in shadows. Throughout the night the cellars resonate with the occasional knocking of expanding and contracting pipes. It can be a bit spooky to hear the brewery creak and groan as if possessed by a spirit randomly knocking about with a mallet. This IPA, liberally hopped with Loral™, honors our intrepid overnight team by naming it after their mischievous poltergeist companion – the Ghost Hammer.', './images/productList/st_ghostHammer.png'),
(21, 'Hazy Memory', 'Lagunitas Brewery', '8.0', 55, 'Year Round', 'IPA', 999, 'So, we… uh… you know. It’s, like, a… well… hmm. So you know when you, like, go somewhere with something to, like, say and all, and then you get there and you totally forget? Let me go back to where I was to see if it’ll come back to me. Hold on… OH YEAH! So…', './images/productList/lg_hazyMemory.png'),
(22, 'Lagur', 'Lagunitas Brewery', '5.0', 30, 'Limited Release', 'Lager', 999, 'This light and crispy Lagunitas Lagur is full of some super-special Loral 291 hops, giving it a floral zing, Perfect wherever beer goes, whenever beer goes! Not a personal flotation device. No shirt, no shoes, no problem. Flip-flops optional. This deluxe libation vessel best operated under primo conditions, including but not limited to: poolside, beachfront, river\'s edge, lake view, hot tub adjacent, pre skinny-dipping, aprés watersliding, water ballooning, conjuring Cthulhu or simply sand-running in super slo-mo. ', './images/productList/lg_lagur.png'),
(23, 'Sumpin\' Easy', 'Lagunitas Brewery', '5.7', 51, 'Year Round', 'Ale', 999, 'Dip beneath the flotsam of categories. Past nouns. Beyond exclamations! Down to the autological: words possessing the very property they express. Short is short. Sesquipedalian is long. Sumpin\' has that thing on the tip of the tongue, and Easy just rolls off as easy as Sunday morning. Sumpin\' Easy is everything we\'ve learned about making hop-forward beer expressed in a moderate voice. Pale, cold, slightly alcoholic, and bitter. It\'s all we know.', './images/productList/lg_sumpinEasy.png'),
(24, '12th of Never', 'Lagunitas Brewery', '5.5', 45, 'Year Round', 'Ale', 999, 'As the River Styx froze and the final pig took flight, when the last winged monkey departed the darkly fragrant netherlands, as wishes became horses and all the beggars rode… Under a newly-blued moon at dawn on the very 12th of Never: the second-to-last craft brewery in America pressed the green ‘start’ button on their canning line. We wanted to be the Last Small Brewer in the U.S. to can their beer and maybe, finally, by now, we are...The ‘12th of Never Ale’ is everything we’ve learned about making hop-forward beer expressed in a moderate voice. Pale, cold, slightly alcoholic, and bitter. It’s all we know.', './images/productList/lg_12thOfNever.png'),
(25, 'Daytime', 'Lagunitas Brewery', '4.0', 31, 'Year Round', 'IPA', 999, 'At 4% ABV and only 98 calories, DayTime IPA represents everything we know about making hop-forward beer, expressed in a sotto voice. The beer in this can has achieved what we all hope for ourselves; to be made new again. There is freedom in burning down the house of expectations and it confers an undeniable lightness to being. We didn\'t invent these truths; they invented us.', './images/productList/lg_daytime.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cartProductID` (`productID`,`cartID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
