$(function() {
        var foodList = [{
                value: 'Butter, salted'
        }, {
                value: 'Butter, whipped, with salt'
        }, {
                value: 'Butter oil, anhydrous'
        }, {
                value: 'Cheese, blue'
        }, {
                value: 'Cheese, brick'
        }, {
                value: 'Cheese, brie'
        }, {
                value: 'Cheese, camembert'
        }, {
                value: 'Cheese, caraway'
        }, {
                value: 'Cheese, cheddar'
        }, {
                value: 'Cheese, cheshire'
        }, {
                value: 'Cheese, colby'
        }, {
                value: 'Cheese, cottage, creamed, large or small curd'
        }, {
                value: 'Cheese, cottage, creamed, with fruit'
        }, {
                value: 'Cheese, cottage, nonfat, uncreamed, dry, large or small curd'
        }, {
                value: 'Cheese, cottage, lowfat, 2% milkfat'
        }, {
                value: 'Cheese, cottage, lowfat, 1% milkfat'
        }, {
                value: 'Cheese, cream'
        }, {
                value: 'Cheese, edam'
        }, {
                value: 'Cheese, feta'
        }, {
                value: 'Cheese, fontina'
        }, {
                value: 'Cheese, gjetost'
        }, {
                value: 'Cheese, gouda'
        }, {
                value: 'Cheese, gruyere'
        }, {
                value: 'Cheese, limburger'
        }, {
                value: 'Cheese, monterey'
        }, {
                value: 'Cheese, mozzarella, whole milk'
        }, {
                value: 'Cheese, mozzarella, whole milk, low moisture'
        }, {
                value: 'Cheese, mozzarella, part skim milk'
        }, {
                value: 'Cheese, mozzarella, low moisture, part-skim'
        }, {
                value: 'Cheese, muenster'
        }, {
                value: 'Cheese, neufchatel'
        }, {
                value: 'Cheese, parmesan, grated'
        }, {
                value: 'Cheese, parmesan, hard'
        }, {
                value: 'Cheese, port de salut'
        }, {
                value: 'Cheese, provolone'
        }, {
                value: 'Cheese, ricotta, whole milk'
        }, {
                value: 'Cheese, ricotta, part skim milk'
        }, {
                value: 'Cheese, romano'
        }, {
                value: 'Cheese, roquefort'
        }, {
                value: 'Cheese, swiss'
        }, {
                value: 'Cheese, tilsit'
        }, {
                value: 'Cheese, pasteurized process, American, fortified with vitamin D'
        }, {
                value: 'Cheese, pasteurized process, pimento'
        }, {
                value: 'Cheese, pasteurized process, swiss'
        }, {
                value: 'Cheese food, cold pack, American'
        }, {
                value: 'Cheese food, pasteurized process, American, vitamin D fortified'
        }, {
                value: 'Cheese food, pasteurized process, swiss'
        }, {
                value: 'Cheese spread, pasteurized process, American'
        }, {
                value: 'Cream, fluid, half and half'
        }, {
                value: 'Cream, fluid, light (coffee cream or table cream)'
        }, {
                value: 'Cream, fluid, light whipping'
        }, {
                value: 'Cream, fluid, heavy whipping'
        }, {
                value: 'Cream, whipped, cream topping, pressurized'
        }, {
                value: 'Cream, sour, reduced fat, cultured'
        }, {
                value: 'Cream, sour, cultured'
        }, {
                value: 'Eggnog'
        }, {
                value: 'Sour dressing, non-butterfat, cultured, filled cream-type'
        }, {
                value: 'Milk, filled, fluid, with blend of hydrogenated vegetable oils'
        }, {
                value: 'Milk, filled, fluid, with lauric acid oil'
        }, {
                value: 'Cheese, American, nonfat or fat free'
        }, {
                value: 'Cream substitute, liquid, with hydrogenated vegetable oil and soy protein'
        }, {
                value: 'Cream substitute, liquid, with lauric acid oil and sodium caseinate'
        }, {
                value: 'Cream substitute, powdered'
        }, {
                value: 'Dessert topping, powdered'
        }, {
                value: 'Dessert topping, powdered, 5 ounce prepared with 1/2 cup milk'
        }, {
                value: 'Dessert topping, pressurized'
        }, {
                value: 'Dessert topping, semi solid, frozen'
        }, {
                value: 'Sour cream, imitation, cultured'
        }, {
                value: 'Milk substitutes, fluid, with lauric acid oil'
        }, {
                value: 'Milk, whole, 25% milkfat, with added vitamin D'
        }, {
                value: 'Milk, producer, fluid, 7% milkfat'
        }, {
                value: 'Milk, reduced fat, fluid, 2% milkfat, with added vitamin A and vitamin D'
        }, {
                value: 'Milk, reduced fat, fluid, 2% milkfat, with added nonfat milk solids and vitamin A and vitamin D'
        }, {
                value: 'Milk, reduced fat, fluid, 2% milkfat, protein fortified, with added vitamin A and vitamin D'
        }, {
                value: 'Milk, lowfat, fluid, 1% milkfat, with added vitamin A and vitamin D'
        }, {
                value: 'Milk, lowfat, fluid, 1% milkfat, with added nonfat milk solids, vitamin A and vitamin D'
        }, {
                value: 'Milk, lowfat, fluid, 1% milkfat, protein fortified, with added vitamin A and vitamin D'
        }, {
                value: 'Milk, nonfat, fluid, with added vitamin A and vitamin D (fat free or skim)'
        }, {
                value: 'Milk, nonfat, fluid, with added nonfat milk solids, vitamin A and vitamin D (fat free or skim)'
        }, {
                value: 'Milk, nonfat, fluid, protein fortified, with added vitamin A and vitamin D (fat free and skim)'
        }, {
                value: 'Milk, buttermilk, fluid, cultured, lowfat'
        }, {
                value: 'Milk, low sodium, fluid'
        }, {
                value: 'Milk, dry, whole, with added vitamin D'
        }, {
                value: 'Milk, dry, nonfat, regular, without added vitamin A and vitamin D'
        }, {
                value: 'Milk, dry, nonfat, instant, with added vitamin A and vitamin D'
        }, {
                value: 'Milk, dry, nonfat, calcium reduced'
        }, {
                value: 'Milk, buttermilk, dried'
        }, {
                value: 'Milk, canned, condensed, sweetened'
        }, {
                value: 'Milk, canned, evaporated, with added vitamin D and without added vitamin A'
        }, {
                value: 'Milk, canned, evaporated, nonfat, with added vitamin A and vitamin D'
        }, {
                value: 'Milk, chocolate, fluid, commercial, whole, with added vitamin A and vitamin D'
        }, {
                value: 'Milk, chocolate, fluid, commercial, reduced fat, with added vitamin A and vitamin D'
        }, {
                value: 'Milk, chocolate, lowfat, with added vitamin A and vitamin D'
        }, {
                value: 'Milk, chocolate beverage, hot cocoa, homemade'
        }, {
                value: 'Milk, goat, fluid, with added vitamin D'
        }, {
                value: 'Milk, human, mature, fluid'
        }, {
                value: 'Milk, indian buffalo, fluid'
        }, {
                value: 'Milk, sheep, fluid'
        }, {
                value: 'Milk shakes, thick chocolate'
        }, {
                value: 'Milk shakes, thick vanilla'
        }, {
                value: 'Whey, acid, fluid'
        }, {
                value: 'Whey, acid, dried'
        }, {
                value: 'Whey, sweet, fluid'
        }, {
                value: 'Whey, sweet, dried'
        }, {
                value: 'Yogurt, plain, whole milk, 8 grams protein per 8 ounce'
        }, {
                value: 'Yogurt, plain, low fat, 12 grams protein per 8 ounce'
        }, {
                value: 'Yogurt, plain, skim milk, 13 grams protein per 8 ounce'
        }, {
                value: 'Yogurt, vanilla, low fat, 11 grams protein per 8 ounce'
        }, {
                value: 'Yogurt, fruit, low fat, 9 grams protein per 8 ounce'
        }, {
                value: 'Yogurt, fruit, low fat, 10 grams protein per 8 ounce'
        }, {
                value: 'Yogurt, fruit, low fat, 11 grams protein per 8 ounce'
        }, {
                value: 'Egg, whole, raw, fresh'
        }, {
                value: 'Egg, white, raw, fresh'
        }, {
                value: 'Egg, yolk, raw, fresh'
        }, {
                value: 'Egg, yolk, raw, frozen, pasteurized'
        }, {
                value: 'Egg, yolk, raw, frozen, sugared, pasteurized'
        }, {
                value: 'Egg, whole, cooked, fried'
        }, {
                value: 'Egg, whole, cooked, hard-boiled'
        }, {
                value: 'Egg, whole, cooked, omelet'
        }, {
                value: 'Egg, whole, cooked, poached'
        }, {
                value: 'Egg, whole, cooked, scrambled'
        }, {
                value: 'Egg, whole, dried'
        }, {
                value: 'Egg, whole, dried, stabilized, glucose reduced'
        }, {
                value: 'Egg, white, dried, flakes, stabilized, glucose reduced'
        }, {
                value: 'Egg, white, dried, powder, stabilized, glucose reduced'
        }, {
                value: 'Egg, yolk, dried'
        }, {
                value: 'Egg, duck, whole, fresh, raw'
        }, {
                value: 'Egg, goose, whole, fresh, raw'
        }, {
                value: 'Egg, quail, whole, fresh, raw'
        }, {
                value: 'Egg, turkey, whole, fresh, raw'
        }, {
                value: 'Egg substitute, powder'
        }, {
                value: 'Butter, without salt'
        }, {
                value: 'Cheese, parmesan, shredded'
        }, {
                value: 'Milk, nonfat, fluid, without added vitamin A and vitamin D (fat free or skim)'
        }, {
                value: 'Milk, reduced fat, fluid, 2% milkfat, with added nonfat milk solids, without added vitamin A'
        }, {
                value: 'Milk, canned, evaporated, with added vitamin A'
        }, {
                value: 'Milk, dry, nonfat, regular, with added vitamin A and vitamin D'
        }, {
                value: 'Milk, dry, nonfat, instant, without added vitamin A and vitamin D'
        }, {
                value: 'Cheese, goat, hard type'
        }, {
                value: 'Cheese, goat, semisoft type'
        }, {
                value: 'Cheese, goat, soft type'
        }, {
                value: 'Egg, yolk, raw, frozen, salted, pasteurized'
        }, {
                value: 'Cheese substitute, mozzarella'
        }, {
                value: 'Cheese sauce, prepared from recipe'
        }, {
                value: 'Cheese, mexican, queso anejo'
        }, {
                value: 'Cheese, mexican, queso asadero'
        }, {
                value: 'Cheese, mexican, queso chihuahua'
        }, {
                value: 'Cheese, low fat, cheddar or colby'
        }, {
                value: 'Cheese, low-sodium, cheddar or colby'
        }, {
                value: 'Egg, whole, raw, frozen, pasteurized'
        }, {
                value: 'Egg, white, raw, frozen, pasteurized'
        }, {
                value: 'Egg, white, dried'
        }, {
                value: 'Milk, reduced fat, fluid, 2% milkfat, without added vitamin A and vitamin D'
        }, {
                value: 'Milk, fluid, 1% fat, without added vitamin A and vitamin D'
        }, {
                value: 'Sour cream, reduced fat'
        }, {
                value: 'Sour cream, light'
        }, {
                value: 'Sour cream, fat free'
        }, {
                value: 'USDA Commodity, cheese, cheddar, reduced fat'
        }, {
                value: 'Yogurt, vanilla or lemon flavor, nonfat milk, sweetened with low-calorie sweetener'
        }, {
                value: 'Parmesan cheese topping, fat free'
        }, {
                value: 'Cheese, cream, fat free'
        }, {
                value: 'Yogurt, chocolate, nonfat milk'
        }, {
                value: 'KRAFT CHEEZ WHIZ Pasteurized Process Cheese Sauce'
        }, {
                value: 'KRAFT CHEEZ WHIZ LIGHT Pasteurized Process Cheese Product'
        }, {
                value: 'KRAFT FREE Singles American Nonfat Pasteurized Process Cheese Product'
        }, {
                value: 'KRAFT VELVEETA Pasteurized Process Cheese Spread'
        }, {
                value: 'KRAFT VELVEETA LIGHT Reduced Fat Pasteurized Process Cheese Product'
        }, {
                value: 'KRAFT BREAKSTONES Reduced Fat Sour Cream'
        }, {
                value: 'KRAFT BREAKSTONES FREE Fat Free Sour Cream'
        }, {
                value: 'Cream, half and half, fat free'
        }, {
                value: 'Reddi Wip Fat Free Whipped Topping'
        }, {
                value: 'Milk, chocolate, fluid, commercial, reduced fat, with added calcium'
        }, {
                value: 'Yogurt, fruit, lowfat, with low calorie sweetener'
        }, {
                value: 'Cheese, parmesan, dry grated, reduced fat'
        }, {
                value: 'Cream substitute, flavored, liquid'
        }, {
                value: 'Cream substitute, flavored, powdered'
        }, {
                value: 'Cheese, provolone, reduced fat'
        }, {
                value: 'Cheese, Mexican, blend, reduced fat'
        }, {
                value: 'Egg Mix, USDA Commodity'
        }, {
                value: 'Milk, whole, 25% milkfat, without added vitamin A and vitamin D'
        }, {
                value: 'Milk, dry, whole, without added vitamin D'
        }, {
                value: 'Milk, canned, evaporated, without added vitamin A and vitamin D'
        }, {
                value: 'Cheese product, pasteurized process, American, reduced fat, fortified with vitamin D'
        }, {
                value: 'Yogurt, fruit, low fat, 9 grams protein per 8 ounce, fortified with vitamin D'
        }, {
                value: 'Yogurt, fruit, low fat, 10 grams protein per 8 ounce, fortified with vitamin D'
        }, {
                value: 'Yogurt, fruit variety, nonfat, fortified with vitamin D'
        }, {
                value: 'Yogurt, fruit, lowfat, with low calorie sweetener, fortified with vitamin D'
        }, {
                value: 'Yogurt, vanilla, low fat, 11 grams protein per 8 ounce, fortified with vitamin D'
        }, {
                value: 'Yogurt, vanilla or lemon flavor, nonfat milk, sweetened with low-calorie sweetener, fortified with vitamin D'
        }, {
                value: 'Yogurt, chocolate, nonfat milk, fortified with vitamin D'
        }, {
                value: 'Protein supplement, milk based, Muscle Milk, powder'
        }, {
                value: 'Protein supplement, milk based, Muscle Milk Light, powder'
        }, {
                value: 'Dulce de Leche'
        }, {
                value: 'Egg substitute, liquid or frozen, fat free'
        }, {
                value: 'Cheese, dry white, queso seco'
        }, {
                value: 'Cheese, fresh, queso fresco'
        }, {
                value: 'Cheese, white, queso blanco'
        }, {
                value: 'Milk, buttermilk, fluid, whole'
        }, {
                value: 'Yogurt, vanilla flavor, lowfat milk, sweetened with low calorie sweetener'
        }, {
                value: 'Yogurt, frozen, flavors not chocolate, nonfat milk, with low-calorie sweetener'
        }, {
                value: 'Ice cream, soft serve, chocolate'
        }, {
                value: 'Ice cream, bar or stick, chocolate covered'
        }, {
                value: 'Ice cream sandwich'
        }, {
                value: 'Ice cream cookie sandwich'
        }, {
                value: 'Ice cream cone, chocolate covered, with nuts, flavors other than chocolate'
        }, {
                value: 'Ice cream sandwich, made with light ice cream, vanilla'
        }, {
                value: 'Ice cream sandwich, vanilla, light, no sugar added'
        }, {
                value: 'Fat free ice cream, no sugar added, flavors other than chocolate'
        }, {
                value: 'Milk dessert bar, frozen, made from lowfat milk'
        }, {
                value: 'Nutritional supplement for people with diabetes, liquid'
        }, {
                value: 'Cheese, Mexican blend'
        }, {
                value: 'Cheese product, pasteurized process, American, vitamin D fortified'
        }, {
                value: 'Cheese, pasteurized process, American, without added vitamin D'
        }, {
                value: 'Cheese food, pasteurized process, American, without added vitamin D'
        }, {
                value: 'Egg, whole, raw, frozen, salted, pasteurized'
        }, {
                value: 'Yogurt, Greek, plain, nonfat'
        }, {
                value: 'Egg, white, dried, stabilized, glucose reduced'
        }, {
                value: 'Cheese spread, American or Cheddar cheese base, reduced fat'
        }, {
                value: 'Cheese, cheddar, reduced fat'
        }, {
                value: 'Ice cream, light, soft serve, chocolate'
        }, {
                value: 'Ice cream bar, stick or nugget, with crunch coating'
        }, {
                value: 'Cheese, cheddar, nonfat or fat free'
        }, {
                value: 'Cheese, Swiss, nonfat or fat free'
        }, {
                value: 'Cheese, mexican, queso cotija'
        }, {
                value: 'Cheese, cheddar, sharp, sliced'
        }, {
                value: 'Cheese, mozzarella, low moisture, part-skim, shredded'
        }, {
                value: 'Yogurt, Greek, nonfat, vanilla, CHOBANI'
        }, {
                value: 'Yogurt, Greek, strawberry, DANNON OIKOS'
        }, {
                value: 'Yogurt, Greek, nonfat, vanilla, DANNON OIKOS'
        }, {
                value: 'Yogurt, Greek, nonfat, strawberry, DANNON OIKOS'
        }, {
                value: 'Yogurt, Greek, nonfat, strawberry, CHOBANI'
        }, {
                value: 'Yogurt, Greek, strawberry, lowfat'
        }, {
                value: 'Yogurt, Greek, strawberry, nonfat'
        }, {
                value: 'Yogurt, Greek, vanilla, nonfat'
        }, {
                value: 'Yogurt, Greek, plain, lowfat'
        }, {
                value: 'Kefir, lowfat, plain, LIFEWAY'
        }, {
                value: 'Kefir, lowfat, strawberry, LIFEWAY'
        }, {
                value: 'Milk, evaporated, 2% fat, with added vitamin A and vitamin D'
        }, {
                value: 'Milk, chocolate, fat free, with added vitamin A and vitamin D'
        }, {
                value: 'Yogurt, Greek, plain, whole milk'
        }, {
                value: 'Yogurt, Greek, fruit, whole milk'
        }, {
                value: 'Yogurt, vanilla, non-fat'
        }, {
                value: 'Yogurt, Greek, vanilla, lowfat'
        }, {
                value: 'Yogurt, frozen, flavors other than chocolate, lowfat'
        }, {
                value: 'Ice cream bar, covered with chocolate and nuts'
        }, {
                value: 'Ice cream sundae cone'
        }, {
                value: 'Light ice cream, Creamsicle'
        }, {
                value: 'Cream, half and half, lowfat'
        }, {
                value: 'Milk, chocolate, lowfat, reduced sugar'
        }, {
                value: 'Ice cream, lowfat, no sugar added, cone, added peanuts and chocolate sauce'
        }, {
                value: 'Spices, allspice, ground'
        }, {
                value: 'Spices, anise seed'
        }, {
                value: 'Spices, basil, dried'
        }, {
                value: 'Spices, bay leaf'
        }, {
                value: 'Spices, caraway seed'
        }, {
                value: 'Spices, cardamom'
        }, {
                value: 'Spices, celery seed'
        }, {
                value: 'Spices, chervil, dried'
        }, {
                value: 'Spices, chili powder'
        }, {
                value: 'Spices, cinnamon, ground'
        }, {
                value: 'Spices, cloves, ground'
        }, {
                value: 'Spices, coriander leaf, dried'
        }, {
                value: 'Spices, coriander seed'
        }, {
                value: 'Spices, cumin seed'
        }, {
                value: 'Spices, curry powder'
        }, {
                value: 'Spices, dill seed'
        }, {
                value: 'Spices, dill weed, dried'
        }, {
                value: 'Spices, fennel seed'
        }, {
                value: 'Spices, fenugreek seed'
        }, {
                value: 'Spices, garlic powder'
        }, {
                value: 'Spices, ginger, ground'
        }, {
                value: 'Spices, mace, ground'
        }, {
                value: 'Spices, marjoram, dried'
        }, {
                value: 'Spices, mustard seed, ground'
        }, {
                value: 'Spices, nutmeg, ground'
        }, {
                value: 'Spices, onion powder'
        }, {
                value: 'Spices, oregano, dried'
        }, {
                value: 'Spices, paprika'
        }, {
                value: 'Spices, parsley, dried'
        }, {
                value: 'Spices, pepper, black'
        }, {
                value: 'Spices, pepper, red or cayenne'
        }, {
                value: 'Spices, pepper, white'
        }, {
                value: 'Spices, poppy seed'
        }, {
                value: 'Spices, poultry seasoning'
        }, {
                value: 'Spices, pumpkin pie spice'
        }, {
                value: 'Spices, rosemary, dried'
        }, {
                value: 'Spices, saffron'
        }, {
                value: 'Spices, sage, ground'
        }, {
                value: 'Spices, savory, ground'
        }, {
                value: 'Spices, tarragon, dried'
        }, {
                value: 'Spices, thyme, dried'
        }, {
                value: 'Spices, turmeric, ground'
        }, {
                value: 'Basil, fresh'
        }, {
                value: 'Dill weed, fresh'
        }, {
                value: 'Mustard, prepared, yellow'
        }, {
                value: 'Salt, table'
        }, {
                value: 'Vinegar, cider'
        }, {
                value: 'Thyme, fresh'
        }, {
                value: 'Vanilla extract'
        }, {
                value: 'Vanilla extract, imitation, alcohol'
        }, {
                value: 'Vanilla extract, imitation, no alcohol'
        }, {
                value: 'Vinegar, distilled'
        }, {
                value: 'Capers, canned'
        }, {
                value: 'Horseradish, prepared'
        }, {
                value: 'Rosemary, fresh'
        }, {
                value: 'Peppermint, fresh'
        }, {
                value: 'Spearmint, fresh'
        }, {
                value: 'Spearmint, dried'
        }, {
                value: 'Vinegar, red wine'
        }, {
                value: 'Vinegar, balsamic'
        }, {
                value: 'PACE, Dry Taco Seasoning Mix'
        }, {
                value: 'Seasoning mix, dry, sazon, coriander & annatto'
        }, {
                value: 'Seasoning mix, dry, taco, original'
        }, {
                value: 'Seasoning mix, dry, chili, original'
        }, {
                value: 'Clif Z bar'
        }, {
                value: 'Babyfood, juice treats, fruit medley, toddler'
        }, {
                value: 'Babyfood, meat, beef, strained'
        }, {
                value: 'Babyfood, meat, beef, junior'
        }, {
                value: 'Babyfood, meat, veal, strained'
        }, {
                value: 'Babyfood, meat, pork, strained'
        }, {
                value: 'Babyfood, meat, ham, strained'
        }, {
                value: 'Babyfood, meat, ham, junior'
        }, {
                value: 'Babyfood, meat, lamb, strained'
        }, {
                value: 'Babyfood, meat, lamb, junior'
        }, {
                value: 'Babyfood, meat, chicken, strained'
        }, {
                value: 'Babyfood, meat, chicken, junior'
        }, {
                value: 'Babyfood, meat, chicken sticks, junior'
        }, {
                value: 'Babyfood, meat, turkey, strained'
        }, {
                value: 'Babyfood, meat, turkey, junior'
        }, {
                value: 'Babyfood, meat, turkey sticks, junior'
        }, {
                value: 'Babyfood, snack, GERBER GRADUATE FRUIT  STRIPS, Real Fruit Bars'
        }, {
                value: 'Babyfood, meat, meat sticks, junior'
        }, {
                value: 'Babyfood, GERBER, 2nd Foods, apple, carrot and squash, organic'
        }, {
                value: 'Finger snacks, GERBER GRADUATE PUFFS, apple and cinnamon'
        }, {
                value: 'Babyfood, water, bottled, GERBER, without added fluoride.'
        }, {
                value: 'Babyfood, GERBER, 3rd Foods, apple, mango and kiwi'
        }, {
                value: 'Babyfood, tropical fruit medley'
        }, {
                value: 'Babyfood, dinner, vegetables and dumplings and beef, strained'
        }, {
                value: 'Babyfood, dinner, vegetables and dumplings and beef, junior'
        }, {
                value: 'Babyfood, dinner, beef lasagna, toddler'
        }, {
                value: 'Babyfood, dinner, macaroni and tomato and beef, strained'
        }, {
                value: 'Babyfood, dinner, macaroni and tomato and beef, junior'
        }, {
                value: 'Babyfood, ravioli, cheese filled, with tomato sauce'
        }, {
                value: 'Babyfood, dinner, beef noodle, strained'
        }, {
                value: 'Babyfood, macaroni and cheese, toddler'
        }, {
                value: 'Babyfood, dinner, beef and rice, toddler'
        }, {
                value: 'Babyfood, dinner, spaghetti and tomato and meat, junior'
        }, {
                value: 'Babyfood, dinner, spaghetti and tomato and meat, toddler'
        }, {
                value: 'Babyfood, dinner, beef stew, toddler'
        }, {
                value: 'Babyfood, dinner, vegetables and beef, strained'
        }, {
                value: 'Babyfood, dinner, vegetables and beef, junior'
        }, {
                value: 'Babyfood, dinner, beef with vegetables'
        }, {
                value: 'Babyfood, dinner, vegetables and bacon, strained'
        }, {
                value: 'Babyfood, dinner, vegetables and ham, strained'
        }, {
                value: 'Babyfood, dinner, vegetables and ham, junior'
        }, {
                value: 'Babyfood, dinner, vegetables and lamb, strained'
        }, {
                value: 'Babyfood, dinner, vegetables and lamb, junior'
        }, {
                value: 'Babyfood, dinner, chicken noodle, strained'
        }, {
                value: 'Babyfood, dinner, chicken noodle, junior'
        }, {
                value: 'Babyfood, dinner, chicken soup, strained'
        }, {
                value: 'Babyfood, dinner, chicken stew, toddler'
        }, {
                value: 'Babyfood, dinner, vegetables chicken, strained'
        }, {
                value: 'Babyfood, dinner, vegetables, noodles and chicken, strained'
        }, {
                value: 'Babyfood, dinner, vegetables, noodles and chicken, junior'
        }, {
                value: 'Babyfood, dinner, pasta with vegetables'
        }, {
                value: 'Babyfood, dinner, vegetables and noodles and turkey, strained'
        }, {
                value: 'Babyfood, dinner, vegetables and noodles and turkey, junior'
        }, {
                value: 'Babyfood, dinner, turkey and rice, strained'
        }, {
                value: 'Babyfood, dinner, turkey and rice, junior'
        }, {
                value: 'Babyfood, dinner, vegetables and turkey, strained'
        }, {
                value: 'Babyfood, dinner, vegetables and turkey, junior'
        }, {
                value: 'Babyfood, dinner, macaroni and cheese, strained'
        }, {
                value: 'Babyfood, dinner, macaroni and cheese, junior'
        }, {
                value: 'Babyfood, vegetables, green beans, strained'
        }, {
                value: 'Babyfood, vegetables, green beans, junior'
        }, {
                value: 'Babyfood, green beans, dices, toddler'
        }, {
                value: 'Babyfood, vegetable, green beans and potatoes'
        }, {
                value: 'Babyfood, vegetables, beets, strained'
        }, {
                value: 'Babyfood, vegetables, carrots, strained'
        }, {
                value: 'Babyfood, vegetables, carrots, junior'
        }, {
                value: 'Babyfood, vegetables, squash, strained'
        }, {
                value: 'Babyfood, vegetables, squash, junior'
        }, {
                value: 'Babyfood, vegetables, sweet potatoes strained'
        }, {
                value: 'Babyfood, vegetables, sweet potatoes, junior'
        }, {
                value: 'Babyfood, potatoes, toddler'
        }, {
                value: 'Babyfood, vegetable, butternut squash and corn'
        }, {
                value: 'Babyfood, apples, dices, toddler'
        }, {
                value: 'Babyfood, fruit, applesauce, strained'
        }, {
                value: 'Babyfood, fruit, applesauce, junior'
        }, {
                value: 'Babyfood, fruit, apricot with tapioca, strained'
        }, {
                value: 'Babyfood, vegetables, corn, creamed, strained'
        }, {
                value: 'Babyfood, vegetables, corn, creamed, junior'
        }, {
                value: 'Babyfood, vegetables, peas, strained'
        }, {
                value: 'Babyfood, peas, dices, toddler'
        }, {
                value: 'Babyfood, vegetables, spinach, creamed, strained'
        }, {
                value: 'Babyfood, fruit, apricot with tapioca, junior'
        }, {
                value: 'Babyfood, fruit, bananas with tapioca, strained'
        }, {
                value: 'Babyfood, fruit, peaches, strained'
        }, {
                value: 'Babyfood, fruit, peaches, junior'
        }, {
                value: 'Babyfood, fruit, pears, strained'
        }, {
                value: 'Babyfood, fruit, pears, junior'
        }, {
                value: 'Babyfood, fruit, plums with tapioca, without ascorbic acid, strained'
        }, {
                value: 'Babyfood, fruit, plums with tapioca, without ascorbic acid, junior'
        }, {
                value: 'Babyfood, fruit, prunes with tapioca, without ascorbic acid, strained'
        }, {
                value: 'Babyfood, fruit, prunes with tapioca, without ascorbic acid, junior'
        }, {
                value: 'Babyfood, prunes, without vitamin c, strained'
        }, {
                value: 'Babyfood, fruit dessert, mango with tapioca'
        }, {
                value: 'Babyfood, pears, dices, toddler'
        }, {
                value: 'Babyfood, fruit, applesauce and apricots, strained'
        }, {
                value: 'Babyfood, fruit, applesauce and apricots, junior'
        }, {
                value: 'Babyfood, fruit, applesauce and cherries, strained'
        }, {
                value: 'Babyfood, fruit, applesauce and cherries, junior'
        }, {
                value: 'Babyfood, fruit, applesauce with banana, junior'
        }, {
                value: 'Babyfood, fruit, applesauce and pineapple, strained'
        }, {
                value: 'Babyfood, fruit, applesauce and pineapple, junior'
        }, {
                value: 'Babyfood, fruit, apple and raspberry, strained'
        }, {
                value: 'Babyfood, fruit, apple and raspberry, junior'
        }, {
                value: 'Babyfood, fruit and vegetable, apple and sweet potato'
        }, {
                value: 'Babyfood, fruit, bananas and pineapple with tapioca, junior'
        }, {
                value: 'Babyfood, fruit, bananas and pineapple with tapioca, strained'
        }, {
                value: 'Babyfood, fruit, pears and pineapple, strained'
        }, {
                value: 'Babyfood, fruit, pears and pineapple, junior'
        }, {
                value: 'Babyfood, fruit, guava and papaya with tapioca, strained'
        }, {
                value: 'Babyfood, peaches, dices, toddler'
        }, {
                value: 'Babyfood, fruit, papaya and applesauce with tapioca, strained'
        }, {
                value: 'Babyfood, fruit, bananas with apples and pears, strained'
        }, {
                value: 'Babyfood, fruit, apple and blueberry, strained'
        }, {
                value: 'Babyfood, fruit, apple and blueberry, junior'
        }, {
                value: 'Babyfood, juice, apple'
        }, {
                value: 'Babyfood, apple-banana juice'
        }, {
                value: 'Babyfood, juice, apple and peach'
        }, {
                value: 'Babyfood, apple-cranberry juice'
        }, {
                value: 'Babyfood, juice, apple and plum'
        }, {
                value: 'Babyfood, juice, apple and prune'
        }, {
                value: 'Babyfood, juice, orange'
        }, {
                value: 'Babyfood, juice, orange and apple'
        }, {
                value: 'Babyfood, juice, orange and apple and banana'
        }, {
                value: 'Babyfood, juice, orange and apricot'
        }, {
                value: 'Babyfood, juice, orange and banana'
        }, {
                value: 'Babyfood, juice, orange and pineapple'
        }, {
                value: 'Babyfood, juice, prune and orange'
        }, {
                value: 'Babyfood, juice, mixed fruit'
        }, {
                value: 'Babyfood, cereal, barley, dry fortified'
        }, {
                value: 'Babyfood, cereal, whole wheat, with apples, dry fortified'
        }, {
                value: 'Babyfood, cereal, mixed, dry fortified'
        }, {
                value: 'Babyfood, cereal, mixed, with bananas, dry'
        }, {
                value: 'Babyfood, cereal, mixed, with applesauce and bananas, strained'
        }, {
                value: 'Babyfood, cereal, mixed, with applesauce and bananas, junior'
        }, {
                value: 'Babyfood, cereal, oatmeal, dry fortified'
        }, {
                value: 'Babyfood, cereal, oatmeal, with bananas, dry'
        }, {
                value: 'Babyfood, cereal, oatmeal, with applesauce and bananas, strained'
        }, {
                value: 'Babyfood, cereal, oatmeal, with applesauce and bananas, junior'
        }, {
                value: 'Babyfood, cereal, oatmeal, with honey, dry'
        }, {
                value: 'Babyfood, cereal, rice, dry fortified'
        }, {
                value: 'Babyfood, cereal, rice, with applesauce and bananas, strained'
        }, {
                value: 'Babyfood, cereal, with egg yolks, strained'
        }, {
                value: 'Babyfood, cereal, with egg yolks, junior'
        }, {
                value: 'Babyfood, cereal, with eggs, strained'
        }, {
                value: 'Babyfood, cereal, egg yolks and bacon, junior'
        }, {
                value: 'Babyfood, oatmeal cereal with fruit, dry, instant, toddler fortified'
        }, {
                value: 'Babyfood, cookie, baby, fruit'
        }, {
                value: 'Babyfood, crackers, vegetable'
        }, {
                value: 'Babyfood, cereal, high protein, with apple and orange, dry'
        }, {
                value: 'Babyfood, cereal, rice, with bananas, dry'
        }, {
                value: 'Babyfood, cookies'
        }, {
                value: 'Babyfood, cookies, arrowroot'
        }, {
                value: 'Babyfood, pretzels'
        }, {
                value: 'Babyfood, teething biscuits'
        }, {
                value: 'Zwieback'
        }, {
                value: 'Babyfood, dessert, dutch apple, strained'
        }, {
                value: 'Babyfood, dessert, dutch apple, junior'
        }, {
                value: 'Babyfood, cherry cobbler, junior'
        }, {
                value: 'Babyfood, dessert, cherry vanilla pudding, strained'
        }, {
                value: 'Babyfood, dessert, cherry vanilla pudding, junior'
        }, {
                value: 'Babyfood, dessert, fruit pudding, orange, strained'
        }, {
                value: 'Babyfood, dessert, peach cobbler, strained'
        }, {
                value: 'Babyfood, dessert, peach cobbler, junior'
        }, {
                value: 'Babyfood, dessert, peach melba, strained'
        }, {
                value: 'Babyfood, dessert, peach melba, junior'
        }, {
                value: 'Babyfood, dessert, fruit pudding, pineapple, strained'
        }, {
                value: 'Babyfood, dessert, fruit dessert, without ascorbic acid, strained'
        }, {
                value: 'Babyfood, dessert, fruit dessert, without ascorbic acid, junior'
        }, {
                value: 'Babyfood, dessert, tropical fruit, junior'
        }, {
                value: 'Babyfood, dessert, custard pudding, vanilla, strained'
        }, {
                value: 'Babyfood, dessert, custard pudding, vanilla, junior'
        }, {
                value: 'Babyfood, juice, apple and grape'
        }, {
                value: 'Babyfood, juice, fruit punch, with calcium'
        }, {
                value: 'Babyfood, juice, apple and cherry'
        }, {
                value: 'Babyfood, juice, apple, with calcium'
        }, {
                value: 'Babyfood, dinner, vegetables and chicken, junior'
        }, {
                value: 'Babyfood, dinner, mixed vegetable, strained'
        }, {
                value: 'Babyfood, dinner, mixed vegetable, junior'
        }, {
                value: 'Babyfood, fruit, bananas with tapioca, junior'
        }, {
                value: 'Babyfood, vegetables, mix vegetables junior'
        }, {
                value: 'Babyfood, vegetables, garden vegetable, strained'
        }, {
                value: 'Babyfood, vegetables, mix vegetables strained'
        }, {
                value: 'Babyfood, dinner, beef noodle, junior'
        }, {
                value: 'Babyfood, apples with ham, strained'
        }, {
                value: 'Babyfood, carrots and beef, strained'
        }, {
                value: 'Babyfood, plums, bananas and rice, strained'
        }, {
                value: 'Babyfood, dinner, turkey, rice, and vegetables, toddler'
        }, {
                value: 'Babyfood, dinner, apples and chicken, strained'
        }, {
                value: 'Babyfood, dinner, broccoli and chicken, junior'
        }, {
                value: 'Babyfood, beverage, GERBER GRADUATE FRUIT SPLASHERS'
        }, {
                value: 'Babyfood, snack, GERBER GRADUATE YOGURT MELTS'
        }, {
                value: 'Babyfood, dinner, sweet potatoes and chicken, strained'
        }, {
                value: 'Babyfood, dinner, potatoes with cheese and ham, toddler'
        }, {
                value: 'Babyfood, cereal, barley, prepared with whole milk'
        }, {
                value: 'Babyfood, cereal, high protein, prepared with whole milk'
        }, {
                value: 'Babyfood, cereal, mixed, prepared with whole milk'
        }, {
                value: 'Babyfood, cereal, mixed, with bananas, prepared with whole milk'
        }, {
                value: 'Babyfood, cereal, oatmeal, prepared with whole milk'
        }, {
                value: 'Babyfood, cereal, oatmeal, with bananas, prepared with whole milk'
        }, {
                value: 'Babyfood, cereal, oatmeal, with honey, prepared with whole milk'
        }, {
                value: 'Babyfood, cereal, rice, prepared with whole milk'
        }, {
                value: 'Babyfood, cereal, rice, with honey, prepared with whole milk'
        }, {
                value: 'Babyfood, cereal, mixed, with honey, prepared with whole milk'
        }, {
                value: 'Babyfood, cereal, high protein, with apple and orange, prepared with whole milk'
        }, {
                value: 'Babyfood, cereal, rice, with bananas, prepared with whole milk'
        }, {
                value: 'Infant formula, NESTLE, GOOD START SUPREME, with iron, ready-to-feed'
        }, {
                value: 'Infant formula, NESTLE, GOOD START SUPREME, with iron, liquid concentrate, not reconstituted'
        }, {
                value: 'Infant formula, NESTLE, GOOD START SUPREME, with iron, powder'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, with iron, ready-to-feed'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, with iron, powder'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, low iron, ready-to-feed'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, LIPIL, with iron, powder, with ARA and DHA'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, low iron, powder, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, LIPIL, with iron, liquid concentrate, with ARA and DHA'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, NUTRAMIGEN, with iron, ready-to-feed'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, NUTRAMIGEN, with iron, powder, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL LIPIL, with iron, ready-to-feed, with ARA and DHA'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, NUTRAMIGEN, with iron, liquid concentrate, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, LIPIL, low iron, liquid concentrate, with ARA and DHA'
        }, {
                value: 'Child formula, MEAD JOHNSON, PORTAGEN, with iron, powder, not reconstituted'
        }, {
                value: 'Child formula, MEAD JOHNSON, PORTAGEN, with iron, prepared from powder'
        }, {
                value: 'Infant formula, MEAD JOHNSON, PREGESTIMIL, with iron, powder, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, PREGESTIMIL, with iron, prepared from powder'
        }, {
                value: 'Infant formula, MEAD JOHNSON, PROSOBEE, with iron, ready-to-feed'
        }, {
                value: 'Infant formula, MEAD JOHNSON, PROSOBEE, with iron, liquid concentrate, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, LIPIL, low iron, ready to feed, with ARA and DHA'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, PROSOBEE, with iron, powder, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, LACTOFREE LIPIL, with iron, powder, with ARA and DHA'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, LACTOFREE, LIPIL, with iron, liquid concentrate, not reconstituted, with ARA and DHA'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, LIPIL, ready-to-feed, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, PM 60/40, powder not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, NUTRAMIGEN LIPIL, with iron, powder, not reconstituted, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, NATURAL CARE, ADVANCE, ready-to-feed, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, SPECIAL CARE, ADVANCE 24, with iron, ready-to-feed, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, ISOMIL, with iron, ready-to-feed'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, ISOMIL, with iron, liquid concentrate'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, ISOMIL, with iron, powder, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, NUTRAMIGEN, LIPIL, with iron, liquid concentrate not reconstituted, with ARA and DHA'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, NUTRAMIGEN, LIPIL, with iron, ready-to-feed, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, ALIMENTUM, with iron, ready-to-feed'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, ENFACARE LIPIL, with iron, powder, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, with iron, ready-to-feed'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, with iron, liquid concentrate, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, PROSOBEE LIPIL, with iron, powder, not reconstituted, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, with iron, powder, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, PROSOBEE, LIPIL, liquid concentrate, not reconstituted, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, low iron, ready-to-feed'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, low iron, liquid concentrate, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, PROSOBEE LIPIL, with iron, ready to feed, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, low iron, powder, not reconstituted'
        }, {
                value: 'Infant formula, NESTLE, GOOD START SOY, with DHA and ARA, ready-to-feed'
        }, {
                value: 'Child formula, ABBOTT NUTRITION, PEDIASURE, ready-to-feed'
        }, {
                value: 'Infant formula, MEAD JOHNSON, NEXT STEP, PROSOBEE LIPIL, powder, with ARA and DHA'
        }, {
                value: 'Infant formula, MEAD JOHNSON, NEXT STEP, PROSOBEE, LIPIL, ready to feed, with ARA and DHA'
        }, {
                value: 'Infant formula, NESTLE, GOOD START SOY, with ARA and DHA, powder'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, LACTOFREE, ready-to-feed'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, LACTOFREE, with iron, powder, not reconstituted'
        }, {
                value: 'Child formula, ABBOTT NUTRITION, PEDIASURE, ready-to-feed, with iron and fiber'
        }, {
                value: 'Infant formula, NESTLE, GOOD START 2 ESSENTIALS, with iron, ready-to-feed'
        }, {
                value: 'Infant formula, NESTLE, GOOD START 2 ESSENTIALS, with iron, liquid concentrate, not reconstituted'
        }, {
                value: 'Infant formula, NESTLE, GOOD START 2 ESSENTIALS, with iron, powder'
        }, {
                value: 'Infant formula, NESTLE, GOOD START ESSENTIALS SOY, with iron, ready-to-feed'
        }, {
                value: 'Infant formula, NESTLE, GOOD START ESSENTIALS SOY, with iron, liquid concentrate, not reconstituted'
        }, {
                value: 'Infant formula, NESTLE, GOOD START ESSENTIALS SOY, with iron, powder'
        }, {
                value: 'Infant formula, MEAD JOHNSON, NEXT STEP PROSOBEE, powder, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON,NEXT STEP PROSOBEE, prepared from powder'
        }, {
                value: 'Babyfood, corn and sweet potatoes, strained'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, ALIMENTUM, ADVANCE, ready-to-feed, with ARA and DHA'
        }, {
                value: 'Infant formula, PBM PRODUCTS, store brand, ready-to-feed'
        }, {
                value: 'Infant formula, PBM PRODUCTS, store brand, liquid concentrate, not reconstituted'
        }, {
                value: 'Infant formula, PBM PRODUCTS, store brand, powder'
        }, {
                value: 'Infant formula, PBM PRODUCTS, store brand, soy, ready-to-feed'
        }, {
                value: 'Infant formula, PBM PRODUCTS, store brand, soy, liquid concentrate, not reconstituted'
        }, {
                value: 'Infant formula, PBM PRODUCTS, store brand, soy, powder'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, AR LIPIL, ready-to-feed, with ARA and DHA'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, AR LIPIL, powder, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC NEOSURE, ready-to-feed, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, NEOSURE, powder, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, SENSITIVE (LACTOSE FREE) ready-to-feed, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, SENSITIVE, (LACTOSE FREE), liquid concentrate, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, SENSITIVE, (LACTOSE FREE), powder, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, ADVANCE, with iron, ready-to-feed'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, ADVANCE, with iron, powder, not reconstituted'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, ADVANCE, with iron, liquid concentrate, not reconstituted'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, ISOMIL, ADVANCE with iron, liquid concentrate'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, ISOMIL, ADVANCE with iron, ready-to-feed'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, ISOMIL, ADVANCE with iron, powder, not reconstituted'
        }, {
                value: 'Infant Formula, MEAD JOHNSON, ENFAMIL, ENFACARE LIPIL, ready-to-feed, with ARA and DHA'
        }, {
                value: 'Babyfood, yogurt, whole milk, with fruit, multigrain cereal and added DHA fortified'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, ALIMENTUM ADVANCE, with iron, powder, not reconstituted, with DHA and ARA'
        }, {
                value: 'Babyfood, mashed cheddar potatoes and broccoli, toddlers'
        }, {
                value: 'Infant formula, NESTLE, GOOD START SUPREME, with iron, DHA and ARA, ready-to-feed'
        }, {
                value: 'Infant formula, NESTLE, GOOD START SUPREME, with iron, DHA and ARA, prepared from liquid concentrate'
        }, {
                value: 'Infant Formula, MEAD JOHNSON, ENFAMIL GENTLEASE LIPIL, with iron, prepared from powder'
        }, {
                value: 'Babyfood, fortified cereal bar, fruit filling'
        }, {
                value: 'Babyfood, yogurt, whole milk, with fruit, multigrain cereal and added iron fortified'
        }, {
                value: 'Infant formula, NESTLE, GOOD START SOY, with DHA and ARA, liquid concentrate'
        }, {
                value: 'Toddler formula, MEAD JOHNSON, ENFAGROW, PREMIUM (formerly ENFAMIL, LIPIL, NEXT STEP), powder'
        }, {
                value: 'Toddler formula, MEAD JOHNSON, ENFAGROW PREMIUM (formerly ENFAMIL, LIPIL, NEXT STEP), ready-to-feed'
        }, {
                value: 'Infant Formula, MEAD JOHNSON, ENFAMIL, GENTLEASE, powder'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, ENFAGROW, GENTLEASE, Toddler, ready-to-feed'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, Enfagrow, Soy, Toddler ready-to-feed'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, NUTRAMIGEN AA, ready-to-feed'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, Premature, 20 calories ready-to-feed'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, Premature, 24 calo ready-to-feed'
        }, {
                value: 'Infant Formula, MEAD JOHNSON, ENFAMIL, Premium, Newborn, ready-to-feed'
        }, {
                value: 'Infant formula, GERBER, GOOD START 2 Soy, with iron, ready-to-feed'
        }, {
                value: 'Infant formula, GERBER, GOOD START, PROTECT PLUS, ready-to-feed'
        }, {
                value: 'Infant Formula, GERBER GOOD START 2, GENTLE PLUS, ready-to-feed'
        }, {
                value: 'Infant formula, GERBER, GOOD START 2, PROTECT PLUS, ready-to-feed'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, GO AND GROW, ready-to-feed, with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, Expert Care, Diarrhea, ready- to- feed with ARA and DHA'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, For Spit Up, ready-to-feed, with ARA and DHA'
        }, {
                value: 'Babyfood, fruit, banana and strawberry, junior'
        }, {
                value: 'Babyfood, banana with mixed berries, strained'
        }, {
                value: 'Babyfood, Multigrain whole grain cereal, dry fortified'
        }, {
                value: 'Babyfood, Baby MUM MUM Rice Biscuits'
        }, {
                value: 'Babyfood, Snack, GERBER, GRADUATES, LIL CRUNCHIES, baked whole grain corn snack'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, For Spit Up, powder, with ARA and DHA'
        }, {
                value: 'Fat, beef tallow'
        }, {
                value: 'Lard'
        }, {
                value: 'Salad dressing, KRAFT Mayo Light Mayonnaise'
        }, {
                value: 'Salad dressing, KRAFT Mayo Fat Free Mayonnaise Dressing'
        }, {
                value: 'Salad dressing, KRAFT MIRACLE WHIP FREE Nonfat Dressing'
        }, {
                value: 'Salad dressing, russian dressing'
        }, {
                value: 'Salad dressing, sesame seed dressing, regular'
        }, {
                value: 'Salad dressing, thousand island, commercial, regular'
        }, {
                value: 'Salad dressing, mayonnaise type, regular, with salt'
        }, {
                value: 'Salad dressing, french dressing, reduced fat'
        }, {
                value: 'Salad dressing, italian dressing, commercial, reduced fat'
        }, {
                value: 'Salad dressing, russian dressing, low calorie'
        }, {
                value: 'Salad dressing, thousand island dressing, reduced fat'
        }, {
                value: 'Salad dressing, mayonnaise, regular'
        }, {
                value: 'Salad dressing, mayonnaise, soybean and safflower oil, with salt'
        }, {
                value: 'Salad dressing, mayonnaise, imitation, soybean'
        }, {
                value: 'Salad dressing, mayonnaise, imitation, milk cream'
        }, {
                value: 'Salad dressing, mayonnaise, imitation, soybean without cholesterol'
        }, {
                value: 'Sandwich spread, with chopped pickle, regular, unspecified oils'
        }, {
                value: 'Shortening, household, soybean (partially hydrogenated)-cottonseed (partially hydrogenated)'
        }, {
                value: 'Oil, soybean, salad or cooking, (partially hydrogenated)'
        }, {
                value: 'Oil, rice bran'
        }, {
                value: 'Oil, wheat germ'
        }, {
                value: 'Oil, peanut, salad or cooking'
        }, {
                value: 'Oil, soybean, salad or cooking'
        }, {
                value: 'Oil, coconut'
        }, {
                value: 'Oil, olive, salad or cooking'
        }, {
                value: 'Oil, palm'
        }, {
                value: 'Oil, sesame, salad or cooking'
        }, {
                value: 'Oil, sunflower, linoleic (less than 60%)'
        }, {
                value: 'Margarine, regular, hard, soybean (hydrogenated)'
        }, {
                value: 'Salad dressing, italian dressing, commercial, regular'
        }, {
                value: 'Salad dressing, french dressing, commercial, regular'
        }, {
                value: 'Margarine-like, vegetable oil spread, unspecified oils, approximately 37% fat, with salt'
        }, {
                value: 'Salad dressing, french, home recipe'
        }, {
                value: 'Salad dressing, home recipe, vinegar and oil'
        }, {
                value: 'Salad dressing, french dressing, commercial, regular, without salt'
        }, {
                value: 'Salad dressing, french dressing, reduced fat, without salt'
        }, {
                value: 'Salad dressing, italian dressing, commercial, regular, without salt'
        }, {
                value: 'Salad dressing, italian dressing, reduced fat, without salt'
        }, {
                value: 'Salad dressing, mayonnaise, soybean oil, without salt'
        }, {
                value: 'Salad dressing, french, cottonseed, oil, home recipe'
        }, {
                value: 'Salad dressing, french dressing, fat-free'
        }, {
                value: 'Oil, cocoa butter'
        }, {
                value: 'Oil, cottonseed, salad or cooking'
        }, {
                value: 'Oil, sunflower, linoleic, (approx. 65%)'
        }, {
                value: 'Oil, safflower, salad or cooking, linoleic, (over 70%)'
        }, {
                value: 'Oil, safflower, salad or cooking, high oleic (primary safflower oil of commerce)'
        }, {
                value: 'Vegetable oil, palm kernel'
        }, {
                value: 'Oil, poppyseed'
        }, {
                value: 'Oil, tomatoseed'
        }, {
                value: 'Oil, teaseed'
        }, {
                value: 'Oil, grapeseed'
        }, {
                value: 'Oil, corn, industrial and retail, all purpose salad or cooking'
        }, {
                value: 'Fat, mutton tallow'
        }, {
                value: 'Oil, walnut'
        }, {
                value: 'Oil, almond'
        }, {
                value: 'Oil, apricot kernel'
        }, {
                value: 'Oil, soybean lecithin'
        }, {
                value: 'Oil, hazelnut'
        }, {
                value: 'Oil, babassu'
        }, {
                value: 'Oil, sheanut'
        }, {
                value: 'Salad dressing, blue or roquefort cheese dressing, commercial, regular'
        }, {
                value: 'Oil, cupu assu'
        }, {
                value: 'Fat, chicken'
        }, {
                value: 'Oil, soybean, salad or cooking, (partially hydrogenated) and cottonseed'
        }, {
                value: 'Shortening, household, lard and vegetable oil'
        }, {
                value: 'Oil, sunflower, linoleic, (partially hydrogenated)'
        }, {
                value: 'Shortening bread, soybean (hydrogenated) and cottonseed'
        }, {
                value: 'Shortening cake mix, soybean (hydrogenated) and cottonseed (hydrogenated)'
        }, {
                value: 'Shortening industrial, lard and vegetable oil'
        }, {
                value: 'Shortening frying (heavy duty), beef tallow and cottonseed'
        }, {
                value: 'Shortening confectionery, coconut (hydrogenated) and or palm kernel (hydrogenated)'
        }, {
                value: 'Shortening industrial, soybean (hydrogenated) and cottonseed'
        }, {
                value: 'Shortening frying (heavy duty), palm (hydrogenated)'
        }, {
                value: 'Shortening household soybean (hydrogenated) and palm'
        }, {
                value: 'Shortening frying (heavy duty), soybean (hydrogenated), linoleic (less than 1%)'
        }, {
                value: 'Shortening, confectionery, fractionated palm'
        }, {
                value: 'Oil, nutmeg butter'
        }, {
                value: 'Oil, ucuhuba butter'
        }, {
                value: 'Fat, duck'
        }, {
                value: 'Fat, turkey'
        }, {
                value: 'Fat, goose'
        }, {
                value: 'Oil, avocado'
        }, {
                value: 'Oil, canola'
        }, {
                value: 'Oil, mustard'
        }, {
                value: 'Oil, sunflower, high oleic (70% and over)'
        }, {
                value: 'Margarine-like, margarine-butter blend, soybean oil and butter'
        }, {
                value: 'Shortening, special purpose for cakes and frostings, soybean (hydrogenated)'
        }, {
                value: 'Shortening, special purpose for baking, soybean (hydrogenated) palm and cottonseed'
        }, {
                value: 'Oil, oat'
        }, {
                value: 'Fish oil, cod liver'
        }, {
                value: 'Fish oil, herring'
        }, {
                value: 'Fish oil, menhaden'
        }, {
                value: 'Fish oil, menhaden, fully hydrogenated'
        }, {
                value: 'Fish oil, salmon'
        }, {
                value: 'Fish oil, sardine'
        }, {
                value: 'Shortening, multipurpose, soybean (hydrogenated) and palm (hydrogenated)'
        }, {
                value: 'Margarine-like, vegetable oil-butter spread, tub, with salt'
        }, {
                value: 'Butter, light, stick, with salt'
        }, {
                value: 'Butter, light, stick, without salt'
        }, {
                value: 'Meat drippings (lard, beef tallow, mutton tallow)'
        }, {
                value: 'Animal fat, bacon grease'
        }, {
                value: 'Margarine, regular, 80% fat, composite, stick, with salt'
        }, {
                value: 'Margarine, regular, 80% fat, composite, tub, with salt'
        }, {
                value: 'Margarine-like, vegetable oil spread, 60% fat, stick, with salt'
        }, {
                value: 'Margarine-like, vegetable oil spread, 60% fat, tub, with salt'
        }, {
                value: 'Margarine-like, vegetable oil spread, 60% fat, stick/tub/bottle, with salt'
        }, {
                value: 'Shortening, vegetable, household, composite'
        }, {
                value: 'Margarine, regular, 80% fat, composite, stick, without salt'
        }, {
                value: 'Margarine, regular, 80% fat, composite, tub, without salt'
        }, {
                value: 'Margarine-like, vegetable oil spread, 60% fat, stick/tub/bottle, without salt'
        }, {
                value: 'Margarine-like, vegetable oil spread, fat free, liquid, with salt'
        }, {
                value: 'Margarine-like spread with yogurt, 70% fat, stick, with salt'
        }, {
                value: 'Margarine-like spread with yogurt, approximately 40% fat, tub, with salt'
        }, {
                value: 'Margarine, 80% fat, stick, includes regular and hydrogenated corn and soybean oils'
        }, {
                value: 'Margarine, margarine-type vegetable oil spread, 70% fat, soybean and partially hydrogenated soybean, stick'
        }, {
                value: 'Margarine Spread, approximately 48% fat, tub'
        }, {
                value: 'Margarine-like, vegetable oil spread, fat-free, tub'
        }, {
                value: 'Margarine-like, vegetable oil spread, 20% fat, with salt'
        }, {
                value: 'Margarine-like, vegetable oil spread, 20% fat, without salt'
        }, {
                value: 'Salad dressing, thousand island dressing, fat-free'
        }, {
                value: 'Salad dressing, italian dressing, fat-free'
        }, {
                value: 'Salad dressing, ranch dressing, fat-free'
        }, {
                value: 'Salad dressing, ranch dressing, regular'
        }, {
                value: 'Salad dressing, ranch dressing, reduced fat'
        }, {
                value: 'Salad dressing, mayonnaise, light'
        }, {
                value: 'Oil, industrial, mid-oleic, sunflower'
        }, {
                value: 'Oil, industrial, canola with antifoaming agent, principal uses salads, woks and light frying'
        }, {
                value: 'Oil, industrial, canola for salads, woks and light frying'
        }, {
                value: 'Oil, industrial, canola (partially hydrogenated) oil for deep fat frying'
        }, {
                value: 'Oil, industrial, coconut, principal uses candy coatings, oil sprays, roasting nuts'
        }, {
                value: 'Oil, industrial, soy (partially hydrogenated), principal uses popcorn and flavoring vegetables'
        }, {
                value: 'Shortening, industrial, soy (partially hydrogenated), pourable liquid fry shortening'
        }, {
                value: 'Oil, industrial, soy, refined, for woks and light frying'
        }, {
                value: 'Oil, industrial, soy (partially hydrogenated), multiuse for non-dairy butter flavor'
        }, {
                value: 'Oil, industrial, soy ( partially hydrogenated), all purpose'
        }, {
                value: 'Oil, industrial, soy (partially hydrogenated ) and soy (winterized), pourable clear fry'
        }, {
                value: 'Oil, industrial, soy (partially hydrogenated)  and cottonseed, principal use as a tortilla shortening'
        }, {
                value: 'Margarine-like shortening, industrial, soy (partially hydrogenated), cottonseed, and soy, principal use flaky pastries'
        }, {
                value: 'Oil, industrial, palm kernel, confection fat, uses similar to high quality cocoa butter'
        }, {
                value: 'Oil, industrial, palm kernel (hydrogenated), confection fat, uses similar to 95 degree hard butter'
        }, {
                value: 'Oil, industrial, palm kernel (hydrogenated), confection fat, intermediate grade product'
        }, {
                value: 'Oil, industrial, coconut, confection fat, typical basis for ice cream coatings'
        }, {
                value: 'Oil, industrial, palm kernel (hydrogenated) , used for whipped toppings, non-dairy'
        }, {
                value: 'Oil, industrial, coconut (hydrogenated), used for whipped toppings and coffee whiteners'
        }, {
                value: 'Oil, industrial, palm and palm kernel, filling fat (non-hydrogenated)'
        }, {
                value: 'Oil, industrial, palm kernel (hydrogenated), filling fat'
        }, {
                value: 'Oil, industrial, soy (partially hydrogenated ), palm, principal uses icings and fillings'
        }, {
                value: 'Margarine, industrial, non-dairy, cottonseed, soy oil (partially hydrogenated ), for flaky pastries'
        }, {
                value: 'Shortening, industrial, soy (partially hydrogenated ) and corn for frying'
        }, {
                value: 'Shortening, industrial, soy (partially hydrogenated ) for baking and confections'
        }, {
                value: 'Margarine, industrial, soy and partially hydrogenated soy oil, use for baking, sauces and candy'
        }, {
                value: 'USDA Commodity Food, oil, vegetable, soybean, refined'
        }, {
                value: 'USDA Commodity Food, oil, vegetable, low saturated fat'
        }, {
                value: 'Margarine-like spread, SMART BALANCE Regular Buttery Spread with flax oil'
        }, {
                value: 'Margarine-like spread, SMART BALANCE Light Buttery Spread'
        }, {
                value: 'Margarine-like spread, SMART BEAT Super Light without saturated fat'
        }, {
                value: 'Margarine-like spread, SMART BEAT Smart Squeeze'
        }, {
                value: 'Margarine-like spread, SMART BALANCE Omega Plus Spread (with plant sterols & fish oil)'
        }, {
                value: 'Oil, vegetable, Natreon canola, high stability, non trans, high oleic (70%)'
        }, {
                value: 'Oil, PAM cooking spray, original'
        }, {
                value: 'Margarine, margarine-like vegetable oil spread, 67-70% fat, tub'
        }, {
                value: 'Margarine, 80% fat, tub, CANOLA HARVEST Soft Spread (canola, palm and palm kernel oils)'
        }, {
                value: 'Oil, cooking and salad, ENOVA, 80% diglycerides'
        }, {
                value: 'Salad dressing, honey mustard dressing, reduced calorie'
        }, {
                value: 'Margarine-like spread, BENECOL Light Spread'
        }, {
                value: 'Salad dressing, spray-style dressing, assorted flavors'
        }, {
                value: 'Salad Dressing, mayonnaise, light, SMART BALANCE, Omega Plus light'
        }, {
                value: 'Margarine-like, vegetable oil spread, approximately 37% fat, unspecified oils, with salt, with added vitamin D'
        }, {
                value: 'Margarine, regular, 80% fat, composite, stick, with salt, with added vitamin D'
        }, {
                value: 'Margarine, regular, 80% fat, composite, tub, with salt, with added vitamin D'
        }, {
                value: 'Margarine-like, vegetable oil spread, 60% fat, stick, with salt, with added vitamin D'
        }, {
                value: 'Margarine-like, vegetable oil spread, 60% fat, tub, with salt, with added vitamin D'
        }, {
                value: 'Margarine-like vegetable-oil spread, stick/tub/bottle, 60% fat, with added vitamin D'
        }, {
                value: 'Margarine, regular, 80% fat, composite, stick, without salt, with added vitamin D'
        }, {
                value: 'Margarine-like, vegetable oil spread, 60% fat, stick/tub/bottle, without salt, with added vitamin D'
        }, {
                value: 'Oil, industrial, canola, high oleic'
        }, {
                value: 'Oil, industrial, soy, low linolenic'
        }, {
                value: 'Oil, industrial, soy, ultra low linolenic'
        }, {
                value: 'Oil, industrial, soy, fully hydrogenated'
        }, {
                value: 'Oil, industrial, cottonseed, fully hydrogenated'
        }, {
                value: 'Salad dressing, honey mustard, regular'
        }, {
                value: 'Salad dressing, poppyseed, creamy'
        }, {
                value: 'Salad dressing, caesar, fat-free'
        }, {
                value: 'Dressing, honey mustard, fat-free'
        }, {
                value: 'Oil, flaxseed, contains added sliced flaxseed'
        }, {
                value: 'Mayonnaise, reduced fat, with olive oil'
        }, {
                value: 'Salad dressing, mayonnaise-type, light'
        }, {
                value: 'Chicken, broiler, rotisserie, BBQ, breast meat only'
        }, {
                value: 'Chicken, broilers or fryers, meat and skin and giblets and neck, raw'
        }, {
                value: 'Chicken, broilers or fryers, meat and skin and giblets and neck, cooked, fried, batter'
        }, {
                value: 'Chicken, broilers or fryers, meat and skin and giblets and neck, cooked, fried, flour'
        }, {
                value: 'Chicken, broilers or fryers, meat and skin and giblets and neck, roasted'
        }, {
                value: 'Chicken, broilers or fryers, meat and skin and giblets and neck, stewed'
        }, {
                value: 'Chicken, broilers or fryers, meat and skin, raw'
        }, {
                value: 'Chicken, broilers or fryers, meat and skin, cooked, fried, batter'
        }, {
                value: 'Chicken, broilers or fryers, meat and skin, cooked, fried, flour'
        }, {
                value: 'Chicken, broilers or fryers, meat and skin, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, meat and skin, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, meat only, raw'
        }, {
                value: 'Chicken, broilers or fryers, meat only, cooked, fried'
        }, {
                value: 'Chicken, broilers or fryers, meat only, roasted'
        }, {
                value: 'Chicken, broilers or fryers, meat only, stewed'
        }, {
                value: 'Chicken, broilers or fryers, skin only, raw'
        }, {
                value: 'Chicken, broilers or fryers, skin only, cooked, fried, batter'
        }, {
                value: 'Chicken, broilers or fryers, skin only, cooked, fried, flour'
        }, {
                value: 'Chicken, broilers or fryers, skin only, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, skin only, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, giblets, raw'
        }, {
                value: 'Chicken, broilers or fryers, giblets, cooked, fried'
        }, {
                value: 'Chicken, broilers or fryers, giblets, cooked, simmered'
        }, {
                value: 'Chicken, gizzard, all classes, raw'
        }, {
                value: 'Chicken, gizzard, all classes, cooked, simmered'
        }, {
                value: 'Chicken, heart, all classes, raw'
        }, {
                value: 'Chicken, heart, all classes, cooked, simmered'
        }, {
                value: 'Chicken, liver, all classes, raw'
        }, {
                value: 'Chicken, liver, all classes, cooked, simmered'
        }, {
                value: 'Chicken, broilers or fryers, light meat, meat and skin, raw'
        }, {
                value: 'Chicken, broilers or fryers, light meat, meat and skin, cooked, fried, batter'
        }, {
                value: 'Chicken, broilers or fryers, light meat, meat and skin, cooked, fried, flour'
        }, {
                value: 'Chicken, broilers or fryers, light meat, meat and skin, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, light meat, meat and skin, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, meat and skin, raw'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, meat and skin, cooked, fried, batter'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, meat and skin, cooked, fried, flour'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, meat and skin, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, meat and skin, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, light meat, meat only, raw'
        }, {
                value: 'Chicken, broilers or fryers, light meat, meat only, cooked, fried'
        }, {
                value: 'Chicken, broilers or fryers, light meat, meat only, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, light meat, meat only, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, meat only, raw'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, meat only, cooked, fried'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, meat only, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, meat only, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, separable fat, raw'
        }, {
                value: 'Chicken, broilers or fryers, back, meat and skin, raw'
        }, {
                value: 'Chicken, broilers or fryers, back, meat and skin, cooked, fried, batter'
        }, {
                value: 'Chicken, broilers or fryers, back, meat and skin, cooked, fried, flour'
        }, {
                value: 'Chicken, broilers or fryers, back, meat and skin, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, back, meat and skin, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, back, meat only, raw'
        }, {
                value: 'Chicken, broilers or fryers, back, meat only, cooked, fried'
        }, {
                value: 'Chicken, broilers or fryers, back, meat only, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, back, meat only, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, breast, meat and skin, raw'
        }, {
                value: 'Chicken, broilers or fryers, breast, meat and skin, cooked, fried, batter'
        }, {
                value: 'Chicken, broilers or fryers, breast, meat and skin, cooked, fried, flour'
        }, {
                value: 'Chicken, broilers or fryers, breast, meat and skin, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, breast, meat and skin, cooked, stewed'
        }, {
                value: 'Chicken, broiler or fryers, breast, skinless, boneless, meat only, raw'
        }, {
                value: 'Chicken, broilers or fryers, breast, meat only, cooked, fried'
        }, {
                value: 'Chicken, broilers or fryers, breast, meat only, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, breast, meat only, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, drumstick, meat and skin, raw'
        }, {
                value: 'Chicken, broilers or fryers, drumstick, meat and skin, cooked, fried, batter'
        }, {
                value: 'Chicken, broilers or fryers, drumstick, meat and skin, cooked, fried, flour'
        }, {
                value: 'Chicken, broilers or fryers, drumstick, meat and skin, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, drumstick, meat and skin, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, drumstick, meat only, raw'
        }, {
                value: 'Chicken, broilers or fryers, drumstick, meat only, cooked, fried'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, drumstick, meat only, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, drumstick, meat only, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, leg, meat and skin, raw'
        }, {
                value: 'Chicken, broilers or fryers, leg, meat and skin, cooked, fried, batter'
        }, {
                value: 'Chicken, broilers or fryers, leg, meat and skin, cooked, fried, flour'
        }, {
                value: 'Chicken, broilers or fryers, leg, meat and skin, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, leg, meat and skin, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, leg, meat only, raw'
        }, {
                value: 'Chicken, broilers or fryers, leg, meat only, cooked, fried'
        }, {
                value: 'Chicken, broilers or fryers, leg, meat only, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, leg, meat only, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, neck, meat and skin, raw'
        }, {
                value: 'Chicken, broilers or fryers, neck, meat and skin, cooked, fried, batter'
        }, {
                value: 'Chicken, broilers or fryers, neck, meat and skin, cooked, fried, flour'
        }, {
                value: 'Chicken, broilers or fryers, neck, meat and skin, cooked simmered'
        }, {
                value: 'Chicken, broilers or fryers, neck, meat only, raw'
        }, {
                value: 'Chicken, broilers or fryers, neck, meat only, cooked, fried'
        }, {
                value: 'Chicken, broilers or fryers, neck, meat only, cooked, simmered'
        }, {
                value: 'Chicken, broilers or fryers, thigh, meat and skin, raw'
        }, {
                value: 'Chicken, broilers or fryers, thigh, meat and skin, cooked, fried, batter'
        }, {
                value: 'Chicken, broilers or fryers, thigh, meat and skin, cooked, fried, flour'
        }, {
                value: 'Chicken, broilers or fryers, thigh, meat and skin, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, thigh, meat and skin, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, thigh, meat only, raw'
        }, {
                value: 'Chicken, broilers or fryers, thigh, meat only, cooked, fried'
        }, {
                value: 'Chicken, broilers or fryers, thigh, meat only, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, thigh, meat only, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, wing, meat and skin, raw'
        }, {
                value: 'Chicken, broilers or fryers, wing, meat and skin, cooked, fried, batter'
        }, {
                value: 'Chicken, broilers or fryers, wing, meat and skin, cooked, fried, flour'
        }, {
                value: 'Chicken, broilers or fryers, wing, meat and skin, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, wing, meat and skin, cooked, stewed'
        }, {
                value: 'Chicken, broilers or fryers, wing, meat only, raw'
        }, {
                value: 'Chicken, broilers or fryers, wing, meat only, cooked, fried'
        }, {
                value: 'Chicken, broilers or fryers, wing, meat only, cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, wing, meat only, cooked, stewed'
        }, {
                value: 'Chicken, roasting, meat and skin and giblets and neck, raw'
        }, {
                value: 'Chicken, roasting, meat and skin and giblets and neck, cooked, roasted'
        }, {
                value: 'Canada Goose, breast meat, skinless, raw'
        }, {
                value: 'Chicken, roasting, meat and skin, cooked, roasted'
        }, {
                value: 'Chicken, roasting, meat only, raw'
        }, {
                value: 'Chicken, roasting, meat only, cooked, roasted'
        }, {
                value: 'Chicken, roasting, giblets, raw'
        }, {
                value: 'Chicken, roasting, giblets, cooked, simmered'
        }, {
                value: 'Chicken, roasting, light meat, meat only, raw'
        }, {
                value: 'Chicken, roasting, light meat, meat only, cooked, roasted'
        }, {
                value: 'Chicken, roasting, dark meat, meat only, raw'
        }, {
                value: 'Chicken, roasting, dark meat, meat only, cooked, roasted'
        }, {
                value: 'Chicken, stewing, meat and skin, and giblets and neck, raw'
        }, {
                value: 'Chicken, stewing, meat and skin, and giblets and neck, cooked, stewed'
        }, {
                value: 'Chicken, stewing, meat and skin, raw'
        }, {
                value: 'Chicken, stewing, meat and skin, cooked, stewed'
        }, {
                value: 'Chicken, stewing, meat only, raw'
        }, {
                value: 'Chicken, stewing, meat only, cooked, stewed'
        }, {
                value: 'Chicken, stewing, giblets, raw'
        }, {
                value: 'Chicken, stewing, giblets, cooked, simmered'
        }, {
                value: 'Chicken, stewing, light meat, meat only, raw'
        }, {
                value: 'Chicken, stewing, light meat, meat only, cooked, stewed'
        }, {
                value: 'Chicken, stewing, dark meat, meat only, raw'
        }, {
                value: 'Chicken, stewing, dark meat, meat only, cooked, stewed'
        }, {
                value: 'Chicken, capons, meat and skin and giblets and neck, raw'
        }, {
                value: 'Chicken, capons, meat and skin and giblets and neck, cooked, roasted'
        }, {
                value: 'Chicken, capons, meat and skin, raw'
        }, {
                value: 'Chicken, capons, meat and skin, cooked, roasted'
        }, {
                value: 'Chicken, capons, giblets, raw'
        }, {
                value: 'Chicken, capons, giblets, cooked, simmered'
        }, {
                value: 'Duck, domesticated, meat and skin, raw'
        }, {
                value: 'Duck, domesticated, meat and skin, cooked, roasted'
        }, {
                value: 'Duck, domesticated, meat only, raw'
        }, {
                value: 'Duck, domesticated, meat only, cooked, roasted'
        }, {
                value: 'Duck, domesticated, liver, raw'
        }, {
                value: 'Duck, wild, meat and skin, raw'
        }, {
                value: 'Duck, wild, breast, meat only, raw'
        }, {
                value: 'Goose, domesticated, meat and skin, raw'
        }, {
                value: 'Goose, domesticated, meat and skin, cooked, roasted'
        }, {
                value: 'Goose, domesticated, meat only, raw'
        }, {
                value: 'Goose, domesticated, meat only, cooked, roasted'
        }, {
                value: 'Goose, liver, raw'
        }, {
                value: 'Guinea hen, meat and skin, raw'
        }, {
                value: 'Guinea hen, meat only, raw'
        }, {
                value: 'Pheasant, raw, meat and skin'
        }, {
                value: 'Pheasant, raw, meat only'
        }, {
                value: 'Pheasant, breast, meat only, raw'
        }, {
                value: 'Pheasant, leg, meat only, raw'
        }, {
                value: 'Quail, meat and skin, raw'
        }, {
                value: 'Quail, meat only, raw'
        }, {
                value: 'Quail, breast, meat only, raw'
        }, {
                value: 'Squab, (pigeon), meat and skin, raw'
        }, {
                value: 'Squab, (pigeon), meat only, raw'
        }, {
                value: 'Squab, (pigeon), light meat without skin, raw'
        }, {
                value: 'Turkey, whole, meat and skin, raw'
        }, {
                value: 'Turkey, whole, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey, whole, meat only, raw'
        }, {
                value: 'Turkey, whole, meat only, cooked, roasted'
        }, {
                value: 'Turkey, skin from whole, (light and dark), raw'
        }, {
                value: 'Turkey, skin from whole (light and dark), roasted'
        }, {
                value: 'Turkey, whole, giblets, raw'
        }, {
                value: 'Turkey, whole, giblets, cooked, simmered'
        }, {
                value: 'Turkey, gizzard, all classes, raw'
        }, {
                value: 'Turkey, gizzard, all classes, cooked, simmered'
        }, {
                value: 'Turkey, heart, all classes, raw'
        }, {
                value: 'Turkey, heart, all classes, cooked, simmered'
        }, {
                value: 'Turkey, liver, all classes, raw'
        }, {
                value: 'Turkey, liver, all classes, cooked, simmered'
        }, {
                value: 'Turkey from whole, neck, meat only, raw'
        }, {
                value: 'Turkey from whole, neck, meat only, cooked, simmered'
        }, {
                value: 'Turkey from whole, light meat, meat and skin, raw'
        }, {
                value: 'Turkey from whole, light meat, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey, dark meat, meat and skin, raw'
        }, {
                value: 'Turkey, dark meat from whole, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey from whole, light meat, raw'
        }, {
                value: 'Turkey, all classes, light meat, cooked, roasted'
        }, {
                value: 'Turkey from whole, dark meat, meat only, raw'
        }, {
                value: 'Turkey, from whole, dark meat, cooked, roasted'
        }, {
                value: 'Turkey, all classes, back, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey, all classes, breast, meat and skin, raw'
        }, {
                value: 'Turkey, all classes, breast, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey, all classes, leg, meat and skin, raw'
        }, {
                value: 'Turkey, all classes, leg, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey, all classes, wing, meat and skin, raw'
        }, {
                value: 'Turkey, all classes, wing, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey, fryer-roasters, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey, back from whole bird, meat only, raw'
        }, {
                value: 'Turkey, back, from whole bird, meat only, roasted'
        }, {
                value: 'Turkey, breast, from whole bird, meat only, raw'
        }, {
                value: 'Turkey, breast, from whole bird, meat only, roasted'
        }, {
                value: 'Turkey, wing, from whole bird, meat only, raw'
        }, {
                value: 'Turkey, wing, from whole bird, meat only, roasted'
        }, {
                value: 'Turkey, young hen, skin only, cooked, roasted'
        }, {
                value: 'Chicken, canned, meat only, with broth'
        }, {
                value: 'Pate de foie gras, canned (goose liver pate), smoked'
        }, {
                value: 'Turkey, canned, meat only, with broth'
        }, {
                value: 'Turkey, diced, light and dark meat, seasoned'
        }, {
                value: 'Turkey and gravy, frozen'
        }, {
                value: 'Turkey breast, pre-basted, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey thigh, pre-basted, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey roast, boneless, frozen, seasoned, light and dark meat, raw'
        }, {
                value: 'Turkey sticks, breaded, battered, fried'
        }, {
                value: 'Poultry, mechanically deboned, from backs and necks with skin, raw'
        }, {
                value: 'Poultry, mechanically deboned, from backs and necks without skin, raw'
        }, {
                value: 'Poultry, mechanically deboned, from mature hens, raw'
        }, {
                value: 'Turkey, mechanically deboned, from turkey frames, raw'
        }, {
                value: 'Ground turkey, raw'
        }, {
                value: 'Ground turkey, cooked'
        }, {
                value: 'Chicken, cornish game hens, meat and skin, raw'
        }, {
                value: 'Chicken, cornish game hens, meat and skin, cooked, roasted'
        }, {
                value: 'Chicken, cornish game hens, meat only, raw'
        }, {
                value: 'Chicken, cornish game hens, meat only, cooked, roasted'
        }, {
                value: 'Chicken, canned, no broth'
        }, {
                value: 'Chicken, wing, frozen, glazed, barbecue flavored'
        }, {
                value: 'Chicken, wing, frozen, glazed, barbecue flavored, heated (microwave)'
        }, {
                value: 'Chicken, broilers or fryers, breast, skinless, boneless, meat only, with added solution, raw'
        }, {
                value: 'Duck, young duckling, domesticated, White Pekin, breast, meat and skin, boneless, cooked, roasted'
        }, {
                value: 'Duck, young duckling, domesticated, White Pekin, breast, meat only, boneless, cooked without skin, broiled'
        }, {
                value: 'Duck, young duckling, domesticated, White Pekin, leg, meat and skin, bone in, cooked, roasted'
        }, {
                value: 'Duck, young duckling, domesticated, White Pekin, leg, meat only, bone in, cooked without skin, braised'
        }, {
                value: 'Chicken, broiler, rotisserie, BBQ, drumstick, meat only'
        }, {
                value: 'Chicken, wing, frozen, glazed, barbecue flavored, heated (conventional oven)'
        }, {
                value: 'Chicken patty, frozen, uncooked'
        }, {
                value: 'Chicken patty, frozen, cooked'
        }, {
                value: 'Chicken breast tenders, breaded, cooked, microwaved'
        }, {
                value: 'Chicken breast tenders, breaded, uncooked'
        }, {
                value: 'Chicken, ground, raw'
        }, {
                value: 'Chicken, ground, crumbles, cooked, pan-browned'
        }, {
                value: 'Chicken, broiler, rotisserie, BBQ, thigh, meat only'
        }, {
                value: 'Chicken, feet, boiled'
        }, {
                value: 'USDA Commodity Chicken, canned, meat only, drained'
        }, {
                value: 'USDA Commodity, Chicken, canned, meat only, with water'
        }, {
                value: 'USDA Commodity, Chicken, canned, meat only, with broth'
        }, {
                value: 'Chicken, broiler, rotisserie, BBQ, wing, meat only'
        }, {
                value: 'Chicken, broilers or fryers, back, meat only, cooked, rotisserie, original seasoning'
        }, {
                value: 'Chicken, broilers or fryers, breast, meat only, cooked, rotisserie, original seasoning'
        }, {
                value: 'Chicken, broilers or fryers, drumstick, meat only, cooked, rotisserie, original seasoning'
        }, {
                value: 'Chicken, broilers or fryers, skin only, cooked, rotisserie, original seasoning'
        }, {
                value: 'Chicken, broilers or fryers, thigh, meat only, cooked, rotisserie, original seasoning'
        }, {
                value: 'Chicken, broilers or fryers, wing, meat only, cooked, rotisserie, original seasoning'
        }, {
                value: 'Chicken, broilers or fryers, back, meat and skin, cooked, rotisserie, original seasoning'
        }, {
                value: 'Chicken, broilers or fryers, breast, meat and skin, cooked, rotisserie, original seasoning'
        }, {
                value: 'Chicken, broilers or fryers, drumstick, meat and skin, cooked, rotisserie, original seasoning'
        }, {
                value: 'Chicken, broilers or fryers, thigh, meat and skin, cooked, rotisserie, original seasoning'
        }, {
                value: 'Chicken, broilers or fryers, wing, meat and skin, cooked, rotisserie, original seasoning'
        }, {
                value: 'USDA Commodity, chicken fajita strips, frozen'
        }, {
                value: 'USDA Commodity, turkey taco meat, frozen, cooked'
        }, {
                value: 'Chicken, broiler, rotisserie, BBQ, skin'
        }, {
                value: 'Chicken, broiler, rotisserie, BBQ, back meat and skin'
        }, {
                value: 'Chicken, broiler, rotisserie, BBQ, breast meat and skin'
        }, {
                value: 'Chicken, broiler, rotisserie, BBQ, drumstick meat and skin'
        }, {
                value: 'Chicken, broiler, rotisserie, BBQ, thigh meat and skin'
        }, {
                value: 'Chicken, broiler, rotisserie, BBQ, wing meat and skin'
        }, {
                value: 'Ruffed Grouse, breast meat, skinless, raw'
        }, {
                value: 'USDA Commodity, turkey ham, dark meat, smoked, frozen'
        }, {
                value: 'Emu, ground, raw'
        }, {
                value: 'Emu, ground, cooked, pan-broiled'
        }, {
                value: 'Emu, fan fillet, raw'
        }, {
                value: 'Emu, fan fillet, cooked, broiled'
        }, {
                value: 'Emu, flat fillet, raw'
        }, {
                value: 'Emu, full rump, raw'
        }, {
                value: 'Emu, full rump, cooked, broiled'
        }, {
                value: 'Emu, inside drum, raw'
        }, {
                value: 'Emu, inside drums, cooked, broiled'
        }, {
                value: 'Emu, outside drum, raw'
        }, {
                value: 'Emu, oyster, raw'
        }, {
                value: 'Emu, top loin, cooked, broiled'
        }, {
                value: 'Ostrich, ground, raw'
        }, {
                value: 'Ostrich, ground, cooked, pan-broiled'
        }, {
                value: 'Ostrich, fan, raw'
        }, {
                value: 'Ostrich, inside leg, raw'
        }, {
                value: 'Ostrich, inside leg, cooked'
        }, {
                value: 'Ostrich, inside strip, raw'
        }, {
                value: 'Ostrich, inside strip, cooked'
        }, {
                value: 'Ostrich, outside leg, raw'
        }, {
                value: 'Ostrich, outside strip, raw'
        }, {
                value: 'Ostrich, outside strip, cooked'
        }, {
                value: 'Ostrich, oyster, raw'
        }, {
                value: 'Ostrich, oyster, cooked'
        }, {
                value: 'Ostrich, round, raw'
        }, {
                value: 'Ostrich, tenderloin, raw'
        }, {
                value: 'Ostrich, tip trimmed, raw'
        }, {
                value: 'Ostrich, tip trimmed, cooked'
        }, {
                value: 'Ostrich, top loin, raw'
        }, {
                value: 'Ostrich, top loin, cooked'
        }, {
                value: 'Chicken, liver, all classes, cooked, pan-fried'
        }, {
                value: 'Ground turkey, fat free, raw'
        }, {
                value: 'Ground turkey, fat free, pan-broiled crumbles'
        }, {
                value: 'Ground turkey, fat free, patties, broiled'
        }, {
                value: 'Ground turkey, 93% lean, 7% fat, raw'
        }, {
                value: 'Ground turkey, 93% lean, 7% fat, pan-broiled crumbles'
        }, {
                value: 'Ground turkey, 93% lean, 7% fat, patties, broiled'
        }, {
                value: 'Ground turkey, 85% lean, 15% fat, raw'
        }, {
                value: 'Ground turkey, 85% lean, 15% fat, pan-broiled crumbles'
        }, {
                value: 'Ground turkey, 85% lean, 15% fat, patties, broiled'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, drumstick, meat only, cooked, braised'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, thigh, meat only, cooked, braised'
        }, {
                value: 'Chicken, skin (drumsticks and thighs), cooked, braised'
        }, {
                value: 'Chicken, skin (drumsticks and thighs), raw'
        }, {
                value: 'Chicken, skin (drumsticks and thighs), cooked, roasted'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, drumstick, meat and skin, cooked, braised'
        }, {
                value: 'Chicken, broilers or fryers, dark meat, thigh, meat and skin, cooked, braised'
        }, {
                value: 'Chicken, dark meat, drumstick, meat only, with added solution, raw'
        }, {
                value: 'Chicken, dark meat, drumstick, meat only, with added solution, cooked, roasted'
        }, {
                value: 'Chicken, dark meat, drumstick, meat only, with added solution, cooked, braised'
        }, {
                value: 'Chicken, dark meat, thigh, meat only, with added solution, cooked, braised'
        }, {
                value: 'Chicken, dark meat, thigh, meat only, with added solution, raw'
        }, {
                value: 'Chicken, dark meat, thigh, meat only, with added solution, cooked, roasted'
        }, {
                value: 'Chicken, skin (drumsticks and thighs), with added solution, cooked, braised'
        }, {
                value: 'Chicken, skin (drumsticks and thighs), with added solution, raw'
        }, {
                value: 'Chicken, skin (drumsticks and thighs), with added solution, cooked, roasted'
        }, {
                value: 'Chicken, dark meat, drumstick, meat and skin, with added solution, cooked, braised'
        }, {
                value: 'Chicken, dark meat, drumstick, meat and skin, with added solution, raw'
        }, {
                value: 'Chicken, dark meat, drumstick, meat and skin, with added solution, cooked, roasted'
        }, {
                value: 'Chicken, dark meat, thigh, meat and skin, with added solution, cooked, braised'
        }, {
                value: 'Chicken, dark meat, thigh, meat and skin, with added solution, raw'
        }, {
                value: 'Chicken, dark meat, thigh, meat and skin, with added solution, cooked, roasted'
        }, {
                value: 'Chicken, broiler, rotisserie, BBQ, back meat only'
        }, {
                value: 'Turkey, dark meat from whole, meat only, with added solution, raw'
        }, {
                value: 'Turkey, dark meat, meat only, with added solution, cooked, roasted'
        }, {
                value: 'Turkey from whole, light meat, meat only, with added solution, raw'
        }, {
                value: 'Turkey from whole, light meat, meat only, with added solution, cooked, roasted'
        }, {
                value: 'Turkey, skin from whole (light and dark), with added solution, raw'
        }, {
                value: 'Turkey, skin from whole, (light and dark), with added solution, roasted'
        }, {
                value: 'Turkey, dark meat from whole, meat and skin, with added solution, raw'
        }, {
                value: 'Turkey, dark meat from whole, meat and skin, with added solution, cooked, roasted'
        }, {
                value: 'Turkey from whole, light meat, meat and skin, with added solution, raw'
        }, {
                value: 'Turkey from whole, light meat, meat and skin, with added solution, cooked, roasted'
        }, {
                value: 'Turkey, whole, meat only, with added solution, raw'
        }, {
                value: 'Turkey, whole, meat only, with added solution, roasted'
        }, {
                value: 'Turkey, whole, meat and skin, with added solution, raw'
        }, {
                value: 'Turkey, whole, meat and skin, with added solution, roasted'
        }, {
                value: 'Turkey, retail parts, breast, meat only, with added solution, raw'
        }, {
                value: 'Turkey, retail parts, breast, meat only, with added solution, cooked, roasted'
        }, {
                value: 'Turkey, retail parts, breast, meat only, raw'
        }, {
                value: 'Turkey, retail parts, breast, meat only, cooked, roasted'
        }, {
                value: 'Turkey, retail parts, wing, meat only, raw'
        }, {
                value: 'Turkey, retail parts, wing, meat only, cooked, roasted'
        }, {
                value: 'Turkey, skin, from retail parts, from dark meat, raw'
        }, {
                value: 'Turkey, skin, from retail parts, from dark meat, cooked, roasted'
        }, {
                value: 'Turkey, retail parts, drumstick, meat only, raw'
        }, {
                value: 'Turkey, retail parts, thigh, meat only, raw'
        }, {
                value: 'Turkey, breast, from whole bird, meat only, with added solution, roasted'
        }, {
                value: 'Turkey, back, from whole bird, meat only, with added solution, raw'
        }, {
                value: 'Turkey, back, from whole bird, meat only, with added solution, roasted'
        }, {
                value: 'Turkey, breast, from whole bird, meat only, with added solution, raw'
        }, {
                value: 'Turkey, retail parts, thigh, meat only, cooked, roasted'
        }, {
                value: 'Turkey, retail parts, drumstick, meat only, cooked, roasted'
        }, {
                value: 'Turkey, drumstick, from whole bird, meat only, with added solution, raw'
        }, {
                value: 'Turkey, drumstick, from whole bird, meat only, with added solution, roasted'
        }, {
                value: 'Turkey, thigh, from whole bird, meat only, with added solution, raw'
        }, {
                value: 'Turkey, retail parts, breast, meat and skin, with added solution, raw'
        }, {
                value: 'Turkey, thigh, from whole bird, meat only, with added solution, roasted'
        }, {
                value: 'Turkey, wing, from whole bird, meat only, with added solution, raw'
        }, {
                value: 'Turkey, wing, from whole bird, meat only, with added solution, roasted'
        }, {
                value: 'Turkey, retail parts, breast, meat and skin, raw'
        }, {
                value: 'Turkey, retail parts, breast, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey, retail parts, wing, meat and skin, raw'
        }, {
                value: 'Turkey, retail parts, wing, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey, retail parts, drumstick, meat and skin, raw'
        }, {
                value: 'Turkey, retail parts, drumstick, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey, drumstick, from whole bird, meat only, raw'
        }, {
                value: 'Turkey, drumstick, from whole bird, meat only, roasted'
        }, {
                value: 'Turkey, thigh, from whole bird, meat only, raw'
        }, {
                value: 'Turkey, thigh, from whole bird, meat only, roasted'
        }, {
                value: 'Turkey, retail parts, thigh, meat and skin, raw'
        }, {
                value: 'Turkey, retail parts, thigh, meat and skin, cooked, roasted'
        }, {
                value: 'Turkey, back, from whole bird, meat and skin, with added solution, raw'
        }, {
                value: 'Turkey, back, from whole bird, meat and skin, with added solution, roasted'
        }, {
                value: 'Chicken, broiler or fryers, breast, skinless, boneless, meat only, cooked, braised'
        }, {
                value: 'Chicken, broiler or fryers, breast, skinless, boneless, meat only, cooked, grilled'
        }, {
                value: 'Chicken, broiler or fryers, breast, skinless, boneless, meat only, with added solution, cooked, braised'
        }, {
                value: 'Chicken, broiler or fryers, breast, skinless, boneless, meat only, with added solution, cooked, grilled'
        }, {
                value: 'Soup, cream of asparagus, canned, condensed'
        }, {
                value: 'Soup, black bean, canned, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Beefy Mushroom Soup, condensed'
        }, {
                value: 'Soup, bean with pork, canned, condensed'
        }, {
                value: 'Soup, bean with frankfurters, canned, condensed'
        }, {
                value: 'Soup, bean with ham, canned, chunky, ready-to-serve'
        }, {
                value: 'Soup, beef broth or bouillon canned, ready-to-serve'
        }, {
                value: 'Soup, beef noodle, canned, condensed'
        }, {
                value: 'Soup, cream of celery, canned, condensed'
        }, {
                value: 'Soup, cheese, canned, condensed'
        }, {
                value: 'Soup, chicken broth, canned, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Broccoli Cheese Soup, condensed'
        }, {
                value: 'Soup, chicken, canned, chunky, ready-to-serve'
        }, {
                value: 'Soup, cream of chicken, canned, condensed'
        }, {
                value: 'Soup, chicken gumbo, canned, condensed'
        }, {
                value: 'Soup, chunky chicken noodle, canned, ready-to-serve'
        }, {
                value: 'Soup, chicken noodle, canned, condensed'
        }, {
                value: 'Soup, chicken rice, canned, chunky, ready-to-serve'
        }, {
                value: 'Soup, chicken with rice, canned, condensed'
        }, {
                value: 'Soup, chicken and vegetable, canned, ready-to-serve'
        }, {
                value: 'Soup, chicken vegetable, canned, condensed'
        }, {
                value: 'Soup, chili beef, canned, condensed'
        }, {
                value: 'Soup, clam chowder, manhattan style, canned, chunky, ready-to-serve'
        }, {
                value: 'Soup, clam chowder, manhattan, canned, condensed'
        }, {
                value: 'CAMPBELLS, HEALTHY REQUEST, chicken with rice, condensed'
        }, {
                value: 'Soup, clam chowder, new england, canned, condensed'
        }, {
                value: 'Soup, beef broth bouillon and consomme, canned, condensed'
        }, {
                value: 'Soup, lentil with ham, canned, ready-to-serve'
        }, {
                value: 'CAMPBELLS, Cheddar Cheese Soup, condensed'
        }, {
                value: 'Soup, minestrone, canned, chunky, ready-to-serve'
        }, {
                value: 'Soup, minestrone, canned, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Chicken and Dumplings Soup, condensed'
        }, {
                value: 'Soup, mushroom barley, canned, condensed'
        }, {
                value: 'Soup, cream of mushroom, canned, condensed'
        }, {
                value: 'Soup, mushroom with beef stock, canned, condensed'
        }, {
                value: 'Soup, onion, canned, condensed'
        }, {
                value: 'Soup, cream of onion, canned, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Chicken and Stars Soup, condensed'
        }, {
                value: 'Soup, oyster stew, canned, condensed'
        }, {
                value: 'Soup, pea, green, canned, condensed'
        }, {
                value: 'Soup, pea, split with ham, canned, chunky, ready-to-serve'
        }, {
                value: 'Soup, pea, split with ham, canned, condensed'
        }, {
                value: 'Soup, cream of potato, canned, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Chicken Alphabet Soup, condensed'
        }, {
                value: 'Soup, cream of shrimp, canned, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Chicken Broth, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Chicken Gumbo Soup, condensed'
        }, {
                value: 'Soup, tomato beef with noodle, canned, condensed'
        }, {
                value: 'CAMPBELLS, Red and White, Chicken Noodle Soup, condensed'
        }, {
                value: 'Soup, tomato rice, canned, condensed'
        }, {
                value: 'Soup, turkey, chunky, canned, ready-to-serve'
        }, {
                value: 'Soup, chunky vegetable, canned, ready-to-serve'
        }, {
                value: 'Soup, vegetarian vegetable, canned, condensed'
        }, {
                value: 'Soup, chunky beef, canned, ready-to-serve'
        }, {
                value: 'Soup, vegetable beef, canned, condensed'
        }, {
                value: 'Soup, vegetable with beef broth, canned, condensed'
        }, {
                value: 'Soup, beef broth or bouillon, powder, dry'
        }, {
                value: 'Soup, beef broth, cubed, dry'
        }, {
                value: 'Soup, chicken broth or bouillon, dry'
        }, {
                value: 'Soup, chicken broth cubes, dry'
        }, {
                value: 'CAMPBELLS Red and White, Chicken NOODLEOs Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Chicken Vegetable Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Beef Broth, condensed'
        }, {
                value: 'Soup, onion, dry, mix'
        }, {
                value: 'CAMPBELLS Red and White, Beef Consomme, condensed'
        }, {
                value: 'Soup, cream of vegetable, dry, powder'
        }, {
                value: 'Sauce, teriyaki, ready-to-serve'
        }, {
                value: 'Gravy, au jus, canned'
        }, {
                value: 'Gravy, au jus, dry'
        }, {
                value: 'Gravy, beef, canned, ready-to-serve'
        }, {
                value: 'CAMPBELLS Red and White, Bean with Bacon Soup, condensed'
        }, {
                value: 'Gravy, brown, dry'
        }, {
                value: 'Gravy, chicken, canned or bottled, ready-to-serve'
        }, {
                value: 'Gravy, chicken, dry'
        }, {
                value: 'Gravy, mushroom, canned'
        }, {
                value: 'Gravy, mushroom, dry, powder'
        }, {
                value: 'Gravy, onion, dry, mix'
        }, {
                value: 'Gravy, pork, dry, powder'
        }, {
                value: 'Gravy, turkey, canned, ready-to-serve'
        }, {
                value: 'Gravy, turkey, dry'
        }, {
                value: 'Gravy, unspecified type, dry'
        }, {
                value: 'Soup, chicken noodle, dry, mix'
        }, {
                value: 'Sauce, sofrito, prepared from recipe'
        }, {
                value: 'USDA Commodity, spaghetti sauce, meatless, canned'
        }, {
                value: 'CAMPBELLS Red and White, Beef Noodle Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Beef with Vegetables and Barley Soup, condensed'
        }, {
                value: 'Soup, beef mushroom, canned, condensed'
        }, {
                value: 'Soup, chicken mushroom, canned, condensed'
        }, {
                value: 'Sauce, barbecue'
        }, {
                value: 'Sauce, plum, ready-to-serve'
        }, {
                value: 'Sauce, pizza, canned, ready-to-serve'
        }, {
                value: 'Soup, tomato bisque, canned, condensed'
        }, {
                value: 'Soup, tomato, canned, condensed'
        }, {
                value: 'Sauce, salsa, ready-to-serve'
        }, {
                value: 'Sauce, homemade, white, thin'
        }, {
                value: 'Sauce, homemade, white, medium'
        }, {
                value: 'Sauce, homemade, white, thick'
        }, {
                value: 'Sauce, ready-to-serve, pepper or hot'
        }, {
                value: 'Sauce, ready-to-serve, pepper, TABASCO'
        }, {
                value: 'Soup, stock, beef, home-prepared'
        }, {
                value: 'Soup, stock, chicken, home-prepared'
        }, {
                value: 'Soup, stock, fish, home-prepared'
        }, {
                value: 'Sauce, hoisin, ready-to-serve'
        }, {
                value: 'Sauce, oyster, ready-to-serve'
        }, {
                value: 'Soup, minestrone, canned, reduced sodium, ready-to-serve'
        }, {
                value: 'USDA Commodity, salsa'
        }, {
                value: 'Sauce, fish, ready-to-serve'
        }, {
                value: 'Soup, shark fin, restaurant-prepared'
        }, {
                value: 'Soup, cream of mushroom, canned, condensed, reduced sodium'
        }, {
                value: 'Soup, chicken broth, less/reduced sodium, ready to serve'
        }, {
                value: 'Soup, beef broth, less/reduced sodium, ready to serve'
        }, {
                value: 'Sauce, teriyaki, ready-to-serve, reduced sodium'
        }, {
                value: 'Soup, bean & ham, canned, reduced sodium, prepared with water or ready-to-serve'
        }, {
                value: 'Split pea soup, canned, reduced sodium, prepared with water or ready-to serve'
        }, {
                value: 'Split pea with ham soup, canned, reduced sodium, prepared with water or ready-to-serve'
        }, {
                value: 'Soup, chicken broth, ready-to-serve'
        }, {
                value: 'CAMPBELLS, HEALTHY REQUEST, cream of chicken soup, condensed'
        }, {
                value: 'Soup, cream of asparagus, canned, prepared with equal volume milk'
        }, {
                value: 'Soup, chicken vegetable with potato and cheese, chunky, ready-to-serve'
        }, {
                value: 'CAMPBELLS, 98% Fat Free Cream of Broccoli Soup, condensed'
        }, {
                value: 'Soup, cream of celery, canned, prepared with equal volume milk'
        }, {
                value: 'Soup, cheese, canned, prepared with equal volume milk'
        }, {
                value: 'CAMPBELLS, 25% Less Sodium Chicken Noodle Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, 25% Less Sodium Tomato Soup, condensed'
        }, {
                value: 'CAMPBELLS, 25% Less Sodium Cream of Mushroom Soup, condensed'
        }, {
                value: 'CAMPBELLS, 98% Fat Free Broccoli Cheese Soup, condensed'
        }, {
                value: 'Soup, cream of chicken, canned, prepared with equal volume milk'
        }, {
                value: 'Soup, vegetable, canned, low sodium, condensed'
        }, {
                value: 'CAMPBELLS, 98% Fat Free Cream of Celery Soup, condensed'
        }, {
                value: 'CAMPBELLS, 98% Fat Free Cream of Chicken Soup, condensed'
        }, {
                value: 'PREGO Pasta, Chunky Garden Mushroom and Green Pepper Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Chunky Garden Mushroom Supreme Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Diced Onion and Garlic Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Flavored with Meat Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Fresh Mushroom Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Garlic Supreme Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Italian Sausage and Garlic Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Mini Meatball Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Mushroom and Garlic Italian Sauce, ready-to-serve'
        }, {
                value: 'Soup, clam chowder, new england, canned, prepared with equal volume low fat (2%) milk'
        }, {
                value: 'PREGO Pasta, Mushroom and Parmesan Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Organic Mushroom Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Organic Tomato and Basil Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Heart Smart- Ricotta Parmesan Italian Sauce, ready-to-serve'
        }, {
                value: 'P REGO Pasta, Roasted Garlic and Herb Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Roasted Garlic Parmesan Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Heart Smart- Roasted Red Pepper and Garlic Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Tomato, Basil and Garlic Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Zesty Mushroom Italian Sauce, ready-to-serve'
        }, {
                value: 'CAMPBELLS CHUNKY Microwavable Bowls, Beef with Country Vegetables Soup, ready-to-serve'
        }, {
                value: 'CAMPBELLS CHUNKY Microwavable Bowls, Chicken and Dumplings Soup, ready-to-serve'
        }, {
                value: 'Soup, cream of mushroom, canned, prepared with equal volume low fat (2%) milk'
        }, {
                value: 'CAMPBELLS CHUNKY Microwavable Bowls, Classic Chicken Noodle, ready-to-serve'
        }, {
                value: 'CAMPBELLS CHUNKY Microwavable Bowls, Grilled Chicken and Sausage Gumbo, ready-to-serve'
        }, {
                value: 'Soup, cream of onion, canned, prepared with equal volume milk'
        }, {
                value: 'Soup, oyster stew, canned, prepared with equal volume milk'
        }, {
                value: 'Soup, pea, green, canned, prepared with equal volume milk'
        }, {
                value: 'CAMPBELLS CHUNKY Microwavable Bowls, New England Clam Chowder, ready-to-serve'
        }, {
                value: 'CAMPBELLS CHUNKY Microwavable Bowls, Old Fashioned Vegetable Beef Soup, ready-to-serve'
        }, {
                value: 'CAMPBELLS CHUNKY Microwavable Bowls, Sirloin Burger with Country Vegetables Soup, ready-to-serve'
        }, {
                value: 'Soup, cream of potato, canned, prepared with equal volume milk'
        }, {
                value: 'Soup, cream of shrimp, canned, prepared with equal volume low fat (2%) milk'
        }, {
                value: 'Sauce, white, thin, prepared-from-recipe, with butter'
        }, {
                value: 'Sauce, sweet and sour, prepared-from-recipe'
        }, {
                value: 'Sauce, barbecue, KRAFT, original'
        }, {
                value: 'CAMPBELLS, Chicken with Rice Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Chicken Won Ton Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Cream of Asparagus Soup, condensed'
        }, {
                value: 'Soup, HEALTHY CHOICE Chicken Noodle Soup, canned'
        }, {
                value: 'Soup, HEALTHY CHOICE Chicken and Rice Soup, canned'
        }, {
                value: 'Soup, HEALTHY CHOICE Garden Vegetable Soup, canned'
        }, {
                value: 'Gravy, CAMPBELLS, beef, fat free'
        }, {
                value: 'Gravy, CAMPBELLS, country style cream'
        }, {
                value: 'Gravy, CAMPBELLS, country style sausage'
        }, {
                value: 'Gravy, CAMPBELLS, chicken, fat free'
        }, {
                value: 'Gravy, CAMPBELLS, golden pork'
        }, {
                value: 'Gravy, CAMPBELLS, mushroom'
        }, {
                value: 'Gravy, CAMPBELLS, turkey, fat free'
        }, {
                value: 'Gravy, CAMPBELLS, beef, microwavable'
        }, {
                value: 'Gravy, CAMPBELLS, chicken, microwavable'
        }, {
                value: 'Gravy, CAMPBELLS, turkey'
        }, {
                value: 'Gravy, FRANCO-AMERICAN, beef, slow roast, fat free'
        }, {
                value: 'Gravy, FRANCO-AMERICAN, chicken, slow roast, fat free'
        }, {
                value: 'Gravy, FRANCO-AMERICAN, beef, slow roast'
        }, {
                value: 'Gravy, FRANCO-AMERICAN, chicken, slow roast'
        }, {
                value: 'Gravy, FRANCO-AMERICAN, turkey, slow roast'
        }, {
                value: 'Gravy, CAMPBELLS, turkey, microwavable'
        }, {
                value: 'CAMPBELLS Red and White, Cream of Broccoli Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Cream of Celery Soup, condensed'
        }, {
                value: 'CAMPBELLS, Cream of Chicken Soup, condensed'
        }, {
                value: 'CAMPBELLS, Cream of Chicken with Herbs Soup, condensed'
        }, {
                value: 'CAMPBELLS, Cream of Mushroom Soup, condensed'
        }, {
                value: 'CAMPBELLS, Cream of Mushroom with Roasted Garlic Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Cream of Onion Soup, condensed'
        }, {
                value: 'CAMPBELLS, Cream of Potato Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Cream of Shrimp Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Creamy Chicken Noodle Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, SCOOBY-DOO Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, DOUBLE NOODLE in Chicken Broth Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Old Fashioned Tomato Rice Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Fiesta Nacho Cheese Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, French Onion Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Golden Mushroom Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, GOLDFISH Pasta with Chicken in Chicken Broth, condensed'
        }, {
                value: 'Soup, tomato bisque, canned, prepared with equal volume milk'
        }, {
                value: 'Soup, tomato, canned, prepared with equal volume low fat (2%) milk'
        }, {
                value: 'CAMPBELLS Red and White, Green Pea Soup, condensed'
        }, {
                value: 'CAMPBELLS, Homestyle Chicken Noodle Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Manhattan Clam Chowder, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Mega Noodle in Chicken Broth, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Minestrone Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, New England Clam Chowder, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Vegetarian Vegetable Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Vegetable Soup, condensed'
        }, {
                value: 'CAMPBELLS, Vegetable Beef Soup, condensed'
        }, {
                value: 'CAMPBELLS, Tomato Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Tomato Bisque, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Split Pea with Ham and Bacon Soup, condensed'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Baked Potato with Cheddar & Bacon Bits Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Baked Potato with Steak & Cheese Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Beef Rib Roast with Potatoes & Herbs Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Beef with Country Vegetables Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Beef with White and Wild Rice Soup'
        }, {
                value: 'CAMPBELLS CHUNKY, Creamy Chicken and Dumplings Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Chicken Broccoli Cheese & Potato Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Chicken Corn Chowder'
        }, {
                value: 'CAMPBELLS CHUNKY, Classic Chicken Noodle Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Fajita Chicken with Rice & Beans Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Firehouse - Hot & Spicy Beef & Bean Chili'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Grilled Chicken & Sausage Gumbo Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Grilled Chicken with Vegetables & Pasta Soup'
        }, {
                value: 'Soup, cream of asparagus, canned, prepared with equal volume water'
        }, {
                value: 'Soup, black bean, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Grilled Sirloin Steak with Hearty Vegetables Soup'
        }, {
                value: 'Soup, bean with pork, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY, HEALTHY REQUEST Chicken Noodle Soup'
        }, {
                value: 'Soup, bean with frankfurters, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, HEALTHY REQUEST Vegetable Soup'
        }, {
                value: 'Soup, beef noodle, canned, prepared with equal volume water'
        }, {
                value: 'Soup, cream of celery, canned, prepared with equal volume water'
        }, {
                value: 'Soup, cheese, canned, prepared with equal volume water'
        }, {
                value: 'Soup, chicken broth, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Hearty Bean N Ham Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Hearty Beef Barley Soup'
        }, {
                value: 'Soup, cream of chicken, canned, prepared with equal volume water'
        }, {
                value: 'Soup, chicken gumbo, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Hearty Chicken with Vegetables Soup'
        }, {
                value: 'Soup, chicken noodle, canned, prepared with equal volume water'
        }, {
                value: 'Soup, chicken with rice, canned, prepared with equal volume water'
        }, {
                value: 'Soup, chili beef, canned, prepared with equal volume water'
        }, {
                value: 'Soup, clam chowder, manhattan, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Manhattan Clam Chowder'
        }, {
                value: 'Soup, clam chowder, new england, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY, New England Clam Chowder'
        }, {
                value: 'Soup, beef broth, bouillon, consomme, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Old Fashioned Potato Ham Chowder'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Old Fashioned Vegetable Beef Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Roadhouse - Beef & Bean Chili'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Salisbury Steak with Mushrooms & Onions Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Savory Chicken with White & Wild Rice Soup'
        }, {
                value: 'Soup, minestrone, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Savory Pot Roast Soup'
        }, {
                value: 'Soup, mushroom barley, canned, prepared with equal volume water'
        }, {
                value: 'Soup, cream of mushroom, canned, prepared with equal volume water'
        }, {
                value: 'Soup, mushroom with beef stock, canned, prepared with equal volume water'
        }, {
                value: 'Soup, cream of onion, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Savory Vegetable Soup'
        }, {
                value: 'Soup, oyster stew, canned, prepared with equal volume water'
        }, {
                value: 'Soup, pea, green, canned, prepared with equal volume water'
        }, {
                value: 'Soup, pea, split with ham, canned, prepared with equal volume water'
        }, {
                value: 'Soup, cream of potato, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Grilled Steak- Steak Chili with Beans'
        }, {
                value: 'Soup, cream of shrimp, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Slow Roasted Beef with Mushrooms Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Split Pea N Ham Soup'
        }, {
                value: 'Soup, tomato beef with noodle, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, Steak N Potato Soup'
        }, {
                value: 'Soup, tomato rice, canned, prepared with equal volume water'
        }, {
                value: 'Soup, turkey noodle, canned, prepared with equal volume water'
        }, {
                value: 'Soup, turkey vegetable, canned, prepared with equal volume water'
        }, {
                value: 'Soup, vegetarian vegetable, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS Low Sodium Soups, Chicken Broth'
        }, {
                value: 'Soup, vegetable beef, canned, prepared with equal volume water'
        }, {
                value: 'Soup, vegetable with beef broth, canned, prepared with equal volume water'
        }, {
                value: 'Soup, beef broth or bouillon, powder, prepared with water'
        }, {
                value: 'Soup, beef broth, cubed, prepared with water'
        }, {
                value: 'Soup, chicken broth or bouillon, dry, prepared with water'
        }, {
                value: 'Soup, chicken broth cubes, dry, prepared with water'
        }, {
                value: 'CAMPBELLS Low Sodium Soups, Chicken with Noodles Soup'
        }, {
                value: 'Soup, cream of chicken, dry, mix, prepared with water'
        }, {
                value: 'CAMPBELLS Low Sodium Soups, Cream of Mushroom Soup'
        }, {
                value: 'Soup, onion, dry, mix, prepared with water'
        }, {
                value: 'CAMPBELLS Red and White - Microwaveable Bowls, Chicken Noodle Soup'
        }, {
                value: 'Soup, tomato, dry, mix, prepared with water'
        }, {
                value: 'CAMPBELLS Red and White - Microwaveable Bowls, Chicken Rice Soup'
        }, {
                value: 'CAMPBELLS Red and White - Microwaveable Bowls, Creamy Tomato Soup'
        }, {
                value: 'CAMPBELLS Red and White - Microwaveable Bowls, Tomato Soup'
        }, {
                value: 'CAMPBELLS Red and White - Microwaveable Bowls, Vegetable Beef Soup'
        }, {
                value: 'CAMPBELLS Homestyle Butternut Squash Bisque'
        }, {
                value: 'Soup, chicken noodle, dry, mix, prepared with water'
        }, {
                value: 'CAMPBELLS Homestyle Light New England Clam Chowder'
        }, {
                value: 'CAMPBELLS Homestyle HEALTHY REQUEST Mexican Style Chicken Tortilla'
        }, {
                value: 'CAMPBELLS Homestyle Italian-Style Wedding Soup'
        }, {
                value: 'CAMPBELLS Homestyle Mexican Style Chicken Tortilla Soup'
        }, {
                value: 'CAMPBELLS Homestyle Minestrone Soup'
        }, {
                value: 'CAMPBELLS Homestyle New England Clam Chowder'
        }, {
                value: 'CAMPBELLS Homestyle Potato Broccoli Cheese Soup'
        }, {
                value: 'Soup, beef mushroom, canned, prepared with equal volume water'
        }, {
                value: 'CAMPBELLS Homestyle Chicken with White & Wild Rice Soup'
        }, {
                value: 'Soup, chicken mushroom, canned, prepared with equal volume water'
        }, {
                value: 'Soup, tomato bisque, canned, prepared with equal volume water'
        }, {
                value: 'Soup, tomato, canned, prepared with equal volume water, commercial'
        }, {
                value: 'CAMPBELLS Homestyle Vegetable Medley Soup'
        }, {
                value: 'Soup, ramen noodle, any flavor, dry'
        }, {
                value: 'Soup, broccoli cheese, canned, condensed, commercial'
        }, {
                value: 'CAMPBELLS Soup on the Go, Vegetable with Mini Round Noodles Soup'
        }, {
                value: 'CAMPBELLS Soup on the Go, Chicken & Stars Soup'
        }, {
                value: 'CAMPBELLS Soup on the Go, Chicken with Mini Noodles Soup'
        }, {
                value: 'CAMPBELLS Soup on the Go, Classic Tomato Soup'
        }, {
                value: 'CAMPBELLS Soup on the Go, Creamy Broccoli Soup'
        }, {
                value: 'CAMPBELLS Soup on the Go, Creamy Chicken Soup'
        }, {
                value: 'CAMPBELLS Soup on the Go, Creamy Tomato Soup'
        }, {
                value: 'CAMPBELLS Soup on the Go, New England Clam Chowder'
        }, {
                value: 'CAMPBELLS Soup on the Go, Vegetable Beef Soup'
        }, {
                value: 'CAMPBELLS Soup on the Go, Cheesy Potato with Bacon Flavor Soup'
        }, {
                value: 'PACE, Chipotle Chunky Salsa'
        }, {
                value: 'PACE, Cilantro Chunky Salsa'
        }, {
                value: 'PACE, Enchilada Sauce'
        }, {
                value: 'PACE, Green Taco Sauce'
        }, {
                value: 'PACE, Lime & Garlic Chunky Salsa'
        }, {
                value: 'PACE, Organic Picante Sauce'
        }, {
                value: 'PACE, Picante Sauce'
        }, {
                value: 'PACE, Red Taco Sauce'
        }, {
                value: 'PACE, Thick & Chunky Salsa'
        }, {
                value: 'SWANSON BROTH, Certified Organic Vegetable Broth'
        }, {
                value: 'Soup, SWANSON, beef broth, lower sodium'
        }, {
                value: 'Soup, SWANSON, vegetable broth'
        }, {
                value: 'CAMPBELLS Homestyle Light Italian-Style Wedding Soup'
        }, {
                value: 'Sauce, peanut, made from coconut, water, sugar, peanuts'
        }, {
                value: 'SMART SOUP, Santa Fe Corn Chowder'
        }, {
                value: 'SMART SOUP, French Lentil'
        }, {
                value: 'SMART SOUP, Greek Minestrone'
        }, {
                value: 'SMART SOUP, Indian Bean Masala'
        }, {
                value: 'SMART SOUP, Moroccan Chick Pea'
        }, {
                value: 'SMART SOUP, Thai Coconut Curry'
        }, {
                value: 'SMART SOUP, Vietnamese Carrot Lemongrass'
        }, {
                value: 'Sauce, pesto, ready-to-serve, refrigerated'
        }, {
                value: 'Sauce, pesto, ready-to-serve, shelf stable'
        }, {
                value: 'Sauce, pesto, BUITONI, pesto with basil, ready-to-serve, refrigerated'
        }, {
                value: 'Sauce, pesto, CLASSICO, basil pesto, ready-to-serve'
        }, {
                value: 'Sauce, pesto, MEZZETTA, NAPA VALLEY BISTRO, basil pesto, ready-to-serve'
        }, {
                value: 'Sauce, hot chile, sriracha'
        }, {
                value: 'Sauce, hot chile, sriracha, CHA! BY TEXAS PETE'
        }, {
                value: 'Sauce, hot chile, sriracha, TUONG OT SRIRACHA'
        }, {
                value: 'Soup, vegetable broth, ready to serve'
        }, {
                value: 'Sauce, cheese sauce mix, dry'
        }, {
                value: 'Soup, chicken corn chowder, chunky, ready-to-serve, single brand'
        }, {
                value: 'Soup, chicken mushroom chowder, chunky, ready-to-serve, single brand'
        }, {
                value: 'Soup, potato ham chowder, chunky, ready-to-serve, single brand'
        }, {
                value: 'Soup, sirloin burger with vegetables, ready-to-serve, single brand'
        }, {
                value: 'Soup, split pea with ham, chunky, reduced fat, reduced sodium, ready-to-serve, single brand'
        }, {
                value: 'Soup, bean with bacon, condensed, single brand'
        }, {
                value: 'Soup, beef with vegetables and barley, canned, condensed, single brand'
        }, {
                value: 'Soup, chicken with star-shaped pasta, canned, condensed, single brand'
        }, {
                value: 'Soup, cream of chicken, canned, condensed, single brand'
        }, {
                value: 'Soup, split pea with ham and bacon, canned, condensed, single brand'
        }, {
                value: 'Soup, vegetable beef, canned, condensed, single brand'
        }, {
                value: 'Soup, chicken vegetable, chunky, reduced fat, reduced sodium, ready-to-serve, single brand'
        }, {
                value: 'Soup, vegetable beef, microwavable, ready-to-serve, single brand'
        }, {
                value: 'Soup, PROGRESSO, beef barley, traditional, ready to serve'
        }, {
                value: 'Soup, beef and vegetables, canned, ready-to-serve'
        }, {
                value: 'Sauce, cheese, ready-to-serve'
        }, {
                value: 'Sauce, pasta, spaghetti/marinara, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Traditional Italian Sauce, ready-to-serve'
        }, {
                value: 'Soup, cream of chicken, canned, condensed, reduced sodium'
        }, {
                value: 'Soup, tomato, canned, condensed, reduced sodium'
        }, {
                value: 'Gravy, brown instant, dry'
        }, {
                value: 'Gravy, instant beef, dry'
        }, {
                value: 'Gravy, instant turkey, dry'
        }, {
                value: 'Sauce, alfredo mix, dry'
        }, {
                value: 'Sauce, peppers, hot, chili, mature red, canned'
        }, {
                value: 'Sauce, chili, peppers, hot, immature green, canned'
        }, {
                value: 'Fish broth'
        }, {
                value: 'Soup, tomato, low sodium, with water'
        }, {
                value: 'Soup, pea, low sodium, prepared with equal volume water'
        }, {
                value: 'Soup, chicken noodle, low sodium, canned, prepared with equal volume water'
        }, {
                value: 'Soup, vegetable soup, condensed, low sodium, prepared with equal volume water'
        }, {
                value: 'Soup, cream of mushroom, low sodium, ready-to-serve, canned'
        }, {
                value: 'Potato soup, instant, dry mix'
        }, {
                value: 'Soup, chicken broth, low sodium, canned'
        }, {
                value: 'Sauce, worcestershire'
        }, {
                value: 'Sauce, tomato chili sauce, bottled, with salt'
        }, {
                value: 'Soup, vegetable chicken, canned, prepared with water, low sodium'
        }, {
                value: 'Sauce, pasta, spaghetti/marinara, ready-to-serve, low sodium'
        }, {
                value: 'Gravy, meat or poultry, low sodium, prepared'
        }, {
                value: 'Soup, beef and mushroom, low sodium, chunk style'
        }, {
                value: 'Soup, beef stroganoff, canned, chunky style, ready-to-serve'
        }, {
                value: 'Soup, bouillon cubes and granules, low sodium, dry'
        }, {
                value: 'Soup, ramen noodle, beef flavor, dry'
        }, {
                value: 'Soup, ramen noodle, chicken flavor, dry'
        }, {
                value: 'Soup, SWANSON Chicken Broth 99% Fat Free'
        }, {
                value: 'Gravy, HEINZ Home Style, savory beef'
        }, {
                value: 'CAMPBELLS HEALTHY REQUEST, Chicken Noodle Soup, condensed'
        }, {
                value: 'HEALTHY REQUEST, Cream of Celery Soup, condensed'
        }, {
                value: 'CAMPBELLS HEALTHY REQUEST, Cream of Mushroom Soup, condensed'
        }, {
                value: 'CAMPBELLS HEALTHY REQUEST, Homestyle Chicken Noodle Soup, condensed'
        }, {
                value: 'HEALTHY REQUEST, Minestrone Soup, condensed'
        }, {
                value: 'HEALTHY REQUEST, Tomato Soup, condensed'
        }, {
                value: 'HEALTHY REQUEST, Vegetable Soup, condensed'
        }, {
                value: 'PREGO Pasta, Chunky Garden Combination Italian Sauce, ready-to-serve'
        }, {
                value: 'PREGO Pasta, Chunky Garden Tomato, Onion and Garlic Italian Sauce, ready-to-serve'
        }, {
                value: 'Gravy, CAMPBELLS, au jus'
        }, {
                value: 'Gravy, CAMPBELLS, beef'
        }, {
                value: 'Gravy, CAMPBELLS, brown with onions'
        }, {
                value: 'Gravy, CAMPBELLS, chicken'
        }, {
                value: 'Barbecue loaf, pork, beef'
        }, {
                value: 'Beerwurst, beer salami, pork and beef'
        }, {
                value: 'Beerwurst, beer salami, pork'
        }, {
                value: 'Sausage, Berliner, pork, beef'
        }, {
                value: 'Blood sausage'
        }, {
                value: 'Bockwurst, pork, veal, raw'
        }, {
                value: 'Bologna, beef'
        }, {
                value: 'Bologna, beef and pork'
        }, {
                value: 'Bologna, pork'
        }, {
                value: 'Bologna, turkey'
        }, {
                value: 'Bratwurst, pork, cooked'
        }, {
                value: 'Braunschweiger (a liver sausage), pork'
        }, {
                value: 'Brotwurst, pork, beef, link'
        }, {
                value: 'Cheesefurter, cheese smokie, pork, beef'
        }, {
                value: 'Chicken spread'
        }, {
                value: 'Chorizo, pork and beef'
        }, {
                value: 'Corned beef loaf, jellied'
        }, {
                value: 'Dutch brand loaf, chicken, pork and beef'
        }, {
                value: 'Frankfurter, beef, unheated'
        }, {
                value: 'Frankfurter, chicken'
        }, {
                value: 'Frankfurter, turkey'
        }, {
                value: 'Ham, chopped, canned'
        }, {
                value: 'Ham, chopped, not canned'
        }, {
                value: 'Ham, sliced, packaged (96% fat free, water added)'
        }, {
                value: 'Ham, sliced, regular (approximately 11% fat)'
        }, {
                value: 'Ham, minced'
        }, {
                value: 'Ham salad spread'
        }, {
                value: 'Ham and cheese loaf or roll'
        }, {
                value: 'Ham and cheese spread'
        }, {
                value: 'Headcheese, pork'
        }, {
                value: 'Sausage, Italian, pork, raw'
        }, {
                value: 'Knackwurst, knockwurst, pork, beef'
        }, {
                value: 'Lebanon bologna, beef'
        }, {
                value: 'Liver cheese, pork'
        }, {
                value: 'Liver sausage, liverwurst, pork'
        }, {
                value: 'Roast beef, deli style, prepackaged, sliced'
        }, {
                value: 'USDA Commodity, luncheon meat, canned'
        }, {
                value: 'Luncheon meat, pork, canned'
        }, {
                value: 'Turkey breast, low salt, prepackaged or deli, luncheon meat'
        }, {
                value: 'Mortadella, beef, pork'
        }, {
                value: 'Olive loaf, pork'
        }, {
                value: 'Pastrami, turkey'
        }, {
                value: 'Pate, chicken liver, canned'
        }, {
                value: 'Pate, goose liver, smoked, canned'
        }, {
                value: 'Pate, liver, not specified, canned'
        }, {
                value: 'Peppered loaf, pork, beef'
        }, {
                value: 'Pepperoni, beef and pork, sliced'
        }, {
                value: 'Pickle and pimiento loaf, pork'
        }, {
                value: 'Polish sausage, pork'
        }, {
                value: 'Luxury loaf, pork'
        }, {
                value: 'Mothers loaf, pork'
        }, {
                value: 'Picnic loaf, pork, beef'
        }, {
                value: 'Pork sausage, link/patty, unprepared'
        }, {
                value: 'Pork sausage, link/patty, cooked, pan-fried'
        }, {
                value: 'Pork and beef sausage, fresh, cooked'
        }, {
                value: 'Turkey sausage, reduced fat, brown and serve, cooked (include BUTTERBALL breakfast links turkey sausage)'
        }, {
                value: 'Poultry salad sandwich spread'
        }, {
                value: 'Salami, cooked, beef'
        }, {
                value: 'Salami, cooked, beef and pork'
        }, {
                value: 'Salami, cooked, turkey'
        }, {
                value: 'Salami, dry or hard, pork'
        }, {
                value: 'Salami, dry or hard, pork, beef'
        }, {
                value: 'Sandwich spread, pork, beef'
        }, {
                value: 'Smoked link sausage, pork'
        }, {
                value: 'Sausage, smoked link sausage, pork and beef'
        }, {
                value: 'Smoked link sausage, pork and beef, nonfat dry milk added'
        }, {
                value: 'Thuringer, cervelat, summer sausage, beef, pork'
        }, {
                value: 'Turkey breast, sliced, prepackaged'
        }, {
                value: 'Sausage, Vienna, canned, chicken, beef, pork'
        }, {
                value: 'Honey roll sausage, beef'
        }, {
                value: 'Sausage, Italian, pork, cooked'
        }, {
                value: 'Luncheon sausage, pork and beef'
        }, {
                value: 'New england brand sausage, pork, beef'
        }, {
                value: 'OSCAR MAYER, Bologna (beef)'
        }, {
                value: 'OSCAR MAYER, Braunschweiger Liver Sausage (sliced)'
        }, {
                value: 'OSCAR MAYER, Chicken Breast (honey glazed)'
        }, {
                value: 'OSCAR MAYER, Ham (chopped with natural juice)'
        }, {
                value: 'OSCAR MAYER, Salami (hard)'
        }, {
                value: 'OSCAR MAYER, Smokies Sausage Little Cheese (pork, turkey)'
        }, {
                value: 'OSCAR MAYER, Wieners (beef franks)'
        }, {
                value: 'Turkey bacon, unprepared'
        }, {
                value: 'HORMEL Pillow Pak Sliced Turkey Pepperoni'
        }, {
                value: 'Turkey, pork, and beef sausage, low fat, smoked'
        }, {
                value: 'USDA Commodity, pork, sausage, bulk/links/patties, frozen, cooked'
        }, {
                value: 'Frankfurter, beef, pork, and turkey, fat free'
        }, {
                value: 'Luncheon meat, pork, ham, and chicken, minced, canned, reduced sodium, added ascorbic acid, includes SPAM, 25% less sodium'
        }, {
                value: 'USDA Commodity, pork sausage, bulk/links/patties, frozen, raw'
        }, {
                value: 'Luncheon meat, pork with ham, minced, canned, includes SPAM (Hormel)'
        }, {
                value: 'Luncheon meat, pork and chicken, minced, canned, includes SPAM Lite'
        }, {
                value: 'Bratwurst, veal, cooked'
        }, {
                value: 'Liverwurst spread'
        }, {
                value: 'Roast beef spread'
        }, {
                value: 'Salami, pork, beef, less sodium'
        }, {
                value: 'Sausage, Italian, sweet, links'
        }, {
                value: 'Sausage, Polish, beef with chicken, hot'
        }, {
                value: 'Sausage, Polish, pork and beef, smoked'
        }, {
                value: 'Sausage, pork and beef, with cheddar cheese, smoked'
        }, {
                value: 'Sausage, summer, pork and beef, sticks, with cheddar cheese'
        }, {
                value: 'Sausage, turkey, breakfast links, mild'
        }, {
                value: 'Swisswurst, pork and beef, with swiss cheese, smoked'
        }, {
                value: 'Bacon and beef sticks'
        }, {
                value: 'Bratwurst, beef and pork, smoked'
        }, {
                value: 'Bratwurst, chicken, cooked'
        }, {
                value: 'Bratwurst, pork, beef and turkey, lite, smoked'
        }, {
                value: 'Pastrami, beef, 98% fat-free'
        }, {
                value: 'Salami, Italian, pork'
        }, {
                value: 'Sausage, Italian, turkey, smoked'
        }, {
                value: 'Sausage, chicken, beef, pork, skinless, smoked'
        }, {
                value: 'Sausage, turkey, hot, smoked'
        }, {
                value: 'Yachtwurst, with pistachio nuts, cooked'
        }, {
                value: 'Beerwurst, pork and beef'
        }, {
                value: 'Chicken breast, fat-free, mesquite flavor, sliced'
        }, {
                value: 'Chicken breast, oven-roasted, fat-free, sliced'
        }, {
                value: 'Kielbasa, Polish, turkey and beef, smoked'
        }, {
                value: 'Oven-roasted chicken breast roll'
        }, {
                value: 'Bologna, pork and turkey, lite'
        }, {
                value: 'Bologna, pork, turkey and beef'
        }, {
                value: 'Ham, honey, smoked, cooked'
        }, {
                value: 'Frankfurter, pork'
        }, {
                value: 'Macaroni and cheese loaf, chicken, pork and beef'
        }, {
                value: 'Salami, Italian, pork and beef, dry, sliced, 50% less sodium'
        }, {
                value: 'Pate, truffle flavor'
        }, {
                value: 'Turkey, breast, smoked, lemon pepper flavor, 97% fat-free'
        }, {
                value: 'Turkey, white, rotisserie, deli cut'
        }, {
                value: 'Frankfurter, beef, heated'
        }, {
                value: 'Frankfurter, meat, heated'
        }, {
                value: 'Frankfurter, meat'
        }, {
                value: 'Scrapple, pork'
        }, {
                value: 'Bologna, chicken, turkey, pork'
        }, {
                value: 'Pork sausage, link/patty, fully cooked, microwaved'
        }, {
                value: 'Beef sausage, pre-cooked'
        }, {
                value: 'Turkey sausage, fresh, raw'
        }, {
                value: 'Beef sausage, fresh, cooked'
        }, {
                value: 'Pork and turkey sausage, pre-cooked'
        }, {
                value: 'Turkey sausage, fresh, cooked'
        }, {
                value: 'Bologna, chicken, pork, beef'
        }, {
                value: 'Bologna, chicken, pork'
        }, {
                value: 'Chicken breast, deli, rotisserie seasoned, sliced, prepackaged'
        }, {
                value: 'Frankfurter, meat and poultry, unheated'
        }, {
                value: 'Frankfurter, meat and poultry, cooked, boiled'
        }, {
                value: 'Frankfurter, meat and poultry, cooked, grilled'
        }, {
                value: 'Pork sausage, link/patty, reduced fat, unprepared'
        }, {
                value: 'Pork sausage, link/patty, reduced fat, cooked, pan-fried'
        }, {
                value: 'Pork sausage, link/patty, fully cooked, unheated'
        }, {
                value: 'Kielbasa, fully cooked, grilled'
        }, {
                value: 'Kielbasa, fully cooked, pan-fried'
        }, {
                value: 'Kielbasa, fully cooked, unheated'
        }, {
                value: 'Bologna, meat and poultry'
        }, {
                value: 'Meatballs, frozen, Italian style'
        }, {
                value: 'Turkey bacon, microwaved'
        }, {
                value: 'Bacon, turkey, low sodium'
        }, {
                value: 'Sausage, chicken or turkey, Italian style,  lower sodium'
        }, {
                value: 'Ham, smoked, extra lean, low sodium'
        }, {
                value: 'Pork sausage, reduced sodium, cooked'
        }, {
                value: 'Sausage, pork, turkey, and beef, reduced sodium'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS ALL-BRAN Original'
        }, {
                value: 'Cereals ready-to-eat, POST, ALPHA-BITS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS APPLE JACKS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS ALL-BRAN BRAN BUDS'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, CAPN CRUNCH'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, CAPN CRUNCH with CRUNCHBERRIES'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, CAPN CRUNCHS PEANUT BUTTER CRUNCH'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, CHEERIOS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS COCOA KRISPIES'
        }, {
                value: 'Cereals ready-to-eat, POST, COCOA PEBBLES'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, COOKIE CRISP'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, QUAKER CRUNCHY BRAN'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Corn CHEX'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS Corn Flakes'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS CRACKLIN OAT BRAN'
        }, {
                value: 'Cereals ready-to-eat, RALSTON CRISP RICE'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS ALL-BRAN COMPLETE Wheat Flakes'
        }, {
                value: 'Cereals ready-to-eat, POST Bran Flakes'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS FROOT LOOPS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS FROSTED MINI-WHEATS, Big Bite'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS FROSTED RICE KRISPIES'
        }, {
                value: 'Cereals ready-to-eat, POST, FRUITY PEBBLES'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, GOLDEN GRAHAMS'
        }, {
                value: 'Cereals ready-to-eat, granola, homemade'
        }, {
                value: 'Cereals ready-to-eat, POST, GRAPE-NUTS Cereal'
        }, {
                value: 'Cereals ready-to-eat, POST, GRAPE-NUTS Flakes'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, HONEY NUT CHEERIOS'
        }, {
                value: 'Cereals ready-to-eat, POST, Honeycomb Cereal'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, KING VITAMAN'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, KIX'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, QUAKER OAT LIFE, plain'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, LUCKY CHARMS'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, 100% Natural Granola, Oats, Wheat and Honey'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Honey Nut CHEX'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS PRODUCT 19'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, SWEET CRUNCH/QUISP'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS RAISIN BRAN'
        }, {
                value: 'Cereals ready-to-eat, POST Raisin Bran Cereal'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Rice CHEX'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS RICE KRISPIES'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, QUAKER Puffed Rice'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS SPECIAL K'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS CORN POPS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS FROSTED FLAKES'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS HONEY SMACKS'
        }, {
                value: 'Cereals ready-to-eat, POST, GOLDEN CRISP'
        }, {
                value: 'Cereals ready-to-eat, RALSTON TASTEEOS'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Whole Grain TOTAL'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, TRIX'
        }, {
                value: 'Cereals ready-to-eat, POST, Honey Nut Shredded Wheat'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Wheat CHEX'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, CORN BURSTS'
        }, {
                value: 'Cereals ready-to-eat, wheat germ, toasted, plain'
        }, {
                value: 'Cereals ready-to-eat, SUN COUNTRY, KRETSCHMER Honey Crunch Wheat Germ'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Multi-Grain CHEERIOS'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, WHEATIES'
        }, {
                value: 'Cereals, corn grits, white, regular and quick, enriched, dry'
        }, {
                value: 'Cereals, corn grits, white, regular and quick, enriched, cooked with water, without salt'
        }, {
                value: 'Cereals, QUAKER, corn grits, instant, plain, dry'
        }, {
                value: 'Cereals, QUAKER, corn grits, instant, plain, prepared (microwaved or boiling water added), without salt'
        }, {
                value: 'Cereals, QUAKER, corn grits, instant, cheddar cheese flavor, dry'
        }, {
                value: 'Cereals, QUAKER, Instant Grits, Country Bacon flavor, dry'
        }, {
                value: 'Cereals, CREAM OF RICE, dry'
        }, {
                value: 'Cereals, CREAM OF RICE, cooked with water, without salt'
        }, {
                value: 'Cereals, CREAM OF WHEAT, regular, 10 minute cooking, dry'
        }, {
                value: 'Cereals, CREAM OF WHEAT, regular (10 minute), cooked with water, without salt'
        }, {
                value: 'Cereals, farina, enriched, assorted brands including CREAM OF WHEAT, quick (1-3 minutes), dry'
        }, {
                value: 'Cereals, farina, enriched, assorted brands including CREAM OF WHEAT, quick (1-3 minutes), cooked with water, without salt'
        }, {
                value: 'Cereals, CREAM OF WHEAT, instant, dry'
        }, {
                value: 'Cereals, CREAM OF WHEAT, instant, prepared with water, without salt'
        }, {
                value: 'Cereals, farina, enriched, cooked with water, without salt'
        }, {
                value: 'Cereals, MALT-O-MEAL, original, plain, dry'
        }, {
                value: 'Cereals, oats, regular and quick, not fortified, dry'
        }, {
                value: 'Cereals, oats, regular and quick, unenriched, cooked with water (includes boiling and microwaving), without salt'
        }, {
                value: 'Cereals, oats, instant, fortified, plain, dry'
        }, {
                value: 'Cereals, oats, instant, fortified, plain, prepared with water (boiling water added or microwaved)'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, apples and cinnamon, dry'
        }, {
                value: 'Cereals, oats, instant, fortified, with cinnamon and spice, dry'
        }, {
                value: 'Cereals, oats, instant, fortified, with cinnamon and spice, prepared with water'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, maple and brown sugar, dry'
        }, {
                value: 'Cereals, oats, instant, fortified, with raisins and spice, dry'
        }, {
                value: 'Cereals, oats, instant, fortified, with raisins and spice, prepared with water'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, MARSHMALLOW MATEYS'
        }, {
                value: 'Cereals, WHEATENA, dry'
        }, {
                value: 'Cereals, WHEATENA, cooked with water'
        }, {
                value: 'Cereals, whole wheat hot natural cereal, dry'
        }, {
                value: 'Cereals, whole wheat hot natural cereal, cooked with water, without salt'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, QUAKER Puffed Wheat'
        }, {
                value: 'Cereals ready-to-eat, POST, Shredded Wheat, original big biscuit'
        }, {
                value: 'Cereals ready-to-eat, POST, Shredded Wheat, original spoon-size'
        }, {
                value: 'Cereals ready-to-eat, rice, puffed, fortified'
        }, {
                value: 'Cereals ready-to-eat, wheat, puffed, fortified'
        }, {
                value: 'Cereals, corn grits, yellow, regular and quick, enriched, dry'
        }, {
                value: 'Cereals, corn grits, yellow, regular and quick, unenriched, dry'
        }, {
                value: 'Cereals, corn grits, white, regular and quick, enriched, cooked with water, with salt'
        }, {
                value: 'Cereals, corn grits, yellow, regular and quick, enriched, cooked with water, without salt'
        }, {
                value: 'Cereals, corn grits, yellow, regular, quick, enriched, cooked with water, with salt'
        }, {
                value: 'Cereals, CREAM OF RICE, cooked with water, with salt'
        }, {
                value: 'Cereals, CREAM OF WHEAT, regular (10 minute), cooked with water, with salt'
        }, {
                value: 'Cereals, farina, unenriched, dry'
        }, {
                value: 'Cereals, farina, enriched, cooked with water, with salt'
        }, {
                value: 'Cereals, MALT-O-MEAL, chocolate, dry'
        }, {
                value: 'Cereals, oats, regular and quick and instant, unenriched, cooked with water (includes boiling and microwaving), with salt'
        }, {
                value: 'Cereals, WHEATENA, cooked with water, with salt'
        }, {
                value: 'Cereals, whole wheat hot natural cereal, cooked with water, with salt'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS Low Fat Granola without Raisins'
        }, {
                value: 'Cereals ready-to-eat, POST, Shredded Wheat, lightly frosted, spoon-size'
        }, {
                value: 'Cereals ready-to-eat, POST SELECTS Blueberry Morning'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, REESES PUFFS'
        }, {
                value: 'Cereals, QUAKER, QUAKER MultiGrain Oatmeal, dry'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, OATMEAL CRISP, Crunchy Almond'
        }, {
                value: 'Cereals ready-to-eat, chocolate-flavored frosted puffed corn'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, COCO-ROOS'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, QUAKER OAT CINNAMON LIFE'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, HONEY GRAHAM OH!S'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, Oatmeal Squares'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, Oatmeal Squares, cinnamon'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, Toasted Multigrain Crisps'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, QUAKER 100% Natural Granola with Oats, Wheat, Honey, and Raisins'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, Low Fat 100% Natural Granola with Raisins'
        }, {
                value: 'Cereals, QUAKER, Instant Grits, Butter flavor, dry'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, fruit and cream variety, dry'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, raisins, dates and walnuts, dry'
        }, {
                value: 'Cereals, QUAKER, Oat Bran, QUAKER/MOTHERS Oat Bran, dry'
        }, {
                value: 'Cereals, QUAKER, Oat Bran, QUAKER/MOTHERS Oat Bran, prepared with water, no salt'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Berry Burst CHEERIOS, Triple Berry'
        }, {
                value: 'Cereals, Oat Bran, QUAKER, QUAKER/MOTHERS Oat Bran, prepared with water, salt'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, HONEY NUT CLUSTERS'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, FIBER ONE Bran Cereal'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, OATMEAL CRISP, Hearty Raisin'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, TOTAL Raisin Bran'
        }, {
                value: 'Cereals, QUAKER, QUAKER MultiGrain Oatmeal, prepared with water, no salt'
        }, {
                value: 'Cereals, QUAKER, QUAKER MultiGrain Oatmeal, prepared with water, salt'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS CRISPIX'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, RAISIN NUT BRAN'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, BASIC 4'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, APPLE CINNAMON CHEERIOS'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, FROSTED CHEERIOS'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, FRANKENBERRY'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, COUNT CHOCULA'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, COCOA PUFFS'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, CINNAMON TOAST CRUNCH'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, BOO BERRY'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, BERRY BERRY KIX'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, NATURE VALLEY LOW FAT FRUIT GRANOLA'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS Low Fat Granola with Raisins'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS MUESLIX'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS RICE KRISPIES TREATS Cereal'
        }, {
                value: 'Cereals ready-to-eat, HEALTH VALLEY, FIBER 7 Flakes'
        }, {
                value: 'Cereals ready-to-eat, Post, Waffle Crisp'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS HONEY CRUNCH CORN FLAKES'
        }, {
                value: 'Cereals, QUAKER, hominy grits, white, quick, dry'
        }, {
                value: 'Cereals, QUAKER, hominy grits, white, regular, dry'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS SMART START Strong Heart Antioxidants Cereal'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS FROSTED MINI-WHEATS, bite size'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, COLOSSAL CRUNCH'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, BERRY COLOSSAL CRUNCH'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, Crispy Rice'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, TOOTIE FRUITIES'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, MOTHERS PEANUT BUTTER BUMPERS Cereal'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, MOTHERS Toasted Oat Bran cereal'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, MOTHERS Cinnamon Oat Crunch'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, MOTHERS GRAHAM BUMPERS'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, MOTHERS COCOA BUMPERS'
        }, {
                value: 'Cereals ready-to-eat, SUN COUNTRY, KRETSCHMER Toasted Wheat Bran'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, Shredded Wheat, bagged cereal'
        }, {
                value: 'Cereals ready-to-eat, SUN COUNTRY, KRETSCHMER Wheat Germ, Regular'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, RICE CRUNCHINS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS MARSHMALLOW FROOT LOOPS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS, RAISIN BRAN CRUNCH'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS SPECIAL K Red Berries'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS MINI-WHEATS, unfrosted bite size'
        }, {
                value: 'Cereals ready-to-eat, KASHI GOLEAN CRUNCH!'
        }, {
                value: 'Cereals ready-to-eat, KASHI HEART TO HEART, Honey Toasted Oat'
        }, {
                value: 'Cereals ready-to-eat, KASHI 7 Whole Grain Puffs'
        }, {
                value: 'Cereals ready-to-eat, KASHI 7 Whole Grain Honey Puffs'
        }, {
                value: 'Cereals ready-to-eat, KASHI GOOD FRIENDS'
        }, {
                value: 'Cereals ready-to-eat, KASHI GOLEAN'
        }, {
                value: 'Cereals, QUAKER, Quick Oats, Dry'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, Frosted Flakes'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, Cinnamon-Spice, dry'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, DINOSAUR EGGS, Brown Sugar, dry'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, Banana Bread, dry'
        }, {
                value: 'Cereals ready-to-eat, UNCLE SAM CEREAL'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, Raisin and Spice, dry'
        }, {
                value: 'Cereals, QUAKER, Instant Grits, Redeye Gravy & Country Ham flavor, dry'
        }, {
                value: 'Cereals, QUAKER, Instant Grits Product with American Cheese Flavor, dry'
        }, {
                value: 'Cereals, QUAKER, Instant Grits, Ham n Cheese flavor, dry'
        }, {
                value: 'Cereals, QUAKER, Quick Oats with Iron, Dry'
        }, {
                value: 'Cereals, QUAKER, Whole Wheat Natural Cereal, dry'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS SPECIAL K Chocolatey Strawberry'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS, FROSTED MINI-WHEATS, Maple & Brown Sugar, Bite Size'
        }, {
                value: 'Cereals ready-to-eat, KASHI, ORGANIC PROMISE Autumn Wheat'
        }, {
                value: 'Cereals ready-to-eat, KASHI ORGANIC PROMISE, STRAWBERRY FIELDS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS, Reduced Sugar Frosted Flakes Cereal'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS, SPECIAL K Protein Plus'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, Honey BUZZERS'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, GOLDEN PUFFS'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, HONEY GRAHAM SQUARES'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, Raisin Bran Cereal'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, Blueberry MUFFIN TOPS Cereal'
        }, {
                value: 'Cereals, MALT-O-MEAL, Farina Hot Wheat Cereal, dry'
        }, {
                value: 'Cereals, MALT-O-MEAL, Maple & Brown Sugar Hot Wheat Cereal, dry'
        }, {
                value: 'Cereals ready-to-eat, MOMS BEST, Honey Nut TOASTY OS'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, Apple ZINGS'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, CINNAMON TOASTERS'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, Cocoa DYNO-BITES'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, Frosted Mini SPOONERS'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, Fruity DYNO-BITES'
        }, {
                value: 'Cereals ready-to-eat, RALSTON Enriched Wheat Bran flakes'
        }, {
                value: 'Cereals ready-to-eat, RALSTON Corn Biscuits'
        }, {
                value: 'Cereals ready-to-eat, RALSTON Corn Flakes'
        }, {
                value: 'Cereals ready-to-eat, RALSTON Crispy Hexagons'
        }, {
                value: 'Cereals ready-to-eat, USDA Commodity Corn and Rice (includes all commodity brands)'
        }, {
                value: 'Cereals ready-to-eat, USDA Commodity Rice Crisps (includes all commodity brands)'
        }, {
                value: 'Milk and cereal bar'
        }, {
                value: 'Cereals, MALT-O-MEAL, original, plain, prepared with water, without salt'
        }, {
                value: 'Cereals, MALT-O-MEAL, chocolate, prepared with water, without salt'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, CHOCOLATE LUCKY CHARMS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, SPECIAL K, Fruit & Yogurt'
        }, {
                value: 'Cereals ready-to-eat, KASHI 7 Whole Grain Flakes'
        }, {
                value: 'Cereals ready-to-eat, KASHI, HEART TO HEART, Oat Flakes & Blueberry Clusters'
        }, {
                value: 'Cereals ready-to-eat, KASHI ORGANIC PROMISE, CINNAMON HARVEST'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS, FROSTED MINI-WHEATS Bite Size Strawberry Delight'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS, SPECIAL K Vanilla Almond'
        }, {
                value: 'Cereals ready-to-eat, POST GREAT GRAINS Cranberry Almond Crunch'
        }, {
                value: 'Rice and Wheat cereal bar'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, QUAKER Honey Graham LIFE Cereal'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, Christmas Crunch'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, CHEERIOS, Yogurt Burst, strawberry'
        }, {
                value: 'Cereals ready-to-eat, POST SELECTS Maple Pecan Crunch'
        }, {
                value: 'Cereals ready-to-eat, KASHI GO LEAN CRUNCH!, Honey Almond Flax'
        }, {
                value: 'Cereals, KASHI GO LEAN Hot Cereal, Hearty Honey & Cinnamon, dry'
        }, {
                value: 'Cereals, KASHI GO LEAN Hot Cereal, Creamy TRULY VANILLA, dry'
        }, {
                value: 'Cereals ready-to-eat, KASHI 7 Whole Grain Nuggets'
        }, {
                value: 'Cereals, KASHI HEART TO HEART, Instant Oatmeal, Apple Cinnamon, dry'
        }, {
                value: 'Cereals, KASHI HEART TO HEART, Instant Oatmeal, golden brown maple, dry'
        }, {
                value: 'Cereals ready-to-eat, NATURES PATH, Organic FLAX PLUS, Pumpkin Granola'
        }, {
                value: 'Cereals, CREAM OF WHEAT, 2 1/2 minute cook time, dry'
        }, {
                value: 'Cereals, CREAM OF WHEAT, 2 1/2 minute cook time, cooked with water, stove-top, without salt'
        }, {
                value: 'Cereals, CREAM OF WHEAT, 2 1/2 minute cook time, cooked with water, microwaved, without salt'
        }, {
                value: 'Cereals, CREAM OF WHEAT, 1 minute cook time, dry'
        }, {
                value: 'Cereals, CREAM OF WHEAT, 1 minute cook time, cooked with water, stove-top, without salt'
        }, {
                value: 'Cereals, CREAM OF WHEAT, 1 minute cook time, cooked with water, microwaved, without salt'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, 25% Less Sugar CINNAMON TOAST CRUNCH'
        }, {
                value: 'Incaparina, dry mix (corn and soy flours), unprepared'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, DORA THE EXPLORER'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Fruity CHEERIOS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS SPECIAL K Chocolatey Delight'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, 25% Less Sugar TRIX'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS SPECIAL K Low Fat Granola'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS CINNABON cereal'
        }, {
                value: 'Cereals ready-to-eat, KASHI GOLEAN CRISP Toasted Berry Crumble'
        }, {
                value: 'Cereals ready-to-eat, KASHI HEART TO HEART, Warm Cinnamon'
        }, {
                value: 'Cereals ready-to-eat, KASHI ORGANIC PROMISE, ISLAND VANILLA'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, CHEERIOS, Banana Nut'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, CHEERIOS, Chocolate'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Chocolate CHEX'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Cinnamon CHEX'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, FIBER ONE, Caramel Delight'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, FIBER ONE, HONEY CLUSTERS'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, FIBER ONE, RAISIN BRAN CLUSTERS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS SPECIAL K, Cinnamon Pecan'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS SPECIAL K Blueberry'
        }, {
                value: 'Cereals ready-to-eat, KASHI Berry Blossom'
        }, {
                value: 'Cereals ready-to-eat, KASHI Honey Sunshine'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS SPECIAL K Multigrain Oats and Honey'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS CRUNCHY NUT Golden Honey Nut flakes'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGs FROSTED MINI-WHEATS Bite Size Blueberry Muffin'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, CAPN CRUNCHS Halloween Crunch'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, Natural Granola Apple Cranberry Almond'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, Maple Brown Sugar LIFE Cereal'
        }, {
                value: 'Cereals ready-to-eat, QUAKER, Capn Crunchs OOPS! All Berries Cereal'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS FROSTED MINI-WHEATS LITTLE BITES, chocolate'
        }, {
                value: 'Cereals ready-to-eat, QUAKER Oatmeal Squares, Golden Maple'
        }, {
                value: 'Cereals ready-to-eat, POST, HONEY BUNCHES OF OATS with vanilla bunches'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, PEANUT BUTTER TOAST CRUNCH'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, COCOA PUFFS, 25% Reduced Sugar'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Oat Cluster CHEERIOS Crunch'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, Cinnamon Spice, reduced sugar'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal Organic, Regular'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, fruit and cream, variety of flavors, reduced sugar'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, Apple and Cinnamon, reduced sugar'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Honey KIX'
        }, {
                value: 'Cereals ready-to-eat, KASHI INDIGO MORNING'
        }, {
                value: 'Cereals ready-to-eat, KASHI Simply Maize'
        }, {
                value: 'Cereals ready-to-eat, KASHI GOLEAN CRISP Cinnamon Crumble'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, FIBER ONE 80 Calories, Honey Squares'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS KRAVE chocolate cereal'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS RICE KRISPIES, Gluten Free'
        }, {
                value: 'Cereals ready-to-eat, POST, HONEY BUNCHES OF OATS, pecan bunches'
        }, {
                value: 'Cereals ready-to-eat, NATURES PATH, Organic FLAX PLUS flakes'
        }, {
                value: 'Cereals ready-to-eat, BARBARAS PUFFINS, original'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS KRAVE double chocolate cereal'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS FROSTED FLAKES, CHOCO ZUCARITAS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS APPLE JACKS with marshmallows'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS CINNAMON JACKS'
        }, {
                value: 'Cereals ready-to-eat, POST, HONEY BUNCHES OF OATS, with real strawberries'
        }, {
                value: 'Cereals ready-to-eat, KASHI ORGANIC PROMISE, Berry Fruitful'
        }, {
                value: 'Cereals ready-to-eat, POST HONEY BUNCHES OF OATS with cinnamon bunches'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Cinnamon Burst CHEERIOS'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, FIBER ONE, Nutty Clusters & Almonds'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, FIBER ONE 80 Calories, Chocolate Squares'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, HONEY NUT CHEERIOS, MEDLEY CRUNCH'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Dulce De Leche CHEERIOS'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, CHOCOLATE MARSHMALLOW MATEYS'
        }, {
                value: 'Cereals, ready-to-eat, MALT-O-MEAL, Blueberry Mini SPOONERS'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, OAT BLENDERS with honey'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, OAT BLENDERS with honey & almonds'
        }, {
                value: 'Cereals ready-to-eat, MALT-O-MEAL, Honey Nut SCOOTERS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS FROSTED MINI-WHEATS Touch of Fruit in the Middle, Raspberry'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Apple Cinnamon CHEX'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, FROSTED TOAST CRUNCH'
        }, {
                value: 'Cereals, oats, instant, fortified, maple and brown sugar, dry'
        }, {
                value: 'Cereals ready-to-eat, CASCADIAN FARM, Cinnamon Crunch'
        }, {
                value: 'Cereals ready-to-eat, GENERAL MILLS, Multi Grain CHEERIOS, Peanut Butter'
        }, {
                value: 'Cereals ready-to-eat, CASCADIAN FARM, Multi-Grain Squares'
        }, {
                value: 'Cereals ready-to-eat, CASCADIAN FARM, Honey Nut Os'
        }, {
                value: 'Cereals ready-to-eat, QUAKER WHOLE HEARTS oat cereal'
        }, {
                value: 'Cereals, QUAKER, Weight Control Instant Oatmeal, maple and brown sugar'
        }, {
                value: 'Cereals, QUAKER, Weight Control Instant Oatmeal, banana bread'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, Cinnamon Swirl, high fiber'
        }, {
                value: 'Cereals, QUAKER, oatmeal, REAL MEDLEYS, blueberry hazelnut, dry'
        }, {
                value: 'Cereals, QUAKER, oatmeal, REAL MEDLEYS, apple walnut, dry'
        }, {
                value: 'Cereals, QUAKER, oatmeal, REAL MEDLEYS, summer berry, dry'
        }, {
                value: 'Cereals, QUAKER, oatmeal, REAL MEDLEYS, peach almond, dry'
        }, {
                value: 'Cereals, QUAKER, oatmeal, REAL MEDLEYS, cherry pistachio, dry'
        }, {
                value: 'Cereals, QUAKER, Instant Oatmeal, weight control, cinnamon'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS FROSTED MINI-WHEATS, little bites'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS RAISIN BRAN, Cinnamon Almond'
        }, {
                value: 'Cereals ready-to-eat, KASHI ORGANIC PROMISE, RAISIN VINEYARD'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS KRAVE Smores'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG RAISIN BRAN with Omega-3 from flaxseed'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS SPECIAL K Multi-grain'
        }, {
                value: 'Cereals, KELLOGGS SPECIAL K NOURISH, Cinnamon Raisin Pecan, dry'
        }, {
                value: 'Cereals, KELLOGGS SPECIAL K NOURISH, Cranberry Almond, dry'
        }, {
                value: 'Cereals, KELLOGGS SPECIAL K NOURISH, Maple Brown Sugar Crunch, dry'
        }, {
                value: 'Cereals ready-to-eat, KASHI GOLEAN Vanilla Graham Clusters'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG SCOOBY-DOO! cereal'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS SPECIAL K Chocolate Almond'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGs FROSTED MINI-WHEATS Touch of Fruit in the Middle, raisin'
        }, {
                value: 'Cereals ready-to-eat, MOMS BEST, Sweetened WHEAT-FULS'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS, SPECIAL K gluten free, touch of brown sugar'
        }, {
                value: 'Cereals ready-to-eat, KELLOGGS, SPECIAL K protein, cinnamon brown sugar crunch'
        }, {
                value: 'Cereals ready-to-eat, KELLOGG, KELLOGGS RAISIN BRAN with cranberries'
        }, {
                value: 'Acerola, (west indian cherry), raw'
        }, {
                value: 'Acerola juice, raw'
        }, {
                value: 'Apples, raw, with skin'
        }, {
                value: 'Apples, raw, without skin'
        }, {
                value: 'Apples, raw, without skin, cooked, boiled'
        }, {
                value: 'Apples, raw, without skin, cooked, microwave'
        }, {
                value: 'Apples, canned, sweetened, sliced, drained, unheated'
        }, {
                value: 'Apples, canned, sweetened, sliced, drained, heated'
        }, {
                value: 'Apples, dehydrated (low moisture), sulfured, uncooked'
        }, {
                value: 'Apples, dehydrated (low moisture), sulfured, stewed'
        }, {
                value: 'Apples, dried, sulfured, uncooked'
        }, {
                value: 'Apples, dried, sulfured, stewed, without added sugar'
        }, {
                value: 'Apples, dried, sulfured, stewed, with added sugar'
        }, {
                value: 'Apples, frozen, unsweetened, unheated'
        }, {
                value: 'Apples, frozen, unsweetened, heated'
        }, {
                value: 'Apple juice, canned or bottled, unsweetened, without added ascorbic acid'
        }, {
                value: 'Apple juice, frozen concentrate, unsweetened, undiluted, without added ascorbic acid'
        }, {
                value: 'Apple juice, frozen concentrate, unsweetened, diluted with 3 volume water without added ascorbic acid'
        }, {
                value: 'Applesauce, canned, unsweetened, without added ascorbic acid (includes USDA commodity)'
        }, {
                value: 'Applesauce, canned, sweetened, without salt (includes USDA commodity)'
        }, {
                value: 'Apricots, raw'
        }, {
                value: 'Apricots, canned, water pack, with skin, solids and liquids'
        }, {
                value: 'Apricots, canned, water pack, without skin, solids and liquids'
        }, {
                value: 'Apricots, canned, juice pack, with skin, solids and liquids'
        }, {
                value: 'Apricots, canned, extra light syrup pack, with skin, solids and liquids'
        }, {
                value: 'Apricots, canned, light syrup pack, with skin, solids and liquids'
        }, {
                value: 'Apricots, canned, heavy syrup pack, with skin, solids and liquids'
        }, {
                value: 'Apricots, canned, heavy syrup pack, without skin, solids and liquids'
        }, {
                value: 'Apricots, canned, extra heavy syrup pack, without skin, solids and liquids'
        }, {
                value: 'Apricots, dehydrated (low-moisture), sulfured, uncooked'
        }, {
                value: 'Apricots, dehydrated (low-moisture), sulfured, stewed'
        }, {
                value: 'Apricots, dried, sulfured, uncooked'
        }, {
                value: 'Apricots, dried, sulfured, stewed, without added sugar'
        }, {
                value: 'Apricots, dried, sulfured, stewed, with added sugar'
        }, {
                value: 'Apricots, frozen, sweetened'
        }, {
                value: 'Apricot nectar, canned, without added ascorbic acid'
        }, {
                value: 'Avocados, raw, all commercial varieties'
        }, {
                value: 'Avocados, raw, California'
        }, {
                value: 'Avocados, raw, Florida'
        }, {
                value: 'Bananas, raw'
        }, {
                value: 'Bananas, dehydrated, or banana powder'
        }, {
                value: 'Blackberries, raw'
        }, {
                value: 'Blackberry juice, canned'
        }, {
                value: 'Cherries, tart, dried, sweetened'
        }, {
                value: 'Blackberries, canned, heavy syrup, solids and liquids'
        }, {
                value: 'Blackberries, frozen, unsweetened'
        }, {
                value: 'Blueberries, raw'
        }, {
                value: 'Blueberries, canned, heavy syrup, solids and liquids'
        }, {
                value: 'Blueberries, wild, frozen'
        }, {
                value: 'Blueberries, frozen, unsweetened'
        }, {
                value: 'Blueberries, frozen, sweetened'
        }, {
                value: 'Boysenberries, canned, heavy syrup'
        }, {
                value: 'Boysenberries, frozen, unsweetened'
        }, {
                value: 'Breadfruit, raw'
        }, {
                value: 'Carambola, (starfruit), raw'
        }, {
                value: 'Carissa, (natal-plum), raw'
        }, {
                value: 'Cherimoya, raw'
        }, {
                value: 'Cherries, sour, red, raw'
        }, {
                value: 'Cherries, sour, red, canned, water pack, solids and liquids (includes USDA commodity red tart cherries, canned)'
        }, {
                value: 'Cherries, sour, red, canned, light syrup pack, solids and liquids'
        }, {
                value: 'Cherries, sour, red, canned, heavy syrup pack, solids and liquids'
        }, {
                value: 'Cherries, sour, red, canned, extra heavy syrup pack, solids and liquids'
        }, {
                value: 'Cherries, sour, red, frozen, unsweetened'
        }, {
                value: 'Cherries, sweet, raw'
        }, {
                value: 'Cherries, sweet, canned, water pack, solids and liquids'
        }, {
                value: 'Cherries, sweet, canned, juice pack, solids and liquids'
        }, {
                value: 'Cherries, sweet, canned, light syrup pack, solids and liquids'
        }, {
                value: 'Cherries, sweet, canned, pitted, heavy syrup pack, solids and liquids'
        }, {
                value: 'Cherries, sweet, canned, extra heavy syrup pack, solids and liquids'
        }, {
                value: 'Cherries, sweet, frozen, sweetened'
        }, {
                value: 'Crabapples, raw'
        }, {
                value: 'Cranberries, raw'
        }, {
                value: 'Cranberries, dried, sweetened'
        }, {
                value: 'Cranberry sauce, canned, sweetened'
        }, {
                value: 'Cranberry-orange relish, canned'
        }, {
                value: 'Currants, european black, raw'
        }, {
                value: 'Currants, red and white, raw'
        }, {
                value: 'Currants, zante, dried'
        }, {
                value: 'Custard-apple, (bullocks-heart), raw'
        }, {
                value: 'Dates, deglet noor'
        }, {
                value: 'Elderberries, raw'
        }, {
                value: 'Figs, raw'
        }, {
                value: 'Figs, canned, water pack, solids and liquids'
        }, {
                value: 'Figs, canned, light syrup pack, solids and liquids'
        }, {
                value: 'Figs, canned, heavy syrup pack, solids and liquids'
        }, {
                value: 'Figs, canned, extra heavy syrup pack, solids and liquids'
        }, {
                value: 'Figs, dried, uncooked'
        }, {
                value: 'Figs, dried, stewed'
        }, {
                value: 'Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, water pack, solids and liquids'
        }, {
                value: 'Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, juice pack, solids and liquids'
        }, {
                value: 'Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, extra light syrup, solids and liquids'
        }, {
                value: 'Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, light syrup, solids and liquids'
        }, {
                value: 'Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, heavy syrup, solids and liquids'
        }, {
                value: 'Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, extra heavy syrup, solids and liquids'
        }, {
                value: 'Fruit salad, (peach and pear and apricot and pineapple and cherry), canned, water pack, solids and liquids'
        }, {
                value: 'Fruit salad, (peach and pear and apricot and pineapple and cherry), canned, juice pack, solids and liquids'
        }, {
                value: 'Fruit salad, (peach and pear and apricot and pineapple and cherry), canned, light syrup, solids and liquids'
        }, {
                value: 'Fruit salad, (peach and pear and apricot and pineapple and cherry), canned, heavy syrup, solids and liquids'
        }, {
                value: 'Fruit salad, (peach and pear and apricot and pineapple and cherry), canned, extra heavy syrup, solids and liquids'
        }, {
                value: 'Gooseberries, raw'
        }, {
                value: 'Gooseberries, canned, light syrup pack, solids and liquids'
        }, {
                value: 'Goji berries, dried'
        }, {
                value: 'Grapefruit, raw, pink and red and white, all areas'
        }, {
                value: 'Grapefruit, raw, pink and red, all areas'
        }, {
                value: 'Grapefruit, raw, pink and red, California and Arizona'
        }, {
                value: 'Grapefruit, raw, pink and red, Florida'
        }, {
                value: 'Grapefruit, raw, white, all areas'
        }, {
                value: 'Grapefruit, raw, white, California'
        }, {
                value: 'Grapefruit, raw, white, Florida'
        }, {
                value: 'Grapefruit, sections, canned, water pack, solids and liquids'
        }, {
                value: 'Grapefruit, sections, canned, juice pack, solids and liquids'
        }, {
                value: 'Grapefruit, sections, canned, light syrup pack, solids and liquids'
        }, {
                value: 'Grapefruit juice, white, canned or bottled, unsweetened'
        }, {
                value: 'Grapefruit juice, white, canned, sweetened'
        }, {
                value: 'Grapefruit juice, white, frozen concentrate, unsweetened, undiluted'
        }, {
                value: 'Grapefruit juice, white, frozen concentrate, unsweetened, diluted with 3 volume water'
        }, {
                value: 'Grapefruit juice, pink or red, with added calcium'
        }, {
                value: 'Grapefruit juice, white, raw'
        }, {
                value: 'Grapes, muscadine, raw'
        }, {
                value: 'Grape juice, canned or bottled, unsweetened, with added ascorbic acid'
        }, {
                value: 'Grapes, american type (slip skin), raw'
        }, {
                value: 'Grapes, red or green (European type, such as Thompson seedless), raw'
        }, {
                value: 'Grapes, canned, thompson seedless, water pack, solids and liquids'
        }, {
                value: 'Grapes, canned, thompson seedless, heavy syrup pack, solids and liquids'
        }, {
                value: 'Grape juice, canned or bottled, unsweetened, without added ascorbic acid'
        }, {
                value: 'Groundcherries, (cape-gooseberries or poha), raw'
        }, {
                value: 'Guavas, common, raw'
        }, {
                value: 'Guavas, strawberry, raw'
        }, {
                value: 'Guava sauce, cooked'
        }, {
                value: 'Jackfruit, raw'
        }, {
                value: 'Java-plum, (jambolan), raw'
        }, {
                value: 'Jujube, raw'
        }, {
                value: 'Jujube, Chinese, fresh, dried'
        }, {
                value: 'Kiwifruit, green, raw'
        }, {
                value: 'Kumquats, raw'
        }, {
                value: 'Lemons, raw, without peel'
        }, {
                value: 'Lemon juice, raw'
        }, {
                value: 'Lemon juice from concentrate, canned or bottled'
        }, {
                value: 'Lemon juice, frozen, unsweetened, single strength'
        }, {
                value: 'Lemon peel, raw'
        }, {
                value: 'Limes, raw'
        }, {
                value: 'Lime juice, raw'
        }, {
                value: 'Lime juice, canned or bottled, unsweetened'
        }, {
                value: 'Blueberries, dried, sweetened'
        }, {
                value: 'Litchis, raw'
        }, {
                value: 'Litchis, dried'
        }, {
                value: 'Loganberries, frozen'
        }, {
                value: 'Longans, raw'
        }, {
                value: 'Longans, dried'
        }, {
                value: 'Loquats, raw'
        }, {
                value: 'Mammy-apple, (mamey), raw'
        }, {
                value: 'Mangos, raw'
        }, {
                value: 'Mangosteen, canned, syrup pack'
        }, {
                value: 'Mango, dried, sweetened'
        }, {
                value: 'Melons, cantaloupe, raw'
        }, {
                value: 'Melons, casaba, raw'
        }, {
                value: 'Melons, honeydew, raw'
        }, {
                value: 'Melon balls, frozen'
        }, {
                value: 'Mulberries, raw'
        }, {
                value: 'Nectarines, raw'
        }, {
                value: 'Oheloberries, raw'
        }, {
                value: 'Olives, ripe, canned (small-extra large)'
        }, {
                value: 'Olives, ripe, canned (jumbo-super colossal)'
        }, {
                value: 'Olives, pickled, canned or bottled, green'
        }, {
                value: 'Oranges, raw, all commercial varieties'
        }, {
                value: 'Oranges, raw, California, valencias'
        }, {
                value: 'Oranges, raw, navels'
        }, {
                value: 'Oranges, raw, Florida'
        }, {
                value: 'Oranges, raw, with peel'
        }, {
                value: 'Orange juice, raw'
        }, {
                value: 'Orange juice, canned, unsweetened'
        }, {
                value: 'Orange juice, chilled, includes from concentrate'
        }, {
                value: 'Orange juice, chilled, includes from concentrate, with added calcium and vitamin D'
        }, {
                value: 'Orange juice, chilled, includes from concentrate, with added calcium'
        }, {
                value: 'Orange juice, frozen concentrate, unsweetened, diluted with 3 volume water, with added calcium'
        }, {
                value: 'Orange juice, frozen concentrate, unsweetened, undiluted, with added calcium'
        }, {
                value: 'Orange juice, frozen concentrate, unsweetened, undiluted'
        }, {
                value: 'Orange juice, frozen concentrate, unsweetened, diluted with 3 volume water'
        }, {
                value: 'Orange peel, raw'
        }, {
                value: 'Orange-grapefruit juice, canned or bottled, unsweetened'
        }, {
                value: 'Tangerines, (mandarin oranges), raw'
        }, {
                value: 'Tangerines, (mandarin oranges), canned, juice pack'
        }, {
                value: 'Tangerines, (mandarin oranges), canned, light syrup pack'
        }, {
                value: 'Tangerine juice, raw'
        }, {
                value: 'Tangerine juice, canned, sweetened'
        }, {
                value: 'Papayas, raw'
        }, {
                value: 'Papaya, canned, heavy syrup, drained'
        }, {
                value: 'Papaya nectar, canned'
        }, {
                value: 'Passion-fruit, (granadilla), purple, raw'
        }, {
                value: 'Passion-fruit juice, purple, raw'
        }, {
                value: 'Passion-fruit juice, yellow, raw'
        }, {
                value: 'Peaches, yellow, raw'
        }, {
                value: 'Peaches, canned, water pack, solids and liquids'
        }, {
                value: 'Peaches, canned, juice pack, solids and liquids'
        }, {
                value: 'Peaches, canned, extra light syrup, solids and liquids'
        }, {
                value: 'Peaches, canned, light syrup pack, solids and liquids'
        }, {
                value: 'Peaches, canned, heavy syrup pack, solids and liquids'
        }, {
                value: 'Peaches, canned, extra heavy syrup pack, solids and liquids'
        }, {
                value: 'Peaches, spiced, canned, heavy syrup pack, solids and liquids'
        }, {
                value: 'Peaches, dehydrated (low-moisture), sulfured, uncooked'
        }, {
                value: 'Peaches, dehydrated (low-moisture), sulfured, stewed'
        }, {
                value: 'Peaches, dried, sulfured, uncooked'
        }, {
                value: 'Peaches, dried, sulfured, stewed, without added sugar'
        }, {
                value: 'Peaches, dried, sulfured, stewed, with added sugar'
        }, {
                value: 'Peaches, frozen, sliced, sweetened'
        }, {
                value: 'Peach nectar, canned, without added ascorbic acid'
        }, {
                value: 'Pears, raw'
        }, {
                value: 'Pears, canned, water pack, solids and liquids'
        }, {
                value: 'Pears, canned, juice pack, solids and liquids'
        }, {
                value: 'Pears, canned, extra light syrup pack, solids and liquids'
        }, {
                value: 'Pears, canned, light syrup pack, solids and liquids'
        }, {
                value: 'Pears, canned, heavy syrup pack, solids and liquids'
        }, {
                value: 'Pears, canned, extra heavy syrup pack, solids and liquids'
        }, {
                value: 'Pears, dried, sulfured, uncooked'
        }, {
                value: 'Pears, dried, sulfured, stewed, without added sugar'
        }, {
                value: 'Pears, dried, sulfured, stewed, with added sugar'
        }, {
                value: 'Pear nectar, canned, without added ascorbic acid'
        }, {
                value: 'Persimmons, japanese, raw'
        }, {
                value: 'Persimmons, japanese, dried'
        }, {
                value: 'Persimmons, native, raw'
        }, {
                value: 'Pineapple, raw, all varieties'
        }, {
                value: 'Pineapple, canned, water pack, solids and liquids'
        }, {
                value: 'Pineapple, canned, juice pack, solids and liquids'
        }, {
                value: 'Pineapple, canned, light syrup pack, solids and liquids'
        }, {
                value: 'Pineapple, canned, heavy syrup pack, solids and liquids'
        }, {
                value: 'Pineapple, canned, extra heavy syrup pack, solids and liquids'
        }, {
                value: 'Pineapple, frozen, chunks, sweetened'
        }, {
                value: 'Pineapple juice, canned or bottled, unsweetened, without added ascorbic acid'
        }, {
                value: 'Pineapple juice, frozen concentrate, unsweetened, undiluted'
        }, {
                value: 'Pineapple juice, frozen concentrate, unsweetened, diluted with 3 volume water'
        }, {
                value: 'Pitanga, (surinam-cherry), raw'
        }, {
                value: 'Plantains, raw'
        }, {
                value: 'Plantains, cooked'
        }, {
                value: 'Plums, raw'
        }, {
                value: 'Plums, canned, purple, water pack, solids and liquids'
        }, {
                value: 'Plums, canned, purple, juice pack, solids and liquids'
        }, {
                value: 'Plums, canned, purple, light syrup pack, solids and liquids'
        }, {
                value: 'Plums, canned, purple, heavy syrup pack, solids and liquids'
        }, {
                value: 'Plums, canned, purple, extra heavy syrup pack, solids and liquids'
        }, {
                value: 'Pomegranates, raw'
        }, {
                value: 'Prickly pears, raw'
        }, {
                value: 'Prunes, canned, heavy syrup pack, solids and liquids'
        }, {
                value: 'Prunes, dehydrated (low-moisture), uncooked'
        }, {
                value: 'Prunes, dehydrated (low-moisture), stewed'
        }, {
                value: 'Plums, dried (prunes), uncooked'
        }, {
                value: 'Plums, dried (prunes), stewed, without added sugar'
        }, {
                value: 'Plums, dried (prunes), stewed, with added sugar'
        }, {
                value: 'Prune juice, canned'
        }, {
                value: 'Pummelo, raw'
        }, {
                value: 'Quinces, raw'
        }, {
                value: 'Raisins, golden seedless'
        }, {
                value: 'Raisins, seedless'
        }, {
                value: 'Raisins, seeded'
        }, {
                value: 'Rambutan, canned, syrup pack'
        }, {
                value: 'Raspberries, raw'
        }, {
                value: 'Raspberries, canned, red, heavy syrup pack, solids and liquids'
        }, {
                value: 'Raspberries, frozen, red, sweetened'
        }, {
                value: 'Rhubarb, raw'
        }, {
                value: 'Rhubarb, frozen, uncooked'
        }, {
                value: 'Rhubarb, frozen, cooked, with sugar'
        }, {
                value: 'Roselle, raw'
        }, {
                value: 'Rose-apples, raw'
        }, {
                value: 'Sapodilla, raw'
        }, {
                value: 'Sapote, mamey, raw'
        }, {
                value: 'Soursop, raw'
        }, {
                value: 'Strawberries, raw'
        }, {
                value: 'Strawberries, canned, heavy syrup pack, solids and liquids'
        }, {
                value: 'Strawberries, frozen, unsweetened'
        }, {
                value: 'Strawberries, frozen, sweetened, whole'
        }, {
                value: 'Strawberries, frozen, sweetened, sliced'
        }, {
                value: 'Sugar-apples, (sweetsop), raw'
        }, {
                value: 'Tamarinds, raw'
        }, {
                value: 'Fruit salad, (pineapple and papaya and banana and guava), tropical, canned, heavy syrup, solids and liquids'
        }, {
                value: 'Watermelon, raw'
        }, {
                value: 'Maraschino cherries, canned, drained'
        }, {
                value: 'Feijoa, raw'
        }, {
                value: 'Pears, asian, raw'
        }, {
                value: 'Fruit cocktail, canned, heavy syrup, drained'
        }, {
                value: 'Blueberries, canned, light syrup, drained'
        }, {
                value: 'Blueberries, wild, canned, heavy syrup, drained'
        }, {
                value: 'Pineapple, canned, juice pack, drained'
        }, {
                value: 'Apricots, canned, heavy syrup, drained'
        }, {
                value: 'Cherries, sour, canned, water pack, drained'
        }, {
                value: 'Cherries, sweet, canned, pitted, heavy syrup, drained'
        }, {
                value: 'Peaches, canned, heavy syrup, drained'
        }, {
                value: 'Pears, canned, heavy syrup, drained'
        }, {
                value: 'Plums, canned, heavy syrup, drained'
        }, {
                value: 'Tangerines, (mandarin oranges), canned, juice pack, drained'
        }, {
                value: 'Apple juice, canned or bottled, unsweetened, with added ascorbic acid'
        }, {
                value: 'Applesauce, canned, unsweetened, with added ascorbic acid'
        }, {
                value: 'Applesauce, canned, sweetened, with salt'
        }, {
                value: 'Apricot nectar, canned, with added ascorbic acid'
        }, {
                value: 'Grapefruit juice, pink, raw'
        }, {
                value: 'Peach nectar, canned, with added ascorbic acid'
        }, {
                value: 'Pear nectar, canned, with added ascorbic acid'
        }, {
                value: 'Pineapple juice, canned or bottled, unsweetened, with added ascorbic acid'
        }, {
                value: 'Apple juice, frozen concentrate, unsweetened, undiluted, with added ascorbic acid'
        }, {
                value: 'Apple juice, frozen concentrate, unsweetened, diluted with 3 volume water, with added ascorbic acid'
        }, {
                value: 'Pears, raw, bartlett'
        }, {
                value: 'Pears, raw, red anjou'
        }, {
                value: 'Pears, raw, bosc'
        }, {
                value: 'Pears, raw, green anjou'
        }, {
                value: 'Grapefruit juice, white, bottled, unsweetened, OCEAN SPRAY'
        }, {
                value: 'Jackfruit, canned, syrup pack'
        }, {
                value: 'Dates, medjool'
        }, {
                value: 'Durian, raw or frozen'
        }, {
                value: 'Prune puree'
        }, {
                value: 'Candied fruit'
        }, {
                value: 'Abiyuch, raw'
        }, {
                value: 'Rowal, raw'
        }, {
                value: 'Pineapple, raw, traditional varieties'
        }, {
                value: 'Pineapple, raw, extra sweet variety'
        }, {
                value: 'USDA Commodity, mixed fruit (peaches, pears, grapes), canned, light syrup, drained'
        }, {
                value: 'USDA Commodity, mixed fruit (peaches, pears, grapes), canned, light syrup, solids and liquids'
        }, {
                value: 'Clementines, raw'
        }, {
                value: 'Guanabana nectar, canned'
        }, {
                value: 'Guava nectar, canned, with added ascorbic acid'
        }, {
                value: 'Mango nectar, canned'
        }, {
                value: 'Tamarind nectar, canned'
        }, {
                value: 'USDA Commodity peaches, canned, light syrup, drained'
        }, {
                value: 'USDA Commodity pears, canned, juice pack, drained'
        }, {
                value: 'USDA Commodity pears, canned, light syrup, drained'
        }, {
                value: 'Pomegranate juice, bottled'
        }, {
                value: 'Juice, apple and grape blend, with added ascorbic acid'
        }, {
                value: 'Juice, apple, grape and pear blend, with added ascorbic acid and calcium'
        }, {
                value: 'Plantains, green, fried'
        }, {
                value: 'Plantains, yellow, fried, Latino restaurant'
        }, {
                value: 'Nance, canned, syrup, drained'
        }, {
                value: 'Nance, frozen, unsweetened'
        }, {
                value: 'Naranjilla (lulo) pulp, frozen, unsweetened'
        }, {
                value: 'Horned melon (Kiwano)'
        }, {
                value: 'Orange Pineapple Juice Blend'
        }, {
                value: 'Apples, raw, red delicious, with skin'
        }, {
                value: 'Apples, raw, golden delicious, with skin'
        }, {
                value: 'Apples, raw, granny smith, with skin'
        }, {
                value: 'Apples, raw, gala, with skin'
        }, {
                value: 'Apples, raw, fuji, with skin'
        }, {
                value: 'Orange juice, chilled, includes from concentrate, with added calcium and vitamins A, D, E'
        }, {
                value: 'Fruit juice smoothie, NAKED JUICE, MIGHTY MANGO'
        }, {
                value: 'Fruit juice smoothie, NAKED JUICE, GREEN MACHINE'
        }, {
                value: 'Pineapple juice, canned, not from concentrate, unsweetened, with added vitamins A, C and E'
        }, {
                value: 'Fruit juice smoothie, NAKED JUICE, BLUE MACHINE'
        }, {
                value: 'Grape juice, canned or bottled, unsweetened, with added ascorbic acid and calcium'
        }, {
                value: 'Fruit juice smoothie, ODWALLA, ORIGINAL SUPERFOOD'
        }, {
                value: 'Fruit juice smoothie, BOLTHOUSE FARMS, BERRY BOOST'
        }, {
                value: 'Fruit juice smoothie, BOLTHOUSE FARMS, GREEN GOODNESS'
        }, {
                value: 'Fruit juice smoothie, BOLTHOUSE FARMS, strawberry banana'
        }, {
                value: 'Apple juice, canned or bottled, unsweetened, with added ascorbic acid, calcium, and potassium'
        }, {
                value: 'Raspberries, frozen, unsweetened'
        }, {
                value: 'Guava nectar, with sucralose, canned'
        }, {
                value: 'Kiwifruit, ZESPRI SunGold, raw'
        }, {
                value: 'Cranberry juice blend, 100% juice, bottled, with added vitamin C and calcium'
        }, {
                value: 'Lemon juice from concentrate, bottled, CONCORD'
        }, {
                value: 'Lemon juice from concentrate, bottled, REAL LEMON'
        }, {
                value: 'Cranberry sauce, whole, canned, OCEAN SPRAY'
        }, {
                value: 'Cranberry sauce, jellied, canned, OCEAN SPRAY'
        }, {
                value: 'Ruby Red grapefruit juice blend (grapefruit, grape, apple), OCEAN SPRAY, bottled, with added vitamin C'
        }, {
                value: 'Fruit juice smoothie, ODWALLA, strawberry banana'
        }, {
                value: 'Fruit juice smoothie, NAKED JUICE, strawberry banana'
        }, {
                value: 'Pork, fresh, composite of separable fat, with added solution, cooked'
        }, {
                value: 'Pork, fresh, carcass, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, composite of trimmed retail cuts (leg, loin, shoulder), separable lean only, raw'
        }, {
                value: 'Pork, fresh, composite of trimmed leg, loin, shoulder, and spareribs, (includes cuts to be cured), separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, backfat, raw'
        }, {
                value: 'Pork, fresh, belly, raw'
        }, {
                value: 'Pork, fresh, separable fat, raw'
        }, {
                value: 'Pork, fresh, separable fat, cooked'
        }, {
                value: 'Pork, fresh, leg (ham), whole, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, leg (ham), whole, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, leg (ham), whole, separable lean only, raw'
        }, {
                value: 'Pork, fresh, leg (ham), whole, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, leg (ham), rump half, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, leg (ham), rump half, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, leg (ham), rump half, separable lean only, raw'
        }, {
                value: 'Pork, fresh, leg (ham), rump half, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, leg (ham), shank half, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, leg (ham), shank half, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, leg (ham), shank half, separable lean only, raw'
        }, {
                value: 'Pork, fresh, leg (ham), shank half, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, whole, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, loin, whole, separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, whole, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, whole, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, whole, separable lean only, raw'
        }, {
                value: 'Pork, fresh, loin, whole, separable lean only, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, whole, separable lean only, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, whole, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, blade (chops or roasts), bone-in, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, loin, blade (chops), bone-in, separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, blade (chops), bone-in, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, blade (roasts), bone-in, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, blade (chops or roasts), bone-in, separable lean only, raw'
        }, {
                value: 'Pork, fresh, loin, blade (chops), bone-in, separable lean only, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, blade (chops), bone-in, separable lean only, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, blade (roasts), bone-in, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, center loin (chops), bone-in, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, loin, center loin (chops), bone-in, separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, center loin (chops), bone-in, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, center loin (roasts), bone-in, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, center loin (chops), bone-in, separable lean only, raw'
        }, {
                value: 'Pork, fresh, loin, center loin (chops), bone-in, separable lean only, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, center loin (chops), bone-in, separable lean only, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, center loin (roasts), bone-in, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, center rib (chops or roasts), bone-in, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, loin, center rib (chops), bone-in, separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, center rib (chops), bone-in, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, center rib (roasts), bone-in, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, center rib (chops or roasts), bone-in, separable lean only, raw'
        }, {
                value: 'Pork, fresh, loin, center rib (chops), bone-in, separable lean only, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, center rib (chops), bone-in, separable lean only, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, center rib (roasts), bone-in, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, sirloin (chops or roasts), bone-in, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, loin, sirloin (chops), bone-in, separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, sirloin (chops), bone-in, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, sirloin (roasts), bone-in, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, sirloin (chops or roasts), bone-in, separable lean only, raw'
        }, {
                value: 'Pork, fresh, loin, sirloin (chops), bone-in, separable lean only, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, sirloin (chops), bone-in, separable lean only, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, sirloin (roasts), bone-in, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, tenderloin, separable lean only, raw'
        }, {
                value: 'Pork, fresh, loin, tenderloin, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, top loin (roasts), boneless, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean only, raw'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean only, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean only, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, top loin (roasts), boneless, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, shoulder, whole, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, shoulder, whole, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, shoulder, whole, separable lean only, raw'
        }, {
                value: 'Pork, fresh, shoulder, whole, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, shoulder, arm picnic, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, shoulder, arm picnic, separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, fresh, shoulder, arm picnic, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, shoulder, arm picnic, separable lean only, raw'
        }, {
                value: 'Pork, fresh, shoulder, arm picnic, separable lean only, cooked, braised'
        }, {
                value: 'Pork, fresh, shoulder, arm picnic, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, fresh, shoulder, blade, boston (steaks), separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, fresh, shoulder, blade, boston (roasts), separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean only, raw'
        }, {
                value: 'Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean only, cooked, braised'
        }, {
                value: 'Pork, fresh, shoulder, blade, boston (steaks), separable lean only, cooked, broiled'
        }, {
                value: 'Pork, fresh, shoulder, blade, boston (roasts), separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, spareribs, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, spareribs, separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, fresh, composite of trimmed retail cuts (leg, loin, and shoulder), separable lean only, cooked'
        }, {
                value: 'Pork, fresh, loin, center loin (chops), boneless, separable lean only, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, brain, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, brain, cooked, braised'
        }, {
                value: 'Pork, fresh, variety meats and by-products, chitterlings, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, chitterlings, cooked, simmered'
        }, {
                value: 'Pork, fresh, variety meats and by-products, ears, frozen, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, ears, frozen, cooked, simmered'
        }, {
                value: 'Pork, fresh, variety meats and by-products, feet, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, heart, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, heart, cooked, braised'
        }, {
                value: 'Pork, fresh, variety meats and by-products, jowl, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, kidneys, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, kidneys, cooked, braised'
        }, {
                value: 'Pork, fresh, variety meats and by-products, leaf fat, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, liver, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, liver, cooked, braised'
        }, {
                value: 'Pork, fresh, variety meats and by-products, lungs, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, lungs, cooked, braised'
        }, {
                value: 'Pork, fresh, variety meats and by-products, mechanically separated, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, pancreas, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, pancreas, cooked, braised'
        }, {
                value: 'Pork, fresh, variety meats and by-products, spleen, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, spleen, cooked, braised'
        }, {
                value: 'Pork, fresh, variety meats and by-products, stomach, raw'
        }, {
                value: 'Pork, fresh, loin, blade (chops), bone-in, separable lean only, cooked, pan-fried'
        }, {
                value: 'Pork, fresh, variety meats and by-products, tongue, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, tongue, cooked, braised'
        }, {
                value: 'Pork, cured, bacon, unprepared'
        }, {
                value: 'Pork, cured, breakfast strips, raw or unheated'
        }, {
                value: 'Canadian bacon, unprepared'
        }, {
                value: 'Pork, cured, feet, pickled'
        }, {
                value: 'Pork, cured, ham, boneless, extra lean (approximately 5% fat), roasted'
        }, {
                value: 'Pork, cured, ham, boneless, regular (approximately 11% fat), roasted'
        }, {
                value: 'Pork, cured, ham, extra lean (approximately 4% fat), canned, unheated'
        }, {
                value: 'Pork, cured, ham, extra lean (approximately 4% fat), canned, roasted'
        }, {
                value: 'Pork, cured, ham, regular (approximately 13% fat), canned, roasted'
        }, {
                value: 'Pork, cured, ham, center slice, country-style, separable lean only, raw'
        }, {
                value: 'Pork, cured, ham, center slice, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham, patties, unheated'
        }, {
                value: 'Pork, cured, ham, steak, boneless, extra lean, unheated'
        }, {
                value: 'Pork, cured, ham, whole, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham, whole, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham, whole, separable lean only, roasted'
        }, {
                value: 'USDA Commodity, pork, canned'
        }, {
                value: 'Pork, fresh, loin, center loin (chops), boneless, separable lean only, cooked, pan-broiled'
        }, {
                value: 'Pork, fresh, loin, center loin (chops), boneless, separable lean and fat, raw'
        }, {
                value: 'Pork, cured, salt pork, raw'
        }, {
                value: 'Pork, cured, separable fat (from ham and arm picnic), unheated'
        }, {
                value: 'Pork, cured, separable fat (from ham and arm picnic), roasted'
        }, {
                value: 'Pork, cured, shoulder, arm picnic, separable lean and fat, roasted'
        }, {
                value: 'Pork, cured, shoulder, arm picnic, separable lean only, roasted'
        }, {
                value: 'Pork, cured, shoulder, blade roll, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, shoulder, blade roll, separable lean and fat, roasted'
        }, {
                value: 'Pork, fresh, variety meats and by-products, feet, cooked, simmered'
        }, {
                value: 'Pork, fresh, variety meats and by-products, tail, raw'
        }, {
                value: 'Pork, fresh, variety meats and by-products, tail, cooked, simmered'
        }, {
                value: 'Pork, fresh, loin, center loin (chops), bone-in, separable lean only, cooked, pan-fried'
        }, {
                value: 'Pork, fresh, loin, center rib (chops), bone-in, separable lean only, cooked, pan-fried'
        }, {
                value: 'Pork, fresh, loin, blade (chops), bone-in, separable lean and fat, cooked, pan-fried'
        }, {
                value: 'Pork, fresh, loin, center loin (chops), bone-in, separable lean and fat, cooked, pan-fried'
        }, {
                value: 'Pork, fresh, loin, center rib (chops), bone-in, separable lean and fat, cooked, pan-fried'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean only, cooked, pan-fried'
        }, {
                value: 'Pork, cured, ham, boneless, extra lean and regular, unheated'
        }, {
                value: 'Pork, cured, ham, boneless, extra lean and regular, roasted'
        }, {
                value: 'Pork, cured, ham, extra lean and regular, canned, unheated'
        }, {
                value: 'Pork, cured, ham, extra lean and regular, canned, roasted'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, cooked, pan-fried'
        }, {
                value: 'Pork, fresh, composite of trimmed retail cuts (leg, loin, shoulder, and spareribs), separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, composite of trimmed retail cuts (leg, loin, shoulder, and spareribs), separable lean and fat, cooked'
        }, {
                value: 'Pork, fresh, loin, center loin (chops), boneless, separable lean and fat, cooked, pan-broiled'
        }, {
                value: 'Pork, fresh, backribs, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, backribs, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, center rib (chops or roasts), boneless, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, loin, center rib (chops), boneless, separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, center rib (chops), boneless, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, center rib (chops), boneless, separable lean and fat, cooked, pan-fried'
        }, {
                value: 'Pork, fresh, loin, center rib (roasts), boneless, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, center rib (chops or roasts), boneless, separable lean only, raw'
        }, {
                value: 'Pork, fresh, loin, center rib (chops), boneless, separable lean only, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, center rib (chops), boneless, separable lean only, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, center rib (chops), boneless, separable lean only, cooked, pan-fried'
        }, {
                value: 'Pork, fresh, loin, center rib (roasts), boneless, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, country-style ribs, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, loin, country-style ribs, separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, country-style ribs, separable lean and fat, bone-in, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, country-style ribs, separable lean only, raw'
        }, {
                value: 'Pork, fresh, loin, country-style ribs, separable lean only, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, country-style ribs, separable lean only, bone-in, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, sirloin (chops or roasts), boneless, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, loin, sirloin (chops), boneless, separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, sirloin (chops), boneless, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, sirloin (roasts), boneless, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, sirloin (chops or roasts), boneless, separable lean only, raw'
        }, {
                value: 'Pork, fresh, loin, sirloin (chops), boneless, separable lean only, cooked, braised'
        }, {
                value: 'Pork, fresh, loin, sirloin (chops), boneless, separable lean only, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, sirloin (roasts), boneless, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, tenderloin, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, ground, raw'
        }, {
                value: 'Pork, fresh, ground, cooked'
        }, {
                value: 'Pork, fresh, loin, tenderloin, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, tenderloin, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, tenderloin, separable lean only, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, top loin (roasts), boneless, separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, loin, top loin (roasts), boneless, separable lean only, raw'
        }, {
                value: 'Pork, fresh, composite of trimmed retail cuts (loin and shoulder blade), separable lean and fat, raw'
        }, {
                value: 'Pork, fresh, composite of trimmed retail cuts (loin and shoulder blade), separable lean and fat, cooked'
        }, {
                value: 'Pork, fresh, composite of trimmed retail cuts (loin and shoulder blade), separable lean only, raw'
        }, {
                value: 'Pork, fresh, composite of trimmed retail cuts (loin and shoulder blade), separable lean only, cooked'
        }, {
                value: 'USDA Commodity, pork, cured, ham, boneless, cooked, heated'
        }, {
                value: 'USDA Commodity, pork, ground, fine/coarse, frozen, cooked'
        }, {
                value: 'USDA Commodity, pork, cured, ham, boneless, cooked, unheated'
        }, {
                value: 'USDA Commodity, pork, ground, fine/coarse, frozen, raw'
        }, {
                value: 'HORMEL, Cure 81 Ham'
        }, {
                value: 'HORMEL ALWAYS TENDER, Pork Tenderloin, Teriyaki-Flavored'
        }, {
                value: 'HORMEL ALWAYS TENDER, Pork Tenderloin, Peppercorn-Flavored'
        }, {
                value: 'HORMEL ALWAYS TENDER, Pork Loin Filets, Lemon Garlic-Flavored'
        }, {
                value: 'HORMEL ALWAYS TENDER, Center Cut Chops, Fresh Pork'
        }, {
                value: 'HORMEL ALWAYS TENDER, Boneless Pork Loin, Fresh Pork'
        }, {
                value: 'HORMEL Canadian Style Bacon'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean only, with added solution, cooked, pan-broiled'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, with added solution, cooked, pan-broiled'
        }, {
                value: 'Pork, cured, bacon, cooked, baked'
        }, {
                value: 'Pork, cured, bacon, cooked, microwaved'
        }, {
                value: 'Pork, cured, bacon, pre-sliced, cooked, pan-fried'
        }, {
                value: 'Pork, fresh, variety meats and by-products, stomach, cooked, simmered'
        }, {
                value: 'Pork, bacon, rendered fat, cooked'
        }, {
                value: 'Pork, cured, ham -- water added, rump, bone-in, separable lean only, heated, roasted'
        }, {
                value: 'Pork, cured, ham -- water added, rump, bone-in, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham -- water added, shank, bone-in, separable lean only, heated, roasted'
        }, {
                value: 'Pork, cured, ham -- water added, slice, bone-in, separable lean only, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham and water product, slice, bone-in, separable lean only, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham and water product, slice, boneless, separable lean only, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham and water product, whole, boneless, separable lean only, heated, roasted'
        }, {
                value: 'Pork, cured, ham and water product, whole, boneless, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham with natural juices, rump, bone-in, separable lean only, heated, roasted'
        }, {
                value: 'Pork, cured, ham with natural juices, shank, bone-in, separable lean only, heated, roasted'
        }, {
                value: 'Pork, cured, ham with natural juices, slice, bone-in, separable lean only, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham with natural juices, spiral slice, meat only, boneless, separable lean only, heated, roasted'
        }, {
                value: 'Pork, cured, ham and water product, rump, bone-in, separable lean only, heated, roasted'
        }, {
                value: 'Pork, cured, ham -- water added, slice, boneless, separable lean only, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham -- water added, whole, boneless, separable lean only, heated, roasted'
        }, {
                value: 'Pork, cured, ham -- water added, whole, boneless, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham and water product, shank, bone-in, separable lean only, heated, roasted'
        }, {
                value: 'Pork, cured, ham with natural juices, slice, boneless, separable lean only, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham with natural juices, whole, boneless, separable lean only, heated, roasted'
        }, {
                value: 'Pork, cured, ham with natural juices, whole, boneless, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham -- water added, shank, bone-in, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham -- water added, slice, bone-in, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham and water product, rump, bone-in, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham and water product, slice, bone-in, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham and water product, shank, bone-in, unheated, separable lean only'
        }, {
                value: 'Pork, cured, ham with natural juices, rump, bone-in, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham with natural juices, shank, bone-in, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham with natural juices, slice, bone-in, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham with natural juices, spiral slice, boneless, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham, separable fat, boneless, heated'
        }, {
                value: 'Pork, cured, ham, separable fat, boneless, unheated'
        }, {
                value: 'Pork, pickled pork hocks'
        }, {
                value: 'Pork, cured, ham, slice, bone-in, separable lean only, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham with natural juices, whole, boneless, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham with natural juices, spiral slice, boneless, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham with natural juices, slice, bone-in, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham with natural juices, shank, bone-in, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham with natural juices, rump, bone-in, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham and water product, whole, boneless, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham and water product, slice, bone-in, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham and water product, shank, bone-in, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham and water product, rump, bone-in, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham -- water added, whole, boneless, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham -- water added, slice, bone-in, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham -- water added, shank, bone-in, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham -- water added, rump, bone-in, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham -- water added, rump, bone-in, separable lean and fat, heated, roasted'
        }, {
                value: 'Pork, cured, ham -- water added, shank, bone-in, separable lean and fat, heated, roasted'
        }, {
                value: 'Pork, cured, ham -- water added, slice, bone-in, separable lean and fat, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham -- water added, slice, boneless, separable lean and fat, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham -- water added, whole, boneless, separable lean and fat, heated, roasted'
        }, {
                value: 'Pork, cured, ham and water product, rump, bone-in, separable lean and fat, heated, roasted'
        }, {
                value: 'Pork, cured, ham and water product, shank, bone-in, separable lean and fat, heated, roasted'
        }, {
                value: 'Pork, cured, ham and water product, slice, bone-in, separable lean and fat, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham and water product, slice, boneless, separable lean and fat, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham and water product, whole, boneless, separable lean and fat, heated, roasted'
        }, {
                value: 'Pork, cured, ham with natural juices, rump, bone-in, separable lean and fat, heated, roasted'
        }, {
                value: 'Pork, cured, ham with natural juices, shank, bone-in, separable lean and fat, heated, roasted'
        }, {
                value: 'Pork, cured, ham with natural juices, slice, bone-in, separable lean and fat, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham with natural juices, slice, boneless, separable lean and fat, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham with natural juices, spiral slice, boneless, separable lean and fat, heated, roasted'
        }, {
                value: 'Pork, cured, ham with natural juices, whole, boneless, separable lean and fat, heated, roasted'
        }, {
                value: 'Pork, cured, ham, rump, bone-in, separable lean and fat, heated, roasted'
        }, {
                value: 'Pork, cured, ham, rump, bone-in, separable lean only, heated, roasted'
        }, {
                value: 'Pork, cured, ham, rump, bone-in, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham, shank, bone-in, separable lean only, heated, roasted'
        }, {
                value: 'Pork, cured, ham, shank, bone-in, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham, shank, bone-in, separable lean and fat, heated, roasted'
        }, {
                value: 'Pork, cured, ham, shank, bone-in, separable lean and fat, unheated'
        }, {
                value: 'Pork, cured, ham, slice, bone-in, separable lean and fat, heated, pan-broil'
        }, {
                value: 'Pork, cured, ham, slice, bone-in, separable lean only, unheated'
        }, {
                value: 'Pork, cured, ham, slice, bone-in, separable lean and fat, unheated'
        }, {
                value: 'Pork, fresh, spareribs, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, composite of separable fat, with added solution, raw'
        }, {
                value: 'Pork, fresh, loin, tenderloin, separable lean only, with added solution, cooked, roasted'
        }, {
                value: 'Pork, fresh, enhanced, loin, tenderloin, separable lean only, raw'
        }, {
                value: 'Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean only, with added solution cooked, braised'
        }, {
                value: 'Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean only, with added solution, raw'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean only, with added solution, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean only, with added solution, raw'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, with added solution, raw'
        }, {
                value: 'Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, with added solution, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, tenderloin, separable lean and fat, with added solution, raw'
        }, {
                value: 'Pork, fresh, loin, tenderloin, separable lean and fat, with added solution, cooked, roasted'
        }, {
                value: 'Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean and fat,with added solution, raw'
        }, {
                value: 'Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean and fat, with added solution, cooked, braised'
        }, {
                value: 'Pork, cured, ham, rump, bone-in, separable lean and fat, unheated'
        }, {
                value: 'Pork, loin, leg cap steak, boneless, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, Leg Cap Steak, boneless, separable lean and fat, raw'
        }, {
                value: 'Pork, Shoulder breast, boneless, separable lean and fat, raw'
        }, {
                value: 'Pork, Shoulder breast, boneless, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, shoulder, petite tender, boneless, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, Shoulder petite tender, boneless, separable lean and fat, raw'
        }, {
                value: 'Pork, Leg sirloin tip roast, boneless, separable lean and fat, cooked, braised'
        }, {
                value: 'Pork, Leg sirloin tip roast, boneless, separable lean and fat, raw'
        }, {
                value: 'Pork, ground, 84% lean / 16% fat, raw'
        }, {
                value: 'Pork, ground, 96% lean / 4% fat, raw'
        }, {
                value: 'Pork, ground, 72% lean / 28% fat, cooked, crumbles'
        }, {
                value: 'Pork, ground, 84% lean / 16% fat, cooked, crumbles'
        }, {
                value: 'Pork, ground, 96% lean / 4% fat, cooked, crumbles'
        }, {
                value: 'Pork, ground, 72% lean / 28% fat, cooked, pan-broiled'
        }, {
                value: 'Pork, ground, 84% lean / 16% fat, cooked, pan-broiled'
        }, {
                value: 'Pork, ground, 96% lean / 4% fat, cooked, pan-broiled'
        }, {
                value: 'Pork loin, fresh, backribs, bone-in, raw, lean only'
        }, {
                value: 'Pork loin, fresh, backribs, bone-in, cooked-roasted, lean only'
        }, {
                value: 'Pork, fresh, loin, blade (chops or roasts), boneless, separable lean only, raw'
        }, {
                value: 'Pork, fresh, loin, blade (roasts), boneless, separable lean only, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, blade (chops), boneless, separable lean only, boneless, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, country-style ribs, separable lean only, boneless, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, country-style ribs, separable lean only, bone-in, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, country-style ribs, separable lean only, boneless, cooked, roasted'
        }, {
                value: 'Pork, fresh, blade, (chops), boneless, separable lean and fat, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, blade (chops or roasts), boneless, separable lean and fat only, raw'
        }, {
                value: 'Pork, fresh, loin, blade (roasts), boneless, separable lean and fat, cooked, roasted'
        }, {
                value: 'Pork, fresh, loin, country-style ribs, separable lean and fat, boneless, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, country-style ribs, separable lean and fat, bone-in, cooked, broiled'
        }, {
                value: 'Pork, fresh, loin, country-style ribs, separable lean and fat, boneless, cooked, roasted'
        }, {
                value: 'Bacon, pre-sliced, reduced/low sodium, unprepared'
        }, {
                value: 'Canadian bacon, cooked, pan-fried'
        }, {
                value: 'Alfalfa seeds, sprouted, raw'
        }, {
                value: 'Amaranth leaves, raw'
        }, {
                value: 'Amaranth leaves, cooked, boiled, drained, without salt'
        }, {
                value: 'Arrowhead, raw'
        }, {
                value: 'Arrowhead, cooked, boiled, drained, without salt'
        }, {
                value: 'Artichokes, (globe or french), raw'
        }, {
                value: 'Artichokes, (globe or french), cooked, boiled, drained, without salt'
        }, {
                value: 'Artichokes, (globe or french), frozen, unprepared'
        }, {
                value: 'Artichokes, (globe or french), frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Asparagus, raw'
        }, {
                value: 'Asparagus, cooked, boiled, drained'
        }, {
                value: 'Asparagus, canned, regular pack, solids and liquids'
        }, {
                value: 'Asparagus, canned, drained solids'
        }, {
                value: 'Asparagus, frozen, unprepared'
        }, {
                value: 'Asparagus, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Balsam-pear (bitter gourd), leafy tips, raw'
        }, {
                value: 'Balsam-pear (bitter gourd), leafy tips, cooked, boiled, drained, without salt'
        }, {
                value: 'Balsam-pear (bitter gourd), pods, raw'
        }, {
                value: 'Balsam-pear (bitter gourd), pods, cooked, boiled, drained, without salt'
        }, {
                value: 'Bamboo shoots, raw'
        }, {
                value: 'Bamboo shoots, cooked, boiled, drained, without salt'
        }, {
                value: 'Bamboo shoots, canned, drained solids'
        }, {
                value: 'Beans, kidney, mature seeds, sprouted, raw'
        }, {
                value: 'Beans, kidney, mature seeds, sprouted, cooked, boiled, drained, without salt'
        }, {
                value: 'Lima beans, immature seeds, raw'
        }, {
                value: 'Lima beans, immature seeds, cooked, boiled, drained, without salt'
        }, {
                value: 'Lima beans, immature seeds, canned, regular pack, solids and liquids'
        }, {
                value: 'Lima beans, immature seeds, frozen, fordhook, unprepared'
        }, {
                value: 'Lima beans, immature seeds, frozen, fordhook, cooked, boiled, drained, without salt'
        }, {
                value: 'Lima beans, immature seeds, frozen, baby, unprepared'
        }, {
                value: 'Lima beans, immature seeds, frozen, baby, cooked, boiled, drained, without salt'
        }, {
                value: 'Mung beans, mature seeds, sprouted, raw'
        }, {
                value: 'Mung beans, mature seeds, sprouted, cooked, boiled, drained, without salt'
        }, {
                value: 'Mung beans, mature seeds, sprouted, cooked, stir-fried'
        }, {
                value: 'Beans, navy, mature seeds, sprouted, raw'
        }, {
                value: 'Beans, navy, mature seeds, sprouted, cooked, boiled, drained, without salt'
        }, {
                value: 'Beans, pinto, immature seeds, frozen, unprepared'
        }, {
                value: 'Beans, pinto, immature seeds, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Beans, shellie, canned, solids and liquids'
        }, {
                value: 'Beans, snap, green, raw'
        }, {
                value: 'Beans, snap, green, cooked, boiled, drained, without salt'
        }, {
                value: 'Beans, snap, green, canned, regular pack, solids and liquids'
        }, {
                value: 'Beans, snap, green, canned, regular pack, drained solids'
        }, {
                value: 'Beans, snap, canned, all styles, seasoned, solids and liquids'
        }, {
                value: 'Beans, snap, green, frozen, all styles, unprepared'
        }, {
                value: 'Beans, snap, green, frozen, cooked, boiled, drained without salt'
        }, {
                value: 'Beans, snap, green, frozen, all styles, microwaved'
        }, {
                value: 'Beans, snap, green, microwaved'
        }, {
                value: 'Beets, raw'
        }, {
                value: 'Beets, cooked, boiled, drained'
        }, {
                value: 'Beets, canned, regular pack, solids and liquids'
        }, {
                value: 'Beets, canned, drained solids'
        }, {
                value: 'Beet greens, raw'
        }, {
                value: 'Beet greens, cooked, boiled, drained, without salt'
        }, {
                value: 'Broadbeans, immature seeds, raw'
        }, {
                value: 'Broadbeans, immature seeds, cooked, boiled, drained, without salt'
        }, {
                value: 'Broccoli, raw'
        }, {
                value: 'Broccoli, cooked, boiled, drained, without salt'
        }, {
                value: 'Broccoli, frozen, chopped, unprepared'
        }, {
                value: 'Broccoli, frozen, chopped, cooked, boiled, drained, without salt'
        }, {
                value: 'Broccoli, frozen, spears, unprepared'
        }, {
                value: 'Broccoli, frozen, spears, cooked, boiled, drained, without salt'
        }, {
                value: 'Broccoli raab, raw'
        }, {
                value: 'Broccoli raab, cooked'
        }, {
                value: 'Brussels sprouts, raw'
        }, {
                value: 'Brussels sprouts, cooked, boiled, drained, without salt'
        }, {
                value: 'Brussels sprouts, frozen, unprepared'
        }, {
                value: 'Brussels sprouts, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Burdock root, raw'
        }, {
                value: 'Burdock root, cooked, boiled, drained, without salt'
        }, {
                value: 'Butterbur, (fuki), raw'
        }, {
                value: 'Butterbur, cooked, boiled, drained, without salt'
        }, {
                value: 'Butterbur, canned'
        }, {
                value: 'Cabbage, raw'
        }, {
                value: 'Cabbage, cooked, boiled, drained, without salt'
        }, {
                value: 'Cabbage, red, raw'
        }, {
                value: 'Cabbage, red, cooked, boiled, drained, without salt'
        }, {
                value: 'Cabbage, savoy, raw'
        }, {
                value: 'Cabbage, savoy, cooked, boiled, drained, without salt'
        }, {
                value: 'Cabbage, chinese (pak-choi), raw'
        }, {
                value: 'Cabbage, chinese (pak-choi), cooked, boiled, drained, without salt'
        }, {
                value: 'Cabbage, kimchi'
        }, {
                value: 'Cabbage, chinese (pe-tsai), raw'
        }, {
                value: 'Cabbage, chinese (pe-tsai), cooked, boiled, drained, without salt'
        }, {
                value: 'Cardoon, raw'
        }, {
                value: 'Cardoon, cooked, boiled, drained, without salt'
        }, {
                value: 'Carrots, raw'
        }, {
                value: 'Carrots, cooked, boiled, drained, without salt'
        }, {
                value: 'Carrots, canned, regular pack, solids and liquids'
        }, {
                value: 'Carrots, canned, regular pack, drained solids'
        }, {
                value: 'Carrots, frozen, unprepared'
        }, {
                value: 'Carrots, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Cassava, raw'
        }, {
                value: 'Cauliflower, raw'
        }, {
                value: 'Cauliflower, cooked, boiled, drained, without salt'
        }, {
                value: 'Cauliflower, frozen, unprepared'
        }, {
                value: 'Cauliflower, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Celeriac, raw'
        }, {
                value: 'Celeriac, cooked, boiled, drained, without salt'
        }, {
                value: 'Celery, raw'
        }, {
                value: 'Celery, cooked, boiled, drained, without salt'
        }, {
                value: 'Celtuce, raw'
        }, {
                value: 'Chard, swiss, raw'
        }, {
                value: 'Chard, swiss, cooked, boiled, drained, without salt'
        }, {
                value: 'Chayote, fruit, raw'
        }, {
                value: 'Chayote, fruit, cooked, boiled, drained, without salt'
        }, {
                value: 'Chicory, witloof, raw'
        }, {
                value: 'Chicory greens, raw'
        }, {
                value: 'Chicory roots, raw'
        }, {
                value: 'Chives, raw'
        }, {
                value: 'Chrysanthemum, garland, raw'
        }, {
                value: 'Chrysanthemum, garland, cooked, boiled, drained, without salt'
        }, {
                value: 'Collards, raw'
        }, {
                value: 'Collards, cooked, boiled, drained, without salt'
        }, {
                value: 'Collards, frozen, chopped, unprepared'
        }, {
                value: 'Collards, frozen, chopped, cooked, boiled, drained, without salt'
        }, {
                value: 'Coriander (cilantro) leaves, raw'
        }, {
                value: 'Corn, sweet, yellow, raw'
        }, {
                value: 'Corn, sweet, yellow, cooked, boiled, drained, without salt'
        }, {
                value: 'Corn, sweet, yellow, canned, brine pack, regular pack, solids and liquids'
        }, {
                value: 'Corn, sweet, yellow, canned, whole kernel, drained solids'
        }, {
                value: 'Corn, sweet, yellow, canned, cream style, regular pack'
        }, {
                value: 'Corn, sweet, yellow, canned, vacuum pack, regular pack'
        }, {
                value: 'Corn, sweet, yellow, canned, drained solids, rinsed with tap water'
        }, {
                value: 'Corn, sweet, yellow, frozen, kernels cut off cob, unprepared'
        }, {
                value: 'Corn, sweet, yellow, frozen, kernels cut off cob, boiled, drained, without salt'
        }, {
                value: 'Corn, sweet, yellow, frozen, kernels on cob, unprepared'
        }, {
                value: 'Corn, sweet, yellow, frozen, kernels on cob, cooked, boiled, drained, without salt'
        }, {
                value: 'Corn, yellow, whole kernel, frozen, microwaved'
        }, {
                value: 'Corn with red and green peppers, canned, solids and liquids'
        }, {
                value: 'Cornsalad, raw'
        }, {
                value: 'Cowpeas (blackeyes), immature seeds, raw'
        }, {
                value: 'Cowpeas (blackeyes), immature seeds, cooked, boiled, drained, without salt'
        }, {
                value: 'Cowpeas (blackeyes), immature seeds, frozen, unprepared'
        }, {
                value: 'Cowpeas (blackeyes), immature seeds, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Cowpeas, young pods with seeds, raw'
        }, {
                value: 'Cowpeas, young pods with seeds, cooked, boiled, drained, without salt'
        }, {
                value: 'Yardlong bean, raw'
        }, {
                value: 'Yardlong bean, cooked, boiled, drained, without salt'
        }, {
                value: 'Cowpeas, leafy tips, raw'
        }, {
                value: 'Cowpeas, leafy tips, cooked, boiled, drained, without salt'
        }, {
                value: 'Cress, garden, raw'
        }, {
                value: 'Cress, garden, cooked, boiled, drained, without salt'
        }, {
                value: 'Cucumber, with peel, raw'
        }, {
                value: 'Cucumber, peeled, raw'
        }, {
                value: 'Dandelion greens, raw'
        }, {
                value: 'Dandelion greens, cooked, boiled, drained, without salt'
        }, {
                value: 'Eggplant, raw'
        }, {
                value: 'Eggplant, cooked, boiled, drained, without salt'
        }, {
                value: 'Edamame, frozen, unprepared'
        }, {
                value: 'Edamame, frozen, prepared'
        }, {
                value: 'Endive, raw'
        }, {
                value: 'Escarole, cooked, boiled, drained, no salt added'
        }, {
                value: 'Garlic, raw'
        }, {
                value: 'Ginger root, raw'
        }, {
                value: 'Gourd, white-flowered (calabash), raw'
        }, {
                value: 'Gourd, white-flowered (calabash), cooked, boiled, drained, without salt'
        }, {
                value: 'Gourd, dishcloth (towelgourd), raw'
        }, {
                value: 'Gourd, dishcloth (towelgourd), cooked, boiled, drained, without salt'
        }, {
                value: 'Drumstick leaves, raw'
        }, {
                value: 'Drumstick leaves, cooked, boiled, drained, without salt'
        }, {
                value: 'Hyacinth-beans, immature seeds, raw'
        }, {
                value: 'Hyacinth-beans, immature seeds, cooked, boiled, drained, without salt'
        }, {
                value: 'Jerusalem-artichokes, raw'
        }, {
                value: 'Jews ear, (pepeao), raw'
        }, {
                value: 'Pepeao, dried'
        }, {
                value: 'Jute, potherb, raw'
        }, {
                value: 'Jute, potherb, cooked, boiled, drained, without salt'
        }, {
                value: 'Kale, raw'
        }, {
                value: 'Kale, cooked, boiled, drained, without salt'
        }, {
                value: 'Kale, frozen, unprepared'
        }, {
                value: 'Kale, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Kanpyo, (dried gourd strips)'
        }, {
                value: 'Mushrooms, shiitake, raw'
        }, {
                value: 'Mushrooms, Chanterelle, raw'
        }, {
                value: 'Mushrooms, morel, raw'
        }, {
                value: 'Kohlrabi, raw'
        }, {
                value: 'Kohlrabi, cooked, boiled, drained, without salt'
        }, {
                value: 'Mushrooms, portabella, grilled'
        }, {
                value: 'Lambsquarters, raw'
        }, {
                value: 'Lambsquarters, cooked, boiled, drained, without salt'
        }, {
                value: 'Leeks, (bulb and lower leaf-portion), raw'
        }, {
                value: 'Leeks, (bulb and lower leaf-portion), cooked, boiled, drained, without salt'
        }, {
                value: 'Lentils, sprouted, raw'
        }, {
                value: 'Lentils, sprouted, cooked, stir-fried, without salt'
        }, {
                value: 'Lettuce, butterhead (includes boston and bibb types), raw'
        }, {
                value: 'Lettuce, cos or romaine, raw'
        }, {
                value: 'Lettuce, iceberg (includes crisphead types), raw'
        }, {
                value: 'Lettuce, green leaf, raw'
        }, {
                value: 'Lotus root, raw'
        }, {
                value: 'Lotus root, cooked, boiled, drained, without salt'
        }, {
                value: 'Lettuce, red leaf, raw'
        }, {
                value: 'Mountain yam, hawaii, raw'
        }, {
                value: 'Mountain yam, hawaii, cooked, steamed, without salt'
        }, {
                value: 'Mushrooms, white, raw'
        }, {
                value: 'Mushrooms, white, cooked, boiled, drained, without salt'
        }, {
                value: 'Mushrooms, white, stir-fried'
        }, {
                value: 'Mushrooms, canned, drained solids'
        }, {
                value: 'Mushrooms, portabella, raw'
        }, {
                value: 'Mushrooms, brown, italian, or crimini, raw'
        }, {
                value: 'Mushrooms, shiitake, stir-fried'
        }, {
                value: 'Mushrooms, shiitake, dried'
        }, {
                value: 'Mushrooms, shiitake, cooked, without salt'
        }, {
                value: 'Mustard greens, raw'
        }, {
                value: 'Mustard greens, cooked, boiled, drained, without salt'
        }, {
                value: 'Mustard greens, frozen, unprepared'
        }, {
                value: 'Mustard greens, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Mustard spinach, (tendergreen), raw'
        }, {
                value: 'Mustard spinach, (tendergreen), cooked, boiled, drained, without salt'
        }, {
                value: 'New Zealand spinach, raw'
        }, {
                value: 'New Zealand spinach, cooked, boiled, drained, without salt'
        }, {
                value: 'Okra, raw'
        }, {
                value: 'Okra, cooked, boiled, drained, without salt'
        }, {
                value: 'Okra, frozen, unprepared'
        }, {
                value: 'Okra, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Onions, raw'
        }, {
                value: 'Onions, cooked, boiled, drained, without salt'
        }, {
                value: 'Onions, dehydrated flakes'
        }, {
                value: 'Onions, canned, solids and liquids'
        }, {
                value: 'Onions, yellow, sauteed'
        }, {
                value: 'Onions, frozen, chopped, unprepared'
        }, {
                value: 'Onions, frozen, chopped, cooked, boiled, drained, without salt'
        }, {
                value: 'Onions, frozen, whole, unprepared'
        }, {
                value: 'Onions, frozen, whole, cooked, boiled, drained, without salt'
        }, {
                value: 'Onions, spring or scallions (includes tops and bulb), raw'
        }, {
                value: 'Onions, young green, tops only'
        }, {
                value: 'Onions, welsh, raw'
        }, {
                value: 'Onions, sweet, raw'
        }, {
                value: 'Onion rings, breaded, par fried, frozen, unprepared'
        }, {
                value: 'Onion rings, breaded, par fried, frozen, prepared, heated in oven'
        }, {
                value: 'Parsley, fresh'
        }, {
                value: 'Parsnips, raw'
        }, {
                value: 'Parsnips, cooked, boiled, drained, without salt'
        }, {
                value: 'Peas, edible-podded, raw'
        }, {
                value: 'Peas, edible-podded, boiled, drained, without salt'
        }, {
                value: 'Peas, edible-podded, frozen, unprepared'
        }, {
                value: 'Peas, edible-podded, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Peas, green, raw'
        }, {
                value: 'Peas, green, cooked, boiled, drained, without salt'
        }, {
                value: 'Peas, green, canned, regular pack, solids and liquids'
        }, {
                value: 'Peas, green (includes baby and lesuer types), canned, drained solids, unprepared'
        }, {
                value: 'Peas, green, canned, seasoned, solids and liquids'
        }, {
                value: 'Peas, green, canned, drained solids, rinsed in tap water'
        }, {
                value: 'Peas, green, frozen, unprepared'
        }, {
                value: 'Peas, green, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Peas, mature seeds, sprouted, raw'
        }, {
                value: 'Peas, mature seeds, sprouted, cooked, boiled, drained, without salt'
        }, {
                value: 'Peas and carrots, canned, regular pack, solids and liquids'
        }, {
                value: 'Peas and carrots, frozen, unprepared'
        }, {
                value: 'Peas and carrots, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Peas and onions, canned, solids and liquids'
        }, {
                value: 'Peas and onions, frozen, unprepared'
        }, {
                value: 'Peas and onions, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Peppers, hot chili, green, canned, pods, excluding seeds, solids and liquids'
        }, {
                value: 'Peppers, sweet, green, raw'
        }, {
                value: 'Peppers, sweet, green, cooked, boiled, drained, without salt'
        }, {
                value: 'Peppers, sweet, green, canned, solids and liquids'
        }, {
                value: 'Peppers, sweet, green, frozen, chopped, unprepared'
        }, {
                value: 'Peppers, sweet, green, frozen, chopped, boiled, drained, without salt'
        }, {
                value: 'Peppers, sweet, green, sauteed'
        }, {
                value: 'Pigeonpeas, immature seeds, raw'
        }, {
                value: 'Pigeonpeas, immature seeds, cooked, boiled, drained, without salt'
        }, {
                value: '^'
        }, {
                value: 'Pokeberry shoots, (poke), raw'
        }, {
                value: 'Pokeberry shoots, (poke), cooked, boiled, drained, without salt'
        }, {
                value: 'Potatoes, flesh and skin, raw'
        }, {
                value: 'Potatoes, russet, flesh and skin, raw'
        }, {
                value: 'Potatoes, white, flesh and skin, raw'
        }, {
                value: 'Potatoes, red, flesh and skin, raw'
        }, {
                value: 'Potatoes, Russet, flesh and skin, baked'
        }, {
                value: 'Potatoes, white, flesh and skin, baked'
        }, {
                value: 'Potatoes, red, flesh and skin, baked'
        }, {
                value: 'Potatoes, french fried, crinkle or regular cut, salt added in processing, frozen, as purchased'
        }, {
                value: 'Potatoes, french fried, crinkle or regular cut, salt added in processing, frozen, oven-heated'
        }, {
                value: 'Potatoes, roasted, salt added in processing, frozen, unprepared'
        }, {
                value: 'Potatoes, raw, skin'
        }, {
                value: 'Potatoes, baked, flesh, without salt'
        }, {
                value: 'Potatoes, baked, skin, without salt'
        }, {
                value: 'Potatoes, boiled, cooked in skin, flesh, without salt'
        }, {
                value: 'Potatoes, boiled, cooked in skin, skin, without salt'
        }, {
                value: 'Potatoes, boiled, cooked without skin, flesh, without salt'
        }, {
                value: 'Potatoes, microwaved, cooked in skin, flesh, without salt'
        }, {
                value: 'Potatoes, microwaved, cooked in skin, skin, without salt'
        }, {
                value: 'Potatoes, hash brown, home-prepared'
        }, {
                value: 'Potatoes, mashed, home-prepared, whole milk and margarine added'
        }, {
                value: 'Potatoes, scalloped, home-prepared with butter'
        }, {
                value: 'Potatoes, au gratin, home-prepared from recipe using butter'
        }, {
                value: 'Potatoes, canned, solids and liquids'
        }, {
                value: 'Potatoes, canned, drained solids'
        }, {
                value: 'Potatoes, mashed, dehydrated, flakes without milk, dry form'
        }, {
                value: 'Potatoes, mashed, dehydrated, prepared from flakes without milk, whole milk and butter added'
        }, {
                value: 'Potatoes, mashed, dehydrated, granules without milk, dry form'
        }, {
                value: 'Potatoes, mashed, dehydrated, prepared from granules without milk, whole milk and butter added'
        }, {
                value: 'Potatoes, mashed, dehydrated, granules with milk, dry form'
        }, {
                value: 'Potatoes, mashed, dehydrated, prepared from granules with milk, water and margarine added'
        }, {
                value: 'Potatoes, au gratin, dry mix, unprepared'
        }, {
                value: 'Potatoes, au gratin, dry mix, prepared with water, whole milk and butter'
        }, {
                value: 'Potatoes, scalloped, dry mix, unprepared'
        }, {
                value: 'Potatoes, scalloped, dry mix, prepared with water, whole milk and butter'
        }, {
                value: 'Potatoes, hash brown, frozen, plain, unprepared'
        }, {
                value: 'Potatoes, hash brown, frozen, plain, prepared, pan fried in canola oil'
        }, {
                value: 'Potatoes, hash brown, frozen, with butter sauce, unprepared'
        }, {
                value: 'Potatoes, hash brown, frozen, with butter sauce, prepared'
        }, {
                value: 'Potatoes, french fried, shoestring, salt added in processing, frozen, as purchased'
        }, {
                value: 'Potatoes, french fried, shoestring, salt added in processing, frozen, oven-heated'
        }, {
                value: 'Potatoes, obrien, frozen, unprepared'
        }, {
                value: 'Potatoes, obrien, frozen, prepared'
        }, {
                value: 'Potato puffs, frozen, unprepared'
        }, {
                value: 'Potato puffs, frozen, oven-heated'
        }, {
                value: 'Potatoes, frozen, whole, unprepared'
        }, {
                value: 'Potatoes, frozen, whole, cooked, boiled, drained, without salt'
        }, {
                value: 'Potatoes, french fried, all types, salt added in processing, frozen, unprepared'
        }, {
                value: 'Potatoes, french fried, all types, salt added in processing, frozen, home-prepared, oven heated'
        }, {
                value: 'Potatoes, french fried, cottage-cut, salt not added in processing, frozen, as purchased'
        }, {
                value: 'Potatoes, french fried, cottage-cut, salt not added in processing, frozen, oven-heated'
        }, {
                value: 'Potatoes, frozen, french fried, par fried, extruded, unprepared'
        }, {
                value: 'Potatoes, frozen, french fried, par fried, extruded, prepared, heated in oven, without salt'
        }, {
                value: 'USDA Commodity, Potato wedges, frozen'
        }, {
                value: 'Potatoes, french fried, steak fries, salt added in processing, frozen, as purchased'
        }, {
                value: 'Potatoes, french fried, steak fries, salt added in processing, frozen, oven-heated'
        }, {
                value: 'Potato flour'
        }, {
                value: 'Potato salad, home-prepared'
        }, {
                value: 'Pumpkin flowers, raw'
        }, {
                value: 'Pumpkin flowers, cooked, boiled, drained, without salt'
        }, {
                value: 'Pumpkin leaves, raw'
        }, {
                value: 'Pumpkin leaves, cooked, boiled, drained, without salt'
        }, {
                value: 'Pumpkin, raw'
        }, {
                value: 'Pumpkin, cooked, boiled, drained, without salt'
        }, {
                value: 'Pumpkin, canned, without salt'
        }, {
                value: 'Pumpkin pie mix, canned'
        }, {
                value: 'Purslane, raw'
        }, {
                value: 'Purslane, cooked, boiled, drained, without salt'
        }, {
                value: 'Radishes, raw'
        }, {
                value: 'Radishes, oriental, raw'
        }, {
                value: 'Radishes, oriental, cooked, boiled, drained, without salt'
        }, {
                value: 'Radishes, oriental, dried'
        }, {
                value: 'Rutabagas, raw'
        }, {
                value: 'Rutabagas, cooked, boiled, drained, without salt'
        }, {
                value: 'Salsify, (vegetable oyster), raw'
        }, {
                value: 'Salsify, cooked, boiled, drained, without salt'
        }, {
                value: 'Sauerkraut, canned, solids and liquids'
        }, {
                value: 'Seaweed, agar, raw'
        }, {
                value: 'Seaweed, irishmoss, raw'
        }, {
                value: 'Seaweed, kelp, raw'
        }, {
                value: 'Seaweed, laver, raw'
        }, {
                value: 'Sesbania flower, raw'
        }, {
                value: 'Sesbania flower, cooked, steamed, without salt'
        }, {
                value: 'Soybeans, green, raw'
        }, {
                value: 'Soybeans, green, cooked, boiled, drained, without salt'
        }, {
                value: 'Soybeans, mature seeds, sprouted, raw'
        }, {
                value: 'Soybeans, mature seeds, sprouted, cooked, steamed'
        }, {
                value: 'Soybeans, mature seeds, sprouted, cooked, stir-fried'
        }, {
                value: 'Spinach, raw'
        }, {
                value: 'Spinach, cooked, boiled, drained, without salt'
        }, {
                value: 'Spinach, canned, regular pack, solids and liquids'
        }, {
                value: 'Spinach, canned, regular pack, drained solids'
        }, {
                value: 'Spinach, frozen, chopped or leaf, unprepared'
        }, {
                value: 'Spinach, frozen, chopped or leaf, cooked, boiled, drained, without salt'
        }, {
                value: 'Squash, summer, crookneck and straightneck, raw'
        }, {
                value: 'Squash, summer, crookneck and straightneck, cooked, boiled, drained, without salt'
        }, {
                value: 'Squash, summer, crookneck and straightneck, canned, drained, solid, without salt'
        }, {
                value: 'Squash, summer, crookneck and straightneck, frozen, unprepared'
        }, {
                value: 'Squash, summer, crookneck and straightneck, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Squash, summer, scallop, raw'
        }, {
                value: 'Squash, summer, scallop, cooked, boiled, drained, without salt'
        }, {
                value: 'Squash, summer, zucchini, includes skin, raw'
        }, {
                value: 'Squash, summer, zucchini, includes skin, cooked, boiled, drained, without salt'
        }, {
                value: 'Squash, summer, zucchini, includes skin, frozen, unprepared'
        }, {
                value: 'Squash, summer, zucchini, includes skin, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Squash, summer, zucchini, italian style, canned'
        }, {
                value: 'Squash, winter, acorn, raw'
        }, {
                value: 'Squash, winter, acorn, cooked, baked, without salt'
        }, {
                value: 'Squash, winter, acorn, cooked, boiled, mashed, without salt'
        }, {
                value: 'Squash, winter, butternut, raw'
        }, {
                value: 'Squash, winter, butternut, cooked, baked, without salt'
        }, {
                value: 'Squash, winter, butternut, frozen, unprepared'
        }, {
                value: 'Squash, winter, butternut, frozen, cooked, boiled, without salt'
        }, {
                value: 'Squash, winter, hubbard, raw'
        }, {
                value: 'Squash, winter, hubbard, baked, without salt'
        }, {
                value: 'Squash, winter, hubbard, cooked, boiled, mashed, without salt'
        }, {
                value: 'Squash, winter, spaghetti, raw'
        }, {
                value: 'Squash, winter, spaghetti, cooked, boiled, drained, or baked, without salt'
        }, {
                value: 'Succotash, (corn and limas), raw'
        }, {
                value: 'Succotash, (corn and limas), cooked, boiled, drained, without salt'
        }, {
                value: 'Succotash, (corn and limas), canned, with cream style corn'
        }, {
                value: 'Succotash, (corn and limas), canned, with whole kernel corn, solids and liquids'
        }, {
                value: 'Succotash, (corn and limas), frozen, unprepared'
        }, {
                value: 'Succotash, (corn and limas), frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Swamp cabbage, (skunk cabbage), raw'
        }, {
                value: 'Swamp cabbage (skunk  cabbage), cooked, boiled, drained, without salt'
        }, {
                value: 'Sweet potato leaves, raw'
        }, {
                value: 'Sweet potato leaves, cooked, steamed, without salt'
        }, {
                value: 'Sweet potato, raw, unprepared'
        }, {
                value: 'Sweet potato, cooked, baked in skin, flesh, without salt'
        }, {
                value: 'Sweet potato, cooked, boiled, without skin'
        }, {
                value: 'Sweet potato, canned, vacuum pack'
        }, {
                value: 'Sweet potato, canned, mashed'
        }, {
                value: 'Sweet potato, frozen, unprepared'
        }, {
                value: 'Sweet potato, frozen, cooked, baked, without salt'
        }, {
                value: 'Taro, raw'
        }, {
                value: 'Taro, cooked, without salt'
        }, {
                value: 'Taro leaves, raw'
        }, {
                value: 'Taro leaves, cooked, steamed, without salt'
        }, {
                value: 'Taro shoots, raw'
        }, {
                value: 'Taro shoots, cooked, without salt'
        }, {
                value: 'Taro, tahitian, raw'
        }, {
                value: 'Taro, tahitian, cooked, without salt'
        }, {
                value: 'Tomatoes, green, raw'
        }, {
                value: 'Tomatoes, red, ripe, raw, year round average'
        }, {
                value: 'Tomatoes, red, ripe, cooked'
        }, {
                value: 'Tomatoes, red, ripe, canned, packed in tomato juice'
        }, {
                value: 'Tomatoes, red, ripe, canned, stewed'
        }, {
                value: 'Tomatoes, red, ripe, canned, with green chilies'
        }, {
                value: 'Tomato juice, canned, with salt added'
        }, {
                value: 'Tomato products, canned, paste, without salt added'
        }, {
                value: 'Tomato products, canned, puree, without salt added'
        }, {
                value: 'Tomato powder'
        }, {
                value: 'Tomato products, canned, sauce'
        }, {
                value: 'Tomato products, canned, sauce, with mushrooms'
        }, {
                value: 'Tomato products, canned, sauce, with onions'
        }, {
                value: 'Tomato products, canned, sauce, with herbs and cheese'
        }, {
                value: 'Tomato products, canned, sauce, with onions, green peppers, and celery'
        }, {
                value: 'Tomato products, canned, sauce, with tomato tidbits'
        }, {
                value: 'Tree fern, cooked, without salt'
        }, {
                value: 'Turnips, raw'
        }, {
                value: 'Turnips, cooked, boiled, drained, without salt'
        }, {
                value: 'Turnips, frozen, unprepared'
        }, {
                value: 'Turnips, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Turnip greens, raw'
        }, {
                value: 'Turnip greens, cooked, boiled, drained, without salt'
        }, {
                value: 'Turnip greens, canned, solids and liquids'
        }, {
                value: 'Turnip greens, frozen, unprepared'
        }, {
                value: 'Turnip greens, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Turnip greens and turnips, frozen, unprepared'
        }, {
                value: 'Turnip greens and turnips, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Vegetable juice cocktail, canned'
        }, {
                value: 'Vegetables, mixed, canned, solids and liquids'
        }, {
                value: 'Vegetables, mixed, canned, drained solids'
        }, {
                value: 'Vegetables, mixed, frozen, unprepared'
        }, {
                value: 'Vegetables, mixed, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Vegetable juice cocktail, low sodium, canned'
        }, {
                value: 'Vinespinach, (basella), raw'
        }, {
                value: 'Waterchestnuts, chinese, (matai), raw'
        }, {
                value: 'Waterchestnuts, chinese, canned, solids and liquids'
        }, {
                value: 'Watercress, raw'
        }, {
                value: 'Waxgourd, (chinese preserving melon), raw'
        }, {
                value: 'Waxgourd, (chinese preserving melon), cooked, boiled, drained, without salt'
        }, {
                value: 'Winged beans, immature seeds, raw'
        }, {
                value: 'Winged beans, immature seeds, cooked, boiled, drained, without salt'
        }, {
                value: 'Winged bean leaves, raw'
        }, {
                value: 'Winged bean tuber, raw'
        }, {
                value: 'Yam, raw'
        }, {
                value: 'Yam, cooked, boiled, drained, or baked, without salt'
        }, {
                value: 'Yambean (jicama), raw'
        }, {
                value: 'Yambean (jicama), cooked, boiled, drained, without salt'
        }, {
                value: 'Beets, harvard, canned, solids and liquids'
        }, {
                value: 'Beets, pickled, canned, solids and liquids'
        }, {
                value: 'Borage, raw'
        }, {
                value: 'Borage, cooked, boiled, drained, without salt'
        }, {
                value: 'Chives, freeze-dried'
        }, {
                value: 'Dock, raw'
        }, {
                value: 'Dock, cooked, boiled, drained, without salt'
        }, {
                value: 'Eppaw, raw'
        }, {
                value: 'Drumstick pods, raw'
        }, {
                value: 'Drumstick pods, cooked, boiled, drained, without salt'
        }, {
                value: 'Kale, scotch, raw'
        }, {
                value: 'Kale, scotch, cooked, boiled, drained, without salt'
        }, {
                value: 'Leeks, (bulb and lower-leaf portion), freeze-dried'
        }, {
                value: 'Parsley, freeze-dried'
        }, {
                value: 'Beans, mung, mature seeds, sprouted, canned, drained solids'
        }, {
                value: 'Peppers, jalapeno, canned, solids and liquids'
        }, {
                value: 'Peppers, sweet, green, freeze-dried'
        }, {
                value: 'Radishes, white icicle, raw'
        }, {
                value: 'Shallots, freeze-dried'
        }, {
                value: 'Squash, summer, all varieties, raw'
        }, {
                value: 'Squash, summer, all varieties, cooked, boiled, drained, without salt'
        }, {
                value: 'Squash, winter, all varieties, raw'
        }, {
                value: 'Squash, winter, all varieties, cooked, baked, without salt'
        }, {
                value: 'Sweet potato, canned, syrup pack, solids and liquids'
        }, {
                value: 'Sweet potato, canned, syrup pack, drained solids'
        }, {
                value: 'Tomato products, canned, sauce, spanish style'
        }, {
                value: 'Beans, pinto, mature seeds, sprouted, raw'
        }, {
                value: 'Beans, pinto, mature seeds, sprouted, cooked, boiled, drained, without salt'
        }, {
                value: 'Carrot juice, canned'
        }, {
                value: 'Corn pudding, home prepared'
        }, {
                value: 'Potatoes, mashed, home-prepared, whole milk added'
        }, {
                value: 'Spinach souffle'
        }, {
                value: 'Sweet potato, cooked, candied, home-prepared'
        }, {
                value: 'Tomatoes, red, ripe, cooked, stewed'
        }, {
                value: 'Seaweed, agar, dried'
        }, {
                value: 'Seaweed, spirulina, raw'
        }, {
                value: 'Seaweed, spirulina, dried'
        }, {
                value: 'Seaweed, wakame, raw'
        }, {
                value: 'Peppers, hot chili, green, raw'
        }, {
                value: 'Potatoes, obrien, home-prepared'
        }, {
                value: 'Potato pancakes'
        }, {
                value: 'Potatoes, baked, flesh and skin, without salt'
        }, {
                value: 'Potatoes, microwaved, cooked in skin, flesh and skin, without salt'
        }, {
                value: 'Radish seeds, sprouted, raw'
        }, {
                value: 'Shallots, raw'
        }, {
                value: 'Carrot, dehydrated'
        }, {
                value: 'Tomatoes, crushed, canned'
        }, {
                value: 'Tomatoes, orange, raw'
        }, {
                value: 'Tomatoes, yellow, raw'
        }, {
                value: 'Arrowroot, raw'
        }, {
                value: 'Chrysanthemum leaves, raw'
        }, {
                value: 'Amaranth leaves, cooked, boiled, drained, with salt'
        }, {
                value: 'Arrowhead, cooked, boiled, drained, with salt'
        }, {
                value: 'Artichokes, (globe or french), cooked, boiled, drained, with salt'
        }, {
                value: 'Artichokes, (globe or french), frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Asparagus, cooked, boiled, drained, with salt'
        }, {
                value: 'Asparagus, canned, no salt added, solids and liquids'
        }, {
                value: 'Asparagus, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Balsam-pear (bitter gourd), leafy tips, cooked, boiled, drained, with salt'
        }, {
                value: 'Balsam-pear (bitter gourd), pods, cooked, boiled, drained, with salt'
        }, {
                value: 'Bamboo shoots, cooked, boiled, drained, with salt'
        }, {
                value: 'Beans, kidney, mature seeds, sprouted, cooked, boiled, drained, with salt'
        }, {
                value: 'Lima beans, immature seeds, cooked, boiled, drained, with salt'
        }, {
                value: 'Lima beans, immature seeds, canned, no salt added, solids and liquids'
        }, {
                value: 'Lima beans, immature seeds, frozen, baby, cooked, boiled, drained, with salt'
        }, {
                value: 'Lima beans, immature seeds, frozen, fordhook, cooked, boiled, drained, with salt'
        }, {
                value: 'Mung beans, mature seeds, sprouted, cooked, boiled, drained, with salt'
        }, {
                value: 'Beans, navy, mature seeds, sprouted, cooked, boiled, drained, with salt'
        }, {
                value: 'Beans, pinto, immature seeds, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Beans, pinto, mature seeds, sprouted, cooked, boiled, drained, with salt'
        }, {
                value: 'Beans, snap, yellow, raw'
        }, {
                value: 'Beans, snap, green, cooked, boiled, drained, with salt'
        }, {
                value: 'Beans, snap, yellow, cooked, boiled, drained, without salt'
        }, {
                value: 'Beans, snap, yellow, cooked, boiled, drained, with salt'
        }, {
                value: 'Beans, snap, green, canned, no salt added, solids and liquids'
        }, {
                value: 'Beans, snap, yellow, canned, regular pack, solids and liquids'
        }, {
                value: 'Beans, snap, yellow, canned, no salt added, solids and liquids'
        }, {
                value: 'Beans, snap, green, canned, no salt added, drained solids'
        }, {
                value: 'Beans, snap, yellow, frozen, all styles, unprepared'
        }, {
                value: 'Beans, snap, green, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Beans, snap, yellow, frozen, cooked, boiled, drained, without salt'
        }, {
                value: 'Beans, snap, yellow, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Beets, cooked, boiled. drained, with salt'
        }, {
                value: 'Beets, canned, no salt added, solids and liquids'
        }, {
                value: 'Beet greens, cooked, boiled, drained, with salt'
        }, {
                value: 'Borage, cooked, boiled, drained, with salt'
        }, {
                value: 'Broadbeans, immature seeds, cooked, boiled, drained, with salt'
        }, {
                value: 'Broccoli, leaves, raw'
        }, {
                value: 'Broccoli, flower clusters, raw'
        }, {
                value: 'Broccoli, stalks, raw'
        }, {
                value: 'Broccoli, cooked, boiled, drained, with salt'
        }, {
                value: 'Broccoli, frozen, chopped, cooked, boiled, drained, with salt'
        }, {
                value: 'Broccoli, frozen, spears, cooked, boiled, drained, with salt'
        }, {
                value: 'Brussels sprouts, cooked, boiled, drained, with salt'
        }, {
                value: 'Brussels sprouts, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Burdock root, cooked, boiled, drained, with salt'
        }, {
                value: 'Butterbur, cooked, boiled, drained, with salt'
        }, {
                value: 'Cabbage, common (danish, domestic, and pointed types), freshly harvest, raw'
        }, {
                value: 'Cabbage, common (danish, domestic, and pointed types), stored, raw'
        }, {
                value: 'Cabbage, common, cooked, boiled, drained, with salt'
        }, {
                value: 'Cabbage, red, cooked, boiled, drained, with salt'
        }, {
                value: 'Cabbage, savoy, cooked, boiled, drained, with salt'
        }, {
                value: 'Cabbage, chinese (pak-choi), cooked, boiled, drained, with salt'
        }, {
                value: 'Cabbage, chinese (pe-tsai), cooked, boiled, drained, with salt'
        }, {
                value: 'Cardoon, cooked, boiled, drained, with salt'
        }, {
                value: 'Carrots, cooked, boiled, drained, with salt'
        }, {
                value: 'Carrots, canned, no salt added, solids and liquids'
        }, {
                value: 'Carrots, canned, no salt added, drained solids'
        }, {
                value: 'Carrots, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Cauliflower, cooked, boiled, drained, with salt'
        }, {
                value: 'Cauliflower, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Celeriac, cooked, boiled, drained, with salt'
        }, {
                value: 'Celery, cooked, boiled, drained, with salt'
        }, {
                value: 'Chard, swiss, cooked, boiled, drained, with salt'
        }, {
                value: 'Chayote, fruit, cooked, boiled, drained, with salt'
        }, {
                value: 'Chrysanthemum, garland, cooked, boiled, drained, with salt'
        }, {
                value: 'Collards, cooked, boiled, drained, with salt'
        }, {
                value: 'Collards, frozen, chopped, cooked, boiled, drained, with salt'
        }, {
                value: 'Corn, sweet, yellow, cooked, boiled, drained, with salt'
        }, {
                value: 'Corn, sweet, yellow, canned, no salt added, solids and liquids'
        }, {
                value: 'Corn, sweet, yellow, canned, cream style, no salt added'
        }, {
                value: 'Corn, sweet, yellow, canned, vacuum pack, no salt added'
        }, {
                value: 'Corn, sweet, yellow, frozen, kernels, cut off cob, boiled, drained, with salt'
        }, {
                value: 'Corn, sweet, yellow, frozen, kernels on cob, cooked, boiled, drained, with salt'
        }, {
                value: 'Cowpeas (blackeyes), immature seeds, cooked, boiled, drained, with salt'
        }, {
                value: 'Cowpeas (blackeyes), immature seeds, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Cowpeas, young pods with seeds, cooked, boiled, drained, with salt'
        }, {
                value: 'Cowpeas, leafy tips, cooked, boiled, drained, with salt'
        }, {
                value: 'Cress, garden, cooked, boiled, drained, with salt'
        }, {
                value: 'Dandelion greens, cooked, boiled, drained, with salt'
        }, {
                value: 'Eggplant, cooked, boiled, drained, with salt'
        }, {
                value: 'Gourd, white-flowered (calabash), cooked, boiled, drained, with salt'
        }, {
                value: 'Gourd, dishcloth (towelgourd), cooked, boiled, drained, with salt'
        }, {
                value: 'Drumstick leaves, cooked, boiled, drained, with salt'
        }, {
                value: 'Drumstick pods, cooked, boiled, drained, with salt'
        }, {
                value: 'Hyacinth-beans, immature seeds, cooked, boiled, drained, with salt'
        }, {
                value: 'Jute, potherb, cooked, boiled, drained, with salt'
        }, {
                value: 'Kale, cooked, boiled, drained, with salt'
        }, {
                value: 'Kale, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Kale, scotch, cooked, boiled, drained, with salt'
        }, {
                value: 'Kohlrabi, cooked, boiled, drained, with salt'
        }, {
                value: 'Lambsquarters, cooked, boiled, drained, with salt'
        }, {
                value: 'Leeks, (bulb and lower leaf-portion), cooked, boiled, drained, with salt'
        }, {
                value: 'Lotus root, cooked, boiled, drained, with salt'
        }, {
                value: 'Mushrooms, white, cooked, boiled, drained, with salt'
        }, {
                value: 'Mushrooms, shiitake, cooked, with salt'
        }, {
                value: 'Mustard greens, cooked, boiled, drained, with salt'
        }, {
                value: 'Mustard greens, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Mustard spinach, (tendergreen), cooked, boiled, drained, with salt'
        }, {
                value: 'New zealand spinach, cooked, boiled, drained, with salt'
        }, {
                value: 'Okra, cooked, boiled, drained, with salt'
        }, {
                value: 'Okra, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Onions, cooked, boiled, drained, with salt'
        }, {
                value: 'Onions, frozen, chopped, cooked, boiled, drained, with salt'
        }, {
                value: 'Onions, frozen, whole, cooked, boiled, drained, with salt'
        }, {
                value: 'Parsnips, cooked, boiled, drained, with salt'
        }, {
                value: 'Peas, edible-podded, cooked, boiled, drained, with salt'
        }, {
                value: 'Peas, edible-podded, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Peas, green, cooked, boiled, drained, with salt'
        }, {
                value: 'Peas, green, canned, no salt added, solids and liquids'
        }, {
                value: 'Peas, green, canned, no salt added, drained solids'
        }, {
                value: 'Peas, green, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Peas, mature seeds, sprouted, cooked, boiled, drained, with salt'
        }, {
                value: 'Peas and carrots, canned, no salt added, solids and liquids'
        }, {
                value: 'Peas and carrots, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Peas and onions, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Peppers, hot chili, red, raw'
        }, {
                value: 'Peppers, hot chili, red, canned, excluding seeds, solids and liquids'
        }, {
                value: 'Peppers, sweet, red, raw'
        }, {
                value: 'Peppers, sweet, green, cooked, boiled, drained, with salt'
        }, {
                value: 'Peppers, sweet, red, cooked, boiled, drained, without salt'
        }, {
                value: 'Peppers, sweet, red, cooked, boiled, drained, with salt'
        }, {
                value: 'Peppers, sweet, green, frozen, chopped, cooked, boiled, drained, with salt'
        }, {
                value: 'Pigeonpeas, immature seeds, cooked, boiled, drained, with salt'
        }, {
                value: 'Pokeberry shoots, (poke), cooked, boiled, drained, with salt'
        }, {
                value: 'Potatoes, baked, flesh and skin, with salt'
        }, {
                value: 'Potatoes, baked, flesh, with salt'
        }, {
                value: 'Potatoes, baked, skin only, with salt'
        }, {
                value: 'Potatoes, boiled, cooked in skin, flesh, with salt'
        }, {
                value: 'Potatoes, boiled, cooked in skin, skin, with salt'
        }, {
                value: 'Potatoes, boiled, cooked without skin, flesh, with salt'
        }, {
                value: 'Potatoes, microwaved, cooked, in skin, flesh and skin, with salt'
        }, {
                value: 'Potatoes, microwaved, cooked in skin, flesh, with salt'
        }, {
                value: 'Potatoes, microwaved, cooked, in skin, skin with salt'
        }, {
                value: 'Potatoes, frozen, whole, cooked, boiled, drained, with salt'
        }, {
                value: 'Potatoes, frozen, french fried, par fried, cottage-cut, prepared, heated in oven, with salt'
        }, {
                value: 'Potatoes, french fried, all types, salt not added in processing, frozen, oven-heated'
        }, {
                value: 'Potatoes, french fried, all types, salt not added in processing, frozen, as purchased'
        }, {
                value: 'Potatoes, au gratin, home-prepared from recipe using margarine'
        }, {
                value: 'Potatoes, scalloped, home-prepared with margarine'
        }, {
                value: 'Pumpkin, cooked, boiled, drained, with salt'
        }, {
                value: 'Pumpkin, canned, with salt'
        }, {
                value: 'Pumpkin, flowers, cooked, boiled, drained, with salt'
        }, {
                value: 'Pumpkin leaves, cooked, boiled, drained, with salt'
        }, {
                value: 'Purslane, cooked, boiled, drained, with salt'
        }, {
                value: 'Radishes, oriental, cooked, boiled, drained, with salt'
        }, {
                value: 'Rutabagas, cooked, boiled, drained, with salt'
        }, {
                value: 'Salsify, cooked, boiled, drained, with salt'
        }, {
                value: 'Soybeans, green, cooked, boiled, drained, with salt'
        }, {
                value: 'Spinach, cooked, boiled, drained, with salt'
        }, {
                value: 'Spinach, canned, no salt added, solids and liquids'
        }, {
                value: 'Spinach, frozen, chopped or leaf, cooked, boiled, drained, with salt'
        }, {
                value: 'Squash, summer, all varieties, cooked, boiled, drained, with salt'
        }, {
                value: 'Squash, summer, crookneck and straightneck, cooked, boiled, drained, with salt'
        }, {
                value: 'Squash, summer, crookneck and straightneck, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Squash, summer, scallop, cooked, boiled, drained, with salt'
        }, {
                value: 'Squash, summer, zucchini, includes skin, cooked, boiled, drained, with salt'
        }, {
                value: 'Squash, summer, zucchini, includes skin, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Squash, winter, all varieties, cooked, baked, with salt'
        }, {
                value: 'Squash, winter, acorn, cooked, baked, with salt'
        }, {
                value: 'Squash, winter, acorn, cooked, boiled, mashed, with salt'
        }, {
                value: 'Squash, winter, butternut, cooked, baked, with salt'
        }, {
                value: 'Squash, winter, butternut, frozen, cooked, boiled, with salt'
        }, {
                value: 'Squash, winter, hubbard, baked, with salt'
        }, {
                value: 'Squash, winter, hubbard, cooked, boiled, mashed, with salt'
        }, {
                value: 'Squash, winter, spaghetti, cooked, boiled, drained, or baked, with salt'
        }, {
                value: 'Succotash, (corn and limas), cooked, boiled, drained, with salt'
        }, {
                value: 'Succotash, (corn and limas), frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Swamp cabbage (skunk cabbage), cooked, boiled, drained, with salt'
        }, {
                value: 'Sweet potato leaves, cooked, steamed, with salt'
        }, {
                value: 'Sweet potato, cooked, baked in skin, flesh, with salt'
        }, {
                value: 'Sweet potato, cooked, boiled, without skin, with salt'
        }, {
                value: 'Sweet potato, frozen, cooked, baked, with salt'
        }, {
                value: 'Taro, cooked, with salt'
        }, {
                value: 'Taro, leaves, cooked, steamed, with salt'
        }, {
                value: 'Taro, shoots, cooked, with salt'
        }, {
                value: 'Taro, tahitian, cooked, with salt'
        }, {
                value: 'Tomatoes, red, ripe, cooked, with salt'
        }, {
                value: 'Tomatoes, red, ripe, canned, packed in tomato juice, no salt added'
        }, {
                value: 'Tomato juice, canned, without salt added'
        }, {
                value: 'Tomato products, canned, puree, with salt added'
        }, {
                value: 'Turnips, cooked, boiled, drained, with salt'
        }, {
                value: 'Turnips, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Turnip greens, cooked, boiled, drained, with salt'
        }, {
                value: 'Turnip greens, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Turnip greens and turnips, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Vegetables, mixed, frozen, cooked, boiled, drained, with salt'
        }, {
                value: 'Waxgourd, (chinese preserving melon), cooked, boiled, drained, with salt'
        }, {
                value: 'Winged bean, immature seeds, cooked, boiled, drained, with salt'
        }, {
                value: 'Yam, cooked, boiled, drained, or baked, with salt'
        }, {
                value: 'Yambean (jicama), cooked, boiled, drained, with salt'
        }, {
                value: 'Yardlong bean, cooked, boiled, drained, with salt'
        }, {
                value: 'Corn, sweet, white, raw'
        }, {
                value: 'Corn, sweet, white, cooked, boiled, drained, without salt'
        }, {
                value: 'Corn, sweet, white, cooked, boiled, drained, with salt'
        }, {
                value: 'Corn, sweet, white, canned, whole kernel, regular pack, solids and liquids'
        }, {
                value: 'Corn, sweet, white, canned, whole kernel, no salt added, solids and liquids'
        }, {
                value: 'Corn, sweet, white, canned, whole kernel, drained solids'
        }, {
                value: 'Corn, sweet, white, canned, cream style, regular pack'
        }, {
                value: 'Corn, sweet, white, canned, cream style, no salt added'
        }, {
                value: 'Corn, sweet, white, canned, vacuum pack, regular pack'
        }, {
                value: 'Corn, sweet, white, canned, vacuum pack, no salt added'
        }, {
                value: 'Corn, sweet, white, frozen, kernels cut off cob, unprepared'
        }, {
                value: 'Corn, sweet, white, frozen, kernels cut off cob, boiled, drained, without salt'
        }, {
                value: 'Corn, sweet, white, frozen, kernels cut off cob, boiled, drained, with salt'
        }, {
                value: 'Corn, sweet, white, frozen, kernels on cob, unprepared'
        }, {
                value: 'Corn, sweet, white, frozen, kernels on cob, cooked, boiled, drained, without salt'
        }, {
                value: 'Corn, sweet, white, frozen, kernels on cob, cooked, boiled, drained, with salt'
        }, {
                value: 'Peppers, sweet, red, canned, solids and liquids'
        }, {
                value: 'Peppers, sweet, red, frozen, chopped, unprepared'
        }, {
                value: 'Peppers, sweet, red, frozen, chopped, boiled, drained, without salt'
        }, {
                value: 'Peppers, sweet, red, frozen, chopped, boiled, drained, with salt'
        }, {
                value: 'Peppers, sweet, red, sauteed'
        }, {
                value: 'Sesbania flower, cooked, steamed, with salt'
        }, {
                value: 'Soybeans, mature seeds, sprouted, cooked, steamed, with salt'
        }, {
                value: 'Soybeans, mature seeds, sprouted, cooked, stir-fried, with salt'
        }, {
                value: 'Dock, cooked, boiled, drained, with salt'
        }, {
                value: 'Lentils, sprouted, cooked, stir-fried, with salt'
        }, {
                value: 'Mountain yam, hawaii, cooked, steamed, with salt'
        }, {
                value: 'Tree fern, cooked, with salt'
        }, {
                value: 'Potatoes, mashed, prepared from granules, without milk, whole milk and margarine'
        }, {
                value: 'Potatoes, mashed, dehydrated, prepared from flakes without milk, whole milk and margarine added'
        }, {
                value: 'Peppers, sweet, red, freeze-dried'
        }, {
                value: 'Beans, snap, yellow, canned, regular pack, drained solids'
        }, {
                value: 'Beans, snap, yellow, canned, no salt added, drained solids'
        }, {
                value: 'Potatoes, mashed, home-prepared, whole milk and butter added'
        }, {
                value: 'Catsup'
        }, {
                value: 'Mushrooms, brown, italian, or crimini, exposed to ultraviolet light, raw'
        }, {
                value: 'Pickles, cucumber, dill or kosher dill'
        }, {
                value: 'Mushroom, white, exposed to ultraviolet light, raw'
        }, {
                value: 'Mushrooms, portabella, exposed to ultraviolet light, grilled'
        }, {
                value: 'Pickles, cucumber, sweet (includes bread and butter pickles)'
        }, {
                value: 'Pickles, cucumber, sour'
        }, {
                value: 'Pimento, canned'
        }, {
                value: 'Pickle relish, hot dog'
        }, {
                value: 'Pickle relish, sweet'
        }, {
                value: 'Pickles, cucumber, sour, low sodium'
        }, {
                value: 'Pickles, cucumber, dill, reduced sodium'
        }, {
                value: 'Pickles, cucumber, sweet, low sodium (includes bread and butter pickles)'
        }, {
                value: 'Catsup, low sodium'
        }, {
                value: 'Mushrooms, enoki, raw'
        }, {
                value: 'Peppers, sweet, yellow, raw'
        }, {
                value: 'Radicchio, raw'
        }, {
                value: 'Squash, zucchini, baby, raw'
        }, {
                value: 'Tomatillos, raw'
        }, {
                value: 'Tomatoes, sun-dried'
        }, {
                value: 'Tomatoes, sun-dried, packed in oil, drained'
        }, {
                value: 'Fennel, bulb, raw'
        }, {
                value: 'Pickle relish, hamburger'
        }, {
                value: 'Arugula, raw'
        }, {
                value: 'Carrots, baby, raw'
        }, {
                value: 'Hearts of palm, canned'
        }, {
                value: 'Peppers, hot chile, sun-dried'
        }, {
                value: 'Nopales, raw'
        }, {
                value: 'Nopales, cooked, without salt'
        }, {
                value: 'Cauliflower, green, raw'
        }, {
                value: 'Cauliflower, green, cooked, no salt added'
        }, {
                value: 'Cauliflower, green, cooked, with salt'
        }, {
                value: 'Broccoli, chinese, cooked'
        }, {
                value: 'Cabbage, napa, cooked'
        }, {
                value: 'Lemon grass (citronella), raw'
        }, {
                value: 'Beans, fava, in pod, raw'
        }, {
                value: 'Grape leaves, raw'
        }, {
                value: 'Grape leaves, canned'
        }, {
                value: 'Pepper, banana, raw'
        }, {
                value: 'Peppers, serrano, raw'
        }, {
                value: 'Peppers, ancho, dried'
        }, {
                value: 'Peppers, jalapeno, raw'
        }, {
                value: 'Peppers, chili, green, canned'
        }, {
                value: 'Peppers, hungarian, raw'
        }, {
                value: 'Peppers, pasilla, dried'
        }, {
                value: 'Pickles, chowchow, with cauliflower onion mustard, sweet'
        }, {
                value: 'Epazote, raw'
        }, {
                value: 'Fireweed, leaves, raw'
        }, {
                value: 'Malabar spinach, cooked'
        }, {
                value: 'Mushrooms, oyster, raw'
        }, {
                value: 'Fungi, Cloud ears, dried'
        }, {
                value: 'Mushrooms, straw, canned, drained solids'
        }, {
                value: 'Wasabi, root, raw'
        }, {
                value: 'Yautia (tannier), raw'
        }, {
                value: 'Mushrooms, white, microwaved'
        }, {
                value: 'Mushrooms, maitake, raw'
        }, {
                value: 'Broccoli, chinese, raw'
        }, {
                value: 'Fiddlehead ferns, raw'
        }, {
                value: 'Fiddlehead ferns, frozen, unprepared'
        }, {
                value: 'Mushrooms, portabella, exposed to ultraviolet light, raw'
        }, {
                value: 'Seeds, breadfruit seeds, raw'
        }, {
                value: 'Seeds, breadfruit seeds, boiled'
        }, {
                value: 'Seeds, breadnut tree seeds, raw'
        }, {
                value: 'Seeds, breadnut tree seeds, dried'
        }, {
                value: 'Seeds, chia seeds, dried'
        }, {
                value: 'Seeds, cottonseed flour, partially defatted (glandless)'
        }, {
                value: 'Seeds, cottonseed flour, low fat (glandless)'
        }, {
                value: 'Seeds, cottonseed meal, partially defatted (glandless)'
        }, {
                value: 'Seeds, hemp seed, hulled'
        }, {
                value: 'Seeds, lotus seeds, dried'
        }, {
                value: 'Seeds, pumpkin and squash seed kernels, dried'
        }, {
                value: 'Seeds, pumpkin and squash seed kernels, roasted, without salt'
        }, {
                value: 'Seeds, safflower seed kernels, dried'
        }, {
                value: 'Seeds, safflower seed meal, partially defatted'
        }, {
                value: 'Seeds, sesame seeds, whole, dried'
        }, {
                value: 'Seeds, sesame seeds, whole, roasted and toasted'
        }, {
                value: 'Seeds, sesame seed kernels, toasted, without salt added (decorticated)'
        }, {
                value: 'Seeds, sesame flour, partially defatted'
        }, {
                value: 'Seeds, sesame flour, low-fat'
        }, {
                value: 'Seeds, sesame meal, partially defatted'
        }, {
                value: 'Seeds, sunflower seed kernels, dried'
        }, {
                value: 'Seeds, sunflower seed kernels, dry roasted, without salt'
        }, {
                value: 'Seeds, sunflower seed kernels, oil roasted, without salt'
        }, {
                value: 'Seeds, sunflower seed kernels, toasted, without salt'
        }, {
                value: 'Seeds, sunflower seed butter, without salt'
        }, {
                value: 'Seeds, sunflower seed flour, partially defatted'
        }, {
                value: 'Nuts, acorns, raw'
        }, {
                value: 'Nuts, acorns, dried'
        }, {
                value: 'Nuts, acorn flour, full fat'
        }, {
                value: 'Nuts, almonds'
        }, {
                value: 'Nuts, almonds, blanched'
        }, {
                value: 'Nuts, almonds, dry roasted, without salt added'
        }, {
                value: 'Nuts, almonds, oil roasted, without salt added'
        }, {
                value: 'Nuts, almond paste'
        }, {
                value: 'Nuts, beechnuts, dried'
        }, {
                value: 'Nuts, brazilnuts, dried, unblanched'
        }, {
                value: 'Nuts, butternuts, dried'
        }, {
                value: 'Nuts, cashew nuts, dry roasted, without salt added'
        }, {
                value: 'Nuts, cashew nuts, oil roasted, without salt added'
        }, {
                value: 'Nuts, cashew nuts, raw'
        }, {
                value: 'Nuts, cashew butter, plain, without salt added'
        }, {
                value: 'Nuts, chestnuts, chinese, raw'
        }, {
                value: 'Nuts, chestnuts, chinese, dried'
        }, {
                value: 'Nuts, chestnuts, chinese, boiled and steamed'
        }, {
                value: 'Nuts, chestnuts, chinese, roasted'
        }, {
                value: 'Nuts, chestnuts, european, raw, unpeeled'
        }, {
                value: 'Nuts, chestnuts, european, raw, peeled'
        }, {
                value: 'Nuts, chestnuts, european, dried, unpeeled'
        }, {
                value: 'Nuts, chestnuts, european, dried, peeled'
        }, {
                value: 'Nuts, chestnuts, european, boiled and steamed'
        }, {
                value: 'Nuts, coconut meat, raw'
        }, {
                value: 'Nuts, coconut meat, dried (desiccated), not sweetened'
        }, {
                value: 'Nuts, coconut meat, dried (desiccated), sweetened, flaked, packaged'
        }, {
                value: 'Nuts, coconut meat, dried (desiccated), sweetened, flaked, canned'
        }, {
                value: 'Nuts, coconut meat, dried (desiccated), toasted'
        }, {
                value: 'Nuts, coconut cream, raw (liquid expressed from grated meat)'
        }, {
                value: 'Nuts, coconut cream, canned, sweetened'
        }, {
                value: 'Nuts, coconut milk, raw (liquid expressed from grated meat and water)'
        }, {
                value: 'Nuts, coconut milk, canned (liquid expressed from grated meat and water)'
        }, {
                value: 'Nuts, coconut water (liquid from coconuts)'
        }, {
                value: 'Nuts, hazelnuts or filberts'
        }, {
                value: 'Nuts, hazelnuts or filberts, blanched'
        }, {
                value: 'Nuts, hazelnuts or filberts, dry roasted, without salt added'
        }, {
                value: 'Nuts, ginkgo nuts, raw'
        }, {
                value: 'Nuts, ginkgo nuts, dried'
        }, {
                value: 'Nuts, ginkgo nuts, canned'
        }, {
                value: 'Nuts, hickorynuts, dried'
        }, {
                value: 'Nuts, macadamia nuts, raw'
        }, {
                value: 'Nuts, macadamia nuts, dry roasted, without salt added'
        }, {
                value: 'Nuts, mixed nuts, dry roasted, with peanuts, without salt added'
        }, {
                value: 'Nuts, mixed nuts, dry roasted, with peanuts, salt added, PLANTERS pistachio blend'
        }, {
                value: 'Nuts, mixed nuts, oil roasted, with peanuts, without salt added'
        }, {
                value: 'Nuts, mixed nuts, oil roasted, without peanuts, without salt added'
        }, {
                value: 'Nuts, formulated, wheat-based, unflavored, with salt added'
        }, {
                value: 'Nuts, mixed nuts, dry roasted, with peanuts, salt added, CHOSEN ROASTER'
        }, {
                value: 'Nuts, pecans'
        }, {
                value: 'Nuts, pecans, dry roasted, without salt added'
        }, {
                value: 'Nuts, pecans, oil roasted, without salt added'
        }, {
                value: 'Nuts, pilinuts, dried'
        }, {
                value: 'Nuts, pine nuts, dried'
        }, {
                value: 'Nuts, pine nuts, pinyon, dried'
        }, {
                value: 'Nuts, pistachio nuts, raw'
        }, {
                value: 'Nuts, pistachio nuts, dry roasted, without salt added'
        }, {
                value: 'Nuts, walnuts, black, dried'
        }, {
                value: 'Nuts, walnuts, english'
        }, {
                value: 'Nuts, walnuts, glazed'
        }, {
                value: 'Nuts, walnuts, dry roasted, with salt added'
        }, {
                value: 'Seeds, breadfruit seeds, roasted'
        }, {
                value: 'Seeds, cottonseed kernels, roasted (glandless)'
        }, {
                value: 'Seeds, pumpkin and squash seeds, whole, roasted, without salt'
        }, {
                value: 'Seeds, sesame butter, tahini, from roasted and toasted kernels (most common type)'
        }, {
                value: 'Nuts, chestnuts, european, roasted'
        }, {
                value: 'Seeds, sesame butter, paste'
        }, {
                value: 'Seeds, sesame flour, high-fat'
        }, {
                value: 'Seeds, sesame butter, tahini, from unroasted kernels (non-chemically removed seed coat)'
        }, {
                value: 'Seeds, watermelon seed kernels, dried'
        }, {
                value: 'Nuts, chestnuts, japanese, dried'
        }, {
                value: 'Nuts, coconut milk, frozen (liquid expressed from grated meat and water)'
        }, {
                value: 'Nuts, coconut meat, dried (desiccated), creamed'
        }, {
                value: 'Nuts, coconut meat, dried (desiccated), sweetened, shredded'
        }, {
                value: 'Seeds, sisymbrium sp. seeds, whole, dried'
        }, {
                value: 'Nuts, almond butter, plain, without salt added'
        }, {
                value: 'Seeds, sesame butter, tahini, from raw and stone ground kernels'
        }, {
                value: 'Nuts, formulated, wheat-based, all flavors except macadamia, without salt'
        }, {
                value: 'Seeds, sesame seed kernels, dried (decorticated)'
        }, {
                value: 'Nuts, chestnuts, japanese, raw'
        }, {
                value: 'Nuts, chestnuts, japanese, boiled and steamed'
        }, {
                value: 'Nuts, chestnuts, japanese, roasted'
        }, {
                value: 'Seeds, lotus seeds, raw'
        }, {
                value: 'Nuts, almonds, honey roasted, unblanched'
        }, {
                value: 'Seeds, flaxseed'
        }, {
                value: 'Seeds, pumpkin and squash seed kernels, roasted, with salt added'
        }, {
                value: 'Seeds, sesame seed kernels, toasted, with salt added (decorticated)'
        }, {
                value: 'Seeds, sunflower seed kernels from shell, dry roasted, with salt added'
        }, {
                value: 'Seeds, sunflower seed kernels, dry roasted, with salt added'
        }, {
                value: 'Seeds, sunflower seed kernels, oil roasted, with salt added'
        }, {
                value: 'Seeds, sunflower seed kernels, toasted, with salt added'
        }, {
                value: 'Seeds, sunflower seed butter, with salt added'
        }, {
                value: 'Nuts, almonds, dry roasted, with salt added'
        }, {
                value: 'Nuts, almonds, oil roasted, with salt added'
        }, {
                value: 'Nuts, almonds, oil roasted, with salt added, smoke flavor'
        }, {
                value: 'Nuts, cashew nuts, dry roasted, with salt added'
        }, {
                value: 'Nuts, cashew nuts, oil roasted, with salt added'
        }, {
                value: 'Nuts, cashew butter, plain, with salt added'
        }, {
                value: 'Nuts, macadamia nuts, dry roasted, with salt added'
        }, {
                value: 'Nuts, mixed nuts, dry roasted, with peanuts, with salt added'
        }, {
                value: 'Nuts, mixed nuts, oil roasted, with peanuts, with salt added'
        }, {
                value: 'Nuts, mixed nuts, oil roasted, without peanuts, with salt added'
        }, {
                value: 'Nuts, pecans, dry roasted, with salt added'
        }, {
                value: 'Nuts, pecans, oil roasted, with salt added'
        }, {
                value: 'Nuts, pistachio nuts, dry roasted, with salt added'
        }, {
                value: 'Seeds, pumpkin and squash seeds, whole, roasted, with salt added'
        }, {
                value: 'Nuts, almonds, oil roasted, lightly salted'
        }, {
                value: 'Nuts, almond butter, plain, with salt added'
        }, {
                value: 'Seeds, sesame butter, tahini, type of kernels unspecified'
        }, {
                value: 'Nuts, mixed nuts, oil roasted, with peanuts, lightly salted'
        }, {
                value: 'Nuts, mixed nuts, oil roasted, without peanuts, lightly salted'
        }, {
                value: 'Beef, grass-fed, strip steaks, lean only, raw'
        }, {
                value: 'Beef, carcass, separable lean and fat, choice, raw'
        }, {
                value: 'Beef, carcass, separable lean and fat, select, raw'
        }, {
                value: 'Beef, retail cuts, separable fat, raw'
        }, {
                value: 'Beef, retail cuts, separable fat, cooked'
        }, {
                value: 'Beef, brisket, whole, separable lean only, all grades, raw'
        }, {
                value: 'Beef, grass-fed, ground, raw'
        }, {
                value: 'Beef, brisket, flat half, separable lean and fat, trimmed to 1/8" fat, select, cooked, braised'
        }, {
                value: 'Beef, flank, steak, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, flank, steak, separable lean and fat, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, flank, steak, separable lean and fat, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, flank, steak, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, flank, steak, separable lean only, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, flank, steak, separable lean only, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, rib, eye, small end (ribs 10-12), separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, rib, eye, small end (ribs 10-12), separable lean and fat, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, rib, eye, small end (ribs 10-12), separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, rib, eye, small end (ribs 10-12), separable lean only, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, rib, shortribs, separable lean and fat, choice, raw'
        }, {
                value: 'Beef, rib, shortribs, separable lean and fat, choice, cooked, braised'
        }, {
                value: 'Beef, rib, shortribs, separable lean only, choice, raw'
        }, {
                value: 'Beef, rib, shortribs, separable lean only, choice, cooked, braised'
        }, {
                value: 'Beef, round, full cut, separable lean only, trimmed to 1/4" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, round, full cut, separable lean only, trimmed to 1/4" fat, select, cooked, broiled'
        }, {
                value: 'Beef, brisket, flat half, separable lean and fat, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'USDA Commodity, beef, canned'
        }, {
                value: 'Beef, shank crosscuts, separable lean only, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Beef, shank crosscuts, separable lean only, trimmed to 1/4" fat, choice, cooked, simmered'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean only, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, short loin, t-bone steak, bone-in, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, short loin, t-bone steak, bone-in, separable lean only, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, rib eye, small end (ribs 10-12), separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck, under blade pot roast, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, under blade pot roast or steak, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, under blade pot roast or steak, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, ground, patties, frozen, cooked, broiled'
        }, {
                value: 'Beef, variety meats and by-products, brain, raw'
        }, {
                value: 'Beef, variety meats and by-products, brain, cooked, pan-fried'
        }, {
                value: 'Beef, variety meats and by-products, brain, cooked, simmered'
        }, {
                value: 'Beef, variety meats and by-products, heart, raw'
        }, {
                value: 'Beef, variety meats and by-products, heart, cooked, simmered'
        }, {
                value: 'Beef, variety meats and by-products, kidneys, raw'
        }, {
                value: 'Beef, variety meats and by-products, kidneys, cooked, simmered'
        }, {
                value: 'Beef, variety meats and by-products, liver, raw'
        }, {
                value: 'Beef, variety meats and by-products, liver, cooked, braised'
        }, {
                value: 'Beef, variety meats and by-products, liver, cooked, pan-fried'
        }, {
                value: 'Beef, variety meats and by-products, lungs, raw'
        }, {
                value: 'Beef, variety meats and by-products, lungs, cooked, braised'
        }, {
                value: 'Beef, variety meats and by-products, mechanically separated beef, raw'
        }, {
                value: 'Beef, variety meats and by-products, pancreas, raw'
        }, {
                value: 'Beef, variety meats and by-products, pancreas, cooked, braised'
        }, {
                value: 'Beef, variety meats and by-products, spleen, raw'
        }, {
                value: 'Beef, variety meats and by-products, spleen, cooked, braised'
        }, {
                value: 'Beef, variety meats and by-products, suet, raw'
        }, {
                value: 'Beef, variety meats and by-products, thymus, raw'
        }, {
                value: 'Beef, variety meats and by-products, thymus, cooked, braised'
        }, {
                value: 'Beef, variety meats and by-products, tongue, raw'
        }, {
                value: 'Beef, variety meats and by-products, tongue, cooked, simmered'
        }, {
                value: 'Beef, variety meats and by-products, tripe, raw'
        }, {
                value: 'Beef, sandwich steaks, flaked, chopped, formed and thinly sliced, raw'
        }, {
                value: 'Beef, brisket, flat half, separable lean only, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, cured, breakfast strips, raw or unheated'
        }, {
                value: 'Beef, cured, breakfast strips, cooked'
        }, {
                value: 'Beef, cured, corned beef, brisket, raw'
        }, {
                value: 'Beef, cured, corned beef, brisket, cooked'
        }, {
                value: 'Beef, cured, corned beef, canned'
        }, {
                value: 'Beef, chuck, under blade pot roast or steak, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, cured, dried'
        }, {
                value: 'Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, cured, luncheon meat, jellied'
        }, {
                value: 'Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, cured, pastrami'
        }, {
                value: 'Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, cured, sausage, cooked, smoked'
        }, {
                value: 'Beef, cured, smoked, chopped beef'
        }, {
                value: 'Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 0" fat, all grades, cooked'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 0" fat, choice, cooked'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 0" fat, select, cooked'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean only, trimmed to 0" fat, all grades, cooked'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean only, trimmed to 0" fat, choice, cooked'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean only, trimmed to 0" fat, select, cooked'
        }, {
                value: 'Beef, brisket, whole, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, brisket, whole, separable lean only, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, brisket, flat half, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, brisket, flat half, separable lean only, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, brisket, point half, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, brisket, point half, separable lean only, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean and fat, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean only, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean only, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck, blade roast, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, under blade pot roast, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck, under blade pot roast, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck, blade roast, separable lean only, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, under blade pot roast, boneless, separable lean only, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck, under blade pot roast, boneless, separable lean only, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean only, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean only, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean only, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean and fat, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean and fat, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean and fat, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean and fat, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean and fat, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean only, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean only, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean only, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean only, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean only, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, round, bottom round roast, separable lean only, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round roast, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round roast, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round roast, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round roast, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round roast, boneless, separable lean only, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round roast, boneless, separable lean only, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, tip round, roast, separable lean and fat, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, round, tip round, roast, separable lean and fat, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, tip round, roast, separable lean and fat, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, tip round, roast, separable lean only, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, round, tip round, roast, separable lean only, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, tip round, roast, separable lean only, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, top round, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, round, top round, separable lean and fat, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, round, top round, separable lean and fat, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, round, top round, separable lean only, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, round, top round, separable lean only, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, loin, tenderloin steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, loin, tenderloin steak, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, loin, tenderloin steak, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, loin, tenderloin steak, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, loin, tenderloin steak, boneless, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, loin, tenderloin steak, boneless, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip off, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip off, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip off, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip off, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip off, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip off, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, top sirloin, steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, top sirloin, steak, separable lean and fat, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, top sirloin, steak, separable lean and fat, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, top sirloin, steak, separable lean only, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, top sirloin, steak, separable lean only, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, top sirloin, steak, separable lean only, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 0" fat, USDA choice, cooked, broiled'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 0" fat, USDA select, cooked, broiled'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean only,  trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean only, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean only, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean only, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean only, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, short loin, t-bone steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, short loin, t-bone steak, separable lean and fat, trimmed to 0" fat, USDA choice, cooked, broiled'
        }, {
                value: 'Beef, short loin, t-bone steak, separable lean and fat, trimmed to 0" fat, USDA select, cooked, broiled'
        }, {
                value: 'Beef, short loin, t-bone steak, bone-in, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, short loin, t-bone steak, bone-in, separable lean only, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, short loin, t-bone steak, separable lean only, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, short loin, t-bone steak, bone-in, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, short loin, t-bone steak, bone-in, separable lean only, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, short loin, t-bone steak, separable lean only, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, brisket, flat half, separable lean only, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, round, tip round, roast, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, tip round, roast, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, tip round, roast, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, rib, eye, small end (ribs 10- 12) separable lean only, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, round, top round steak, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, round, top round steak, boneless, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, round, top round steak, boneless, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, ground, 70% lean meat / 30% fat, crumbles, cooked, pan-browned'
        }, {
                value: 'Beef, ground, 70% lean meat / 30% fat, loaf, cooked, baked'
        }, {
                value: 'Beef, ground, 70% lean meat / 30% fat, patty cooked, pan-broiled'
        }, {
                value: 'Beef, ground, 70% lean meat / 30% fat, patty, cooked, broiled'
        }, {
                value: 'Beef, ground, 70% lean meat / 30% fat, raw'
        }, {
                value: 'Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, shoulder top blade steak, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, shoulder top blade steak, boneless, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, shoulder top blade steak, boneless, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, shoulder top blade steak, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, shoulder top blade steak, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, shoulder top blade steak, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, brisket, flat half, boneless separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, brisket, flat half, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, brisket, flat half, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, shoulder top blade steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, shoulder pot roast or steak, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, shoulder pot roast or steak, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, shoulder pot roast or steak, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, shoulder top blade steak, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, chuck eye roast, boneless, Americas Beef Roast, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck eye roast, boneless, Americas Beef Roast, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck eye roast, boneless, Americas Beef Roast, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8" fat, all grades, cooked'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8" fat, choice, cooked'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8" fat, select, cooked'
        }, {
                value: 'Beef, brisket, whole, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, brisket, whole, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, brisket, flat half, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, brisket, flat half, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, brisket, point half, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, brisket, point half, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean and fat, trimmed to 1/8" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean and fat, trimmed to 1/8" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck, blade roast, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, blade roast, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, blade roast, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, chuck, blade roast, separable lean and fat, trimmed to 1/8" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck, blade roast, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, chuck, blade roast, separable lean and fat, trimmed to 1/8" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck eye roast, boneless, Americas Beef Roast, separable lean only, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, chuck eye roast, boneless, Americas Beef Roast, separable lean only, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, chuck eye roast, boneless, Americas Beef Roast, separable lean only, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8" fat, select, cooked, broiled'
        }, {
                value: 'Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8" fat, prime, raw'
        }, {
                value: 'Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8" fat, prime, cooked, broiled'
        }, {
                value: 'Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8" fat, prime, cooked, roasted'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8" fat, select, cooked, broiled'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8" fat, prime, raw'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8" fat, prime, cooked, broiled'
        }, {
                value: 'Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8" fat, prime, cooked, roasted'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8" fat, select, cooked, broiled'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8" fat, prime, raw'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8" fat, prime, cooked, broiled'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8" fat, prime, cooked, roasted'
        }, {
                value: 'Beef, shoulder top blade steak, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, shoulder top blade steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, full cut, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, round, full cut, separable lean and fat, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, round, full cut, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, round, full cut, separable lean and fat, trimmed to 1/8" fat, select, cooked, broiled'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean and fat, trimmed to 1/8" fat, choice, cooked, braised'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean and fat, trimmed to 1/8" fat, select, cooked, braised'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean and fat, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round, roast, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, round, eye of round, roast, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round, roast, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, round, eye of round, roast, separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round, roast, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, round, eye of round, roast, separable lean and fat, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, tip round, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, round, tip round, roast, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, round, tip round, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, round, tip round, roast, separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, tip round, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, round, tip round, roast, separable lean and fat, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, shoulder top blade steak, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, top round, separable lean only, trimmed to 1/8" fat, choice, cooked, pan-fried'
        }, {
                value: 'Beef, round, top round, steak, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, round, top round, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, round, top round steak, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, round, top round, steak, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, round, top round, separable lean and fat, trimmed to 1/8" fat, choice, cooked, braised'
        }, {
                value: 'Beef, round, top round, steak, separable lean and fat, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, round, top round, separable lean and fat, trimmed to 1/8" fat, choice, cooked, pan-fried'
        }, {
                value: 'Beef, round, top round, steak, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, round, top round, separable lean and fat, trimmed to 1/8" fat, select, cooked, braised'
        }, {
                value: 'Beef, round, top round, steak, separable lean and fat, trimmed to 1/8" fat, select, cooked, broiled'
        }, {
                value: 'Beef, round, top round, separable lean and fat, trimmed to 1/8" fat, prime, raw'
        }, {
                value: 'Beef, round, top round, steak, separable lean and fat, trimmed to 1/8" fat, prime, cooked, broiled'
        }, {
                value: 'Beef, shoulder top blade steak, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, brisket, flat half, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, short loin, t-bone steak, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, short loin, t-bone steak, separable lean and fat, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, short loin, top loin, steak, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, loin, top loin, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, short loin, top loin, steak, separable lean and fat, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, loin, top loin, separable lean and fat, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, short loin, top loin, steak, separable lean and fat, trimmed to 1/8" fat, prime, raw'
        }, {
                value: 'Beef, short loin, top loin, separable lean and fat, trimmed to 1/8" fat, prime, cooked, broiled'
        }, {
                value: 'Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, tenderloin, roast, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, tenderloin, roast, separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8" fat, select, cooked, broiled'
        }, {
                value: 'Beef, tenderloin, roast, separable lean and fat, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, tenderloin, separable lean and fat, trimmed to 1/8" fat, prime, raw'
        }, {
                value: 'Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8" fat, prime, cooked, broiled'
        }, {
                value: 'Beef, tenderloin, roast, separable lean and fat, trimmed to 1/8" fat, prime, cooked, roasted'
        }, {
                value: 'Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8" fat, choice, cooked, pan-fried'
        }, {
                value: 'Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8" fat, select, cooked, broiled'
        }, {
                value: 'Beef, chuck, clod roast, separable lean only, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, chuck, clod roast, separable lean only, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, shoulder steak, boneless, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, shoulder steak, boneless, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, flank, steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, flank, steak, separable lean and fat, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, brisket, flat half, separable lean and fat, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, rib eye, small end (ribs 10-12), separable lean and fat, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, rib eye, small end (ribs 10-12), separable lean and fat, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, bottom sirloin, tri-tip roast, separable lean and fat, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, bottom sirloin, tri-tip roast, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, bottom sirloin, tri-tip roast, separable lean and fat, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, bottom sirloin, tri-tip roast, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, bottom sirloin, tri-tip roast, separable lean and fat, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, bottom sirloin, tri-tip roast, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, round, top round steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, chuck, mock tender steak, separable lean only, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, chuck, mock tender steak, separable lean only, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, chuck, top blade, separable lean only, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, chuck, top blade, separable lean only, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, round, top round steak, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, round, top round steak, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, flank, steak, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, flank, steak, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck eye roast, boneless, Americas Beef Roast, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck eye roast, boneless, Americas Beef Roast, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck eye roast, boneless, Americas Beef Roast, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, brisket, flat half, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, plate, inside skirt steak, separable lean only, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, plate, outside skirt steak, separable lean only, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, chuck, short ribs, boneless, separable lean only, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck, short ribs, boneless, separable lean only, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck, short ribs, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, brisket, flat half, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, loin, bottom sirloin butt, tri-tip roast, separable lean only, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Alcoholic beverage, beer, regular, all'
        }, {
                value: 'Alcoholic beverage, beer, regular, BUDWEISER'
        }, {
                value: 'Alcoholic beverage, beer, light, BUDWEISER SELECT'
        }, {
                value: 'Alcoholic beverage, beer, light'
        }, {
                value: 'Alcoholic beverage, beer, light, BUD LIGHT'
        }, {
                value: 'Alcoholic beverage, daiquiri, canned'
        }, {
                value: 'Alcoholic beverage, daiquiri, prepared-from-recipe'
        }, {
                value: 'Alcoholic beverage, beer, light, low carb'
        }, {
                value: 'Alcoholic beverage, pina colada, canned'
        }, {
                value: 'Beverages, almond milk, sweetened, vanilla flavor, ready-to-drink'
        }, {
                value: 'Alcoholic beverage, pina colada, prepared-from-recipe'
        }, {
                value: 'Alcoholic beverage, tequila sunrise, canned'
        }, {
                value: 'Beverages,  Energy drink, Citrus'
        }, {
                value: 'Beverages, MONSTER energy drink, low carb'
        }, {
                value: 'Beverages, Whiskey sour mix, powder'
        }, {
                value: 'Alcoholic beverage, whiskey sour, prepared with water, whiskey and powder mix'
        }, {
                value: 'Beverages, THE COCA-COLA COMPANY, NOS Zero, energy drink, sugar-free with guarana, fortified with vitamins B6 and B12'
        }, {
                value: 'Alcoholic beverage, whiskey sour, canned'
        }, {
                value: 'Beverages, Whiskey sour mix, bottled'
        }, {
                value: 'Alcoholic beverage, whiskey sour, prepared from item 14028'
        }, {
                value: 'Beverages, THE COCA-COLA COMPANY, NOS energy drink, Original, grape, loaded cherry, charged citrus, fortified with vitamins B6 and B12'
        }, {
                value: 'Beverages, water, bottled, yumberry, pomegranate with anti-oxidants, zero calories'
        }, {
                value: 'Beverages, ABBOTT, EAS whey protein powder'
        }, {
                value: 'Alcoholic beverage, creme de menthe, 72 proof'
        }, {
                value: 'Beverages, ABBOTT, EAS soy protein powder'
        }, {
                value: 'Beverages, CYTOSPORT, Muscle Milk, ready-to-drink'
        }, {
                value: 'Alcoholic beverage, distilled, all (gin, rum, vodka, whiskey) 80 proof'
        }, {
                value: 'Beverages, OCEAN SPRAY, Cran-Energy, Cranberry Energy Juice Drink'
        }, {
                value: 'Beverages, NESTLE, Boost plus, nutritional drink, ready-to-drink'
        }, {
                value: 'Beverages, SLIMFAST, Meal replacement,  High Protein Shake, Ready-To-Drink, 3-2-1 plan'
        }, {
                value: 'Beverages, UNILEVER, SLIMFAST, meal replacement, regular, ready-to-drink,  3-2-1 Plan'
        }, {
                value: 'Beverages, UNILEVER, SLIMFAST Shake Mix, powder, 3-2-1 Plan'
        }, {
                value: 'Beverages, FUZE, orange mango, fortified with vitamins A, C, E, B6'
        }, {
                value: 'Alcoholic beverage, distilled, gin, 90 proof'
        }, {
                value: 'Alcoholic beverage, distilled, rum, 80 proof'
        }, {
                value: 'Alcoholic beverage, distilled, vodka, 80 proof'
        }, {
                value: 'Alcoholic beverage, distilled, whiskey, 86 proof'
        }, {
                value: 'Beverages, almond milk, chocolate, ready-to-drink'
        }, {
                value: 'Beverages, UNILEVER, SLIMFAST Shake Mix, high protein, whey powder, 3-2-1 Plan,'
        }, {
                value: 'Beverages, Acai berry drink, fortified'
        }, {
                value: 'Alcoholic beverage, wine, dessert, sweet'
        }, {
                value: 'Beverages, Whey protein powder isolate'
        }, {
                value: 'Beverages, KELLOGGS, SPECIAL K Protein Shake'
        }, {
                value: 'Beverages, Energy Drink with carbonated water and high fructose corn syrup'
        }, {
                value: 'Beverages, Energy Drink, sugar free'
        }, {
                value: 'Beverages, ABBOTT, ENSURE, Nutritional Shake, Ready-to-Drink'
        }, {
                value: 'Beverages, chocolate powder, no sugar added'
        }, {
                value: 'Beverages, Orange juice, light, No pulp'
        }, {
                value: 'Beverages, The COCA-COLA company, Hi-C Flashin Fruit Punch'
        }, {
                value: 'Beverages, Protein powder whey based'
        }, {
                value: 'Beverages, Protein powder soy based'
        }, {
                value: 'Beverages, KELLOGGS SPECIAL K20 protein powder'
        }, {
                value: 'Beverages, ZEVIA, cola'
        }, {
                value: 'Beverages, ZEVIA, cola, caffeine free'
        }, {
                value: 'Beverages, GEROLSTEINER BRUNNEN GmbH & Co. KG,Gerolsteiner naturally sparkling mineral water,'
        }, {
                value: 'Beverages, ICELANDIC, Glacial Natural spring water'
        }, {
                value: 'Beverages, yellow green colored citrus soft drink with caffeine'
        }, {
                value: 'Beverages, rich chocolate, powder'
        }, {
                value: 'Beverages, GEROLSTEINER BRUNNEN GmbH & Co. KG (Gerolsteiner), naturally sparkling, mineral bottled water'
        }, {
                value: 'Beverages, chocolate malt, powder, prepared with fat free milk'
        }, {
                value: 'Alcoholic beverage, wine, table, all'
        }, {
                value: 'Beverages, V8 SPLASH Smoothies, Peach Mango'
        }, {
                value: 'Beverages, V8 SPLASH Smoothies, Strawberry Banana'
        }, {
                value: 'Beverages, V8 SPLASH Smoothies, Tropical Colada'
        }, {
                value: 'Beverages, Coconut water, ready-to-drink, unsweetened'
        }, {
                value: 'Beverages, almond milk, unsweetened, shelf stable'
        }, {
                value: 'Beverages, chocolate almond milk, unsweetened, shelf-stable, fortified with vitamin D2 and E'
        }, {
                value: 'Beverages, The COCA-COLA company, Glaceau Vitamin Water, Revive Fruit Punch, fortified'
        }, {
                value: 'Beverages, MINUTE MAID, Lemonada, Limeade'
        }, {
                value: 'Alcoholic beverage, wine, table, red'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Cabernet Sauvignon'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Cabernet Franc'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Pinot Noir'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Syrah'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Barbera'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Zinfandel'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Petite Sirah'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Claret'
        }, {
                value: 'Alcoholic beverage, wine, table, white'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Lemberger'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Sangiovese'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Carignane'
        }, {
                value: 'Alcoholic beverage, wine, table, white, Pinot Gris (Grigio)'
        }, {
                value: 'Alcoholic beverage, wine, table, white, Chenin Blanc'
        }, {
                value: 'Alcoholic beverage, wine, table, white, Fume Blanc'
        }, {
                value: 'Beverages, Mixed vegetable and fruit juice drink, with added nutrients'
        }, {
                value: 'Alcoholic beverage, wine, table, white, Muller Thurgau'
        }, {
                value: 'Beverages, carbonated, club soda'
        }, {
                value: 'Alcoholic beverage, wine, table, white, Gewurztraminer'
        }, {
                value: 'Alcoholic beverage, wine, table, white, late harvest, Gewurztraminer'
        }, {
                value: 'Alcoholic beverage, wine, table, white, Semillon'
        }, {
                value: 'Carbonated beverage, cream soda'
        }, {
                value: 'Alcoholic beverage, wine, table, white, Riesling'
        }, {
                value: 'Alcoholic beverage, wine, table, white, Sauvignon Blanc'
        }, {
                value: 'Alcoholic beverage, wine, table, white, late harvest'
        }, {
                value: 'Beverages, carbonated, ginger ale'
        }, {
                value: 'Beverages, NESTEA, tea, black, ready-to-drink, lemon'
        }, {
                value: 'Alcoholic beverage, wine, table, white, Pinot Blanc'
        }, {
                value: 'Alcoholic beverage, wine, table, white, Muscat'
        }, {
                value: 'Beverages, carbonated, grape soda'
        }, {
                value: 'Beverages, carbonated, low calorie, other than cola or pepper,  without caffeine'
        }, {
                value: 'Beverages, carbonated, lemon-lime soda, no caffeine'
        }, {
                value: 'Beverages, carbonated, SPRITE, lemon-lime, without caffeine'
        }, {
                value: 'Beverages, carbonated, low calorie, cola or pepper-type, with aspartame, without caffeine'
        }, {
                value: 'Beverages, carbonated, cola, without caffeine'
        }, {
                value: 'Beverages, carbonated, cola, regular'
        }, {
                value: 'Beverages, carbonated, reduced sugar, cola, contains caffeine and sweeteners'
        }, {
                value: 'Beverages, carbonated, orange'
        }, {
                value: 'Beverages, carbonated, low calorie, other than cola or pepper, with aspartame, contains caffeine'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Burgundy'
        }, {
                value: 'Beverages, carbonated, pepper-type, contains caffeine'
        }, {
                value: 'Beverages, Energy drink, RED BULL'
        }, {
                value: 'Beverages, carbonated, tonic water'
        }, {
                value: 'Beverages, Energy drink, RED BULL, sugar free, with added caffeine, niacin, pantothenic acid, vitamins B6 and B12'
        }, {
                value: 'Beverages, carbonated, root beer'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Gamay'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Mouvedre'
        }, {
                value: 'Alcoholic beverage, wine, table, white, Chardonnay'
        }, {
                value: 'Beverages, Kiwi Strawberry Juice Drink'
        }, {
                value: 'Beverages, Apple juice drink, light, fortified with vitamin C'
        }, {
                value: 'Beverages, chocolate drink, milk and soy based, ready to drink, fortified'
        }, {
                value: 'Beverages, chocolate malt powder, prepared with 1% milk, fortified'
        }, {
                value: 'Beverages, carbonated, limeade, high caffeine'
        }, {
                value: 'Beverages, carbonated, low calorie, cola or pepper-types, with sodium saccharin, contains caffeine'
        }, {
                value: 'Beverages, POWERADE, Zero, Mixed Berry'
        }, {
                value: 'Beverages, Carob-flavor beverage mix, powder'
        }, {
                value: 'Beverages, Carob-flavor beverage mix, powder, prepared with whole milk'
        }, {
                value: 'Beverages, coconut milk, sweetened, fortified with calcium, vitamins A, B12, D2'
        }, {
                value: 'Beverages, coffee, ready to drink, vanilla, light, milk based, sweetened'
        }, {
                value: 'Beverages, Lemonade fruit juice drink light, fortified with vitamin E and C'
        }, {
                value: 'Beverages, chocolate-flavor beverage mix, powder, prepared with whole milk'
        }, {
                value: 'Beverages, coffee, ready to drink, milk based, sweetened'
        }, {
                value: 'Beverages, coffee, brewed, breakfast blend'
        }, {
                value: 'Beverages, chocolate syrup'
        }, {
                value: 'Beverages, chocolate syrup, prepared with whole milk'
        }, {
                value: 'Beverages, coffee, ready to drink, iced, mocha, milk based'
        }, {
                value: 'Beverages, tea, Oolong, brewed'
        }, {
                value: 'Beverages, Clam and tomato juice, canned'
        }, {
                value: 'Beverages, tea, green, ready to drink, ginseng and honey, sweetened'
        }, {
                value: 'Beverages, The COCA-COLA company, Minute Maid, Lemonade'
        }, {
                value: 'Beverages, tea, green, ready-to-drink, diet'
        }, {
                value: 'Beverages, tea, green, ready-to-drink, citrus, diet, fortified with vitamin C'
        }, {
                value: 'Beverages, Cocoa mix, powder'
        }, {
                value: 'Beverages, Cocoa mix, powder, prepared with water'
        }, {
                value: 'Beverages, Cocoa mix, NESTLE, Hot Cocoa Mix Rich Chocolate With Marshmallows'
        }, {
                value: 'Beverages, Cocoa mix, no sugar added, powder'
        }, {
                value: 'Cocoa mix, NESTLE, Rich Chocolate Hot Cocoa Mix'
        }, {
                value: 'Beverages, tea, black, ready-to-drink, lemon, sweetened'
        }, {
                value: 'Beverages, coffee, brewed, prepared with tap water, decaffeinated'
        }, {
                value: 'Beverages, coffee, brewed, espresso, restaurant-prepared, decaffeinated'
        }, {
                value: 'Beverages, coffee, instant, regular, half the caffeine'
        }, {
                value: 'Beverages, coffee and cocoa, instant, decaffeinated, with whitener and low calorie sweetener'
        }, {
                value: 'Beverages, tea, green, ready-to-drink, sweetened'
        }, {
                value: 'Beverages, tea, ready-to-drink, lemon, diet'
        }, {
                value: 'Beverages, coffee, brewed, prepared with tap water'
        }, {
                value: 'Beverages, coffee, brewed, espresso, restaurant-prepared'
        }, {
                value: 'Beverages, tea, black, ready-to-drink, lemon, diet'
        }, {
                value: 'Beverages, coffee, instant, regular, powder'
        }, {
                value: 'Beverages, coffee, instant, regular, prepared with water'
        }, {
                value: 'Beverages, aloe vera juice drink, fortified with Vitamin C'
        }, {
                value: 'Beverages, OCEAN SPRAY, Cran Grape'
        }, {
                value: 'Beverages, coffee, instant, decaffeinated, powder'
        }, {
                value: 'Beverages, coffee, instant, decaffeinated, prepared with water'
        }, {
                value: 'Beverages, OCEAN SPRAY, Cranberry-Apple Juice Drink, bottled'
        }, {
                value: 'Beverages, OCEAN SPRAY, Diet Cranberry Juice'
        }, {
                value: 'Beverages, coffee, instant, with chicory'
        }, {
                value: 'Beverages, coffee, instant, chicory'
        }, {
                value: 'Beverages, coffee, instant, mocha, sweetened'
        }, {
                value: 'Beverages, OCEAN SPRAY, Light Cranberry and Raspberry Flavored Juice'
        }, {
                value: 'Beverages, OCEAN SPRAY, White Cranberry Strawberry Flavored Juice Drink'
        }, {
                value: 'Beverages, KRAFT, coffee, instant, French Vanilla Cafe'
        }, {
                value: 'Beverages, OCEAN SPRAY, Cran Raspberry Juice Drink'
        }, {
                value: 'Beverages, OCEAN SPRAY, Cran Lemonade'
        }, {
                value: 'Beverages, OCEAN SPRAY, Diet Cran Cherry'
        }, {
                value: 'Beverages, coffee substitute, cereal grain beverage, powder'
        }, {
                value: 'Beverages, coffee substitute, cereal grain beverage, prepared with water'
        }, {
                value: 'Beverages, cranberry-apple juice drink, bottled'
        }, {
                value: 'Alcoholic beverage, malt beer, hard lemonade'
        }, {
                value: 'Beverages, cranberry-apricot juice drink, bottled'
        }, {
                value: 'Beverages, cranberry-grape juice drink, bottled'
        }, {
                value: 'Cranberry juice cocktail, bottled'
        }, {
                value: 'Cranberry juice cocktail, bottled, low calorie, with calcium, saccharin and corn sweetener'
        }, {
                value: 'Beverages, Eggnog-flavor mix, powder, prepared with whole milk'
        }, {
                value: 'Beverages, tea, green, instant, decaffeinated, lemon, unsweetened, fortified with vitamin C'
        }, {
                value: 'Beverages, tea, black, ready to drink'
        }, {
                value: 'Alcoholic beverage, beer, light, higher alcohol'
        }, {
                value: 'Beverages, AMBER, hard cider'
        }, {
                value: 'Alcoholic beverages, beer, higher alcohol'
        }, {
                value: 'Beverages, Malt liquor beverage'
        }, {
                value: 'Alcoholic beverages, wine, rose'
        }, {
                value: 'Beverages, OCEAN SPRAY, Cran Pomegranate'
        }, {
                value: 'Beverages, OCEAN SPRAY, Cran Cherry'
        }, {
                value: 'Beverages, OCEAN SPRAY, Light Cranberry'
        }, {
                value: 'Beverages, OCEAN SPRAY, White Cranberry Peach'
        }, {
                value: 'Beverages, OCEAN SPRAY, Light Cranberry, Concord Grape'
        }, {
                value: 'Beverages, tea, green, brewed, decaffeinated'
        }, {
                value: 'Beverages, tea, green, ready to drink, unsweetened'
        }, {
                value: 'Beverages, citrus fruit juice drink, frozen concentrate'
        }, {
                value: 'Beverages, citrus fruit juice drink, frozen concentrate, prepared with water'
        }, {
                value: 'Beverages, fruit punch drink, without added nutrients, canned'
        }, {
                value: 'Beverages, Fruit punch drink, with added nutrients, canned'
        }, {
                value: 'Beverages, Fruit punch drink, frozen concentrate'
        }, {
                value: 'Beverages, Fruit punch drink, frozen concentrate, prepared with water'
        }, {
                value: 'Beverages, coffee, instant, vanilla, sweetened, decaffeinated, with non dairy creamer'
        }, {
                value: 'Beverages, Tropical Punch, ready-to-drink'
        }, {
                value: 'Beverages, grape drink, canned'
        }, {
                value: 'Beverages, tea, green, brewed, regular'
        }, {
                value: 'Beverages, tea, black, ready-to-drink, peach, diet'
        }, {
                value: 'Beverages, tea, black, ready to drink, decaffeinated, diet'
        }, {
                value: 'Beverages, tea, black, ready to drink, decaffeinated'
        }, {
                value: 'Beverages, grape juice drink, canned'
        }, {
                value: 'Beverages, Cranberry juice cocktail'
        }, {
                value: 'Beverages, OCEAN SPRAY, Ruby Red cranberry'
        }, {
                value: 'Beverages, MOTTS, Apple juice light, fortified with vitamin C'
        }, {
                value: 'Beverages, Lemonade, powder'
        }, {
                value: 'Lemonade, powder, prepared with water'
        }, {
                value: 'Beverages, SNAPPLE, tea, black and green, ready to drink, peach, diet'
        }, {
                value: 'Lemonade, frozen concentrate, white'
        }, {
                value: 'Lemonade, frozen concentrate, white, prepared with water'
        }, {
                value: 'Beverages, SNAPPLE, tea, black and green, ready to drink, lemon, diet'
        }, {
                value: 'Beverages, lemonade-flavor drink, powder'
        }, {
                value: 'Beverages, lemonade-flavor drink, powder, prepared with water'
        }, {
                value: 'Limeade, frozen concentrate, prepared with water'
        }, {
                value: 'Malt beverage, includes non-alcoholic beer'
        }, {
                value: 'Beverages, OVALTINE, Classic Malt powder'
        }, {
                value: 'Beverages, Malted drink mix, natural, with added nutrients, powder, prepared with whole milk'
        }, {
                value: 'Beverages, Malted drink mix, natural, powder, dairy based.'
        }, {
                value: 'Beverages, Malted drink mix, natural, powder, prepared with whole milk'
        }, {
                value: 'Beverages, OVALTINE, chocolate malt powder'
        }, {
                value: 'Beverages, Malted drink mix, chocolate, with added nutrients, powder, prepared with whole milk'
        }, {
                value: 'Beverages, malted drink mix, chocolate, powder'
        }, {
                value: 'Beverages, Malted drink mix, chocolate, powder, prepared with whole milk'
        }, {
                value: 'Beverages, orange drink, canned, with added vitamin C'
        }, {
                value: 'Beverages, orange and apricot juice drink, canned'
        }, {
                value: 'Beverages, pineapple and grapefruit juice drink, canned'
        }, {
                value: 'Beverages, pineapple and orange juice drink, canned'
        }, {
                value: 'Shake, fast food, vanilla'
        }, {
                value: 'Strawberry-flavor beverage mix, powder'
        }, {
                value: 'Beverages, Strawberry-flavor beverage mix, powder, prepared with whole milk'
        }, {
                value: 'Beverages, tea, black, brewed, prepared with tap water, decaffeinated'
        }, {
                value: 'Beverages, tea, instant, decaffeinated, unsweetened'
        }, {
                value: 'Beverages, tea, black, brewed, prepared with tap water'
        }, {
                value: 'Beverages, tea, instant, decaffeinated, lemon, diet'
        }, {
                value: 'Beverages, tea, instant, decaffeinated, lemon, sweetened'
        }, {
                value: 'Beverages, tea, instant, unsweetened, powder'
        }, {
                value: 'Beverages, tea, instant, unsweetened, prepared with water'
        }, {
                value: 'Beverages, tea, instant, lemon, unsweetened'
        }, {
                value: 'Beverages, tea, instant, lemon, sweetened, powder'
        }, {
                value: 'Beverages, tea, instant, lemon, sweetened, prepared with water'
        }, {
                value: 'Beverages, tea, instant, sweetened with sodium saccharin, lemon-flavored, powder'
        }, {
                value: 'Beverages, tea, instant, lemon, diet'
        }, {
                value: 'Beverages, tea, herb, other than chamomile, brewed'
        }, {
                value: 'Beverages, water, bottled, PERRIER'
        }, {
                value: 'Beverages, water, bottled, POLAND SPRING'
        }, {
                value: 'Beverages, cocoa mix, with aspartame, powder, prepared with water'
        }, {
                value: 'Beverages, carbonated, cola, fast-food cola'
        }, {
                value: 'Beverages, fruit punch juice drink, frozen concentrate'
        }, {
                value: 'Beverages, fruit punch juice drink, frozen concentrate, prepared with water'
        }, {
                value: 'Beverages, orange-flavor drink, breakfast type, powder'
        }, {
                value: 'Beverages, orange-flavor drink, breakfast type, powder, prepared with water'
        }, {
                value: 'Beverages, Orange-flavor drink, breakfast type, low calorie, powder'
        }, {
                value: 'Beverages, water, tap, drinking'
        }, {
                value: 'Beverages, water, tap, well'
        }, {
                value: 'Alcoholic beverage, liqueur, coffee, 53 proof'
        }, {
                value: 'Alcoholic beverage, liqueur, coffee with cream, 34 proof'
        }, {
                value: 'Beverages, carbonated, low calorie, cola or pepper-type, with aspartame, contains caffeine'
        }, {
                value: 'Beverages, coffee substitute, cereal grain beverage, powder, prepared with whole milk'
        }, {
                value: 'Beverages, Dairy drink mix, chocolate, reduced calorie, with low-calorie sweeteners, powder'
        }, {
                value: 'Beverages, dairy drink mix, chocolate, reduced calorie, with aspartame, powder, prepared with water and ice'
        }, {
                value: 'Beverages, Orange-flavor drink, breakfast type, with pulp, frozen concentrate. Not manufactured anymore.'
        }, {
                value: 'Beverages, Orange-flavor drink, breakfast type, with pulp, frozen concentrate, prepared with water'
        }, {
                value: 'Beverages, Orange drink, breakfast type, with juice and pulp, frozen concentrate'
        }, {
                value: 'Beverages, Orange drink, breakfast type, with juice and pulp, frozen concentrate, prepared with water'
        }, {
                value: 'Beverages, shake, fast food, strawberry'
        }, {
                value: 'Beverages, water, tap, municipal'
        }, {
                value: 'Cranberry juice cocktail, frozen concentrate'
        }, {
                value: 'Cranberry juice cocktail, frozen concentrate, prepared with water'
        }, {
                value: 'Beverages, water, bottled, non-carbonated, DANNON'
        }, {
                value: 'Beverages, water, bottled, non-carbonated, PEPSI, AQUAFINA'
        }, {
                value: 'Beverages, The COCA-COLA company, DASANI, water, bottled, non-carbonated'
        }, {
                value: 'Beverages, orange breakfast drink, ready-to-drink, with added nutrients'
        }, {
                value: 'Beverages, water, bottled, non-carbonated, CALISTOGA'
        }, {
                value: 'Beverages, water, bottled, non-carbonated, CRYSTAL GEYSER'
        }, {
                value: 'Water, bottled, non-carbonated, NAYA'
        }, {
                value: 'Beverages, water, bottled, non-carbonated, DANNON Fluoride To Go'
        }, {
                value: 'Beverages, drink mix, QUAKER OATS, GATORADE, orange flavor, powder'
        }, {
                value: 'Beverages, PEPSICO QUAKER, Gatorade, G performance O 2, ready-to-drink.'
        }, {
                value: 'Beverages, COCA-COLA, POWERADE, lemon-lime flavored, ready-to-drink'
        }, {
                value: 'Beverages, Propel Zero, fruit-flavored, non-carbonated'
        }, {
                value: 'Beverages, ARIZONA, tea, ready-to-drink, lemon'
        }, {
                value: 'Beverages, LIPTON BRISK, tea, black, ready-to-drink, lemon'
        }, {
                value: 'Whiskey sour mix, bottled, with added potassium and sodium'
        }, {
                value: 'Alcoholic beverage, whiskey sour'
        }, {
                value: 'Alcoholic beverage, distilled, all (gin, rum, vodka, whiskey) 94 proof'
        }, {
                value: 'Alcoholic beverage, distilled, all (gin, rum, vodka, whiskey) 100 proof'
        }, {
                value: 'Alcoholic beverage, liqueur, coffee, 63 proof'
        }, {
                value: 'Alcoholic beverage, wine, dessert, dry'
        }, {
                value: 'Carbonated beverage, low calorie, other than cola or pepper, with sodium saccharin, without caffeine'
        }, {
                value: 'Beverages, Cocoa mix, low calorie, powder, with added calcium, phosphorus, aspartame, without added sodium or vitamin A'
        }, {
                value: 'Beverages, fruit punch-flavor drink, powder, without added sodium, prepared with water'
        }, {
                value: 'Lemonade, frozen concentrate, pink'
        }, {
                value: 'Beverages, lemonade, frozen concentrate, pink, prepared with water'
        }, {
                value: 'Beverages, tea, black, brewed, prepared with distilled water'
        }, {
                value: 'Beverages, tea, herb, brewed, chamomile'
        }, {
                value: 'Beverages, tea, instant, lemon, with added ascorbic acid'
        }, {
                value: 'Alcoholic beverage, distilled, all (gin, rum, vodka, whiskey) 86 proof'
        }, {
                value: 'Alcoholic beverage, distilled, all (gin, rum, vodka, whiskey) 90 proof'
        }, {
                value: 'Carbonated beverage, chocolate-flavored soda'
        }, {
                value: 'Beverages, Wine, non-alcoholic'
        }, {
                value: 'Water, bottled, generic'
        }, {
                value: 'Beverages, chocolate-flavor beverage mix for milk, powder, with added nutrients'
        }, {
                value: 'Beverages, chocolate-flavor beverage mix for milk, powder, with added nutrients, prepared with whole milk'
        }, {
                value: 'Beverages, water, bottled, non-carbonated, EVIAN'
        }, {
                value: 'Beverages, Powerade Zero Ion4, calorie-free, assorted flavors'
        }, {
                value: 'Beverages, WENDYS, tea, ready-to-drink, unsweetened'
        }, {
                value: 'Alcoholic Beverage, wine, table, red, Merlot'
        }, {
                value: 'Water, non-carbonated, bottles, natural fruit flavors, sweetened with low calorie sweetener'
        }, {
                value: 'Beverages, Water with added vitamins and minerals, bottles, sweetened, assorted fruit flavors'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Diet Berry Blend'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Diet Fruit Medley'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Diet Strawberry Kiwi'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Diet Tropical Blend'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Berry Blend'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Fruit Medley'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Guava Passion Fruit'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Mango Peach'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Orange Pineapple'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Orchard Blend'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Strawberry Banana'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Strawberry Kiwi'
        }, {
                value: 'Beverages, V8 SPLASH Juice Drinks, Tropical Blend'
        }, {
                value: 'Beverages, V8 V-FUSION Juices, Peach Mango'
        }, {
                value: 'Beverages, V8 V-FUSION Juices, Strawberry Banana'
        }, {
                value: 'Beverages, V8 V-FUSION Juices, Tropical'
        }, {
                value: 'Beverages, V8 V- FUSION Juices, Acai Berry'
        }, {
                value: 'Beverages, Energy drink, AMP'
        }, {
                value: 'Beverages, Energy drink, FULL THROTTLE'
        }, {
                value: 'Beverages, Energy Drink, Monster, fortified with vitamins C, B2, B3, B6, B12'
        }, {
                value: 'Beverages, Energy drink, AMP, sugar free'
        }, {
                value: 'Beverages, Energy drink, ROCKSTAR'
        }, {
                value: 'Beverages, Energy drink, ROCKSTAR, sugar free'
        }, {
                value: 'Beverages, Horchata, dry mix, unprepared, variety of brands, all with morro seeds'
        }, {
                value: 'Beverages, Meal supplement drink, canned, peanut flavor'
        }, {
                value: 'Beverages, Vegetable and fruit juice drink, reduced calorie, with low-calorie sweetener, added vitamin C'
        }, {
                value: 'Beverages, milk beverage, reduced fat, flavored and sweetened, Ready-to-drink,  added calcium, vitamin A and vitamin D'
        }, {
                value: 'Beverages, vegetable and fruit juice blend, 100% juice, with added vitamins A, C, E'
        }, {
                value: 'Beverages, fruit juice drink, reduced sugar, with vitamin E added'
        }, {
                value: 'Water, with corn syrup and/or sugar and low calorie sweetener, fruit flavored'
        }, {
                value: 'Beverages, Horchata, as served in restaurant'
        }, {
                value: 'Beverages, rice milk, unsweetened'
        }, {
                value: 'Beverages, Energy drink, VAULT, citrus flavor'
        }, {
                value: 'Beverages, Energy drink, VAULT Zero, sugar-free, citrus flavor'
        }, {
                value: 'Beverages, PEPSICO QUAKER, Gatorade G2, low calorie'
        }, {
                value: 'Beverages, Fruit flavored drink, less than 3% juice, not fortified with vitamin C'
        }, {
                value: 'Beverages, Fruit flavored drink containing less than 3% fruit juice, with high vitamin C'
        }, {
                value: 'Beverages, Fruit flavored drink, reduced sugar, greater than 3% fruit juice, high vitamin C, added calcium'
        }, {
                value: 'Beverages, fruit juice drink, greater than 3% fruit juice, high vitamin C and added thiamin'
        }, {
                value: 'Beverages, tea, hibiscus, brewed'
        }, {
                value: 'Beverages, fruit juice drink, greater than 3% juice, high vitamin C'
        }, {
                value: 'Beverages, nutritional shake mix, high protein, powder'
        }, {
                value: 'Fish, anchovy, european, raw'
        }, {
                value: 'Fish, anchovy, european, canned in oil, drained solids'
        }, {
                value: 'Fish, bass, fresh water, mixed species, raw'
        }, {
                value: 'Fish, bass, striped, raw'
        }, {
                value: 'Fish, bluefish, raw'
        }, {
                value: 'Fish, burbot, raw'
        }, {
                value: 'Fish, butterfish, raw'
        }, {
                value: 'Fish, carp, raw'
        }, {
                value: 'Fish, carp, cooked, dry heat'
        }, {
                value: 'Fish, catfish, channel, wild, raw'
        }, {
                value: 'Fish, catfish, channel, cooked, breaded and fried'
        }, {
                value: 'Fish, caviar, black and red, granular'
        }, {
                value: 'Fish, cisco, raw'
        }, {
                value: 'Fish, cisco, smoked'
        }, {
                value: 'Fish, cod, Atlantic, raw'
        }, {
                value: 'Fish, cod, Atlantic, cooked, dry heat'
        }, {
                value: 'Fish, cod, Atlantic, canned, solids and liquid'
        }, {
                value: 'Fish, cod, Atlantic, dried and salted'
        }, {
                value: 'Fish, cod, Pacific, raw (may have been previously frozen)'
        }, {
                value: 'Fish, croaker, Atlantic, raw'
        }, {
                value: 'Fish, croaker, Atlantic, cooked, breaded and fried'
        }, {
                value: 'Fish, cusk, raw'
        }, {
                value: 'Fish, mahimahi, raw'
        }, {
                value: 'Fish, drum, freshwater, raw'
        }, {
                value: 'Fish, eel, mixed species, raw'
        }, {
                value: 'Fish, eel, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, fish sticks, frozen, prepared'
        }, {
                value: 'Fish, flatfish (flounder and sole species), raw'
        }, {
                value: 'Fish, flatfish (flounder and sole species), cooked, dry heat'
        }, {
                value: 'Fish, gefiltefish, commercial, sweet recipe'
        }, {
                value: 'Fish, grouper, mixed species, raw'
        }, {
                value: 'Fish, grouper, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, haddock, raw'
        }, {
                value: 'Fish, haddock, cooked, dry heat'
        }, {
                value: 'Fish, haddock, smoked'
        }, {
                value: 'Fish, halibut, Atlantic and Pacific, raw'
        }, {
                value: 'Fish, halibut, Atlantic and Pacific, cooked, dry heat'
        }, {
                value: 'Fish, halibut, Greenland, raw'
        }, {
                value: 'Fish, herring, Atlantic, raw'
        }, {
                value: 'Fish, herring, Atlantic, cooked, dry heat'
        }, {
                value: 'Fish, herring, Atlantic, pickled'
        }, {
                value: 'Fish, herring, Atlantic, kippered'
        }, {
                value: 'Fish, herring, Pacific, raw'
        }, {
                value: 'Fish, ling, raw'
        }, {
                value: 'Fish, lingcod, raw'
        }, {
                value: 'Fish, mackerel, Atlantic, raw'
        }, {
                value: 'Fish, mackerel, Atlantic, cooked, dry heat'
        }, {
                value: 'Fish, mackerel, jack, canned, drained solids'
        }, {
                value: 'Fish, mackerel, king, raw'
        }, {
                value: 'Fish, mackerel, Pacific and jack, mixed species, raw'
        }, {
                value: 'Fish, mackerel, spanish, raw'
        }, {
                value: 'Fish, mackerel, spanish, cooked, dry heat'
        }, {
                value: 'Fish, milkfish, raw'
        }, {
                value: 'Fish, monkfish, raw'
        }, {
                value: 'Fish, mullet, striped, raw'
        }, {
                value: 'Fish, mullet, striped, cooked, dry heat'
        }, {
                value: 'Fish, ocean perch, Atlantic, raw'
        }, {
                value: 'Fish, ocean perch, Atlantic, cooked, dry heat'
        }, {
                value: 'Fish, pout, ocean, raw'
        }, {
                value: 'Fish, perch, mixed species, raw'
        }, {
                value: 'Fish, perch, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, pike, northern, raw'
        }, {
                value: 'Fish, pike, northern, cooked, dry heat'
        }, {
                value: 'Fish, pike, walleye, raw'
        }, {
                value: 'Fish, pollock, Atlantic, raw'
        }, {
                value: 'Fish, pollock, Alaska, raw (may have been previously frozen)'
        }, {
                value: 'Fish, pollock, Alaska, cooked, dry heat (may have been previously frozen)'
        }, {
                value: 'Fish, pompano, florida, raw'
        }, {
                value: 'Fish, pompano, florida, cooked, dry heat'
        }, {
                value: 'Fish, rockfish, Pacific, mixed species, raw'
        }, {
                value: 'Fish, rockfish, Pacific, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, roe, mixed species, raw'
        }, {
                value: 'Fish, roughy, orange, raw'
        }, {
                value: 'Fish, sablefish, raw'
        }, {
                value: 'Fish, sablefish, smoked'
        }, {
                value: 'Fish, salmon, Atlantic, wild, raw'
        }, {
                value: 'Fish, salmon, chinook, smoked'
        }, {
                value: 'Fish, salmon, chinook, raw'
        }, {
                value: 'Fish, salmon, chum, raw'
        }, {
                value: 'Fish, salmon, chum, canned, drained solids with bone'
        }, {
                value: 'Fish, salmon, coho, wild, raw'
        }, {
                value: 'Fish, salmon, coho, wild, cooked, moist heat'
        }, {
                value: 'Fish, salmon, pink, raw'
        }, {
                value: 'Fish, salmon, pink, canned, total can contents'
        }, {
                value: 'Fish, salmon, sockeye, raw'
        }, {
                value: 'Fish, salmon, sockeye, cooked, dry heat'
        }, {
                value: 'Fish, salmon, sockeye, canned, drained solids'
        }, {
                value: 'Fish, sardine, Atlantic, canned in oil, drained solids with bone'
        }, {
                value: 'Fish, sardine, Pacific, canned in tomato sauce, drained solids with bone'
        }, {
                value: 'Fish, scup, raw'
        }, {
                value: 'Fish, sea bass, mixed species, raw'
        }, {
                value: 'Fish, sea bass, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, seatrout, mixed species, raw'
        }, {
                value: 'Fish, shad, american, raw'
        }, {
                value: 'Fish, shark, mixed species, raw'
        }, {
                value: 'Fish, shark, mixed species, cooked, batter-dipped and fried'
        }, {
                value: 'Fish, sheepshead, raw'
        }, {
                value: 'Fish, sheepshead, cooked, dry heat'
        }, {
                value: 'Fish, smelt, rainbow, raw'
        }, {
                value: 'Fish, smelt, rainbow, cooked, dry heat'
        }, {
                value: 'Fish, snapper, mixed species, raw'
        }, {
                value: 'Fish, snapper, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, spot, raw'
        }, {
                value: 'Fish, sturgeon, mixed species, raw'
        }, {
                value: 'Fish, sturgeon, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, sturgeon, mixed species, smoked'
        }, {
                value: 'Fish, sucker, white, raw'
        }, {
                value: 'Fish, sunfish, pumpkin seed, raw'
        }, {
                value: 'Fish, surimi'
        }, {
                value: 'Fish, swordfish, raw'
        }, {
                value: 'Fish, swordfish, cooked, dry heat'
        }, {
                value: 'Fish, tilefish, raw'
        }, {
                value: 'Fish, tilefish, cooked, dry heat'
        }, {
                value: 'Fish, trout, mixed species, raw'
        }, {
                value: 'Fish, trout, rainbow, wild, raw'
        }, {
                value: 'Fish, trout, rainbow, wild, cooked, dry heat'
        }, {
                value: 'Fish, tuna, fresh, bluefin, raw'
        }, {
                value: 'Fish, tuna, fresh, bluefin, cooked, dry heat'
        }, {
                value: 'Fish, tuna, light, canned in oil, drained solids'
        }, {
                value: 'Fish, tuna, light, canned in water, drained solids'
        }, {
                value: 'Fish, tuna, fresh, skipjack, raw'
        }, {
                value: 'Fish, tuna, white, canned in oil, drained solids'
        }, {
                value: 'Fish, tuna, white, canned in water, drained solids'
        }, {
                value: 'Fish, tuna, fresh, yellowfin, raw'
        }, {
                value: 'Fish, tuna salad'
        }, {
                value: 'Fish, turbot, european, raw'
        }, {
                value: 'Fish, whitefish, mixed species, raw'
        }, {
                value: 'Fish, whitefish, mixed species, smoked'
        }, {
                value: 'Fish, whiting, mixed species, raw'
        }, {
                value: 'Fish, whiting, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, wolffish, Atlantic, raw'
        }, {
                value: 'Fish, yellowtail, mixed species, raw'
        }, {
                value: 'Crustaceans, crab, alaska king, raw'
        }, {
                value: 'Crustaceans, crab, alaska king, cooked, moist heat'
        }, {
                value: 'Crustaceans, crab, alaska king, imitation, made from surimi'
        }, {
                value: 'Crustaceans, crab, blue, raw'
        }, {
                value: 'Crustaceans, crab, blue, cooked, moist heat'
        }, {
                value: 'Crustaceans, crab, blue, canned'
        }, {
                value: 'Crustaceans, crab, blue, crab cakes, home recipe'
        }, {
                value: 'Crustaceans, crab, dungeness, raw'
        }, {
                value: 'Crustaceans, crab, queen, raw'
        }, {
                value: 'Crustaceans, crayfish, mixed species, wild, raw'
        }, {
                value: 'Crustaceans, crayfish, mixed species, wild, cooked, moist heat'
        }, {
                value: 'Crustaceans, lobster, northern, raw'
        }, {
                value: 'Crustaceans, lobster, northern, cooked, moist heat'
        }, {
                value: 'Crustaceans, shrimp, mixed species, raw (may have been previously frozen)'
        }, {
                value: 'Crustaceans, shrimp, mixed species, cooked, breaded and fried'
        }, {
                value: 'Crustaceans, shrimp, mixed species, cooked, moist heat (may have been previously frozen)'
        }, {
                value: 'Crustaceans, shrimp, mixed species, canned'
        }, {
                value: 'Crustaceans, shrimp, mixed species, imitation, made from surimi'
        }, {
                value: 'Crustaceans, spiny lobster, mixed species, raw'
        }, {
                value: 'Mollusks, abalone, mixed species, raw'
        }, {
                value: 'Mollusks, abalone, mixed species, cooked, fried'
        }, {
                value: 'Mollusks, clam, mixed species, raw'
        }, {
                value: 'Mollusks, clam, mixed species, cooked, breaded and fried'
        }, {
                value: 'Mollusks, clam, mixed species, cooked, moist heat'
        }, {
                value: 'Mollusks, clam, mixed species, canned, drained solids'
        }, {
                value: 'Mollusks, clam, mixed species, canned, liquid'
        }, {
                value: 'Mollusks, cuttlefish, mixed species, raw'
        }, {
                value: 'Mollusks, mussel, blue, raw'
        }, {
                value: 'Mollusks, mussel, blue, cooked, moist heat'
        }, {
                value: 'Mollusks, octopus, common, raw'
        }, {
                value: 'Mollusks, oyster, eastern, wild, raw'
        }, {
                value: 'Mollusks, oyster, eastern, cooked, breaded and fried'
        }, {
                value: 'Mollusks, oyster, eastern, wild, cooked, moist heat'
        }, {
                value: 'Mollusks, oyster, eastern, canned'
        }, {
                value: 'Mollusks, oyster, Pacific, raw'
        }, {
                value: 'Mollusks, scallop, mixed species, raw'
        }, {
                value: 'Mollusks, scallop, mixed species, cooked, breaded and fried'
        }, {
                value: 'Mollusks, scallop, mixed species, imitation, made from surimi'
        }, {
                value: 'Mollusks, squid, mixed species, raw'
        }, {
                value: 'Mollusks, squid, mixed species, cooked, fried'
        }, {
                value: 'Mollusks, whelk, unspecified, raw'
        }, {
                value: 'Mollusks, whelk, unspecified, cooked, moist heat'
        }, {
                value: 'Fish, salmon, chinook, smoked, (lox), regular'
        }, {
                value: 'Fish, salmon, chum, canned, without salt, drained solids with bone'
        }, {
                value: 'Fish, salmon, pink, canned, without salt, solids with bone and liquid'
        }, {
                value: 'Fish, salmon, sockeye, canned, without salt, drained solids with bone'
        }, {
                value: 'Fish, tuna, light, canned in oil, without salt, drained solids'
        }, {
                value: 'Fish, tuna, light, canned in water, without salt, drained solids'
        }, {
                value: 'Fish, tuna, white, canned in oil, without salt, drained solids'
        }, {
                value: 'Fish, tuna, white, canned in water, without salt, drained solids'
        }, {
                value: 'Fish, bass, freshwater, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, bass, striped, cooked, dry heat'
        }, {
                value: 'Fish, bluefish, cooked, dry heat'
        }, {
                value: 'Fish, burbot, cooked, dry heat'
        }, {
                value: 'Fish, butterfish, cooked, dry heat'
        }, {
                value: 'Fish, cod, Pacific, cooked, dry heat (may have been previously frozen)'
        }, {
                value: 'Fish, cusk, cooked, dry heat'
        }, {
                value: 'Fish, mahimahi, cooked, dry heat'
        }, {
                value: 'Fish, drum, freshwater, cooked, dry heat'
        }, {
                value: 'Fish, halibut, greenland, cooked, dry heat'
        }, {
                value: 'Fish, herring, Pacific, cooked, dry heat'
        }, {
                value: 'Fish, ling, cooked, dry heat'
        }, {
                value: 'Fish, lingcod, cooked, dry heat'
        }, {
                value: 'Fish, mackerel, king, cooked, dry heat'
        }, {
                value: 'Fish, mackerel, Pacific and jack, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, milkfish, cooked, dry heat'
        }, {
                value: 'Fish, monkfish, cooked, dry heat'
        }, {
                value: 'Fish, pike, walleye, cooked, dry heat'
        }, {
                value: 'Fish, pollock, Atlantic, cooked, dry heat'
        }, {
                value: 'Fish, pout, ocean, cooked, dry heat'
        }, {
                value: 'Fish, roe, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, sablefish, cooked, dry heat'
        }, {
                value: 'Fish, salmon, Atlantic, wild, cooked, dry heat'
        }, {
                value: 'Fish, salmon, chinook, cooked, dry heat'
        }, {
                value: 'Fish, salmon, chum, cooked, dry heat'
        }, {
                value: 'Fish, salmon, pink, cooked, dry heat'
        }, {
                value: 'Fish, scup, cooked, dry heat'
        }, {
                value: 'Fish, seatrout, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, shad, american, cooked, dry heat'
        }, {
                value: 'Fish, spot, cooked, dry heat'
        }, {
                value: 'Fish, sucker, white, cooked, dry heat'
        }, {
                value: 'Fish, sunfish, pumpkin seed, cooked, dry heat'
        }, {
                value: 'Fish, trout, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, tuna, skipjack, fresh, cooked, dry heat'
        }, {
                value: 'Fish, tuna, yellowfin, fresh, cooked, dry heat'
        }, {
                value: 'Fish, turbot, european, cooked, dry heat'
        }, {
                value: 'Fish, whitefish, mixed species, cooked, dry heat'
        }, {
                value: 'Fish, wolffish, Atlantic, cooked, dry heat'
        }, {
                value: 'Fish, yellowtail, mixed species, cooked, dry heat'
        }, {
                value: 'Crustaceans, crab, dungeness, cooked, moist heat'
        }, {
                value: 'Crustaceans, crab, queen, cooked, moist heat'
        }, {
                value: 'Crustaceans, spiny lobster, mixed species, cooked, moist heat'
        }, {
                value: 'Mollusks, cuttlefish, mixed species, cooked, moist heat'
        }, {
                value: 'Mollusks, octopus, common, cooked, moist heat'
        }, {
                value: 'Mollusks, oyster, Pacific, cooked, moist heat'
        }, {
                value: 'Fish, roughy, orange, cooked, dry heat'
        }, {
                value: 'Fish, catfish, channel, wild, cooked, dry heat'
        }, {
                value: 'Fish, catfish, channel, farmed, raw'
        }, {
                value: 'Fish, catfish, channel, farmed, cooked, dry heat'
        }, {
                value: 'Fish, salmon, Atlantic, farmed, raw'
        }, {
                value: 'Fish, salmon, Atlantic, farmed, cooked, dry heat'
        }, {
                value: 'Fish, salmon, coho, farmed, raw'
        }, {
                value: 'Fish, salmon, coho, farmed, cooked, dry heat'
        }, {
                value: 'Fish, trout, rainbow, farmed, raw'
        }, {
                value: 'Fish, trout, rainbow, farmed, cooked, dry heat'
        }, {
                value: 'Crustaceans, crayfish, mixed species, farmed, raw'
        }, {
                value: 'Crustaceans, crayfish, mixed species, farmed, cooked, moist heat'
        }, {
                value: 'Mollusks, oyster, eastern, wild, cooked, dry heat'
        }, {
                value: 'Mollusks, oyster, eastern, farmed, raw'
        }, {
                value: 'Mollusks, oyster, eastern, farmed, cooked, dry heat'
        }, {
                value: 'Fish, salmon, coho, wild, cooked, dry heat'
        }, {
                value: 'Mollusks, conch, baked or broiled'
        }, {
                value: 'USDA Commodity, salmon nuggets, breaded, frozen, heated'
        }, {
                value: 'USDA Commodity, salmon nuggets, cooked as purchased, unheated'
        }, {
                value: 'Salmon, sockeye, canned, total can contents'
        }, {
                value: 'Fish, salmon, pink, canned, drained solids'
        }, {
                value: 'Fish, tilapia, raw'
        }, {
                value: 'Fish, tilapia, cooked, dry heat'
        }, {
                value: 'Salmon, sockeye, canned, drained solids, without skin and bones'
        }, {
                value: 'Fish, Salmon, pink, canned, drained solids, without skin and bones'
        }, {
                value: 'Fish, pollock, Alaska, raw (not previously frozen)'
        }, {
                value: 'Fish, pollock, Alaska, cooked (not previously frozen)'
        }, {
                value: 'Fish, cod, Pacific, raw (not previously frozen)'
        }, {
                value: 'Fish, cod, Pacific, cooked (not previously frozen)'
        }, {
                value: 'Crustaceans, shrimp, raw (not previously frozen)'
        }, {
                value: 'Crustaceans, shrimp, cooked (not previously frozen)'
        }, {
                value: 'Fish, trout, brook, raw, New York State'
        }, {
                value: 'Beans, adzuki, mature seeds, raw'
        }, {
                value: 'Beans, adzuki, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, adzuki, mature seeds, canned, sweetened'
        }, {
                value: 'Yokan, prepared from adzuki beans and sugar'
        }, {
                value: 'Beans, baked, home prepared'
        }, {
                value: 'Beans, baked, canned, plain or vegetarian'
        }, {
                value: 'Beans, baked, canned, with beef'
        }, {
                value: 'Beans, baked, canned, with franks'
        }, {
                value: 'Beans, baked, canned, with pork'
        }, {
                value: 'Beans, baked, canned, with pork and sweet sauce'
        }, {
                value: 'Beans, baked, canned, with pork and tomato sauce'
        }, {
                value: 'Beans, black, mature seeds, raw'
        }, {
                value: 'Beans, black, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, black turtle, mature seeds, raw'
        }, {
                value: 'Beans, black turtle, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, black turtle, mature seeds, canned'
        }, {
                value: 'Beans, cranberry (roman), mature seeds, raw'
        }, {
                value: 'Beans, cranberry (roman), mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, cranberry (roman), mature seeds, canned'
        }, {
                value: 'Beans, french, mature seeds, raw'
        }, {
                value: 'Beans, french, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, great northern, mature seeds, raw'
        }, {
                value: 'Beans, great northern, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, great northern, mature seeds, canned'
        }, {
                value: 'Beans, kidney, all types, mature seeds, raw'
        }, {
                value: 'Beans, kidney, all types, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, kidney, all types, mature seeds, canned'
        }, {
                value: 'Beans, kidney, california red, mature seeds, raw'
        }, {
                value: 'Beans, kidney, california red, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, kidney, red, mature seeds, raw'
        }, {
                value: 'Beans, kidney, red, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, kidney, red, mature seeds, canned, solids and liquids'
        }, {
                value: 'Beans, kidney, royal red, mature seeds, raw'
        }, {
                value: 'Beans, kidney, royal red, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, navy, mature seeds, raw'
        }, {
                value: 'Beans, navy, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, navy, mature seeds, canned'
        }, {
                value: 'Beans, pink, mature seeds, raw'
        }, {
                value: 'Beans, pink, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, pinto, mature seeds, raw'
        }, {
                value: 'Beans, pinto, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, pinto, mature seeds, canned, solids and liquids'
        }, {
                value: 'Beans, small white, mature seeds, raw'
        }, {
                value: 'Beans, small white, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, yellow, mature seeds, raw'
        }, {
                value: 'Beans, yellow, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, white, mature seeds, raw'
        }, {
                value: 'Beans, white, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Beans, white, mature seeds, canned'
        }, {
                value: 'Broadbeans (fava beans), mature seeds, raw'
        }, {
                value: 'Broadbeans (fava beans), mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Broadbeans (fava beans), mature seeds, canned'
        }, {
                value: 'Carob flour'
        }, {
                value: 'Chickpeas (garbanzo beans, bengal gram), mature seeds, raw'
        }, {
                value: 'Chickpeas (garbanzo beans, bengal gram), mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Chickpeas (garbanzo beans, bengal gram), mature seeds, canned, solids and liquids'
        }, {
                value: 'Chili with beans, canned'
        }, {
                value: 'Cowpeas, catjang, mature seeds, raw'
        }, {
                value: 'Cowpeas, catjang, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Cowpeas, common (blackeyes, crowder, southern), mature seeds, raw'
        }, {
                value: 'Cowpeas, common (blackeyes, crowder, southern), mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Cowpeas, common (blackeyes, crowder, southern), mature seeds, canned, plain'
        }, {
                value: 'Cowpeas, common (blackeyes, crowder, southern), mature seeds, canned with pork'
        }, {
                value: 'Hyacinth beans, mature seeds, raw'
        }, {
                value: 'Hyacinth beans, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Lentils, raw'
        }, {
                value: 'Lentils, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Lima beans, large, mature seeds, raw'
        }, {
                value: 'Lima beans, large, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Lima beans, large, mature seeds, canned'
        }, {
                value: 'Lima beans, thin seeded (baby), mature seeds, raw'
        }, {
                value: 'Lima beans, thin seeded (baby), mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Lupins, mature seeds, raw'
        }, {
                value: 'Lupins, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Mothbeans, mature seeds, raw'
        }, {
                value: 'Mothbeans, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Mung beans, mature seeds, raw'
        }, {
                value: 'Mung beans, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Noodles, chinese, cellophane or long rice (mung beans), dehydrated'
        }, {
                value: 'Mungo beans, mature seeds, raw'
        }, {
                value: 'Mungo beans, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Peas, green, split, mature seeds, raw'
        }, {
                value: 'Peas, split, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Peanuts, all types, raw'
        }, {
                value: 'Peanuts, all types, cooked, boiled, with salt'
        }, {
                value: 'Peanuts, all types, oil-roasted, with salt'
        }, {
                value: 'Peanuts, all types, dry-roasted, with salt'
        }, {
                value: 'Peanuts, spanish, raw'
        }, {
                value: 'Peanuts, spanish, oil-roasted, with salt'
        }, {
                value: 'Peanuts, valencia, raw'
        }, {
                value: 'Peanuts, valencia, oil-roasted, with salt'
        }, {
                value: 'Peanuts, virginia, raw'
        }, {
                value: 'Peanuts, virginia, oil-roasted, with salt'
        }, {
                value: 'Peanut butter, chunk style, with salt'
        }, {
                value: 'Peanut butter, smooth style, with salt'
        }, {
                value: 'Peanut flour, defatted'
        }, {
                value: 'Peanut flour, low fat'
        }, {
                value: 'Pigeon peas (red gram), mature seeds, raw'
        }, {
                value: 'Pigeon peas (red gram), mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Refried beans, canned, traditional style (includes USDA commodity)'
        }, {
                value: 'Bacon, meatless'
        }, {
                value: 'Meat extender'
        }, {
                value: 'Sausage, meatless'
        }, {
                value: 'Soybeans, mature seeds, raw'
        }, {
                value: 'Soybeans, mature cooked, boiled, without salt'
        }, {
                value: 'Soybeans, mature seeds, roasted, salted'
        }, {
                value: 'Soybeans, mature seeds, dry roasted'
        }, {
                value: 'Miso'
        }, {
                value: 'Y'
        }, {
                value: 'Tempeh'
        }, {
                value: 'Soy flour, full-fat, raw'
        }, {
                value: 'Soy flour, full-fat, roasted'
        }, {
                value: 'Soy flour, defatted'
        }, {
                value: 'Soy flour, low-fat'
        }, {
                value: 'Soy meal, defatted, raw'
        }, {
                value: 'Soymilk, original and vanilla, unfortified'
        }, {
                value: 'Soy protein concentrate, produced by alcohol extraction'
        }, {
                value: 'Soy protein isolate'
        }, {
                value: 'Soy sauce made from soy and wheat (shoyu)'
        }, {
                value: 'Soy sauce made from soy (tamari)'
        }, {
                value: 'Soy sauce made from hydrolyzed vegetable protein'
        }, {
                value: 'Tofu, firm, prepared with calcium sulfate and magnesium chloride (nigari)'
        }, {
                value: 'Tofu, soft, prepared with calcium sulfate and magnesium chloride (nigari)'
        }, {
                value: 'Tofu, dried-frozen (koyadofu)'
        }, {
                value: 'Tofu, fried'
        }, {
                value: '^^^.07'
        }, {
                value: 'Tofu, salted and fermented (fuyu)'
        }, {
                value: 'Yardlong beans, mature seeds, raw'
        }, {
                value: 'Yardlong beans, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Winged beans, mature seeds, raw'
        }, {
                value: 'Winged beans, mature seeds, cooked, boiled, without salt'
        }, {
                value: 'Hummus, home prepared'
        }, {
                value: 'Falafel, home-prepared'
        }, {
                value: 'Soymilk, original and vanilla, with added calcium, vitamins A and D'
        }, {
                value: 'Lentils, pink or red, raw'
        }, {
                value: 'Beans, kidney, red, mature seeds, canned, drained solids'
        }, {
                value: 'Beans, pinto, canned, drained solids'
        }, {
                value: 'Veggie burgers or soyburgers, unprepared'
        }, {
                value: 'Peanut spread, reduced sugar'
        }, {
                value: 'Peanut butter, smooth, reduced fat'
        }, {
                value: 'Peanut butter, smooth, vitamin and mineral fortified'
        }, {
                value: 'Peanut butter, chunky, vitamin and mineral fortified'
        }, {
                value: 'Chickpea flour (besan)'
        }, {
                value: 'Hummus, commercial'
        }, {
                value: 'Tofu, extra firm, prepared with nigari'
        }, {
                value: 'Tofu, hard, prepared with nigari'
        }, {
                value: 'MORI-NU, Tofu, silken, soft'
        }, {
                value: 'MORI-NU, Tofu, silken, firm'
        }, {
                value: 'MORI-NU, Tofu, silken, extra firm'
        }, {
                value: 'MORI-NU, Tofu, silken, lite firm'
        }, {
                value: 'MORI-NU, Tofu, silken, lite extra firm'
        }, {
                value: 'Soymilk, chocolate, unfortified'
        }, {
                value: 'USDA Commodity, Peanut Butter, smooth'
        }, {
                value: 'Soymilk, chocolate, with added calcium, vitamins A and D'
        }, {
                value: 'Refried beans, canned, vegetarian'
        }, {
                value: 'Refried beans, canned, fat-free'
        }, {
                value: 'Frijoles rojos volteados (Refried beans, red, canned)'
        }, {
                value: 'Tempeh, cooked'
        }, {
                value: 'Campbells Brown Sugar And Bacon Flavored Baked Beans'
        }, {
                value: 'Campbells Pork and Beans'
        }, {
                value: 'PACE, Traditional Refried Beans'
        }, {
                value: 'PACE, Salsa Refried Beans'
        }, {
                value: 'PACE, Spicy Jalapeno Refried Beans'
        }, {
                value: 'Vitasoy USA, Nasoya Lite Firm Tofu'
        }, {
                value: 'Vitasoy USA, Organic Nasoya Super Firm Cubed Tofu'
        }, {
                value: 'Vitasoy USA, Organic Nasoya Extra Firm Tofu'
        }, {
                value: 'Vitasoy USA, Organic Nasoya Firm Tofu'
        }, {
                value: 'Vitasoy USA, Organic Nasoya Silken Tofu'
        }, {
                value: 'Vitasoy USA, Vitasoy Organic Creamy Original Soymilk'
        }, {
                value: 'Vitasoy USA, Vitasoy Organic Classic Original Soymilk'
        }, {
                value: 'Vitasoy USA, Vitasoy Light Vanilla Soymilk'
        }, {
                value: 'Soymilk (all flavors), unsweetened, with added calcium, vitamins A and D'
        }, {
                value: 'Soymilk (All flavors), enhanced'
        }, {
                value: 'Soymilk, original and vanilla, light, with added calcium, vitamins A and D'
        }, {
                value: 'Soymilk, chocolate and other flavors, light, with added calcium, vitamins A and D'
        }, {
                value: 'Soymilk, original and vanilla, light, unsweetened, with added calcium, vitamins A and D'
        }, {
                value: 'Soymilk (All flavors), lowfat, with added calcium, vitamins A and D'
        }, {
                value: 'Soymilk (all flavors), nonfat, with added calcium, vitamins A and D'
        }, {
                value: 'Soymilk, chocolate, nonfat, with added calcium, vitamins A and D'
        }, {
                value: 'SILK Plain, soymilk'
        }, {
                value: 'SILK Vanilla, soymilk'
        }, {
                value: 'SILK Chocolate, soymilk'
        }, {
                value: 'SILK Light Plain, soymilk'
        }, {
                value: 'SILK Light Vanilla, soymilk'
        }, {
                value: 'SILK Light Chocolate, soymilk'
        }, {
                value: 'SILK Plus Omega-3 DHA, soymilk'
        }, {
                value: 'SILK Plus for Bone Health, soymilk'
        }, {
                value: 'SILK Plus Fiber, soymilk'
        }, {
                value: 'SILK Unsweetened, soymilk'
        }, {
                value: 'SILK Very Vanilla, soymilk'
        }, {
                value: 'SILK Nog, soymilk'
        }, {
                value: 'SILK Chai, soymilk'
        }, {
                value: 'SILK Mocha, soymilk'
        }, {
                value: 'SILK Coffee, soymilk'
        }, {
                value: 'SILK Vanilla soy yogurt (family size)'
        }, {
                value: 'SILK Vanilla soy yogurt (single serving size)'
        }, {
                value: 'SILK Plain soy yogurt'
        }, {
                value: 'SILK Strawberry soy yogurt'
        }, {
                value: 'SILK Raspberry soy yogurt'
        }, {
                value: 'SILK Peach soy yogurt'
        }, {
                value: 'SILK Black Cherry soy yogurt'
        }, {
                value: 'SILK Blueberry soy yogurt'
        }, {
                value: 'SILK Key Lime soy yogurt'
        }, {
                value: 'SILK Banana-Strawberry soy yogurt'
        }, {
                value: 'SILK Original Creamer'
        }, {
                value: 'SILK French Vanilla Creamer'
        }, {
                value: 'SILK Hazelnut Creamer'
        }, {
                value: 'Vitasoy USA Organic Nasoya, Soft Tofu'
        }, {
                value: 'Vitasoy USA Nasoya, Lite Silken Tofu'
        }, {
                value: 'Vitasoy USA Organic Nasoya, Tofu Plus Extra Firm'
        }, {
                value: 'Vitasoy USA Organic Nasoya, Tofu Plus Firm'
        }, {
                value: 'Vitasoy USA Organic Nasoya Sprouted, Tofu Plus Super Firm'
        }, {
                value: 'Vitasoy USA Azumaya, Extra Firm Tofu'
        }, {
                value: 'Vitasoy USA Azumaya, Firm Tofu'
        }, {
                value: 'Vitasoy USA Azumaya, Silken Tofu'
        }, {
                value: 'HOUSE FOODS Premium Soft Tofu'
        }, {
                value: 'HOUSE FOODS Premium Firm Tofu'
        }, {
                value: 'Beans, adzuki, mature seed, cooked, boiled, with salt'
        }, {
                value: 'Beans, black, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, black, mature seeds, canned, low sodium'
        }, {
                value: 'Beans, black turtle, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, cranberry (roman), mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, french, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, great northern, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, great northern, mature seeds, canned, low sodium'
        }, {
                value: 'Beans, kidney, all types, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, kidney, california red, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, kidney, red, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, kidney, red, mature seeds, canned, drained solids, rinsed in tap water'
        }, {
                value: 'Beans, kidney, royal red, mature seeds, cooked, boiled with salt'
        }, {
                value: 'Beans, kidney, red, mature seeds, canned, solids and liquid, low sodium'
        }, {
                value: 'Beans, navy, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, pink, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, pinto, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, pinto, mature seeds, canned, drained solids, rinsed in tap water'
        }, {
                value: 'Beans, small white, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, pinto, mature seeds, canned, solids and liquids, low sodium'
        }, {
                value: 'Beans, yellow, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Beans, white, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Broadbeans (fava beans), mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Chickpeas (garbanzo beans, bengal gram), mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Chickpeas (garbanzo beans, bengal gram), mature seeds, canned, drained solids'
        }, {
                value: 'Chickpeas (garbanzo beans, bengal gram), mature seeds, canned, drained, rinsed in tap water'
        }, {
                value: 'Chickpeas (garbanzo beans, bengal gram), mature seeds, canned, solids and liquids, low sodium'
        }, {
                value: 'Cowpeas, catjang, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Cowpeas, common (blackeyes, crowder, southern), mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Hyacinth beans, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Lentils, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Lima beans, large, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Lima beans, thin seeded (baby), mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Lupins, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Mothbeans, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Mung beans, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Mungo beans, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Peas, split, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Peanuts, all types, oil-roasted, without salt'
        }, {
                value: 'Peanuts, all types, dry-roasted, without salt'
        }, {
                value: 'Peanuts, spanish, oil-roasted, without salt'
        }, {
                value: 'Peanuts, valencia, oil-roasted, without salt'
        }, {
                value: 'Peanuts, virginia, oil-roasted, without salt'
        }, {
                value: 'Peanut butter, chunk style, without salt'
        }, {
                value: 'Peanut butter, smooth style, without salt'
        }, {
                value: 'Peanut butter with omega-3, creamy'
        }, {
                value: 'Pigeon peas (red gram), mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Refried beans, canned, traditional, reduced sodium'
        }, {
                value: 'Soybeans, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Soybeans, mature seeds, roasted, no salt added'
        }, {
                value: 'Soy protein concentrate, produced by acid wash'
        }, {
                value: 'Soy protein isolate, potassium type'
        }, {
                value: 'Soy sauce made from soy and wheat (shoyu), low sodium'
        }, {
                value: 'Soy sauce, reduced sodium, made from hydrolyzed vegetable protein'
        }, {
                value: 'Tofu, raw, firm, prepared with calcium sulfate'
        }, {
                value: 'Tofu, raw, regular, prepared with calcium sulfate'
        }, {
                value: 'Tofu, dried-frozen (koyadofu), prepared with calcium sulfate'
        }, {
                value: 'Tofu, fried, prepared with calcium sulfate'
        }, {
                value: 'Tofu, salted and fermented (fuyu), prepared with calcium sulfate'
        }, {
                value: 'Yardlong beans, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'Winged beans, mature seeds, cooked, boiled, with salt'
        }, {
                value: 'LOMA LINDA Little Links, canned, unprepared'
        }, {
                value: 'LOMA LINDA Low Fat Big Franks, canned, unprepared'
        }, {
                value: 'LOMA LINDA Tender Rounds with Gravy, canned, unprepared'
        }, {
                value: 'LOMA LINDA Swiss Stake with Gravy, canned, unprepared'
        }, {
                value: 'LOMA LINDA Vege-Burger, canned, unprepared'
        }, {
                value: 'LOMA LINDA Redi-Burger, canned, unprepared'
        }, {
                value: 'LOMA LINDA Tender Bits, canned, unprepared'
        }, {
                value: 'LOMA LINDA Linketts, canned, unprepared'
        }, {
                value: 'WORTHINGTON Chili, canned, unprepared'
        }, {
                value: 'WORTHINGTON Choplets, canned, unprepared'
        }, {
                value: 'WORTHINGTON Diced Chik, canned, unprepared'
        }, {
                value: 'WORTHINGTON FriChik Original, canned, unprepared'
        }, {
                value: 'WORTHINGTON Low Fat Fri Chik, canned, unprepared'
        }, {
                value: 'WORTHINGTON Low Fat Veja-Links, canned, unprepared'
        }, {
                value: 'WORTHINGTON Multigrain Cutlets, canned, unprepared'
        }, {
                value: 'WORTHINGTON Prime Stakes, canned, unprepared'
        }, {
                value: 'WORTHINGTON Saucettes, canned, unprepared'
        }, {
                value: 'WORTHINGTON Super Links, canned, unprepared'
        }, {
                value: 'WORTHINGTON Vegetable Skallops, canned, unprepared'
        }, {
                value: 'WORTHINGTON Vegetable Steaks, canned, unprepared'
        }, {
                value: 'WORTHINGTON Vegetarian Burger, canned, unprepared'
        }, {
                value: 'WORTHINGTON Veja-Links, canned, unprepared'
        }, {
                value: 'WORTHINGTON Chic-Ketts, frozen, unprepared'
        }, {
                value: 'WORTHINGTON Meatless Chicken Roll, frozen, unprepared'
        }, {
                value: 'WORTHINGTON Meatless Corned Beef Roll, frozen, unprepared'
        }, {
                value: 'WORTHINGTON Dinner Roast, frozen, unprepared'
        }, {
                value: 'WORTHINGTON FriPats, frozen, unprepared'
        }, {
                value: 'WORTHINGTON Prosage Links, frozen, unprepared'
        }, {
                value: 'WORTHINGTON Prosage Roll, frozen, unprepared'
        }, {
                value: 'WORTHINGTON Smoked Turkey Roll, frozen, unprepared'
        }, {
                value: 'WORTHINGTON Stakelets, frozen, unprepared'
        }, {
                value: 'WORTHINGTON Stripples, frozen, unprepared'
        }, {
                value: 'WORTHINGTON Wham (roll), frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Breakfast Pattie with Organic Soy, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Breakfast Bacon Strips, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Breakfast Sausage Links, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Grillers Original, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Grillers Prime, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Asian Veggie Patties, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Mushroom Lovers Burger, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Tomato & Basil Pizza Burger, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Buffalo Wings, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Chikn Nuggets, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Chik Patties, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Italian Herb Chikn Pattie, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Corn Dog, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Corn Dog Mini, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Sausage Style Recipe Crumbles, frozen, unprepared'
        }, {
                value: 'GARDENBURGER Black Bean Chipotle Burger, frozen, unprepared'
        }, {
                value: 'GARDENBURGER Original, frozen, unprepared'
        }, {
                value: 'GARDENBURGER Flame Grilled Burger, frozen, unprepared'
        }, {
                value: 'GARDENBURGER Savory Portabella Veggie Burger, frozen, unprepared'
        }, {
                value: 'GARDENBURGER Sun-Dried Tomato Basil Burger, frozen, unprepared'
        }, {
                value: 'GARDENBURGER Veggie Medley Burger, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Breakfast Sausage Patties Maple Flavored, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Chikn Grill Veggie Patties, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS BBQ Riblets, frozen, unprepared'
        }, {
                value: 'WORTHINGTON Leanies, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS California Turky Burger, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Hot and Spicy Veggie Sausage Patties, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Lasagna with Veggie Sausage, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Grillers Quarter Pound Veggie Burger, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Sesame Chikn Entree, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Grillers Chikn Veggie Patties, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Meal Starters Veggie Meatballs, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Breakfast Biscuit Sausage, Egg & Cheese, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Mediterranean Chickpea, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Buffalo Chik Patties, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Chik Patties Original, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Breakfast Pattie, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Roasted Garlic & Quinoa Burger, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Parmesan Garlic Wings, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Breakfast Sandwich Veggie Sausage Egg & Cheese English Muffin, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Breakfast Sandwich Veggie Scramble & Cheese English Muffin, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Chipotle Black Bean Crumbles, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Garden Veggie Nuggets, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Spicy Black Bean Enchilada Entree, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Spicy Indian Veggie Burger, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Tuscan Greens & Beans, frozen, unprepared'
        }, {
                value: 'Veal, Australian, rib, rib roast, separable lean only, raw'
        }, {
                value: 'Lamb, domestic, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/4" fat, choice, cooked'
        }, {
                value: 'Lamb, domestic, composite of trimmed retail cuts, separable lean only, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, composite of trimmed retail cuts, separable lean only, trimmed to 1/4" fat, choice, cooked'
        }, {
                value: 'Lamb, domestic, composite of trimmed retail cuts, separable fat, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, composite of trimmed retail cuts, separable fat, trimmed to 1/4" fat, choice, cooked'
        }, {
                value: 'Lamb, domestic, foreshank, separable lean and fat, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, foreshank, separable lean and fat, trimmed to 1/4" fat, choice, cooked, braised'
        }, {
                value: 'Lamb, domestic, foreshank, separable lean only, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, foreshank, separable lean only, trimmed to 1/4" fat, choice, cooked, braised'
        }, {
                value: 'Lamb, domestic, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, leg, whole (shank and sirloin), separable lean only, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, leg, whole (shank and sirloin), separable lean only, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, leg, shank half, separable lean and fat, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, leg, shank half, separable lean and fat, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, leg, shank half, separable lean only, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, leg, shank half, separable lean only, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, leg, sirloin half, separable lean and fat, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, leg, sirloin half, separable lean and fat, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, leg, sirloin half, separable lean only, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, leg, sirloin half, separable lean only, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, loin, separable lean and fat, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, loin, separable lean and fat, trimmed to 1/4" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, loin, separable lean and fat, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, loin, separable lean only, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, loin, separable lean only, trimmed to 1/4" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, loin, separable lean only, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, rib, separable lean and fat, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, rib, separable lean and fat, trimmed to 1/4" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, rib, separable lean and fat, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, rib, separable lean only, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, rib, separable lean only, trimmed to 1/4" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, rib, separable lean only, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/4" fat, choice, cooked, braised'
        }, {
                value: 'Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/4" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, shoulder, whole (arm and blade), separable lean only, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, shoulder, whole (arm and blade), separable lean only, trimmed to 1/4" fat, choice, cooked, braised'
        }, {
                value: 'Lamb, domestic, shoulder, whole (arm and blade), separable lean only, trimmed to 1/4" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, shoulder, whole (arm and blade), separable lean only, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/4" fat, choice, cooked, braised'
        }, {
                value: 'Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/4" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, shoulder, arm, separable lean only, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, shoulder, arm, separable lean only, trimmed to 1/4" fat, choice, cooked, braised'
        }, {
                value: 'Lamb, domestic, shoulder, arm, separable lean only, trimmed to 1/4" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, shoulder, arm, separable lean only, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/4" fat, choice, cooked, braised'
        }, {
                value: 'Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/4" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, shoulder, blade, separable lean only, trimmed to 1/4" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, shoulder, blade, separable lean only, trimmed to 1/4" fat, choice, cooked, braised'
        }, {
                value: 'Lamb, domestic, shoulder, blade, separable lean only, trimmed to 1/4" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, shoulder, blade, separable lean only, trimmed to 1/4" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, cubed for stew or kabob (leg and shoulder), separable lean only, trimmed to 1/4" fat, raw'
        }, {
                value: 'Lamb, domestic, cubed for stew or kabob (leg and shoulder), separable lean only, trimmed to 1/4" fat, cooked, braised'
        }, {
                value: 'Lamb, domestic, cubed for stew or kabob (leg and shoulder), separable lean only, trimmed to 1/4" fat, cooked, broiled'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable lean and fat, cooked'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable lean only, cooked'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable fat, cooked'
        }, {
                value: 'Lamb, New Zealand, imported, fore-shank, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, fore-shank, separable lean and fat, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, fore-shank, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, fore-shank, separable lean only, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, leg chop/steak, bone-in, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, leg, whole (shank and sirloin), separable lean and fat, cooked, roasted'
        }, {
                value: 'Lamb, New Zealand, imported, leg chop/steak, bone-in, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, leg, whole (shank and sirloin), separable lean only, cooked, roasted'
        }, {
                value: 'Lamb, New Zealand, imported, loin chop, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, loin, separable lean and fat, cooked, broiled'
        }, {
                value: 'Lamb, New Zealand, imported, loin chop, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, loin, separable lean only, cooked, broiled'
        }, {
                value: 'Lamb, New Zealand, imported, rack - partly frenched, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, rack - partly frenched, separable lean and fat, cooked, fast roasted'
        }, {
                value: 'Lamb, New Zealand, imported, rack - partly frenched, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, rack - partly frenched, separable lean only, cooked, fast roasted'
        }, {
                value: 'Lamb, New Zealand, imported, square-cut shoulder, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, shoulder, whole (arm and blade), separable lean and fat, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, square-cut shoulder, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, shoulder, whole (arm and blade), separable lean only, cooked, braised'
        }, {
                value: 'Veal, composite of trimmed retail cuts, separable lean and fat, raw'
        }, {
                value: 'Veal, composite of trimmed retail cuts, separable lean and fat, cooked'
        }, {
                value: 'Veal, composite of trimmed retail cuts, separable lean only, raw'
        }, {
                value: 'Veal, composite of trimmed retail cuts, separable lean only, cooked'
        }, {
                value: 'Veal, composite of trimmed retail cuts, separable fat, raw'
        }, {
                value: 'Veal, composite of trimmed retail cuts, separable fat, cooked'
        }, {
                value: 'Veal, leg (top round), separable lean and fat, raw'
        }, {
                value: 'Veal, leg (top round), separable lean and fat, cooked, braised'
        }, {
                value: 'Veal, leg (top round), separable lean and fat, cooked, pan-fried, breaded'
        }, {
                value: 'Veal, leg (top round), separable lean and fat, cooked, pan-fried, not breaded'
        }, {
                value: 'Veal, leg (top round), separable lean and fat, cooked, roasted'
        }, {
                value: 'Veal, leg (top round), separable lean only, raw'
        }, {
                value: 'Veal, leg (top round), separable lean only, cooked, braised'
        }, {
                value: 'Veal, leg (top round), separable lean only, cooked, pan-fried, breaded'
        }, {
                value: 'Veal, leg (top round), separable lean only, cooked, pan-fried, not breaded'
        }, {
                value: 'Veal, leg (top round), separable lean only, cooked, roasted'
        }, {
                value: 'Veal, loin, separable lean and fat, raw'
        }, {
                value: 'Veal, loin, separable lean and fat, cooked, braised'
        }, {
                value: 'Veal, loin, separable lean and fat, cooked, roasted'
        }, {
                value: 'Veal, loin, separable lean only, raw'
        }, {
                value: 'Veal, loin, separable lean only, cooked, braised'
        }, {
                value: 'Veal, loin, separable lean only, cooked, roasted'
        }, {
                value: 'Veal, rib, separable lean and fat, raw'
        }, {
                value: 'Veal, rib, separable lean and fat, cooked, braised'
        }, {
                value: 'Veal, rib, separable lean and fat, cooked, roasted'
        }, {
                value: 'Veal, rib, separable lean only, raw'
        }, {
                value: 'Veal, rib, separable lean only, cooked, braised'
        }, {
                value: 'Veal, rib, separable lean only, cooked, roasted'
        }, {
                value: 'Veal, shoulder, whole (arm and blade), separable lean and fat, raw'
        }, {
                value: 'Veal, shoulder, whole (arm and blade), separable lean and fat, cooked, braised'
        }, {
                value: 'Veal, shoulder, whole (arm and blade), separable lean and fat, cooked, roasted'
        }, {
                value: 'Veal, shoulder, whole (arm and blade), separable lean only, raw'
        }, {
                value: 'Veal, shoulder, whole (arm and blade), separable lean only, cooked, braised'
        }, {
                value: 'Veal, shoulder, whole (arm and blade), separable lean only, cooked, roasted'
        }, {
                value: 'Veal, shoulder, arm, separable lean and fat, raw'
        }, {
                value: 'Veal, shoulder, arm, separable lean and fat, cooked, braised'
        }, {
                value: 'Veal, shoulder, arm, separable lean and fat, cooked, roasted'
        }, {
                value: 'Veal, shoulder, arm, separable lean only, raw'
        }, {
                value: 'Veal, shoulder, arm, separable lean only, cooked, braised'
        }, {
                value: 'Veal, shoulder, arm, separable lean only, cooked, roasted'
        }, {
                value: 'Veal, shoulder, blade chop, separable lean and fat, raw'
        }, {
                value: 'Veal, shoulder, blade, separable lean and fat, cooked, braised'
        }, {
                value: 'Veal, shoulder, blade, separable lean and fat, cooked, roasted'
        }, {
                value: 'Veal, shoulder, blade chop, separable lean only, raw'
        }, {
                value: 'Veal, shoulder, blade, separable lean only, cooked, braised'
        }, {
                value: 'Veal, shoulder, blade, separable lean only, cooked, roasted'
        }, {
                value: 'Veal, sirloin, separable lean and fat, raw'
        }, {
                value: 'Veal, sirloin, separable lean and fat, cooked, braised'
        }, {
                value: 'Veal, sirloin, separable lean and fat, cooked, roasted'
        }, {
                value: 'Veal, sirloin, separable lean only, raw'
        }, {
                value: 'Veal, sirloin, separable lean only, cooked, braised'
        }, {
                value: 'Veal, sirloin, separable lean only, cooked, roasted'
        }, {
                value: 'Veal, cubed for stew (leg and shoulder), separable lean only, raw'
        }, {
                value: 'Veal, cubed for stew (leg and shoulder), separable lean only, cooked, braised'
        }, {
                value: 'Veal, ground, raw'
        }, {
                value: 'Veal, ground, cooked, broiled'
        }, {
                value: 'Game meat, antelope, raw'
        }, {
                value: 'Game meat, antelope, cooked, roasted'
        }, {
                value: 'Game meat, bear, raw'
        }, {
                value: 'Game meat, bear, cooked, simmered'
        }, {
                value: 'Bison, ground, grass-fed, cooked'
        }, {
                value: 'Bison, ground, grass-fed, raw'
        }, {
                value: 'Game meat, beaver, raw'
        }, {
                value: 'Game meat, beaver, cooked, roasted'
        }, {
                value: 'Game meat, beefalo, composite of cuts, raw'
        }, {
                value: 'Game meat, beefalo, composite of cuts, cooked, roasted'
        }, {
                value: 'Veal, Australian, separable fat, raw'
        }, {
                value: 'Veal, Australian, rib, rib roast, separable lean and fat, raw'
        }, {
                value: 'Game meat, bison, separable lean only, raw'
        }, {
                value: 'Game meat, bison, separable lean only, cooked, roasted'
        }, {
                value: 'Game meat, boar, wild, raw'
        }, {
                value: 'Game meat, boar, wild, cooked, roasted'
        }, {
                value: 'Game meat, buffalo, water, raw'
        }, {
                value: 'Game meat, buffalo, water, cooked, roasted'
        }, {
                value: 'Game meat, caribou, raw'
        }, {
                value: 'Game meat, caribou, cooked, roasted'
        }, {
                value: 'Game meat, deer, raw'
        }, {
                value: 'Game meat, deer, cooked, roasted'
        }, {
                value: 'Game meat, elk, raw'
        }, {
                value: 'Game meat, elk, cooked, roasted'
        }, {
                value: 'Goat, raw'
        }, {
                value: 'Game meat, goat, cooked, roasted'
        }, {
                value: 'Game meat, horse, raw'
        }, {
                value: 'Game meat, horse, cooked, roasted'
        }, {
                value: 'Game meat, moose, raw'
        }, {
                value: 'Game meat, moose, cooked, roasted'
        }, {
                value: 'Game meat, muskrat, raw'
        }, {
                value: 'Game meat, muskrat, cooked, roasted'
        }, {
                value: 'Game meat, opossum, cooked, roasted'
        }, {
                value: 'Game meat, rabbit, domesticated, composite of cuts, raw'
        }, {
                value: 'Game meat, rabbit, domesticated, composite of cuts, cooked, roasted'
        }, {
                value: 'Game meat, rabbit, domesticated, composite of cuts, cooked, stewed'
        }, {
                value: 'Game meat, rabbit, wild, raw'
        }, {
                value: 'Game meat, rabbit, wild, cooked, stewed'
        }, {
                value: 'Game meat, raccoon, cooked, roasted'
        }, {
                value: 'Game meat, squirrel, raw'
        }, {
                value: 'Game meat, squirrel, cooked, roasted'
        }, {
                value: 'Lamb, variety meats and by-products, brain, raw'
        }, {
                value: 'Lamb, variety meats and by-products, brain, cooked, braised'
        }, {
                value: 'Lamb, variety meats and by-products, brain, cooked, pan-fried'
        }, {
                value: 'Veal, variety meats and by-products, brain, raw'
        }, {
                value: 'Veal, variety meats and by-products, brain, cooked, braised'
        }, {
                value: 'Veal, variety meats and by-products, brain, cooked, pan-fried'
        }, {
                value: 'Lamb, variety meats and by-products, heart, raw'
        }, {
                value: 'Lamb, variety meats and by-products, heart, cooked, braised'
        }, {
                value: 'Veal, variety meats and by-products, heart, raw'
        }, {
                value: 'Veal, variety meats and by-products, heart, cooked, braised'
        }, {
                value: 'Lamb, variety meats and by-products, kidneys, raw'
        }, {
                value: 'Lamb, variety meats and by-products, kidneys, cooked, braised'
        }, {
                value: 'Veal, variety meats and by-products, kidneys, raw'
        }, {
                value: 'Veal, variety meats and by-products, kidneys, cooked, braised'
        }, {
                value: 'Lamb, variety meats and by-products, liver, raw'
        }, {
                value: 'Lamb, variety meats and by-products, liver, cooked, braised'
        }, {
                value: 'Lamb, variety meats and by-products, liver, cooked, pan-fried'
        }, {
                value: 'Veal, variety meats and by-products, liver, raw'
        }, {
                value: 'Veal, variety meats and by-products, liver, cooked, braised'
        }, {
                value: 'Veal, variety meats and by-products, liver, cooked, pan-fried'
        }, {
                value: 'Lamb, variety meats and by-products, lungs, raw'
        }, {
                value: 'Lamb, variety meats and by-products, lungs, cooked, braised'
        }, {
                value: 'Veal, variety meats and by-products, lungs, raw'
        }, {
                value: 'Veal, variety meats and by-products, lungs, cooked, braised'
        }, {
                value: 'Lamb, variety meats and by-products, mechanically separated, raw'
        }, {
                value: 'Lamb, variety meats and by-products, pancreas, raw'
        }, {
                value: 'Lamb, variety meats and by-products, pancreas, cooked, braised'
        }, {
                value: 'Veal, variety meats and by-products, pancreas, raw'
        }, {
                value: 'Veal, variety meats and by-products, pancreas, cooked, braised'
        }, {
                value: 'Lamb, variety meats and by-products, spleen, raw'
        }, {
                value: 'Lamb, variety meats and by-products, spleen, cooked, braised'
        }, {
                value: 'Veal, variety meats and by-products, spleen, raw'
        }, {
                value: 'Veal, variety meats and by-products, spleen, cooked, braised'
        }, {
                value: 'Veal, variety meats and by-products, thymus, raw'
        }, {
                value: 'Veal, variety meats and by-products, thymus, cooked, braised'
        }, {
                value: 'Lamb, variety meats and by-products, tongue, raw'
        }, {
                value: 'Lamb, variety meats and by-products, tongue, cooked, braised'
        }, {
                value: 'Veal, variety meats and by-products, tongue, raw'
        }, {
                value: 'Veal, variety meats and by-products, tongue, cooked, braised'
        }, {
                value: 'Lamb, ground, raw'
        }, {
                value: 'Lamb, ground, cooked, broiled'
        }, {
                value: 'Lamb, domestic, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8" fat, choice, cooked'
        }, {
                value: 'Lamb, domestic, foreshank, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, foreshank, separable lean and fat, trimmed to 1/8" fat, cooked, braised'
        }, {
                value: 'Lamb, domestic, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, leg, shank half, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, leg, shank half, separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, leg, sirloin half, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, leg, sirloin half, separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, loin, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, loin, separable lean and fat, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, loin, separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, rib, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, rib, separable lean and fat, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, rib, separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8" fat, choice, cooked, braised'
        }, {
                value: 'Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/8" fat, choice, cooked, braised'
        }, {
                value: 'Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/8" fat, cooked, broiled'
        }, {
                value: 'Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/8" fat, choice, roasted'
        }, {
                value: 'Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/8" fat, choice, cooked, braised'
        }, {
                value: 'Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8" fat, cooked'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, foreshank, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, foreshank, separable lean and fat, trimmed to 1/8" fat, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, loin, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, loin, separable lean and fat, trimmed to 1/8" fat, cooked, broiled'
        }, {
                value: 'Lamb, new zealand, imported, frozen, rib, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, rib, separable lean and fat, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, frozen, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8" fat, cooked, braised'
        }, {
                value: 'Game meat, bison, top sirloin, separable lean only, trimmed to 0" fat, raw'
        }, {
                value: 'Game meat, bison, ribeye, separable lean only, trimmed to 0" fat, raw'
        }, {
                value: 'Game meat, bison, shoulder clod, separable lean only, trimmed to 0" fat, raw'
        }, {
                value: 'Veal, breast, separable fat, cooked'
        }, {
                value: 'Veal, breast, whole, boneless, separable lean and fat, raw'
        }, {
                value: 'Veal, breast, whole, boneless, separable lean and fat, cooked, braised'
        }, {
                value: 'Veal, breast, plate half, boneless, separable lean and fat, cooked, braised'
        }, {
                value: 'Veal, breast, point half, boneless, separable lean and fat, cooked, braised'
        }, {
                value: 'Veal, breast, whole, boneless, separable lean only, cooked, braised'
        }, {
                value: 'Veal, shank (fore and hind), separable lean and fat, raw'
        }, {
                value: 'Veal, shank (fore and hind), separable lean and fat, cooked, braised'
        }, {
                value: 'Veal, shank (fore and hind), separable lean only, raw'
        }, {
                value: 'Veal, shank (fore and hind), separable lean only, cooked, braised'
        }, {
                value: 'Lamb, Australian, imported, fresh, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8" fat, cooked'
        }, {
                value: 'Lamb, Australian, imported, fresh, composite of trimmed retail cuts, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, composite of trimmed retail cuts, separable lean only, trimmed to 1/8" fat, cooked'
        }, {
                value: 'Lamb, Australian, imported, fresh, separable fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, separable fat, cooked'
        }, {
                value: 'Lamb, Australian, imported, fresh, foreshank, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, foreshank, separable lean and fat, trimmed to 1/8" fat, cooked, braised'
        }, {
                value: 'Lamb, Australian, imported, fresh, foreshank, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, foreshank, separable lean only, trimmed to 1/8" fat, cooked, braised'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, whole (shank and sirloin), separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, whole (shank and sirloin), separable lean only, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, shank half, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, shank half, separable lean and fat, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, shank half, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, shank half, separable lean only, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, sirloin half, boneless, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, sirloin half, boneless, separable lean and fat, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, sirloin half, boneless, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, sirloin half, boneless, separable lean only, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, sirloin chops, boneless, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, sirloin chops, boneless, separable lean and fat, trimmed to 1/8" fat, cooked, broiled'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, sirloin chops, boneless, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, sirloin chops, boneless, separable lean only, trimmed to 1/8" fat, cooked, broiled'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, center slice, bone-in, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, center slice, bone-in, separable lean and fat, trimmed to 1/8" fat, cooked, broiled'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, center slice, bone-in, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, center slice, bone-in, separable lean only, trimmed to 1/8" fat, cooked, broiled'
        }, {
                value: 'Lamb, Australian, imported, fresh, loin, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, loin, separable lean and fat, trimmed to 1/8" fat, cooked, broiled'
        }, {
                value: 'Lamb, Australian, imported, fresh, loin, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, loin, separable lean only, trimmed to 1/8" fat, cooked, broiled'
        }, {
                value: 'Lamb, Australian, imported, fresh, rib chop/rack roast, frenched, bone-in, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, rib chop, frenched, bone-in, separable lean and fat, trimmed to 1/8" fat, cooked, grilled'
        }, {
                value: 'Lamb, Australian, imported, fresh, rib chop/rack roast, frenched, bone-in, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, rib chop, frenched, bone-in, separable lean only, trimmed to 1/8" fat, cooked, grilled'
        }, {
                value: 'Lamb, Australian, imported, fresh, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8" fat, cooked'
        }, {
                value: 'Lamb, Australian, imported, fresh, shoulder, whole (arm and blade), separable lean only,   trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, shoulder, whole (arm and blade), separable lean only, trimmed to 1/8" fat, cooked'
        }, {
                value: 'Lamb, Australian, imported, fresh, shoulder, arm, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, shoulder, arm, separable lean and fat, trimmed to 1/8" fat, cooked, braised'
        }, {
                value: 'Lamb, Australian, imported, fresh, shoulder, arm, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, shoulder, arm, separable lean only,   trimmed to 1/8" fat, cooked, braised'
        }, {
                value: 'Lamb, Australian, imported, fresh, shoulder, blade, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, shoulder, blade, separable lean and fat, trimmed to 1/8" fat, cooked, broiled'
        }, {
                value: 'Lamb, Australian, imported, fresh, shoulder, blade, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, shoulder ,blade, separable lean only, trimmed to 1/8" fat, cooked, broiled'
        }, {
                value: 'Game meat , bison, ground, raw'
        }, {
                value: 'Game meat, bison, ground, cooked, pan-broiled'
        }, {
                value: 'Game meat , bison, top sirloin, separable lean only, 1" steak, cooked, broiled'
        }, {
                value: 'Game meat, bison, chuck, shoulder clod, separable lean only, cooked, braised'
        }, {
                value: 'Game meat, bison, chuck, shoulder clod, separable lean only, raw'
        }, {
                value: 'Game meat, bison, ribeye, separable lean only, 1" steak, cooked, broiled'
        }, {
                value: 'Game meat, bison, top round, separable lean only, 1" steak, cooked, broiled'
        }, {
                value: 'Game meat, bison, top round, separable lean only, 1" steak, raw'
        }, {
                value: 'Game meat, elk, ground, raw'
        }, {
                value: 'Game meat, elk, ground, cooked, pan-broiled'
        }, {
                value: 'Game meat, elk, loin, separable lean only, cooked, broiled'
        }, {
                value: 'Game meat, elk, round, separable lean only, cooked, broiled'
        }, {
                value: 'Game meat, elk, tenderloin, separable lean only, cooked, broiled'
        }, {
                value: 'Game meat, deer, ground, raw'
        }, {
                value: 'Game meat, deer, ground, cooked, pan-broiled'
        }, {
                value: 'Game meat, deer, loin, separable lean only, 1" steak, cooked, broiled'
        }, {
                value: 'Game meat, deer, shoulder clod, separable lean only, cooked, braised'
        }, {
                value: 'Game meat, deer, tenderloin, separable lean only, cooked, broiled'
        }, {
                value: 'Game meat, deer, top round, separable lean only, 1" steak, cooked, broiled'
        }, {
                value: 'Veal, Australian, shank, fore, bone-in, separable lean only, raw'
        }, {
                value: 'Veal, Australian, shank, fore, bone-in, separable lean and fat, raw'
        }, {
                value: 'Veal, Australian, shank, hind, bone-in, separable lean only, raw'
        }, {
                value: 'Veal, Australian, shank, hind, bone-in, separable lean and fat'
        }, {
                value: 'Lamb, Australian, ground,  85% lean / 15% fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, Intermuscular fat, cooked'
        }, {
                value: 'Lamb, New Zealand, imported, Intermuscular fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, subcutaneous fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, brains, cooked, soaked and fried'
        }, {
                value: 'Lamb, New Zealand, imported, brains, raw'
        }, {
                value: 'Lamb, New Zealand, imported, breast, separable lean only, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, breast, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, chump, boneless, separable lean only, cooked, fast roasted'
        }, {
                value: 'Lamb, New Zealand, imported, subcutaneous fat, cooked'
        }, {
                value: 'Lamb, New Zealand, imported, chump, boneless, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, kidney, cooked, soaked and fried'
        }, {
                value: 'Lamb, New Zealand, imported, flap, boneless, separable lean only, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, flap, boneless, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, kidney, raw'
        }, {
                value: 'Lamb, New Zealand, imported, liver, cooked, soaked and fried'
        }, {
                value: 'Lamb, New Zealand, imported, liver, raw'
        }, {
                value: 'Lamb, New Zealand, imported, ground lamb, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, ground lamb, raw'
        }, {
                value: 'Lamb, New Zealand, imported, heart, cooked, soaked and simmered'
        }, {
                value: 'Lamb, New Zealand, imported, heart, raw'
        }, {
                value: 'Lamb, New Zealand, imported, sweetbread, cooked, soaked and simmered'
        }, {
                value: 'Lamb, New Zealand, imported, sweetbread, raw'
        }, {
                value: 'Lamb, New Zealand, imported, testes, cooked, soaked and fried'
        }, {
                value: 'Lamb, New Zealand, imported, testes, raw'
        }, {
                value: 'Lamb, New Zealand, imported, tongue - swiss cut, cooked, soaked and simmered'
        }, {
                value: 'Lamb, New Zealand, imported, tongue - swiss cut, raw'
        }, {
                value: 'Lamb, New Zealand, imported, tunnel-boned leg, chump off, shank off, separable lean only, cooked, slow roasted'
        }, {
                value: 'Lamb, New Zealand, imported, tunnel-boned leg, chump off, shank off, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, square-cut shoulder chops, separable lean only, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, square-cut shoulder chops, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, tenderloin, separable lean only, cooked, fast fried'
        }, {
                value: 'Lamb, New Zealand, imported, tenderloin, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, loin saddle, separable lean only, cooked, fast roasted'
        }, {
                value: 'Lamb, New Zealand, imported, loin saddle, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, loin, boneless, separable lean only, cooked, fast roasted'
        }, {
                value: 'Lamb, New Zealand, imported, loin, boneless, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, hind-shank, separable lean only, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, hind-shank, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, neck chops, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, neck chops, separable lean only, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, netted shoulder, rolled, boneless, separable lean only, cooked, slow roasted'
        }, {
                value: 'Lamb, New Zealand, imported, netted shoulder, rolled, boneless, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, rack - fully frenched, separable lean only, cooked, fast roasted'
        }, {
                value: 'Lamb, New Zealand, imported, rack - fully frenched, separable lean only, raw'
        }, {
                value: 'Lamb, New Zealand, imported, loin chop, separable lean only, cooked, fast fried'
        }, {
                value: 'Lamb, New Zealand, imported, square-cut shoulder, separable lean only, cooked, slow roasted'
        }, {
                value: 'Lamb, New Zealand, imported, leg chop/steak, bone-in, separable lean only, cooked, fast fried'
        }, {
                value: 'Lamb, New Zealand, imported, flap, boneless, separable lean and fat, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, flap, boneless, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, hind-shank, separable lean and fat, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, hind-shank, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, leg chop/steak, bone-in, separable lean and fat, cooked, fast fried'
        }, {
                value: 'Lamb, New Zealand, imported, loin chop, separable lean and fat, cooked, fast fried'
        }, {
                value: 'Lamb, New Zealand, imported, loin saddle, separable lean and fat, cooked, fast roasted'
        }, {
                value: 'Lamb, New Zealand, imported, loin saddle, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, loin, boneless, separable lean and fat, cooked, fast roasted'
        }, {
                value: 'Lamb, New Zealand, imported, loin, boneless, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, neck chops, separable lean and fat, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, neck chops, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, netted shoulder, rolled, boneless, separable lean and fat, cooked, slow roasted'
        }, {
                value: 'Lamb, New Zealand, imported, netted shoulder, rolled, boneless, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, square-cut shoulder chops, separable lean and fat, cooked, braised'
        }, {
                value: 'Lamb, New Zealand, imported, square-cut shoulder chops, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, square-cut shoulder, separable lean and fat, cooked, slow roasted'
        }, {
                value: 'Lamb, New Zealand, imported, tenderloin, separable lean and fat, cooked, fast fried'
        }, {
                value: 'Lamb, New Zealand, imported, rack - fully frenched, separable lean and fat, cooked, fast roasted'
        }, {
                value: 'Lamb, New Zealand, imported, rack - fully frenched, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, tunnel-boned leg, chump off, shank off, separable lean and fat, cooked, slow roasted'
        }, {
                value: 'Lamb, New Zealand, imported, tunnel-boned leg, chump off, shank off, separable lean and fat, raw'
        }, {
                value: 'Lamb, New Zealand, imported, tenderloin, separable lean and fat, raw'
        }, {
                value: 'Veal, ground, cooked, pan-fried'
        }, {
                value: 'Veal, leg, top round, cap off, cutlet, boneless, cooked, grilled'
        }, {
                value: 'Veal, leg, top round, cap off, cutlet, boneless, raw'
        }, {
                value: 'Veal, loin, chop, separable lean only, cooked, grilled'
        }, {
                value: 'Veal, shank, separable lean only, raw'
        }, {
                value: 'Veal, foreshank, osso buco, separable lean only, cooked, braised'
        }, {
                value: 'Veal, shoulder, blade chop, separable lean only, cooked, grilled'
        }, {
                value: 'Veal, external fat only, raw'
        }, {
                value: 'Veal, external fat only, cooked'
        }, {
                value: 'Veal, seam fat only, raw'
        }, {
                value: 'Veal, seam fat only, cooked'
        }, {
                value: 'Veal, shank, separable lean and fat, raw'
        }, {
                value: 'Veal, foreshank, osso buco, separable lean and fat, cooked, braised'
        }, {
                value: 'Veal, loin, chop, separable lean and fat, cooked, grilled'
        }, {
                value: 'Veal, shoulder, blade chop, separable lean and fat, cooked, grilled'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, bottom, boneless, separable lean only, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, hindshank, heel on, bone-in, separable lean only, trimmed to 1/8" fat, cooked, braised'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, hindshank, heel on, bone-in, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, tenderloin, boneless, separable lean only, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, tenderloin, boneless, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, bottom, boneless, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, trotter off, bone-in, separable lean only, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, trotter off, bone-in, separable lean only, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, rack, roast, frenched, denuded, bone-in, separable lean only, trimmed to 0" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, rack, roast, frenched, bone-in, separable lean only, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, external fat, cooked'
        }, {
                value: 'Lamb, Australian, imported, fresh, external fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, seam fat, cooked'
        }, {
                value: 'Lamb, Australian, imported, fresh, seam fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, bottom, boneless, separable lean and fat, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, bottom, boneless, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, hindshank, heel on, bone-in, separable lean and fat, trimmed to 1/8" fat, cooked, braised'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, hindshank, heel on, bone-in, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, trotter off, bone-in, separable lean and fat, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, leg, trotter off, bone-in, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, tenderloin, boneless, separable lean and fat, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, tenderloin, boneless, separable lean and fat, trimmed to 1/8" fat, raw'
        }, {
                value: 'Lamb, Australian, imported, fresh, rib chop, frenched, denuded, bone-in, separable lean only, trimmed to 0" fat, cooked, grilled'
        }, {
                value: 'Lamb, Australian, imported, fresh, rack, roast, frenched, denuded, bone-in, separable lean and fat, trimmed to 0" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, rack, roast, frenched, bone-in, separable lean and fat, trimmed to 1/8" fat, cooked, roasted'
        }, {
                value: 'Lamb, Australian, imported, fresh, rib chop, frenched, denuded, bone-in, separable lean and fat, trimmed to 0" fat, cooked, grilled'
        }, {
                value: 'Bagels, plain, enriched, with calcium propionate (includes onion, poppy, sesame)'
        }, {
                value: 'Bagels, plain, enriched, with calcium propionate (includes onion, poppy, sesame), toasted'
        }, {
                value: 'Bagels, egg'
        }, {
                value: 'Bagels, cinnamon-raisin'
        }, {
                value: 'Bagels, cinnamon-raisin, toasted'
        }, {
                value: 'Bagels, oat bran'
        }, {
                value: 'Biscuits, plain or buttermilk, frozen, baked'
        }, {
                value: 'Biscuits, plain or buttermilk, dry mix'
        }, {
                value: 'Biscuits, plain or buttermilk, dry mix, prepared'
        }, {
                value: 'Biscuits, plain or buttermilk, refrigerated dough, lower fat'
        }, {
                value: 'Biscuits, plain or buttermilk, refrigerated dough, lower fat, baked'
        }, {
                value: 'Biscuits, plain or buttermilk, refrigerated dough, higher fat'
        }, {
                value: 'Biscuits, plain or buttermilk, refrigerated dough, higher fat, baked'
        }, {
                value: 'Biscuits, plain or buttermilk, prepared from recipe'
        }, {
                value: 'Biscuits, mixed grain, refrigerated dough'
        }, {
                value: 'Bread, banana, prepared from recipe, made with margarine'
        }, {
                value: 'Bread, boston brown, canned'
        }, {
                value: 'Bread, cornbread, dry mix, enriched (includes corn muffin mix)'
        }, {
                value: 'Bread, cornbread, dry mix, prepared with 2% milk, 80% margarine, and eggs'
        }, {
                value: 'Bread, cornbread, prepared from recipe, made with low fat (2%) milk'
        }, {
                value: 'Bread, cracked-wheat'
        }, {
                value: 'Bread, egg'
        }, {
                value: 'Bread, egg, toasted'
        }, {
                value: 'Bread, french or vienna (includes sourdough)'
        }, {
                value: 'Bread, french or vienna, toasted (includes sourdough)'
        }, {
                value: 'Bread, irish soda, prepared from recipe'
        }, {
                value: 'Bread, italian'
        }, {
                value: 'Bread, multi-grain, toasted (includes whole-grain)'
        }, {
                value: 'Bread, oat bran'
        }, {
                value: 'Bread, oat bran, toasted'
        }, {
                value: 'Bread, oatmeal'
        }, {
                value: 'Bread, oatmeal, toasted'
        }, {
                value: 'Bread, pita, white, enriched'
        }, {
                value: 'Bread, pita, whole-wheat'
        }, {
                value: 'Bread, protein (includes gluten)'
        }, {
                value: 'Bread, pumpernickel'
        }, {
                value: 'Bread, pumpernickel, toasted'
        }, {
                value: 'Bread, raisin, enriched'
        }, {
                value: 'Bread, raisin, enriched, toasted'
        }, {
                value: 'Bread, reduced-calorie, oat bran'
        }, {
                value: 'Bread, reduced-calorie, oat bran, toasted'
        }, {
                value: 'Bread, reduced-calorie, oatmeal'
        }, {
                value: 'Bread, reduced-calorie, rye'
        }, {
                value: 'Bread, reduced-calorie, wheat'
        }, {
                value: 'Bread, reduced-calorie, white'
        }, {
                value: 'Bread, rice bran'
        }, {
                value: 'Bread, rye'
        }, {
                value: 'Bread, rye, toasted'
        }, {
                value: 'Bread, wheat'
        }, {
                value: 'Bread, wheat, toasted'
        }, {
                value: 'Bread, wheat bran'
        }, {
                value: 'Bread, white, commercially prepared (includes soft bread crumbs)'
        }, {
                value: 'Bread, white, commercially prepared, toasted'
        }, {
                value: 'Bread, white, prepared from recipe, made with nonfat dry milk'
        }, {
                value: 'Bread, white, prepared from recipe, made with low fat (2%) milk'
        }, {
                value: 'Bread, whole-wheat, commercially prepared'
        }, {
                value: 'Bread, whole-wheat, commercially prepared, toasted'
        }, {
                value: 'Bread, whole-wheat, prepared from recipe'
        }, {
                value: 'Bread, whole-wheat, prepared from recipe, toasted'
        }, {
                value: 'Bread crumbs, dry, grated, plain'
        }, {
                value: 'Bread sticks, plain'
        }, {
                value: 'Bread stuffing, bread, dry mix'
        }, {
                value: 'Bread stuffing, bread, dry mix, prepared'
        }, {
                value: 'Bread stuffing, cornbread, dry mix'
        }, {
                value: 'Bread stuffing, cornbread, dry mix, prepared'
        }, {
                value: 'Cake, angelfood, commercially prepared'
        }, {
                value: 'Cake, angelfood, dry mix'
        }, {
                value: 'Cake, angelfood, dry mix, prepared'
        }, {
                value: 'Cake, boston cream pie, commercially prepared'
        }, {
                value: 'Cake, pudding-type, carrot, dry mix'
        }, {
                value: 'Cake, cherry fudge with chocolate frosting'
        }, {
                value: 'Cake, chocolate, commercially prepared with chocolate frosting, in-store bakery'
        }, {
                value: 'Cake, pudding-type, chocolate, dry mix'
        }, {
                value: 'Cake, chocolate, prepared from recipe without frosting'
        }, {
                value: 'Cake, white, prepared from recipe with coconut frosting'
        }, {
                value: 'Coffeecake, cheese'
        }, {
                value: 'Coffeecake, cinnamon with crumb topping, commercially prepared, enriched'
        }, {
                value: 'Coffeecake, creme-filled with chocolate frosting'
        }, {
                value: 'Coffeecake, fruit'
        }, {
                value: 'Coffeecake, cinnamon with crumb topping, dry mix'
        }, {
                value: 'Coffeecake, cinnamon with crumb topping, dry mix, prepared'
        }, {
                value: 'Cake, fruitcake, commercially prepared'
        }, {
                value: 'Cake, pudding-type, german chocolate, dry mix'
        }, {
                value: 'Cake, gingerbread, dry mix'
        }, {
                value: 'Cake, gingerbread, prepared from recipe'
        }, {
                value: 'Cake, pudding-type, marble, dry mix'
        }, {
                value: 'Cake, pineapple upside-down, prepared from recipe'
        }, {
                value: 'Cake, pound, commercially prepared, butter (includes fresh and frozen)'
        }, {
                value: 'Cake, pound, commercially prepared, other than all butter, enriched'
        }, {
                value: 'Cake, shortcake, biscuit-type, prepared from recipe'
        }, {
                value: 'Cake, snack cakes, creme-filled, chocolate with frosting'
        }, {
                value: 'Cake, snack cakes, creme-filled, sponge'
        }, {
                value: 'Cake, white, dry mix, special dietary (includes lemon-flavored)'
        }, {
                value: 'Cake, sponge, commercially prepared'
        }, {
                value: 'Cake, sponge, prepared from recipe'
        }, {
                value: 'Cake, pudding-type, white, enriched, dry mix'
        }, {
                value: 'Cake, white, prepared from recipe without frosting'
        }, {
                value: 'Cake, yellow, commercially prepared, with chocolate frosting, in-store bakery'
        }, {
                value: 'Cake, yellow, commercially prepared, with vanilla frosting'
        }, {
                value: 'Cake, pudding-type, yellow, dry mix'
        }, {
                value: 'Cake, yellow, enriched, dry mix'
        }, {
                value: 'Cake, yellow, prepared from recipe without frosting'
        }, {
                value: 'Cheesecake commercially prepared'
        }, {
                value: 'Cheesecake prepared from mix, no-bake type'
        }, {
                value: 'Cookies, brownies, commercially prepared'
        }, {
                value: 'Cookies, brownies, dry mix, regular'
        }, {
                value: 'Cookies, brownies, prepared from recipe'
        }, {
                value: 'Cookies, butter, commercially prepared, enriched'
        }, {
                value: 'Cookies, fudge, cake-type (includes trolley cakes)'
        }, {
                value: 'Cookies, chocolate wafers'
        }, {
                value: 'Cookies, chocolate chip, commercially prepared, regular, lower fat'
        }, {
                value: 'Cookies, chocolate chip, commercially prepared, regular, higher fat, enriched'
        }, {
                value: 'Cookies, chocolate chip, commercially prepared, soft-type'
        }, {
                value: 'Cookies, chocolate chip, dry mix'
        }, {
                value: 'Cookies, chocolate chip, refrigerated dough'
        }, {
                value: 'Cookies, chocolate chip, refrigerated dough, baked'
        }, {
                value: 'Cookies, chocolate chip, prepared from recipe, made with margarine'
        }, {
                value: 'Cookies, chocolate sandwich, with creme filling, regular'
        }, {
                value: 'Cookies, chocolate sandwich, with creme filling, regular, chocolate-coated'
        }, {
                value: 'Cookies, chocolate sandwich, with extra creme filling'
        }, {
                value: 'Cookies, fig bars'
        }, {
                value: 'Cookies, fortune'
        }, {
                value: 'Cookies, gingersnaps'
        }, {
                value: 'Cookies, graham crackers, plain or honey (includes cinnamon)'
        }, {
                value: 'Cookies, graham crackers, chocolate-coated'
        }, {
                value: 'Cookies, ladyfingers, with lemon juice and rind'
        }, {
                value: 'Cookies, marshmallow, chocolate-coated (includes marshmallow pies)'
        }, {
                value: 'Cookies, molasses'
        }, {
                value: 'Cookies, oatmeal, commercially prepared, regular'
        }, {
                value: 'Cookies, oatmeal, commercially prepared, soft-type'
        }, {
                value: 'Cookies, oatmeal, dry mix'
        }, {
                value: 'Cookies, oatmeal, refrigerated dough'
        }, {
                value: 'Cookies, oatmeal, refrigerated dough, baked'
        }, {
                value: 'Cookies, oatmeal, prepared from recipe, with raisins'
        }, {
                value: 'Cookies, peanut butter, commercially prepared, regular'
        }, {
                value: 'Cookies, peanut butter, commercially prepared, soft-type'
        }, {
                value: 'Cookies, peanut butter, refrigerated dough'
        }, {
                value: 'Cookies, peanut butter, refrigerated dough, baked'
        }, {
                value: 'Cookies, peanut butter, prepared from recipe'
        }, {
                value: 'Cookies, peanut butter sandwich, regular'
        }, {
                value: 'Cookies, raisin, soft-type'
        }, {
                value: 'Cookies, shortbread, commercially prepared, plain'
        }, {
                value: 'Cookies, shortbread, commercially prepared, pecan'
        }, {
                value: 'Cookies, brownies, dry mix, sugar free'
        }, {
                value: 'Cookies, chocolate chip, commercially prepared, special dietary'
        }, {
                value: 'Cookies, chocolate sandwich, with creme filling, special dietary'
        }, {
                value: 'Cookies, oatmeal, commercially prepared, special dietary'
        }, {
                value: 'Cookies, peanut butter sandwich, special dietary'
        }, {
                value: 'Cookies, sugar wafer, with creme filling, sugar free'
        }, {
                value: 'Cookies, sugar, commercially prepared, regular (includes vanilla)'
        }, {
                value: 'Cookies, sugar, refrigerated dough'
        }, {
                value: 'Cookies, sugar, refrigerated dough, baked'
        }, {
                value: 'Cookies, sugar, prepared from recipe, made with margarine'
        }, {
                value: 'Cookies, sugar wafers with creme filling, regular'
        }, {
                value: 'Cookies, vanilla sandwich with creme filling'
        }, {
                value: 'Puff pastry, frozen, ready-to-bake, baked'
        }, {
                value: 'Cookies, vanilla wafers, lower fat'
        }, {
                value: 'Cookies, vanilla wafers, higher fat'
        }, {
                value: 'Crackers, cheese, regular'
        }, {
                value: 'Crackers, cheese, sandwich-type with peanut butter filling'
        }, {
                value: 'Crackers, crispbread, rye'
        }, {
                value: 'Crackers, matzo, plain'
        }, {
                value: 'Crackers, matzo, egg'
        }, {
                value: 'Crackers, matzo, whole-wheat'
        }, {
                value: 'Crackers, melba toast, plain'
        }, {
                value: 'Crackers, melba toast, rye (includes pumpernickel)'
        }, {
                value: 'Crackers, melba toast, wheat'
        }, {
                value: 'Crackers, milk'
        }, {
                value: 'Crackers, rusk toast'
        }, {
                value: 'Crackers, rye, sandwich-type with cheese filling'
        }, {
                value: 'Crackers, rye, wafers, plain'
        }, {
                value: 'Crackers, rye, wafers, seasoned'
        }, {
                value: 'Crackers, saltines (includes oyster, soda, soup)'
        }, {
                value: 'Crackers, standard snack-type, regular'
        }, {
                value: 'Crackers, standard snack-type, sandwich, with cheese filling'
        }, {
                value: 'Crackers, standard snack-type, sandwich, with peanut butter filling'
        }, {
                value: 'Crackers, wheat, regular'
        }, {
                value: 'Crackers, wheat, sandwich, with cheese filling'
        }, {
                value: 'Crackers, wheat, sandwich, with peanut butter filling'
        }, {
                value: 'Crackers, whole-wheat'
        }, {
                value: 'Cracker meal'
        }, {
                value: 'Cream puff shell, prepared from recipe'
        }, {
                value: 'Croissants, butter'
        }, {
                value: 'Croissants, apple'
        }, {
                value: 'Croissants, cheese'
        }, {
                value: 'Croutons, plain'
        }, {
                value: 'Croutons, seasoned'
        }, {
                value: 'Danish pastry, cinnamon, enriched'
        }, {
                value: 'Danish pastry, cheese'
        }, {
                value: 'Danish pastry, fruit, enriched (includes apple, cinnamon, raisin, lemon, raspberry, strawberry)'
        }, {
                value: 'Danish pastry, nut (includes almond, raisin nut, cinnamon nut)'
        }, {
                value: 'Doughnuts, cake-type, plain (includes unsugared, old-fashioned)'
        }, {
                value: 'Doughnuts, cake-type, plain, chocolate-coated or frosted'
        }, {
                value: 'Doughnuts, cake-type, plain, sugared or glazed'
        }, {
                value: 'Doughnuts, cake-type, chocolate, sugared or glazed'
        }, {
                value: 'Doughnuts, french crullers, glazed'
        }, {
                value: 'Doughnuts, yeast-leavened, with creme filling'
        }, {
                value: 'Doughnuts, yeast-leavened, glazed, enriched (includes honey buns)'
        }, {
                value: 'Doughnuts, yeast-leavened, with jelly filling'
        }, {
                value: 'English muffins, plain, enriched, with ca prop (includes sourdough)'
        }, {
                value: 'English muffins, plain, toasted, enriched, with calcium propionate (includes sourdough)'
        }, {
                value: 'English muffins, mixed-grain (includes granola)'
        }, {
                value: 'English muffins, mixed-grain, toasted (includes granola)'
        }, {
                value: 'English muffins, raisin-cinnamon (includes apple-cinnamon)'
        }, {
                value: 'English muffins, raisin-cinnamon, toasted (includes apple-cinnamon)'
        }, {
                value: 'English muffins, wheat'
        }, {
                value: 'English muffins, wheat, toasted'
        }, {
                value: 'English muffins, whole-wheat'
        }, {
                value: 'English muffins, whole-wheat, toasted'
        }, {
                value: 'French toast, frozen, ready-to-heat'
        }, {
                value: 'French toast, prepared from recipe, made with low fat (2%) milk'
        }, {
                value: 'Hush puppies, prepared from recipe'
        }, {
                value: 'Ice cream cones, cake or wafer-type'
        }, {
                value: 'Ice cream cones, sugar, rolled-type'
        }, {
                value: 'Muffins, plain, prepared from recipe, made with low fat (2%) milk'
        }, {
                value: 'Muffins, blueberry, commercially prepared (Includes mini-muffins)'
        }, {
                value: 'Muffins, blueberry, dry mix'
        }, {
                value: 'Muffins, blueberry, toaster-type'
        }, {
                value: 'Muffins, blueberry, prepared from recipe, made with low fat (2%) milk'
        }, {
                value: 'Muffins, corn, commercially prepared'
        }, {
                value: 'Muffins, corn, dry mix, prepared'
        }, {
                value: 'Muffins, corn, toaster-type'
        }, {
                value: 'Muffins, corn, prepared from recipe, made with low fat (2%) milk'
        }, {
                value: 'Muffins, oat bran'
        }, {
                value: 'Muffins, wheat bran, dry mix'
        }, {
                value: 'Pancakes plain, frozen, ready-to-heat (includes buttermilk)'
        }, {
                value: 'Pancakes, plain, dry mix, complete (includes buttermilk)'
        }, {
                value: 'Pancakes, plain, dry mix, complete, prepared'
        }, {
                value: 'Pancakes, plain, dry mix, incomplete (includes buttermilk)'
        }, {
                value: 'Pancakes, plain, dry mix, incomplete, prepared'
        }, {
                value: 'Pancakes, plain, prepared from recipe'
        }, {
                value: 'Pancakes, blueberry, prepared from recipe'
        }, {
                value: 'Pancakes, buckwheat, dry mix, incomplete'
        }, {
                value: 'Pancakes, special dietary, dry mix'
        }, {
                value: 'Pancakes, whole-wheat, dry mix, incomplete'
        }, {
                value: 'Pancakes, whole-wheat, dry mix, incomplete, prepared'
        }, {
                value: 'Pie, apple, commercially prepared, enriched flour'
        }, {
                value: 'Pie, apple, prepared from recipe'
        }, {
                value: 'Pie, banana cream, prepared from mix, no-bake type'
        }, {
                value: 'Pie, banana cream, prepared from recipe'
        }, {
                value: 'Pie, blueberry, commercially prepared'
        }, {
                value: 'Pie, blueberry, prepared from recipe'
        }, {
                value: 'Pie, cherry, commercially prepared'
        }, {
                value: 'Pie, cherry, prepared from recipe'
        }, {
                value: 'Pie, chocolate creme, commercially prepared'
        }, {
                value: 'Pie, chocolate mousse, prepared from mix, no-bake type'
        }, {
                value: 'Pie, coconut creme, commercially prepared'
        }, {
                value: 'Pie, coconut cream, prepared from mix, no-bake type'
        }, {
                value: 'Pie, coconut custard, commercially prepared'
        }, {
                value: 'Pie, egg custard, commercially prepared'
        }, {
                value: 'Pie, fried pies, fruit'
        }, {
                value: 'Pie, lemon meringue, commercially prepared'
        }, {
                value: 'Pie, lemon meringue, prepared from recipe'
        }, {
                value: 'Pie, mince, prepared from recipe'
        }, {
                value: 'Pie, peach'
        }, {
                value: 'Pie, pecan, commercially prepared'
        }, {
                value: 'Pie, pecan, prepared from recipe'
        }, {
                value: 'Pie, pumpkin, commercially prepared'
        }, {
                value: 'Pie, pumpkin, prepared from recipe'
        }, {
                value: 'Pie, vanilla cream, prepared from recipe'
        }, {
                value: 'Pie crust, standard-type, dry mix'
        }, {
                value: 'Pie crust, standard-type, dry mix, prepared, baked'
        }, {
                value: 'Pie crust, standard-type, frozen, ready-to-bake, enriched'
        }, {
                value: 'Pie crust, standard-type, frozen, ready-to-bake, enriched, baked'
        }, {
                value: 'Pie crust, standard-type, prepared from recipe, baked'
        }, {
                value: 'Puff pastry, frozen, ready-to-bake'
        }, {
                value: 'Phyllo dough'
        }, {
                value: 'Popovers, dry mix, enriched'
        }, {
                value: 'Rolls, dinner, plain, commercially prepared (includes brown-and-serve)'
        }, {
                value: 'Rolls, dinner, egg'
        }, {
                value: 'Rolls, dinner, oat bran'
        }, {
                value: 'Rolls, dinner, rye'
        }, {
                value: 'Rolls, dinner, wheat'
        }, {
                value: 'Rolls, dinner, whole-wheat'
        }, {
                value: 'Rolls, french'
        }, {
                value: 'Rolls, hamburger or hotdog, plain'
        }, {
                value: 'Rolls, hamburger or hotdog, mixed-grain'
        }, {
                value: 'Rolls, hamburger or hotdog, reduced-calorie'
        }, {
                value: 'Rolls, hard (includes kaiser)'
        }, {
                value: 'Strudel, apple'
        }, {
                value: 'Sweet rolls, cheese'
        }, {
                value: 'Sweet rolls, cinnamon, commercially prepared with raisins'
        }, {
                value: 'Sweet rolls, cinnamon, refrigerated dough with frosting'
        }, {
                value: 'Sweet rolls, cinnamon, refrigerated dough with frosting, baked'
        }, {
                value: 'Taco shells, baked'
        }, {
                value: 'Toaster pastries, brown-sugar-cinnamon'
        }, {
                value: 'Toaster pastries, fruit (includes apple, blueberry, cherry, strawberry)'
        }, {
                value: 'Tortillas, ready-to-bake or -fry, corn'
        }, {
                value: 'Tortillas, ready-to-bake or -fry, flour, refrigerated'
        }, {
                value: 'Waffles, plain, frozen, ready-to-heat'
        }, {
                value: 'Waffles, plain, prepared from recipe'
        }, {
                value: 'Wonton wrappers (includes egg roll wrappers)'
        }, {
                value: 'Leavening agents, baking powder, double-acting, sodium aluminum sulfate'
        }, {
                value: 'Leavening agents, baking powder, double-acting, straight phosphate'
        }, {
                value: 'Leavening agents, baking powder, low-sodium'
        }, {
                value: 'Leavening agents, baking soda'
        }, {
                value: 'Leavening agents, cream of tartar'
        }, {
                value: 'Leavening agents, yeast, bakers, compressed'
        }, {
                value: 'Leavening agents, yeast, bakers, active dry'
        }, {
                value: 'Bread crumbs, dry, grated, seasoned'
        }, {
                value: 'Cookies, oatmeal, prepared from recipe, without raisins'
        }, {
                value: 'Cookies, chocolate chip, prepared from recipe, made with butter'
        }, {
                value: 'Bread, protein, (includes gluten), toasted'
        }, {
                value: 'Bread, rice bran, toasted'
        }, {
                value: 'Bread, wheat germ, toasted'
        }, {
                value: 'Muffins, blueberry, toaster-type, toasted'
        }, {
                value: 'Muffins, wheat bran, toaster-type with raisins, toasted'
        }, {
                value: 'Pancakes, buttermilk, prepared from recipe'
        }, {
                value: 'Rolls, dinner, plain, prepared from recipe, made with low fat (2%) milk'
        }, {
                value: 'Pie crust, cookie-type, prepared from recipe, graham cracker, chilled'
        }, {
                value: 'Crackers, matzo, egg and onion'
        }, {
                value: 'Pie crust, cookie-type, prepared from recipe, vanilla wafer, chilled'
        }, {
                value: 'Pie crust, standard-type, prepared from recipe, unbaked'
        }, {
                value: 'Waffles, plain, frozen, ready -to-heat, toasted'
        }, {
                value: 'Bagels, plain, enriched, without calcium propionate (includes onion, poppy, sesame)'
        }, {
                value: 'Bagels, plain, unenriched, with calcium propionate (includes onion, poppy, sesame)'
        }, {
                value: 'Bagels, plain, unenriched, without calcium propionate(includes onion, poppy, sesame)'
        }, {
                value: 'Bread, cornbread, dry mix, unenriched (includes corn muffin mix)'
        }, {
                value: 'Bread, pita, white, unenriched'
        }, {
                value: 'Bread, raisin, unenriched'
        }, {
                value: 'Bread, white, commercially prepared, low sodium, no salt'
        }, {
                value: 'Coffeecake, cinnamon with crumb topping, commercially prepared, unenriched'
        }, {
                value: 'Cake, pound, commercially prepared, other than all butter, unenriched'
        }, {
                value: 'Cake, pudding-type, white, unenriched, dry mix'
        }, {
                value: 'Cake, yellow, unenriched, dry mix'
        }, {
                value: 'Cookies, butter, commercially prepared, unenriched'
        }, {
                value: 'Cookies, chocolate chip, commercially prepared, regular, higher fat, unenriched'
        }, {
                value: 'Cookies, ladyfingers, without lemon juice and rind'
        }, {
                value: 'Crackers, melba toast, plain, without salt'
        }, {
                value: 'Crackers, saltines, low salt (includes oyster, soda, soup)'
        }, {
                value: 'Crackers, saltines, unsalted tops (includes oyster, soda, soup)'
        }, {
                value: 'Crackers, standard snack-type, regular, low salt'
        }, {
                value: 'Crackers, wheat, low salt'
        }, {
                value: 'Crackers, whole-wheat, low salt'
        }, {
                value: 'Danish pastry, cinnamon, unenriched'
        }, {
                value: 'Danish pastry, fruit, unenriched (includes apple, cinnamon, raisin, strawberry)'
        }, {
                value: 'Bread, white, commercially prepared, toasted, low sodium no salt'
        }, {
                value: 'Danish pastry, lemon, unenriched'
        }, {
                value: 'Crackers, cheese, low sodium'
        }, {
                value: 'Danish pastry, raspberry, unenriched'
        }, {
                value: 'Doughnuts, yeast-leavened, glazed, unenriched (includes honey buns)'
        }, {
                value: 'English muffins, plain, enriched, without calcium propionate(includes sourdough)'
        }, {
                value: 'English muffins, plain, unenriched, with calcium propionate (includes sourdough)'
        }, {
                value: 'English muffins, plain, unenriched, without calcium propionate (includes sourdough)'
        }, {
                value: 'Pie, apple, commercially prepared, unenriched flour'
        }, {
                value: 'Pie, fried pies, cherry'
        }, {
                value: 'Pie, fried pies, lemon'
        }, {
                value: 'Pie crust, standard-type, frozen, ready-to-bake, unenriched'
        }, {
                value: 'Popovers, dry mix, unenriched'
        }, {
                value: 'Taco shells, baked, without added salt'
        }, {
                value: 'Tortillas, ready-to-bake or -fry, corn, without added salt'
        }, {
                value: 'Tortillas, ready-to-bake or -fry, flour, without added calcium'
        }, {
                value: 'Cake, pound, commercially prepared, fat-free'
        }, {
                value: 'Cake, yellow, light, dry mix'
        }, {
                value: 'Crackers, saltines, fat-free, low-sodium'
        }, {
                value: 'Breakfast tart, low fat'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS POP TARTS, Blueberry'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS POP TARTS, Frosted blueberry'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS POP TARTS, Brown sugar cinnamon'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS POP TARTS, Frosted brown sugar cinnamon'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS POP TARTS, Frosted cherry'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS POP TARTS, Frosted chocolate fudge'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS POP TARTS, Frosted raspberry'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS POP TARTS, Smores'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS POP TARTS, Strawberry'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS POP TARTS, Frosted strawberry'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS POP TARTS, Frosted wild berry'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS LOW FAT POP TARTS, Frosted brown sugar cinnamon'
        }, {
                value: 'Toaster Pastries, KELLOGG, KELLOGGS LOW FAT POP TARTS, Frosted strawberry'
        }, {
                value: 'KELLOGG, KELLOGGS EGGO, Buttermilk Pancake'
        }, {
                value: 'KELLOGG, KELLOGS NUTRI-GRAIN CEREAL BARS, Mixed Berry'
        }, {
                value: 'KELLOGGS, EGGO, Waffles, Homestyle, Low Fat'
        }, {
                value: 'KELLOGGS, EGGO, NUTRI-GRAIN, Waffles, Low Fat'
        }, {
                value: 'KELLOGGS EGGO Lowfat Blueberry Nutri-Grain Waffles'
        }, {
                value: 'ARCHWAY Home Style Cookies, Sugar Free Oatmeal'
        }, {
                value: 'ARCHWAY Home Style Cookies, Chocolate Chip Ice Box'
        }, {
                value: 'ARCHWAY Home Style Cookies, Coconut Macaroon'
        }, {
                value: 'ARCHWAY Home Style Cookies, Date Filled Oatmeal'
        }, {
                value: 'ARCHWAY Home Style Cookies, Dutch Cocoa'
        }, {
                value: 'ARCHWAY Home Style Cookies, Frosty Lemon'
        }, {
                value: 'ARCHWAY Home Style Cookies, Iced Molasses'
        }, {
                value: 'ARCHWAY Home Style Cookies, Iced Oatmeal'
        }, {
                value: 'ARCHWAY Home Style Cookies, Molasses'
        }, {
                value: 'ARCHWAY Home Style Cookies, Oatmeal'
        }, {
                value: 'ARCHWAY Home Style Cookies, Oatmeal Raisin'
        }, {
                value: 'ARCHWAY Home Style Cookies, Old Fashioned Molasses'
        }, {
                value: 'ARCHWAY Home Style Cookies, Old Fashioned Windmill Cookies'
        }, {
                value: 'ARCHWAY Home Style Cookies, Peanut Butter'
        }, {
                value: 'ARCHWAY Home Style Cookies, Raspberry Filled'
        }, {
                value: 'ARCHWAY Home Style Cookies, Strawberry Filled'
        }, {
                value: 'ARCHWAY Home Style Cookies, Reduced Fat Ginger Snaps'
        }, {
                value: 'Artificial Blueberry Muffin Mix, dry'
        }, {
                value: 'KRAFT, STOVE TOP Stuffing Mix Chicken Flavor'
        }, {
                value: 'GEORGE WESTON BAKERIES, Brownberry Sage and Onion Stuffing Mix, dry'
        }, {
                value: 'KEEBLER, KEEBLER Chocolate Graham SELECTS'
        }, {
                value: 'KEEBLER, Vanilla Wafers'
        }, {
                value: 'CONTINENTAL MILLS, KRUSTEAZ Almond Poppyseed Muffin Mix, Artificially Flavored, dry'
        }, {
                value: 'MCKEE BAKING, LITTLE DEBBIE NUTTY BARS, Wafers with Peanut Butter, Chocolate Covered'
        }, {
                value: 'MARTHA WHITE FOODS, Martha Whites Chewy Fudge Brownie Mix, dry'
        }, {
                value: 'MARTHA WHITE FOODS, Martha Whites Buttermilk Biscuit Mix, dry'
        }, {
                value: 'MISSION FOODS, MISSION Flour Tortillas, Soft Taco, 8 inch'
        }, {
                value: 'NABISCO, NABISCO GRAHAMS Crackers'
        }, {
                value: 'NABISCO, NABISCO OREO CRUNCHIES, Cookie Crumb Topping'
        }, {
                value: 'NABISCO, NABISCO RITZ Crackers'
        }, {
                value: 'PILLSBURY, Buttermilk Biscuits, Artificial Flavor, refrigerated dough'
        }, {
                value: 'PILLSBURY, Chocolate Chip Cookies, refrigerated dough'
        }, {
                value: 'PILLSBURY, Crusty French Loaf, refrigerated dough'
        }, {
                value: 'PILLSBURY, Traditional Fudge Brownie Mix, dry'
        }, {
                value: 'PILLSBURY GRANDS, Buttermilk Biscuits, refrigerated dough'
        }, {
                value: 'PILLSBURY Golden Layer Buttermilk Biscuits, Artificial Flavor, refrigerated dough'
        }, {
                value: 'PILLSBURY, Cinnamon Rolls with Icing, refrigerated dough'
        }, {
                value: 'KRAFT FOODS, SHAKE N BAKE ORIGINAL RECIPE, Coating for Pork, dry'
        }, {
                value: 'GEORGE WESTON BAKERIES, Thomas English Muffins'
        }, {
                value: 'HEINZ, WEIGHT WATCHER, Chocolate Eclair, frozen'
        }, {
                value: 'INTERSTATE BRANDS CORP, WONDER Hamburger Rolls'
        }, {
                value: 'GENERAL MILLS, BETTY CROCKER SUPERMOIST Yellow Cake Mix, dry'
        }, {
                value: 'NABISCO, NABISCO SNACKWELLS Fat Free Devils Food Cookie Cakes'
        }, {
                value: 'Crackers, cheese, sandwich-type with cheese filling'
        }, {
                value: 'USDA Commodity, Bakery, Flour Mix'
        }, {
                value: 'USDA Commodity, Bakery, Flour Mix Low-fat'
        }, {
                value: 'Waffles, buttermilk, frozen, ready-to-heat'
        }, {
                value: 'Waffle, buttermilk, frozen, ready-to-heat, toasted'
        }, {
                value: 'Waffle, buttermilk, frozen, ready-to-heat, microwaved'
        }, {
                value: 'Waffle, plain, frozen, ready-to-heat, microwave'
        }, {
                value: 'Pancakes, plain, frozen, ready-to-heat, microwave (includes buttermilk)'
        }, {
                value: 'Toaster Pastries, fruit, frosted (include apples, blueberry, cherry, strawberry)'
        }, {
                value: 'Toaster pastries, fruit, toasted (include apple, blueberry, cherry, strawberry)'
        }, {
                value: 'Muffin, blueberry, commercially prepared, low-fat'
        }, {
                value: 'Pie Crust, Cookie-type, Graham Cracker, Ready Crust'
        }, {
                value: 'Pie Crust, Cookie-type, Chocolate, Ready Crust'
        }, {
                value: 'Pie, Dutch Apple, Commercially Prepared'
        }, {
                value: 'Pie crust, deep dish, frozen, unbaked, made with enriched flour'
        }, {
                value: 'Pie crust, refrigerated, regular, baked'
        }, {
                value: 'Pie crust, deep dish, frozen, baked, made with enriched flour'
        }, {
                value: 'Pie crust, refrigerated, regular, unbaked'
        }, {
                value: 'Crackers, whole-wheat, reduced fat'
        }, {
                value: 'Crackers, wheat, reduced fat'
        }, {
                value: 'Waffles, chocolate chip, frozen, ready-to-heat'
        }, {
                value: 'Tostada shells, corn'
        }, {
                value: 'Bread, salvadoran sweet cheese (quesadilla salvadorena)'
        }, {
                value: 'Bread, pound cake type, pan de torta salvadoran'
        }, {
                value: 'Bread, pan dulce, sweet yeast bread'
        }, {
                value: 'Keikitos (muffins), Latino bakery item'
        }, {
                value: 'Cake, pound, BIMBO Bakeries USA, Panque Casero, home baked style'
        }, {
                value: 'Pan Dulce, LA RICURA, Salpora de Arroz con Azucar, cookie-like, contains wheat flour and rice flour'
        }, {
                value: 'Pastry, Pastelitos de Guava (guava pastries)'
        }, {
                value: 'Crackers, snack, GOYA CRACKERS'
        }, {
                value: 'Crackers, cream, GAMESA SABROSAS'
        }, {
                value: 'Crackers, cream, LA MODERNA RIKIS CREAM CRACKERS'
        }, {
                value: 'Garlic bread, frozen'
        }, {
                value: 'Cinnamon buns, frosted (includes honey buns)'
        }, {
                value: 'Crackers, cheese, reduced fat'
        }, {
                value: 'Crackers, saltines, whole wheat (includes multi-grain)'
        }, {
                value: 'Bread, white wheat'
        }, {
                value: 'Bagels, wheat'
        }, {
                value: 'Cream puff, eclair, custard or cream filled, iced'
        }, {
                value: 'Tortillas, ready-to-bake or -fry, flour, shelf stable'
        }, {
                value: 'Bread, potato'
        }, {
                value: 'Bread, cheese'
        }, {
                value: 'Focaccia, Italian flatbread, plain'
        }, {
                value: 'KASHI, TLC, Honey Sesame Crackers'
        }, {
                value: 'KASHI, TLC, Original 7-Grain Crackers'
        }, {
                value: 'KASHI, TLC, Country Cheddar Crackers'
        }, {
                value: 'KASHI, TLC, Toasted Asiago Crackers'
        }, {
                value: 'KASHI, Blueberry Waffle'
        }, {
                value: 'KASHI, H2H Woven Wheat Cracker, Original'
        }, {
                value: 'KASHI, Original Waffle'
        }, {
                value: 'KASHI, TLC, Fire Roasted Vegetable Crackers'
        }, {
                value: 'KASHI, H2H Woven Wheat Cracker, Roasted Garlic'
        }, {
                value: 'AUSTIN, Cheddar Cheese on Wheat Crackers, sandwich-type'
        }, {
                value: 'AUSTIN, Cheddar Cheese on Cheese Crackers, sandwich-type'
        }, {
                value: 'AUSTIN, Chocolatey Peanut Butter Crackers, sandwich-type'
        }, {
                value: 'AUSTIN, Grilled Cheese on Wafer Crackers, sandwich-type'
        }, {
                value: 'AUSTIN, Cheddar Cheese on Cheese Crackers, sandwich-type, reduced fat'
        }, {
                value: 'AUSTIN, Peanut Butter on Cheese Crackers, sandwich-type, reduced fat'
        }, {
                value: 'AUSTIN, Peanut Butter on Toasty Crackers, sandwich-type, reduced fat'
        }, {
                value: 'AUSTIN, PB & J Crackers, sandwich-type'
        }, {
                value: 'BARBARA DEE, Winter Mints Cookies'
        }, {
                value: 'KELLOGGS, BEANATURAL, Original 3-Bean Chips'
        }, {
                value: 'BEAR NAKED, Double Chocolate Cookies'
        }, {
                value: 'BEAR NAKED, Fruit & Nut Cookies'
        }, {
                value: 'KELLOGGS, EGGO, Biscuit Scramblers, Bacon, Egg & Cheese'
        }, {
                value: 'KELLOGGS, EGGO, Biscuit Scramblers, Egg & Cheese'
        }, {
                value: 'KELLOGGS, EGGO, French Toaster Sticks, Cinnamon'
        }, {
                value: 'KELLOGGS, EGGO, French Toaster Sticks, Original'
        }, {
                value: 'KELLOGGS, EGGO, Mini Muffin Tops, Blueberry'
        }, {
                value: 'SCHIFF,TIGERS MILK BAR'
        }, {
                value: 'Candies, TOBLERONE, milk chocolate with honey and almond nougat'
        }, {
                value: 'Snacks, beef jerky, chopped and formed'
        }, {
                value: 'Snacks, corn-based, extruded, chips, plain'
        }, {
                value: 'Snacks, corn-based, extruded, chips, barbecue-flavor'
        }, {
                value: 'Snacks, corn-based, extruded, cones, plain'
        }, {
                value: 'Snacks, corn-based, extruded, onion-flavor'
        }, {
                value: 'Snacks, corn-based, extruded, puffs or twists, cheese-flavor'
        }, {
                value: 'Snacks, KRAFT, CORNNUTS, plain'
        }, {
                value: 'Snacks, crisped rice bar, chocolate chip'
        }, {
                value: 'Snacks, fruit leather, pieces'
        }, {
                value: 'Snacks, fruit leather, rolls'
        }, {
                value: 'Snacks, granola bars, hard, plain'
        }, {
                value: 'Snacks, granola bars, hard, almond'
        }, {
                value: 'Snacks, granola bars, hard, chocolate chip'
        }, {
                value: 'Fruit syrup'
        }, {
                value: 'Snacks, granola bars, soft, uncoated, plain'
        }, {
                value: 'Snacks, granola bars, soft, uncoated, peanut butter'
        }, {
                value: 'Snacks, granola bars, soft, uncoated, raisin'
        }, {
                value: 'Snacks, granola bars, soft, coated, milk chocolate coating, chocolate chip'
        }, {
                value: 'Candies, honey-combed, with peanut butter'
        }, {
                value: 'Snacks, granola bars, soft, coated, milk chocolate coating, peanut butter'
        }, {
                value: 'Snacks, granola bars, soft, uncoated, peanut butter and chocolate chip'
        }, {
                value: 'Topping, SMUCKERS MAGIC SHELL'
        }, {
                value: 'Syrup, fruit flavored'
        }, {
                value: 'Snacks, oriental mix, rice-based'
        }, {
                value: 'Snacks, GENERAL MILLS, CHEX MIX, traditional flavor'
        }, {
                value: 'Snacks, popcorn, air-popped'
        }, {
                value: 'Snacks, popcorn, oil-popped, microwave, regular flavor, no trans fat'
        }, {
                value: 'Snacks, popcorn, cakes'
        }, {
                value: 'Snacks, popcorn, caramel-coated, with peanuts'
        }, {
                value: 'Snacks, popcorn, caramel-coated, without peanuts'
        }, {
                value: 'Snacks, popcorn, cheese-flavor'
        }, {
                value: 'Snacks, pork skins, plain'
        }, {
                value: 'Snacks, potato chips, barbecue-flavor'
        }, {
                value: 'Snacks, potato chips, sour-cream-and-onion-flavor'
        }, {
                value: 'Snacks, potato chips, made from dried potatoes, reduced fat'
        }, {
                value: 'Snacks, potato chips, made from dried potatoes, sour-cream and onion-flavor'
        }, {
                value: 'Snacks, pretzels, hard, plain, salted'
        }, {
                value: 'Snacks, pretzels, hard, confectioners coating, chocolate-flavor'
        }, {
                value: 'Snacks, M&M MARS, COMBOS Snacks Cheddar Cheese Pretzel'
        }, {
                value: 'Snacks, pretzels, hard, whole-wheat including both salted and unsalted'
        }, {
                value: 'Snacks, rice cracker brown rice, plain'
        }, {
                value: 'Snacks, rice cakes, brown rice, buckwheat'
        }, {
                value: 'Snacks, rice cakes, brown rice, sesame seed'
        }, {
                value: 'Snacks, tortilla chips, plain, white corn, salted'
        }, {
                value: 'Snacks, tortilla chips, nacho cheese'
        }, {
                value: 'Snacks, tortilla chips, ranch-flavor'
        }, {
                value: 'Snacks, trail mix, regular'
        }, {
                value: 'Snacks, trail mix, tropical'
        }, {
                value: 'Snacks, trail mix, regular, with chocolate chips, salted nuts and seeds'
        }, {
                value: 'Snacks, tortilla chips, taco-flavor'
        }, {
                value: 'Candies, TOOTSIE ROLL, chocolate-flavor roll'
        }, {
                value: 'Candies, ALMOND JOY Candy Bar'
        }, {
                value: 'Candies, TWIZZLERS CHERRY BITES'
        }, {
                value: 'Candies, NESTLE, BIT-O-HONEY Candy Chews'
        }, {
                value: 'Candies, NESTLE, BUTTERFINGER Bar'
        }, {
                value: 'Candies, butterscotch'
        }, {
                value: 'Candies, carob, unsweetened'
        }, {
                value: 'Candies, caramels'
        }, {
                value: 'Candies, CARAMELLO Candy Bar'
        }, {
                value: 'Candies, caramels, chocolate-flavor roll'
        }, {
                value: 'Baking chocolate, unsweetened, liquid'
        }, {
                value: 'Baking chocolate, unsweetened, squares'
        }, {
                value: 'Candies, confectioners coating, yogurt'
        }, {
                value: 'Candies, semisweet chocolate'
        }, {
                value: 'Candies, sweet chocolate'
        }, {
                value: 'Candies, sweet chocolate coated fondant'
        }, {
                value: 'Candies, HERSHEYS GOLDEN ALMOND SOLITAIRES'
        }, {
                value: 'Candies, confectioners coating, butterscotch'
        }, {
                value: 'Candies, confectioners coating, peanut butter'
        }, {
                value: 'Candies, white chocolate'
        }, {
                value: 'Ice creams, vanilla, light'
        }, {
                value: 'Ice creams, vanilla, rich'
        }, {
                value: 'Ice creams, french vanilla, soft-serve'
        }, {
                value: 'Candies, YORK Peppermint Pattie'
        }, {
                value: 'Candies, TWIZZLERS NIBS CHERRY BITS'
        }, {
                value: 'Candies, SYMPHONY Milk Chocolate Bar'
        }, {
                value: 'Desserts, flan, caramel custard, prepared-from-recipe'
        }, {
                value: 'Ice creams, vanilla'
        }, {
                value: 'Ice creams, vanilla, light, soft-serve'
        }, {
                value: 'Sherbet, orange'
        }, {
                value: 'Candies, 5TH AVENUE Candy Bar'
        }, {
                value: 'Candies, fondant, prepared-from-recipe'
        }, {
                value: 'Candies, fudge, chocolate, prepared-from-recipe'
        }, {
                value: 'Candies, fudge, chocolate, with nuts, prepared-from-recipe'
        }, {
                value: 'Candies, fudge, peanut butter, prepared-from-recipe'
        }, {
                value: 'Candies, fudge, vanilla, prepared-from-recipe'
        }, {
                value: 'Candies, fudge, vanilla with nuts'
        }, {
                value: 'Candies, NESTLE, GOOBERS Chocolate Covered Peanuts'
        }, {
                value: 'Candies, gumdrops, starch jelly pieces'
        }, {
                value: 'Candies, hard'
        }, {
                value: 'Candies, jellybeans'
        }, {
                value: 'Candies, KIT KAT Wafer Bar'
        }, {
                value: 'Candies, KRACKEL Chocolate Bar'
        }, {
                value: 'Candies, NESTLE, BABY RUTH Bar'
        }, {
                value: 'Candies, TWIZZLERS Strawberry Twists Candy'
        }, {
                value: 'Syrups, table blends, pancake, with butter'
        }, {
                value: 'Ice creams, chocolate, light'
        }, {
                value: 'Candies, MARS SNACKFOOD US, MARS Almond Bar'
        }, {
                value: 'Candies, marshmallows'
        }, {
                value: 'Candies, halavah, plain'
        }, {
                value: 'Candies, NESTLE, OH HENRY! Bar'
        }, {
                value: 'Candies, NESTLE, CHUNKY Bar'
        }, {
                value: 'Candies, milk chocolate'
        }, {
                value: 'Puddings, banana, dry mix, instant, prepared with 2% milk'
        }, {
                value: 'Puddings, banana, dry mix, regular, prepared with 2% milk'
        }, {
                value: 'Puddings, chocolate, dry mix, instant, prepared with 2% milk'
        }, {
                value: 'Baking chocolate, mexican, squares'
        }, {
                value: 'Chocolate-flavored hazelnut spread'
        }, {
                value: 'Candies, milk chocolate coated peanuts'
        }, {
                value: 'Candies, milk chocolate coated raisins'
        }, {
                value: 'Syrups, table blends, pancake, reduced-calorie'
        }, {
                value: 'Syrups, table blends, pancake'
        }, {
                value: 'Candies, HERSHEYS POT OF GOLD Almond Bar'
        }, {
                value: 'Candies, milk chocolate, with almonds'
        }, {
                value: 'Candies, milk chocolate, with rice cereal'
        }, {
                value: 'Candies, MARS SNACKFOOD US, MILKY WAY Bar'
        }, {
                value: 'Candies, HERSHEYS SKOR Toffee Bar'
        }, {
                value: 'Toppings, strawberry'
        }, {
                value: 'Candies, truffles, prepared-from-recipe'
        }, {
                value: 'Baking chocolate, MARS SNACKFOOD US, M&Ms Semisweet Chocolate Mini Baking Bits'
        }, {
                value: 'Candies, MARS SNACKFOOD US, M&Ms Peanut Chocolate Candies'
        }, {
                value: 'Candies, MARS SNACKFOOD US, M&Ms Milk Chocolate Candies'
        }, {
                value: 'Candies, MOUNDS Candy Bar'
        }, {
                value: 'Candies, MR. GOODBAR Chocolate Bar'
        }, {
                value: 'Candies, NESTLE, 100 GRAND Bar'
        }, {
                value: 'Candies, NESTLE, CRUNCH Bar and Dessert Topping'
        }, {
                value: 'Baking chocolate, MARS SNACKFOOD US, M&Ms Milk Chocolate Mini Baking Bits'
        }, {
                value: 'Candies, peanut bar'
        }, {
                value: 'Candies, peanut brittle, prepared-from-recipe'
        }, {
                value: 'Candies, NESTLE, RAISINETS Chocolate Covered Raisins'
        }, {
                value: 'Candies, REESES Peanut Butter Cups'
        }, {
                value: 'Candies, REESES PIECES Candy'
        }, {
                value: 'Candies, ROLO Caramels in Milk Chocolate'
        }, {
                value: 'Candies, NESTLE, AFTER EIGHT Mints'
        }, {
                value: 'Candies, sesame crunch'
        }, {
                value: 'Candies, MARS SNACKFOOD US, SNICKERS Bar'
        }, {
                value: 'Candies, MARS SNACKFOOD US, STARBURST Fruit Chews, Original fruits'
        }, {
                value: 'Candies, MARS SNACKFOOD US, M&Ms MINIs Milk Chocolate Candies'
        }, {
                value: 'Candies, MARS SNACKFOOD US, 3 MUSKETEERS Bar'
        }, {
                value: 'Candies, MARS SNACKFOOD US, TWIX Caramel Cookie Bars'
        }, {
                value: 'Candies, MARS SNACKFOOD US, TWIX Peanut Butter Cookie Bars'
        }, {
                value: 'Candies, WHATCHAMACALLIT Candy Bar'
        }, {
                value: 'Chewing gum'
        }, {
                value: 'Candies, SPECIAL DARK Chocolate Bar'
        }, {
                value: 'Cocoa, dry powder, unsweetened'
        }, {
                value: 'Cocoa, dry powder, unsweetened, processed with alkali'
        }, {
                value: 'Desserts, egg custard, baked, prepared-from-recipe'
        }, {
                value: 'Egg custards, dry mix'
        }, {
                value: 'Egg custards, dry mix, prepared with whole milk'
        }, {
                value: 'Cocoa, dry powder, unsweetened, HERSHEYS European Style Cocoa'
        }, {
                value: 'Gelatin desserts, dry mix'
        }, {
                value: 'Gelatin desserts, dry mix, prepared with water'
        }, {
                value: 'Gelatin desserts, dry mix, reduced calorie, with aspartame'
        }, {
                value: 'Gelatin desserts, dry mix, reduced calorie, with aspartame, prepared with water'
        }, {
                value: 'Gelatins, dry powder, unsweetened'
        }, {
                value: 'Candies, YORK BITES'
        }, {
                value: 'Desserts, mousse, chocolate, prepared-from-recipe'
        }, {
                value: 'Puddings, chocolate, ready-to-eat'
        }, {
                value: 'Puddings, chocolate, dry mix, instant'
        }, {
                value: 'Puddings, chocolate, dry mix, instant, prepared with whole milk'
        }, {
                value: 'Desserts, apple crisp, prepared-from-recipe'
        }, {
                value: 'Flan, caramel custard, dry mix'
        }, {
                value: 'Puddings, chocolate, dry mix, regular'
        }, {
                value: 'Puddings, chocolate, dry mix, regular, prepared with whole milk'
        }, {
                value: 'Puddings, chocolate, dry mix, regular, prepared with 2% milk'
        }, {
                value: 'Puddings, coconut cream, dry mix, instant, prepared with 2% milk'
        }, {
                value: 'Puddings, rice, ready-to-eat'
        }, {
                value: 'Puddings, rice, dry mix'
        }, {
                value: 'Puddings, rice, dry mix, prepared with whole milk'
        }, {
                value: 'Puddings, tapioca, dry mix'
        }, {
                value: 'Puddings, tapioca, dry mix, prepared with whole milk'
        }, {
                value: 'Puddings, vanilla, ready-to-eat'
        }, {
                value: 'Puddings, vanilla, dry mix, instant'
        }, {
                value: 'Puddings, vanilla, dry mix, instant, prepared with whole milk'
        }, {
                value: 'Puddings, lemon, dry mix, instant, prepared with 2% milk'
        }, {
                value: 'Egg custards, dry mix, prepared with 2% milk'
        }, {
                value: 'Puddings, vanilla, dry mix, regular'
        }, {
                value: 'Puddings, vanilla, dry mix, regular, prepared with whole milk'
        }, {
                value: 'Puddings, rice, dry mix, prepared with 2% milk'
        }, {
                value: 'Puddings, tapioca, dry mix, prepared with 2% milk'
        }, {
                value: 'Puddings, vanilla, dry mix, regular, prepared with 2% milk'
        }, {
                value: 'Rennin, chocolate, dry mix, prepared with 2% milk'
        }, {
                value: 'Rennin, vanilla, dry mix, prepared with 2% milk'
        }, {
                value: 'Candies, praline, prepared-from-recipe'
        }, {
                value: 'Frozen novelties, ice type, fruit, no sugar added'
        }, {
                value: 'Puddings, tapioca, ready-to-eat'
        }, {
                value: 'Puddings, coconut cream, dry mix, regular, prepared with 2% milk'
        }, {
                value: 'Desserts, rennin, chocolate, dry mix'
        }, {
                value: 'Rennin, chocolate, dry mix, prepared with whole milk'
        }, {
                value: 'Desserts, rennin, vanilla, dry mix'
        }, {
                value: 'Rennin, vanilla, dry mix, prepared with whole milk'
        }, {
                value: 'Desserts, rennin, tablets, unsweetened'
        }, {
                value: 'Frostings, chocolate, creamy, ready-to-eat'
        }, {
                value: 'Frostings, coconut-nut, ready-to-eat'
        }, {
                value: 'Frostings, cream cheese-flavor, ready-to-eat'
        }, {
                value: 'Frostings, vanilla, creamy, ready-to-eat'
        }, {
                value: 'Flan, caramel custard, dry mix, prepared with 2% milk'
        }, {
                value: 'Flan, caramel custard, dry mix, prepared with whole milk'
        }, {
                value: 'Puddings, vanilla, ready-to-eat, fat free'
        }, {
                value: 'Puddings, tapioca, ready-to-eat, fat free'
        }, {
                value: 'Puddings, chocolate, ready-to-eat, fat free'
        }, {
                value: 'Candies, HERSHEYS MILK CHOCOLATE WITH ALMOND BITES'
        }, {
                value: 'Candies, REESES BITES'
        }, {
                value: 'Candies, REESES NUTRAGEOUS Candy Bar'
        }, {
                value: 'Frostings, chocolate, creamy, dry mix'
        }, {
                value: 'Frostings, chocolate, creamy, dry mix, prepared with butter'
        }, {
                value: 'Candies, HEATH BITES'
        }, {
                value: 'Frostings, vanilla, creamy, dry mix'
        }, {
                value: 'Frostings, white, fluffy, dry mix'
        }, {
                value: 'Frostings, white, fluffy, dry mix, prepared with water'
        }, {
                value: 'Candies, HERSHEYS, ALMOND JOY BITES'
        }, {
                value: 'Candies, HERSHEY, REESESTICKS crispy wafers, peanut butter, milk chocolate'
        }, {
                value: 'Candies, HERSHEY, KIT KAT BIG KAT Bar'
        }, {
                value: 'Candies, REESES, FAST BREAK, milk chocolate peanut butter and soft nougats'
        }, {
                value: 'Candies, MARS SNACKFOOD US, DOVE Milk Chocolate'
        }, {
                value: 'Candies, MARS SNACKFOOD US, DOVE Dark Chocolate'
        }, {
                value: 'Candies, MARS SNACKFOOD US, MILKY WAY Caramels, milk chocolate covered'
        }, {
                value: 'Candies, MARS SNACKFOOD US, MILKY WAY Caramels. dark chocolate covered'
        }, {
                value: 'Ice creams, vanilla, light, no sugar added'
        }, {
                value: 'Frozen novelties, fruit and juice bars'
        }, {
                value: 'Ice creams, chocolate, light, no sugar added'
        }, {
                value: 'Candies, dark chocolate coated coffee beans'
        }, {
                value: 'Snacks, GENERAL MILLS, BETTY CROCKER Fruit Roll Ups, berry flavored, with vitamin C'
        }, {
                value: 'Ice creams, chocolate'
        }, {
                value: 'Ice creams, strawberry'
        }, {
                value: 'Snacks, FARLEY CANDY, FARLEY Fruit Snacks, with vitamins A, C, and E'
        }, {
                value: 'Snacks, SUNKIST, SUNKIST Fruit Roll, strawberry, with vitamins A, C, and E'
        }, {
                value: 'Snacks, fruit leather, pieces, with vitamin C'
        }, {
                value: 'Candies, milk chocolate coated coffee beans'
        }, {
                value: 'Frozen novelties, ice type, lime'
        }, {
                value: 'Frozen novelties, ice type, italian, restaurant-prepared'
        }, {
                value: 'Frozen novelties, ice type, pop'
        }, {
                value: 'Candies, MARS SNACKFOOD US, M&Ms Crispy Chocolate Candies'
        }, {
                value: 'Frozen yogurts, vanilla, soft-serve'
        }, {
                value: 'Fruit butters, apple'
        }, {
                value: 'Candies, MARS SNACKFOOD US, SNICKERS MUNCH bar'
        }, {
                value: 'Jams and preserves'
        }, {
                value: 'Jellies'
        }, {
                value: 'Candies, fudge, chocolate marshmallow, with nuts, prepared-by-recipe'
        }, {
                value: 'Candies, MARS SNACKFOOD US, SNICKERS Almond bar'
        }, {
                value: 'Marmalade, orange'
        }, {
                value: 'Molasses'
        }, {
                value: 'Candies, MARS SNACKFOOD US, POPABLES SNICKERS Brand Bite Size Candies'
        }, {
                value: 'Candies, MARS SNACKFOOD US, POPABLES MILKY WAY Brand Bite Size Candies'
        }, {
                value: 'Candies, MARS SNACKFOOD US, POPABLES 3 MUSKETEERS Brand Bite Size Candies'
        }, {
                value: 'Candies, MARS SNACKFOOD US, STARBURST Fruit Chews, Fruit and Creme'
        }, {
                value: 'Pectin, unsweetened, dry mix'
        }, {
                value: 'Pie fillings, apple, canned'
        }, {
                value: 'Candies, MARS SNACKFOOD US, STARBURST Fruit Chews, Tropical fruits'
        }, {
                value: 'Pie fillings, canned, cherry'
        }, {
                value: 'Candies, MARS SNACKFOOD US, STARBURST Sour Fruit Chews'
        }, {
                value: 'Puddings, banana, dry mix, instant'
        }, {
                value: 'Puddings, banana, dry mix, instant, prepared with whole milk'
        }, {
                value: 'Puddings, banana, dry mix, regular'
        }, {
                value: 'Puddings, banana, dry mix, regular, prepared with whole milk'
        }, {
                value: 'Puddings, coconut cream, dry mix, instant'
        }, {
                value: 'Puddings, coconut cream, dry mix, instant, prepared with whole milk'
        }, {
                value: 'Puddings, coconut cream, dry mix, regular'
        }, {
                value: 'Puddings, coconut cream, dry mix, regular, prepared with whole milk'
        }, {
                value: 'Candies, MARS SNACKFOOD US, COCOAVIA Chocolate Bar'
        }, {
                value: 'Candies, MARS SNACKFOOD US, COCOAVIA Blueberry and Almond Chocolate Bar'
        }, {
                value: 'Candies, MARS SNACKFOOD US, COCOAVIA Crispy Chocolate Bar'
        }, {
                value: 'Puddings, lemon, dry mix, instant'
        }, {
                value: 'Puddings, lemon, dry mix, instant, prepared with whole milk'
        }, {
                value: 'Puddings, lemon, dry mix, regular'
        }, {
                value: 'Pudding, lemon, dry mix, regular, prepared with sugar, egg yolk and water'
        }, {
                value: 'Sugars, brown'
        }, {
                value: 'Sugars, granulated'
        }, {
                value: 'Sugars, powdered'
        }, {
                value: 'Sweeteners, tabletop, aspartame, EQUAL, packets'
        }, {
                value: 'Sugars, maple'
        }, {
                value: 'Syrups, chocolate, HERSHEYS Genuine Chocolate Flavored Lite Syrup'
        }, {
                value: 'Syrups, chocolate, fudge-type'
        }, {
                value: 'Syrups, corn, dark'
        }, {
                value: 'Syrups, corn, light'
        }, {
                value: 'Syrups, corn, high-fructose'
        }, {
                value: 'Syrups, malt'
        }, {
                value: 'Syrups, maple'
        }, {
                value: 'Syrups, sorghum'
        }, {
                value: 'Candies, MARS SNACKFOOD US, SNICKERS CRUNCHER'
        }, {
                value: 'Syrups, table blends, pancake, with 2% maple'
        }, {
                value: 'Syrups, table blends, cane and 15% maple'
        }, {
                value: 'Syrups, table blends, corn, refiner, and sugar'
        }, {
                value: 'Candies, MARS SNACKFOOD US, SKITTLES Wild Berry Bite Size Candies'
        }, {
                value: 'Toppings, butterscotch or caramel'
        }, {
                value: 'Toppings, marshmallow cream'
        }, {
                value: 'Toppings, pineapple'
        }, {
                value: 'Toppings, nuts in syrup'
        }, {
                value: 'Candies, MARS SNACKFOOD US, SKITTLES Tropical Bite Size Candies'
        }, {
                value: 'Candies, MARS SNACKFOOD US, SKITTLES Sours Original'
        }, {
                value: 'Candies, MARS SNACKFOOD US, SKITTLES Original Bite Size Candies'
        }, {
                value: 'Frostings, vanilla, creamy, dry mix, prepared with margarine'
        }, {
                value: 'Frostings, chocolate, creamy, dry mix, prepared with margarine'
        }, {
                value: 'Frostings, glaze, prepared-from-recipe'
        }, {
                value: 'Candies, fudge, chocolate marshmallow, prepared-from-recipe'
        }, {
                value: 'Candies, taffy, prepared-from-recipe'
        }, {
                value: 'Candies, toffee, prepared-from-recipe'
        }, {
                value: 'Candies, divinity, prepared-from-recipe'
        }, {
                value: 'Frozen novelties, ice type, pineapple-coconut'
        }, {
                value: 'Frozen yogurts, chocolate, soft-serve'
        }, {
                value: 'Snacks, banana chips'
        }, {
                value: 'Snacks, cornnuts, barbecue-flavor'
        }, {
                value: 'Snacks, crisped rice bar, almond'
        }, {
                value: 'Snacks, granola bars, soft, uncoated, chocolate chip'
        }, {
                value: 'Snacks, granola bars, soft, uncoated, chocolate chip, graham and marshmallow'
        }, {
                value: 'Snacks, granola bars, soft, uncoated, nut and raisin'
        }, {
                value: 'Snacks, beef sticks, smoked'
        }, {
                value: 'Snacks, pork skins, barbecue-flavor'
        }, {
                value: 'Frostings, glaze, chocolate, prepared-from-recipe, with butter, NFSMI Recipe No. C-32'
        }, {
                value: 'Snack, potato chips, made from dried potatoes, plain'
        }, {
                value: 'Snacks, potato chips, plain, salted'
        }, {
                value: 'Snacks, potato chips, made from dried potatoes, cheese-flavor'
        }, {
                value: 'Snacks, rice cakes, brown rice, corn'
        }, {
                value: 'Snacks, rice cakes, brown rice, multigrain'
        }, {
                value: 'Snacks, potato sticks'
        }, {
                value: 'Snacks, rice cakes, brown rice, rye'
        }, {
                value: 'Snacks, sesame sticks, wheat-based, salted'
        }, {
                value: 'Snacks, corn cakes'
        }, {
                value: 'Snacks, granola bars, hard, peanut butter'
        }, {
                value: 'Snacks, potato chips, cheese-flavor'
        }, {
                value: 'Snacks, potato chips, reduced fat'
        }, {
                value: 'Snacks, potato chips, fat-free, made with olestra'
        }, {
                value: 'Snacks, tortilla chips, nacho-flavor, reduced fat'
        }, {
                value: 'Tortilla chips, low fat, baked without fat'
        }, {
                value: 'Cheese puffs and twists, corn based, baked, low fat'
        }, {
                value: 'Snacks, granola bar, fruit-filled, nonfat'
        }, {
                value: 'Popcorn, sugar syrup/caramel, fat-free'
        }, {
                value: 'Snacks, potato chips, fat free, salted'
        }, {
                value: 'Snacks, KELLOGG, KELLOGGS RICE KRISPIES TREATS Squares'
        }, {
                value: 'Snacks, KELLOGG, KELLOGGS Low Fat Granola Bar, Crunchy Almond/Brown Sugar'
        }, {
                value: 'Snacks, M&M MARS, KUDOS Whole Grain Bar, chocolate chip'
        }, {
                value: 'Snacks, KELLOGGS, NUTRI-GRAIN Cereal Bars, fruit'
        }, {
                value: 'Snacks, tortilla chips, low fat, made with olestra, nacho cheese'
        }, {
                value: 'Snacks, potato chips, made from dried potatoes, fat-free, made with olestra'
        }, {
                value: 'Snacks, taro chips'
        }, {
                value: 'Candies, semisweet chocolate, made with butter'
        }, {
                value: 'Gelatin desserts, dry mix, with added ascorbic acid, sodium-citrate and salt'
        }, {
                value: 'Gelatin desserts, dry mix, reduced calorie, with aspartame, added phosphorus, potassium, sodium, vitamin C'
        }, {
                value: 'Gelatin desserts, dry mix, reduced calorie, with aspartame, no added sodium'
        }, {
                value: 'Puddings, banana, dry mix, instant, with added oil'
        }, {
                value: 'Puddings, banana, dry mix, regular, with added oil'
        }, {
                value: 'Puddings, lemon, dry mix, regular, with added oil, potassium, sodium'
        }, {
                value: 'Puddings, tapioca, dry mix, with no added salt'
        }, {
                value: 'Puddings, vanilla, dry mix, regular, with added oil'
        }, {
                value: 'Jams and preserves, apricot'
        }, {
                value: 'Syrups, table blends, pancake, with 2% maple, with added potassium'
        }, {
                value: 'Snacks, corn cakes, very low sodium'
        }, {
                value: 'Snacks, corn-based, extruded, puffs or twists, cheese-flavor, unenriched'
        }, {
                value: 'Snacks, corn-based, extruded, chips, barbecue-flavor, made with enriched masa flour'
        }, {
                value: 'Snacks, popcorn, air-popped (Unsalted)'
        }, {
                value: 'Snacks, popcorn, oil-popped, white popcorn, salt added'
        }, {
                value: 'Snacks, potato chips, plain, made with partially hydrogenated soybean oil, salted'
        }, {
                value: 'Snacks, potato chips, plain, made with partially hydrogenated soybean oil, unsalted'
        }, {
                value: 'Snacks, potato chips, plain, unsalted'
        }, {
                value: 'Snacks, pretzels, hard, plain, made with unenriched flour, salted'
        }, {
                value: 'Snacks, pretzels, hard, plain, made with unenriched flour, unsalted'
        }, {
                value: 'Snacks, pretzels, hard, plain, made with enriched flour, unsalted'
        }, {
                value: 'Snacks, rice cakes, brown rice, plain, unsalted'
        }, {
                value: 'Snacks, rice cakes, brown rice, buckwheat, unsalted'
        }, {
                value: 'Snacks, rice cakes, brown rice, multigrain, unsalted'
        }, {
                value: 'Snacks, rice cakes, brown rice, sesame seed, unsalted'
        }, {
                value: 'Snacks, sesame sticks, wheat-based, unsalted'
        }, {
                value: 'Snacks, trail mix, regular, unsalted'
        }, {
                value: 'Snacks, trail mix, regular, with chocolate chips, unsalted nuts and seeds'
        }, {
                value: 'Potato chips, without salt, reduced fat'
        }, {
                value: 'Snacks, tortilla chips, low fat, unsalted'
        }, {
                value: 'Frozen novelties, juice type, POPSICLE SCRIBBLERS'
        }, {
                value: 'Snacks, tortilla chips, nacho-flavor, made with enriched masa flour'
        }, {
                value: 'Candies, sugar-coated almonds'
        }, {
                value: 'Cocoa, dry powder, hi-fat or breakfast, plain'
        }, {
                value: 'Cocoa, dry powder, hi-fat or breakfast, processed with alkali'
        }, {
                value: 'Candies, soft fruit and nut squares'
        }, {
                value: 'Ice creams, vanilla, fat free'
        }, {
                value: 'Sweeteners, tabletop, sucralose, SPLENDA packets'
        }, {
                value: 'Frozen novelties, No Sugar Added, FUDGSICLE pops'
        }, {
                value: 'Frozen novelties, ice type, sugar free, orange, cherry, and grape POPSICLE pops'
        }, {
                value: 'Frozen novelties, KLONDIKE, SLIM-A-BEAR Fudge Bar, 98% fat free, no sugar added'
        }, {
                value: 'Ice creams, BREYERS, All Natural Light Vanilla'
        }, {
                value: 'Ice creams, BREYERS, All Natural Light French Vanilla'
        }, {
                value: 'Ice creams, BREYERS, 98% Fat Free Vanilla'
        }, {
                value: 'Ice creams, BREYERS, All Natural Light Vanilla Chocolate Strawberry'
        }, {
                value: 'Ice creams, BREYERS, All Natural Light Mint Chocolate Chip'
        }, {
                value: 'Ice creams, BREYERS, No Sugar Added, Butter Pecan'
        }, {
                value: 'Ice creams, BREYERS, No Sugar Added, French Vanilla'
        }, {
                value: 'Ice creams, BREYERS, No Sugar Added, Vanilla'
        }, {
                value: 'Ice creams, BREYERS, No Sugar Added, Vanilla Fudge Twirl'
        }, {
                value: 'Ice creams, BREYERS, No Sugar Added, Vanilla Chocolate Strawberry'
        }, {
                value: 'Frozen novelties, KLONDIKE, SLIM-A-BEAR Chocolate Cone'
        }, {
                value: 'Frozen novelties, KLONDIKE, SLIM-A-BEAR Vanilla Sandwich'
        }, {
                value: 'Frozen novelties, KLONDIKE, SLIM-A-BEAR, No Sugar Added, Stickless Bar'
        }, {
                value: 'Frozen novelties, No Sugar Added CREAMSICLE Pops'
        }, {
                value: 'Frozen novelties, Sugar Free, CREAMSICLE Pops'
        }, {
                value: 'Ice creams, BREYERS, All Natural Light French Chocolate'
        }, {
                value: 'Ice creams, BREYERS, 98% Fat Free Chocolate'
        }, {
                value: 'Ice creams, BREYERS, No Sugar Added, Chocolate Caramel'
        }, {
                value: 'Candies, REESEs Fast Break, milk chocolate, peanut butter, soft nougats, candy bar'
        }, {
                value: 'Candies, MARS SNACKFOOD US, COCOAVIA Chocolate Covered Almonds'
        }, {
                value: 'Ice creams, regular, low carbohydrate, vanilla'
        }, {
                value: 'Ice creams, regular, low carbohydrate, chocolate'
        }, {
                value: 'Chocolate, dark, 45- 59% cacao solids'
        }, {
                value: 'Chocolate, dark, 60-69% cacao solids'
        }, {
                value: 'Chocolate, dark, 70-85% cacao solids'
        }, {
                value: 'Candies, chocolate, dark, NFS (45-59% cacao solids 90%; 60-69% cacao solids 5%; 70-85% cacao solids 5%)'
        }, {
                value: 'Sweeteners, for baking, brown, contains sugar and sucralose'
        }, {
                value: 'Sweeteners, for baking, contains sugar and sucralose'
        }, {
                value: 'Sugar, turbinado'
        }, {
                value: 'Sweeteners, sugar substitute, granulated, brown'
        }, {
                value: 'Candies, crispy bar with peanut butter filling'
        }, {
                value: 'Syrup, maple, Canadian'
        }, {
                value: 'Sweetener, syrup, agave'
        }, {
                value: 'Candies, NESTLE, BUTTERFINGER Crisp'
        }, {
                value: 'Candies, M&M MARS 3 MUSKETEERS Truffle Crisp'
        }, {
                value: 'Syrups, chocolate, HERSHEYS Sugar free, Genuine Chocolate Flavored, Lite Syrup'
        }, {
                value: 'Candies, M&M MARS Pretzel Chocolate Candies'
        }, {
                value: 'Sweetener, herbal extract powder from Stevia leaf'
        }, {
                value: 'Candies, fruit snacks, with high vitamin C'
        }, {
                value: 'Jams, preserves, marmalades, sweetened with fruit juice'
        }, {
                value: 'Candies, Tamarind'
        }, {
                value: 'Candies, coconut bar, not chocolate covered'
        }, {
                value: 'Candies, HERSHEYS, PAYDAY Bar'
        }, {
                value: 'Syrup, NESTLE, chocolate'
        }, {
                value: 'Amaranth grain, uncooked'
        }, {
                value: 'Amaranth grain, cooked'
        }, {
                value: 'Arrowroot flour'
        }, {
                value: 'Barley, hulled'
        }, {
                value: 'Barley, pearled, raw'
        }, {
                value: 'Barley, pearled, cooked'
        }, {
                value: 'Buckwheat'
        }, {
                value: 'Buckwheat groats, roasted, dry'
        }, {
                value: 'Buckwheat groats, roasted, cooked'
        }, {
                value: 'Buckwheat flour, whole-groat'
        }, {
                value: 'Bulgur, dry'
        }, {
                value: 'Bulgur, cooked'
        }, {
                value: 'Corn grain, yellow'
        }, {
                value: 'Corn bran, crude'
        }, {
                value: 'Corn flour, whole-grain, yellow'
        }, {
                value: 'Corn flour, masa, enriched, white'
        }, {
                value: 'Corn flour, yellow, degermed, unenriched'
        }, {
                value: 'Corn flour, masa, unenriched, white'
        }, {
                value: 'Cornmeal, whole-grain, yellow'
        }, {
                value: 'Cornmeal, degermed, enriched, yellow'
        }, {
                value: 'Cornmeal, yellow, self-rising, bolted, plain, enriched'
        }, {
                value: 'Cornmeal, yellow, self-rising, bolted, with wheat flour added, enriched'
        }, {
                value: 'Cornmeal, yellow, self-rising, degermed, enriched'
        }, {
                value: 'Cornstarch'
        }, {
                value: 'Couscous, dry'
        }, {
                value: 'Couscous, cooked'
        }, {
                value: 'Hominy, canned, white'
        }, {
                value: 'Millet, raw'
        }, {
                value: 'Millet, cooked'
        }, {
                value: 'Oat bran, raw'
        }, {
                value: 'Oat bran, cooked'
        }, {
                value: 'Quinoa, uncooked'
        }, {
                value: 'Rice, brown, long-grain, raw'
        }, {
                value: 'Rice, brown, long-grain, cooked'
        }, {
                value: 'Oats'
        }, {
                value: 'Rice, brown, medium-grain, raw'
        }, {
                value: 'Rice, brown, medium-grain, cooked'
        }, {
                value: 'Rice, brown, parboiled, dry, UNCLE BENS'
        }, {
                value: 'Rice, white, long-grain, regular, raw, enriched'
        }, {
                value: 'Rice, white, long-grain, regular, enriched, cooked'
        }, {
                value: 'Rice, white, long-grain, parboiled, enriched, dry'
        }, {
                value: 'Rice, white, long-grain, parboiled, enriched, cooked'
        }, {
                value: 'Rice, white, long-grain, precooked or instant, enriched, dry'
        }, {
                value: 'Rice, white, long-grain, precooked or instant, enriched, prepared'
        }, {
                value: 'Rice, white, medium-grain, raw, enriched'
        }, {
                value: 'Rice, white, medium-grain, enriched, cooked'
        }, {
                value: 'Rice, white, short-grain, enriched, uncooked'
        }, {
                value: 'Rice, white, short-grain, enriched, cooked'
        }, {
                value: 'Rice, white, glutinous, unenriched, uncooked'
        }, {
                value: 'Rice, white, glutinous, unenriched, cooked'
        }, {
                value: 'Rice, white, steamed, Chinese restaurant'
        }, {
                value: 'Rice bran, crude'
        }, {
                value: 'Rice flour, white, unenriched'
        }, {
                value: 'Rye grain'
        }, {
                value: 'Rye flour, dark'
        }, {
                value: 'Rye flour, medium'
        }, {
                value: 'Rye flour, light'
        }, {
                value: 'Semolina, enriched'
        }, {
                value: 'Sorghum grain'
        }, {
                value: 'Tapioca, pearl, dry'
        }, {
                value: 'Triticale'
        }, {
                value: 'Triticale flour, whole-grain'
        }, {
                value: 'Wheat, hard red spring'
        }, {
                value: 'Wheat, hard red winter'
        }, {
                value: 'Wheat, soft red winter'
        }, {
                value: 'Wheat, hard white'
        }, {
                value: 'Wheat, soft white'
        }, {
                value: 'Wheat, durum'
        }, {
                value: 'Wheat bran, crude'
        }, {
                value: 'Wheat germ, crude'
        }, {
                value: 'Wheat flour, whole-grain'
        }, {
                value: 'Wheat flour, white, all-purpose, enriched, bleached'
        }, {
                value: 'Wheat flour, white, all-purpose, self-rising, enriched'
        }, {
                value: 'Wheat flour, white, bread, enriched'
        }, {
                value: 'Wheat flour, white, cake, enriched'
        }, {
                value: 'Wheat flour, white, tortilla mix, enriched'
        }, {
                value: 'Wheat, sprouted'
        }, {
                value: 'Wild rice, raw'
        }, {
                value: 'Wild rice, cooked'
        }, {
                value: 'Rice flour, brown'
        }, {
                value: 'Pasta, gluten-free, corn, dry'
        }, {
                value: 'Pasta, gluten-free, corn, cooked'
        }, {
                value: 'Pasta, fresh-refrigerated, plain, as purchased'
        }, {
                value: 'Pasta, fresh-refrigerated, plain, cooked'
        }, {
                value: 'Pasta, fresh-refrigerated, spinach, as purchased'
        }, {
                value: 'Pasta, fresh-refrigerated, spinach, cooked'
        }, {
                value: 'Pasta, homemade, made with egg, cooked'
        }, {
                value: 'Pasta, homemade, made without egg, cooked'
        }, {
                value: 'Macaroni, vegetable, enriched, dry'
        }, {
                value: 'Macaroni, vegetable, enriched, cooked'
        }, {
                value: 'Noodles, egg, dry, enriched'
        }, {
                value: 'Noodles, egg, enriched, cooked'
        }, {
                value: 'Noodles, egg, spinach, enriched, dry'
        }, {
                value: 'Noodles, egg, spinach, enriched, cooked'
        }, {
                value: 'Noodles, chinese, chow mein'
        }, {
                value: 'Noodles, japanese, soba, dry'
        }, {
                value: 'Noodles, japanese, soba, cooked'
        }, {
                value: 'Noodles, japanese, somen, dry'
        }, {
                value: 'Noodles, japanese, somen, cooked'
        }, {
                value: 'Noodles, flat, crunchy, Chinese restaurant'
        }, {
                value: 'Pasta, dry, enriched'
        }, {
                value: 'Pasta, cooked, enriched, without added salt'
        }, {
                value: 'Pasta, whole-wheat, dry'
        }, {
                value: 'Pasta, whole-wheat, cooked'
        }, {
                value: 'Spaghetti, spinach, dry'
        }, {
                value: 'Spaghetti, spinach, cooked'
        }, {
                value: 'Wheat flours, bread, unenriched'
        }, {
                value: 'Barley flour or meal'
        }, {
                value: 'Barley malt flour'
        }, {
                value: 'Oat flour, partially debranned'
        }, {
                value: 'Rice noodles, dry'
        }, {
                value: 'Rice noodles, cooked'
        }, {
                value: 'Pasta, whole grain, 51% whole wheat, remaining unenriched semolina, dry'
        }, {
                value: 'Pasta, whole grain, 51% whole wheat, remaining unenriched semolina, cooked'
        }, {
                value: 'Quinoa, cooked'
        }, {
                value: 'Wheat, KAMUT khorasan, uncooked'
        }, {
                value: 'Wheat, KAMUT khorasan, cooked'
        }, {
                value: 'Spelt, uncooked'
        }, {
                value: 'Spelt, cooked'
        }, {
                value: 'Teff, uncooked'
        }, {
                value: 'Teff, cooked'
        }, {
                value: 'Noodles, egg, cooked, enriched, with added salt'
        }, {
                value: 'Corn grain, white'
        }, {
                value: 'Corn flour, whole-grain, blue (harina de maiz morado)'
        }, {
                value: 'Corn flour, whole-grain, white'
        }, {
                value: 'Corn flour, yellow, masa, enriched'
        }, {
                value: 'Cornmeal, whole-grain, white'
        }, {
                value: 'Pasta, cooked, enriched, with added salt'
        }, {
                value: 'Cornmeal, degermed, enriched, white'
        }, {
                value: 'Cornmeal, white, self-rising, bolted, plain, enriched'
        }, {
                value: 'Cornmeal, white, self-rising, bolted, with wheat flour added, enriched'
        }, {
                value: 'Cornmeal, white, self-rising, degermed, enriched'
        }, {
                value: 'Hominy, canned, yellow'
        }, {
                value: 'Rice, white, long-grain, regular, cooked, enriched, with salt'
        }, {
                value: 'Wheat flour, white, all-purpose, enriched, calcium-fortified'
        }, {
                value: 'Noodles, egg, dry, unenriched'
        }, {
                value: 'Noodles, egg, unenriched, cooked, without added salt'
        }, {
                value: 'Pasta, dry, unenriched'
        }, {
                value: 'Pasta, cooked, unenriched, without added salt'
        }, {
                value: 'Cornmeal, degermed, unenriched, yellow'
        }, {
                value: 'Rice, white, long-grain, regular, raw, unenriched'
        }, {
                value: 'Rice, white, long-grain, regular, unenriched, cooked without salt'
        }, {
                value: 'Rice, white, long-grain, parboiled, unenriched, dry'
        }, {
                value: 'Rice, white, long-grain, parboiled, unenriched, cooked'
        }, {
                value: 'Rice, white, medium-grain, raw, unenriched'
        }, {
                value: 'Rice, white, medium-grain, cooked, unenriched'
        }, {
                value: 'Rice, white, short-grain, raw, unenriched'
        }, {
                value: 'Rice, white, short-grain, cooked, unenriched'
        }, {
                value: 'Semolina, unenriched'
        }, {
                value: 'Wheat flour, white, all-purpose, unenriched'
        }, {
                value: 'Noodles, egg, cooked, unenriched, with added salt'
        }, {
                value: 'Pasta, cooked, unenriched, with added salt'
        }, {
                value: 'Cornmeal, degermed, unenriched, white'
        }, {
                value: 'Spaghetti, protein-fortified, cooked, enriched (n x 25)'
        }, {
                value: 'Rice, white, long-grain, regular, cooked, unenriched, with salt'
        }, {
                value: 'Wheat flour, white, all-purpose, enriched, unbleached'
        }, {
                value: 'Spaghetti, protein-fortified, dry, enriched (n x 25)'
        }, {
                value: 'Wheat flour, white (industrial), 9% protein, bleached, enriched'
        }, {
                value: 'Wheat flour, white (industrial), 9% protein, bleached, unenriched'
        }, {
                value: 'Wheat flour, white (industrial), 10% protein, bleached, enriched'
        }, {
                value: 'Wheat flour, white (industrial), 10% protein, bleached, unenriched'
        }, {
                value: 'Wheat flour, white (industrial), 10% protein, unbleached, enriched'
        }, {
                value: 'Wheat flour, white (industrial), 15% protein, bleached, enriched'
        }, {
                value: 'Wheat flour, white (industrial), 15% protein, bleached, unenriched'
        }, {
                value: 'Wheat flour, white (industrial), 15% protein, unbleached, enriched'
        }, {
                value: 'Wheat flour, white (industrial), 13% protein, bleached, enriched'
        }, {
                value: 'Wheat flour, white (industrial), 13% protein, bleached, unenriched'
        }, {
                value: 'Wheat flour, white (industrial), 15% protein, bleached, enriched'
        }, {
                value: 'Wheat flour, white (industrial), 15% protein, bleached, unenriched'
        }, {
                value: 'Millet flour'
        }, {
                value: 'Sorghum flour, whole-grain'
        }, {
                value: 'Wheat flour, whole-grain, soft wheat'
        }, {
                value: 'Sorghum flour, refined, unenriched'
        }, {
                value: 'Rice, brown, parboiled, cooked, UNCLE BENS'
        }, {
                value: 'Pasta, whole grain, 51% whole wheat, remaining enriched semolina, cooked'
        }, {
                value: 'Pasta, whole grain, 51% whole wheat, remaining enriched semolina, dry'
        }, {
                value: 'Pasta, gluten-free, brown rice flour, cooked, TINKYADA'
        }, {
                value: 'Pasta, gluten-free, corn flour and quinoa flour, cooked, ANCIENT HARVEST'
        }, {
                value: 'Pasta, gluten-free, rice flour and rice bran extract, cooked, DE BOLES'
        }, {
                value: 'Pasta, gluten-free, corn and rice flour, cooked'
        }, {
                value: 'Fast foods, biscuit, with egg'
        }, {
                value: 'Fast foods, biscuit, with egg and bacon'
        }, {
                value: 'Fast foods, biscuit, with egg and ham'
        }, {
                value: 'Fast Foods, biscuit, with egg and sausage'
        }, {
                value: 'Fast foods, biscuit with egg and steak'
        }, {
                value: 'Fast foods, biscuit, with egg, cheese, and bacon'
        }, {
                value: 'Fast foods, biscuit, with ham'
        }, {
                value: 'Fast foods, biscuit, with sausage'
        }, {
                value: 'Fast foods, biscuit, with crispy chicken fillet'
        }, {
                value: 'Fast foods, croissant, with egg and cheese'
        }, {
                value: 'Fast foods, croissant, with egg, cheese, and bacon'
        }, {
                value: 'Fast foods, croissant, with egg, cheese, and ham'
        }, {
                value: 'Fast foods, croissant, with egg, cheese, and sausage'
        }, {
                value: 'Fast foods, egg, scrambled'
        }, {
                value: 'Fast foods, english muffin, with cheese and sausage'
        }, {
                value: 'Fast foods, english muffin, with egg, cheese, and canadian bacon'
        }, {
                value: 'Fast foods, english muffin, with egg, cheese, and sausage'
        }, {
                value: 'Fast foods, french toast with butter'
        }, {
                value: 'Fast foods, french toast sticks'
        }, {
                value: 'Fast foods, potatoes, hash browns, round pieces or patty'
        }, {
                value: 'Fast foods, vanilla, light, soft-serve ice cream, with cone'
        }, {
                value: 'Fast foods, sundae, caramel'
        }, {
                value: 'Fast foods, sundae, hot fudge'
        }, {
                value: 'Fast foods, sundae, strawberry'
        }, {
                value: 'Fast foods, shrimp, breaded and fried'
        }, {
                value: 'Fast foods, burrito, with beans'
        }, {
                value: 'Fast foods, burrito, with beans and cheese'
        }, {
                value: 'Fast foods, burrito, with beans and beef'
        }, {
                value: 'Fast foods, burrito, with beans, cheese, and beef'
        }, {
                value: 'Fast foods, nachos, with cheese'
        }, {
                value: 'Fast foods, nachos, with cheese, beans, ground beef, and tomatoes'
        }, {
                value: 'Fast foods, taco with beef, cheese and lettuce, hard shell'
        }, {
                value: 'Fast foods, taco salad'
        }, {
                value: 'Fast foods, cheeseburger; single, regular patty; plain'
        }, {
                value: 'Fast foods, cheeseburger; single, regular patty, with condiments'
        }, {
                value: 'Fast foods, cheeseburger; single, regular patty, with condiments and vegetables'
        }, {
                value: 'Fast foods, cheeseburger; double, regular patty; plain'
        }, {
                value: 'Fast foods, cheeseburger; double, regular patty, with condiments and vegetables'
        }, {
                value: 'Fast foods, cheeseburger, double, regular patty and bun, with condiments'
        }, {
                value: 'Fast foods, cheeseburger; double, regular, patty and bun; with condiments and vegetables'
        }, {
                value: 'Fast foods, cheeseburger; single, large patty; plain'
        }, {
                value: 'Fast foods, cheeseburger; single, large patty; with condiments and bacon'
        }, {
                value: 'Fast foods, cheeseburger; single, large patty; with condiments and vegetables'
        }, {
                value: 'Fast foods, cheeseburger; single, large patty; with condiments, vegetables and ham'
        }, {
                value: 'Fast foods, cheeseburger; double, large patty, with condiments and vegetables'
        }, {
                value: 'Fast foods, cheeseburger; triple, regular patty; plain'
        }, {
                value: 'Fast foods, chicken fillet sandwich, plain with pickles'
        }, {
                value: 'Fast foods, fish sandwich, with tartar sauce'
        }, {
                value: 'Fast foods, fish sandwich, with tartar sauce and cheese'
        }, {
                value: 'Fast foods, hamburger; single, regular patty; plain'
        }, {
                value: 'Fast foods, hamburger; single, regular patty; with condiments'
        }, {
                value: 'Fast foods, hamburger; single, regular patty; with condiments and vegetables'
        }, {
                value: 'Fast foods, hamburger; double, regular, patty; plain'
        }, {
                value: 'Fast foods, hamburger; double, regular patty; with condiments'
        }, {
                value: 'Fast foods, hamburger; single, large patty; plain'
        }, {
                value: 'Fast foods, hamburger; single, large patty; with condiments and vegetables'
        }, {
                value: 'Fast foods, hamburger; double, large patty; with condiments and vegetables'
        }, {
                value: 'Fast foods, hamburger, large, triple patty, with condiments'
        }, {
                value: 'Fast foods, hotdog, plain'
        }, {
                value: 'Fast foods, hotdog, with chili'
        }, {
                value: 'Fast foods, hotdog, with corn flour coating (corndog)'
        }, {
                value: 'Fast foods, roast beef sandwich, plain'
        }, {
                value: 'Fast foods, submarine sandwich, cold cut on white bread with lettuce and tomato'
        }, {
                value: 'Fast foods, submarine sandwich, roast beef on white bread with lettuce and tomato'
        }, {
                value: 'Fast foods, submarine sandwich, tuna on white bread with lettuce and tomato'
        }, {
                value: 'Fast foods, coleslaw'
        }, {
                value: 'Fast foods, hush puppies'
        }, {
                value: 'Fast foods, onion rings, breaded and fried'
        }, {
                value: 'Fast foods, potato, french fried in vegetable oil'
        }, {
                value: 'Fast foods, potato, mashed'
        }, {
                value: 'Side dishes, potato salad'
        }, {
                value: 'BURGER KING, Vanilla Shake'
        }, {
                value: 'Fast food, biscuit'
        }, {
                value: 'CHICK-FIL-A, Chick-n-Strips'
        }, {
                value: 'CHICK-FIL-A, hash browns'
        }, {
                value: 'School Lunch, pizza, BIG DADDYS LS 16" 51% Whole Grain Rolled Edge Cheese Pizza, frozen'
        }, {
                value: 'School Lunch, pizza, BIG DADDYS LS 16" 51% Whole Grain Rolled Edge Turkey Pepperoni Pizza, frozen'
        }, {
                value: 'School Lunch, pizza, TONYS SMARTPIZZA Whole Grain 4x6 Cheese Pizza 50/50 Cheese, frozen'
        }, {
                value: 'School Lunch, pizza, TONYS SMARTPIZZA Whole Grain 4x6 Pepperoni Pizza 50/50 Cheese, frozen'
        }, {
                value: 'School Lunch, pizza, TONYS Breakfast Pizza Sausage, frozen'
        }, {
                value: 'SUBWAY, sweet onion chicken teriyaki sub on white bread with lettuce, tomato and sweet onion sauce'
        }, {
                value: 'Fast foods, submarine sandwich, sweet onion chicken teriyaki on white bread with lettuce, tomato and sweet onion sauce'
        }, {
                value: 'SUBWAY, SUBWAY CLUB sub on white bread with lettuce and tomato'
        }, {
                value: 'Fast foods, submarine sandwich, turkey, roast beef and ham on white bread with lettuce and tomato'
        }, {
                value: 'Fast foods, submarine sandwich, oven roasted chicken on white bread with lettuce and tomato'
        }, {
                value: 'Fast foods, submarine sandwich, turkey breast on white bread with lettuce and tomato'
        }, {
                value: 'Fast foods, submarine sandwich, ham on white bread with lettuce and tomato'
        }, {
                value: 'SUBWAY, meatball marinara sub on white bread (no toppings)'
        }, {
                value: 'Fast foods, submarine sandwich, meatball marinara on white bread'
        }, {
                value: 'SUBWAY, steak & cheese sub on white bread with American cheese, lettuce and tomato'
        }, {
                value: 'Fast foods, submarine sandwich, steak and cheese on white bread with cheese, lettuce and tomato'
        }, {
                value: 'SUBWAY, B.L.T. sub on white bread with bacon, lettuce and tomato'
        }, {
                value: 'Fast foods, submarine sandwich, bacon, lettuce, and tomato on white bread'
        }, {
                value: 'Fast foods, hamburger, large, single patty, with condiments'
        }, {
                value: 'SUBWAY, turkey breast sub on white bread with lettuce and tomato'
        }, {
                value: 'SUBWAY, black forest ham sub on white bread with lettuce and tomato'
        }, {
                value: 'SUBWAY, roast beef sub on white bread with lettuce and tomato'
        }, {
                value: 'SUBWAY, oven roasted chicken sub on white bread with lettuce and tomato'
        }, {
                value: 'SUBWAY, cold cut sub on white bread with lettuce and tomato'
        }, {
                value: 'SUBWAY, tuna sub on white bread with lettuce and tomato'
        }, {
                value: 'Pizza, cheese topping, regular crust, frozen, cooked'
        }, {
                value: 'Pizza, cheese topping, rising crust, frozen, cooked'
        }, {
                value: 'Pizza, meat and vegetable topping, regular crust, frozen, cooked'
        }, {
                value: 'Pizza, meat and vegetable topping, rising crust, frozen, cooked'
        }, {
                value: 'McDONALDS, Hamburger'
        }, {
                value: 'Fast foods, chicken, breaded and fried, boneless pieces, plain'
        }, {
                value: 'Fast Foods, crispy chicken filet sandwich, with lettuce and mayonnaise'
        }, {
                value: 'McDONALDS, FILET-O-FISH'
        }, {
                value: 'McDONALDS, Cheeseburger'
        }, {
                value: 'McDONALDS, QUARTER POUNDER'
        }, {
                value: 'McDONALDS, QUARTER POUNDER with Cheese'
        }, {
                value: 'McDONALDS, BIG MAC'
        }, {
                value: 'McDONALDS, french fries'
        }, {
                value: 'WENDYS, CLASSIC SINGLE Hamburger, no cheese'
        }, {
                value: 'WENDYS, CLASSIC SINGLE Hamburger, with cheese'
        }, {
                value: 'WENDYS, Jr. Hamburger, without cheese'
        }, {
                value: 'WENDYS, Jr. Hamburger, with cheese'
        }, {
                value: 'WENDYS, CLASSIC DOUBLE, with cheese'
        }, {
                value: 'WENDYS, Homestyle Chicken Fillet Sandwich'
        }, {
                value: 'WENDYS, Ultimate Chicken Grill Sandwich'
        }, {
                value: 'WENDYS, Chicken Nuggets'
        }, {
                value: 'WENDYS, french fries'
        }, {
                value: 'WENDYS, Frosty Dairy Dessert'
        }, {
                value: 'BURGER KING, french fries'
        }, {
                value: 'BURGER KING, Hamburger'
        }, {
                value: 'BURGER KING, Cheeseburger'
        }, {
                value: 'BURGER KING, WHOPPER, no cheese'
        }, {
                value: 'BURGER KING, WHOPPER, with cheese'
        }, {
                value: 'BURGER KING, DOUBLE WHOPPER, no cheese'
        }, {
                value: 'BURGER KING, DOUBLE WHOPPER, with cheese'
        }, {
                value: 'BURGER KING, Chicken Strips'
        }, {
                value: 'BURGER KING, Premium Fish Sandwich'
        }, {
                value: 'BURGER KING, Original Chicken Sandwich'
        }, {
                value: 'TACO BELL, Original Taco with beef, cheese and lettuce'
        }, {
                value: 'TACO BELL, Soft Taco with beef, cheese and lettuce'
        }, {
                value: 'TACO BELL, Soft Taco with chicken, cheese and lettuce'
        }, {
                value: 'TACO BELL, Soft Taco with steak'
        }, {
                value: 'TACO BELL, Bean Burrito'
        }, {
                value: 'TACO BELL, BURRITO SUPREME with beef'
        }, {
                value: 'TACO BELL, BURRITO SUPREME with chicken'
        }, {
                value: 'TACO BELL, BURRITO SUPREME with steak'
        }, {
                value: 'TACO BELL, Nachos'
        }, {
                value: 'TACO BELL, Nachos Supreme'
        }, {
                value: 'TACO BELL, Taco Salad'
        }, {
                value: 'PIZZA HUT 12" Cheese Pizza, Hand-Tossed Crust'
        }, {
                value: 'PIZZA HUT 12" Cheese Pizza, Pan Crust'
        }, {
                value: 'PIZZA HUT 12" Cheese Pizza, THIN N CRISPY Crust'
        }, {
                value: 'PIZZA HUT 12" Pepperoni Pizza, Hand-Tossed Crust'
        }, {
                value: 'PIZZA HUT 12" Pepperoni Pizza, Pan Crust'
        }, {
                value: 'PIZZA HUT 12" Super Supreme Pizza, Hand-Tossed Crust'
        }, {
                value: 'DOMINOS 14" Cheese Pizza, Classic Hand-Tossed Crust'
        }, {
                value: 'DOMINOS 14" Cheese Pizza, Ultimate Deep Dish Crust'
        }, {
                value: 'DOMINOS 14" Cheese Pizza, Crunchy Thin Crust'
        }, {
                value: 'DOMINOS 14" Pepperoni Pizza, Classic Hand-Tossed Crust'
        }, {
                value: 'DOMINOS 14" Pepperoni Pizza, Ultimate Deep Dish Crust'
        }, {
                value: 'DOMINOS 14" EXTRAVAGANZZA FEAST Pizza, Classic Hand-Tossed Crust'
        }, {
                value: 'PAPA JOHNS 14" Cheese Pizza, Original Crust'
        }, {
                value: 'PAPA JOHNS 14" Pepperoni Pizza, Original Crust'
        }, {
                value: 'PAPA JOHNS 14" The Works Pizza, Original Crust'
        }, {
                value: 'PAPA JOHNS 14" Cheese Pizza, Thin Crust'
        }, {
                value: 'LITTLE CAESARS 14" Original Round Cheese Pizza, Regular Crust'
        }, {
                value: 'LITTLE CAESARS 14" Original Round Pepperoni Pizza, Regular Crust'
        }, {
                value: 'LITTLE CAESARS 14" Original Round Meat and Vegetable Pizza, Regular Crust'
        }, {
                value: 'LITTLE CAESARS 14" Cheese Pizza, Large Deep Dish Crust'
        }, {
                value: 'LITTLE CAESARS 14" Pepperoni Pizza, Large Deep Dish Crust'
        }, {
                value: 'LITTLE CAESARS 14" Cheese Pizza, Thin Crust'
        }, {
                value: 'PIZZA HUT 14" Cheese Pizza, Hand-Tossed Crust'
        }, {
                value: 'PIZZA HUT 14" Cheese Pizza, Pan Crust'
        }, {
                value: 'PIZZA HUT 14" Cheese Pizza, THIN N CRISPY Crust'
        }, {
                value: 'PIZZA HUT 14" Pepperoni Pizza, Hand-Tossed Crust'
        }, {
                value: 'PIZZA HUT 14" Pepperoni Pizza, Pan Crust'
        }, {
                value: 'PIZZA HUT 14" Super Supreme Pizza, Hand-Tossed Crust'
        }, {
                value: 'Fast Food, Pizza Chain, 14" pizza, cheese topping, regular crust'
        }, {
                value: 'Fast Food, Pizza Chain, 14" pizza, cheese topping, thick crust'
        }, {
                value: 'Fast Food, Pizza Chain, 14" pizza, cheese topping, thin crust'
        }, {
                value: 'Fast Food, Pizza Chain, 14" pizza, pepperoni topping, regular crust'
        }, {
                value: 'Fast Food, Pizza Chain, 14" pizza, pepperoni topping, thick crust'
        }, {
                value: 'Fast Food, Pizza Chain, 14" pizza, meat and vegetable topping, regular crust'
        }, {
                value: 'Fast foods, griddle cake sandwich, egg, cheese, and sausage'
        }, {
                value: 'Fast foods, griddle cake sandwich, sausage'
        }, {
                value: 'Fast foods, griddle cake sandwich, egg, cheese, and bacon'
        }, {
                value: 'McDONALDS, Chicken McNUGGETS'
        }, {
                value: 'McDONALDS, Barbeque Sauce'
        }, {
                value: 'McDONALDS, Creamy Ranch Sauce'
        }, {
                value: 'McDONALDS, Hot Mustard Sauce'
        }, {
                value: 'McDONALDS, Spicy Buffalo Sauce'
        }, {
                value: 'McDONALDS, Sweet N Sour Sauce'
        }, {
                value: 'McDONALDS, Tangy Honey Mustard Sauce'
        }, {
                value: 'McDONALDS, Hash Brown'
        }, {
                value: 'McDONALDS, Hotcakes (plain)'
        }, {
                value: 'McDONALDS, Baked Apple Pie'
        }, {
                value: 'McDONALDS, Bacon, Egg & Cheese McGRIDDLES'
        }, {
                value: 'McDONALDS, Sausage McGRIDDLES'
        }, {
                value: 'McDONALDS, Sausage, Egg & Cheese McGRIDDLES'
        }, {
                value: 'McDONALDS, Vanilla Reduced Fat Ice Cream Cone'
        }, {
                value: 'McDONALDS, Strawberry Sundae'
        }, {
                value: 'McDONALDS, Hot Caramel Sundae'
        }, {
                value: 'McDONALDS, Hot Fudge Sundae'
        }, {
                value: 'McDONALDS, Peanuts (for Sundaes)'
        }, {
                value: 'McDONALDS, McFLURRY with M&MS CANDIES'
        }, {
                value: 'McDONALDS, McFLURRY with OREO cookies'
        }, {
                value: 'McDONALDS, Sausage Burrito'
        }, {
                value: 'McDONALDS, BIG BREAKFAST'
        }, {
                value: 'McDONALDS, Low Fat Caramel Sauce'
        }, {
                value: 'McDONALDS, Double Cheeseburger'
        }, {
                value: 'McDONALDS, DOUBLE QUARTER POUNDER with Cheese'
        }, {
                value: 'McDONALDS, NEWMANS OWN Cobb Dressing'
        }, {
                value: 'McDONALDS, NEWMANS OWN Creamy Caesar Dressing'
        }, {
                value: 'McDONALDS, NEWMANS OWN Low Fat Balsamic Vinaigrette'
        }, {
                value: 'McDONALDS, NEWMANS OWN Ranch Dressing'
        }, {
                value: 'McDONALDS, BIG MAC (without Big Mac Sauce)'
        }, {
                value: 'McDONALDS, McCHICKEN Sandwich'
        }, {
                value: 'McDONALDS, McCHICKEN Sandwich (without mayonnaise)'
        }, {
                value: 'McDONALDS, Egg McMUFFIN'
        }, {
                value: 'McDONALDS, Sausage McMUFFIN'
        }, {
                value: 'McDONALDS, Sausage McMUFFIN with Egg'
        }, {
                value: 'McDONALDS, Bacon Egg & Cheese Biscuit'
        }, {
                value: 'McDONALDS, Sausage Biscuit'
        }, {
                value: 'McDONALDS, Sausage Biscuit with Egg'
        }, {
                value: 'McDONALDS, Deluxe Breakfast, with syrup and margarine'
        }, {
                value: 'McDONALDS, Hotcakes and Sausage'
        }, {
                value: 'McDONALDS, Hotcakes (with 2 pats margarine & syrup)'
        }, {
                value: 'McDONALDS, Bacon Ranch Salad with Grilled Chicken'
        }, {
                value: 'McDONALDS Bacon Ranch Salad with Crispy Chicken'
        }, {
                value: 'McDONALDS, Bacon Ranch Salad without chicken'
        }, {
                value: 'McDONALDS, Side Salad'
        }, {
                value: 'McDONALDS, Fruit n Yogurt Parfait'
        }, {
                value: 'McDONALDS, Fruit n Yogurt Parfait (without granola)'
        }, {
                value: 'McDONALDS, FILET-O-FISH (without tartar sauce)'
        }, {
                value: 'BURGER KING, CROISSANWICH with Sausage, Egg and Cheese'
        }, {
                value: 'BURGER KING, CROISSANWICH with Sausage and Cheese'
        }, {
                value: 'BURGER KING, CROISSANWICH with Egg and Cheese'
        }, {
                value: 'BURGER KING, french toast sticks'
        }, {
                value: 'BURGER KING, Hash Brown Rounds'
        }, {
                value: 'Fast foods, miniature cinnamon rolls'
        }, {
                value: 'Fast foods, hamburger; double, large patty; with condiments, vegetables and mayonnaise'
        }, {
                value: 'Fast foods, hamburger; single, large patty; with condiments, vegetables and mayonnaise'
        }, {
                value: 'Fast foods, hamburger; single, regular patty; double decker bun with condiments and special sauce'
        }, {
                value: 'Fast foods, cheeseburger; double, regular patty; with condiments'
        }, {
                value: 'Fast foods, cheeseburger; double, large patty; with condiments'
        }, {
                value: 'Fast foods, cheeseburger; single, large patty; with condiments, vegetables and mayonnaise'
        }, {
                value: 'Fast foods, cheeseburger; single, large patty; with condiments'
        }, {
                value: 'Fast Foods, cheeseburger; double, large patty; with condiments, vegetables and mayonnaise'
        }, {
                value: 'Fast foods, cheeseburger; double, regular patty; double decker bun with condiments and special sauce'
        }, {
                value: 'Fast foods, chicken tenders'
        }, {
                value: 'McDONALDS, Premium Grilled Chicken Classic Sandwich'
        }, {
                value: 'McDONALDS, Premium Crispy Chicken Classic Sandwich'
        }, {
                value: 'McDONALDS, Premium Grilled Chicken Club Sandwich'
        }, {
                value: 'McDONALDS, Premium Crispy Chicken Club Sandwich'
        }, {
                value: 'McDONALDS, Premium Grilled Chicken Ranch BLT Sandwich'
        }, {
                value: 'McDONALDS, Premium Crispy Chicken Ranch BLT Sandwich'
        }, {
                value: 'Fast foods, bagel, with egg, sausage patty, cheese, and condiments'
        }, {
                value: 'Fast foods, bagel, with breakfast steak, egg, cheese, and condiments'
        }, {
                value: 'Light Ice Cream, soft serve, blended with milk chocolate candies'
        }, {
                value: 'Light Ice Cream, soft serve, blended with cookie pieces'
        }, {
                value: 'POPEYES, biscuit'
        }, {
                value: 'POPEYES, Coleslaw'
        }, {
                value: 'POPEYES, Mild Chicken Strips, analyzed 2006'
        }, {
                value: 'POPEYES, Spicy Chicken Strips, analyzed 2006'
        }, {
                value: 'KFC, biscuit'
        }, {
                value: 'KFC, Coleslaw'
        }, {
                value: 'KFC, Crispy Chicken Strips'
        }, {
                value: 'KFC, Popcorn Chicken'
        }, {
                value: 'KFC, Fried Chicken, ORIGINAL RECIPE, Skin and Breading'
        }, {
                value: 'KFC, Fried Chicken, ORIGINAL RECIPE, Breast, meat only, skin and breading removed'
        }, {
                value: 'KFC, Fried Chicken, ORIGINAL RECIPE, Drumstick, meat only, skin and breading removed'
        }, {
                value: 'KFC, Fried Chicken, ORIGINAL RECIPE, Thigh, meat only, skin and breading removed'
        }, {
                value: 'KFC, Fried Chicken, ORIGINAL RECIPE, Wing, meat only, skin and breading removed'
        }, {
                value: 'KFC, Fried Chicken, EXTRA CRISPY, Skin and Breading'
        }, {
                value: 'KFC, Fried Chicken, EXTRA CRISPY, Breast, meat only, skin and breading removed'
        }, {
                value: 'KFC, Fried Chicken, EXTRA CRISPY, Drumstick, meat only, skin and breading removed'
        }, {
                value: 'KFC, Fried Chicken, EXTRA CRISPY, Thigh, meat only, skin and breading removed'
        }, {
                value: 'KFC, Fried Chicken, EXTRA CRISPY, Wing, meat only, skin and breading removed'
        }, {
                value: 'KFC, Fried Chicken, ORIGINAL RECIPE, Breast, meat and skin with breading'
        }, {
                value: 'KFC, Fried Chicken, ORIGINAL RECIPE, Drumstick, meat and skin with breading'
        }, {
                value: 'KFC, Fried Chicken, ORIGINAL RECIPE, Thigh, meat and skin with breading'
        }, {
                value: 'KFC, Fried Chicken, ORIGINAL RECIPE, Wing, meat and skin with breading'
        }, {
                value: 'KFC, Fried Chicken, EXTRA CRISPY, Breast, meat and skin with breading'
        }, {
                value: 'KFC, Fried Chicken, EXTRA CRISPY, Drumstick, meat and skin with breading'
        }, {
                value: 'KFC, Fried Chicken, EXTRA CRISPY, Thigh, meat and skin with breading'
        }, {
                value: 'KFC, Fried Chicken, EXTRA CRISPY, Wing, meat and skin with breading'
        }, {
                value: 'POPEYES, Fried Chicken, Mild, Breast, meat only, skin and breading removed'
        }, {
                value: 'POPEYES, Fried Chicken, Mild, Drumstick, meat only, skin and breading removed'
        }, {
                value: 'POPEYES, Fried Chicken, Mild, Skin and Breading'
        }, {
                value: 'POPEYES, Fried Chicken, Mild, Thigh, meat only, skin and breading removed'
        }, {
                value: 'POPEYES, Fried Chicken, Mild, Wing, meat only, skin and breading removed'
        }, {
                value: 'POPEYES, Fried Chicken, Mild, Breast, meat and skin with breading'
        }, {
                value: 'POPEYES, Fried Chicken, Mild, Drumstick, meat and skin with breading'
        }, {
                value: 'POPEYES, Fried Chicken, Mild, Thigh, meat and skin with breading'
        }, {
                value: 'POPEYES, Fried Chicken, Mild, Wing, meat and skin with breading'
        }, {
                value: 'Fast foods, grilled chicken, bacon and tomato club sandwich, with cheese, lettuce, and mayonnaise'
        }, {
                value: 'Fast foods, crispy chicken, bacon, and tomato club sandwich, with cheese, lettuce, and mayonnaise'
        }, {
                value: 'Yogurt parfait, lowfat, with fruit and granola'
        }, {
                value: 'Fast Foods, Fried Chicken, Breast, meat only, skin and breading removed'
        }, {
                value: 'Fast Foods, Fried Chicken, Drumstick, meat only, skin and breading removed'
        }, {
                value: 'Fast Foods, Fried Chicken, Thigh, meat only, skin and breading removed'
        }, {
                value: 'Fast Foods, Fried Chicken, Wing, meat only, skin and breading removed'
        }, {
                value: 'Fast Foods, Fried Chicken, Skin and breading from all pieces'
        }, {
                value: 'Fast Foods, Fried Chicken, Breast, meat and skin and breading'
        }, {
                value: 'Fast Foods, Fried Chicken, Drumstick, meat and skin with breading'
        }, {
                value: 'Fast Foods, Fried Chicken, Thigh, meat and skin and breading'
        }, {
                value: 'Fast Foods, Fried Chicken, Wing, meat and skin and breading'
        }, {
                value: 'DIGIORNO Pizza, cheese topping, cheese stuffed crust, frozen, baked'
        }, {
                value: 'DIGIORNO Pizza, cheese topping, rising crust, frozen, baked'
        }, {
                value: 'DIGIORNO Pizza, cheese topping, thin crispy crust, frozen, baked'
        }, {
                value: 'DIGIORNO Pizza, pepperoni topping, cheese stuffed crust, frozen, baked'
        }, {
                value: 'DIGIORNO Pizza, pepperoni topping, rising crust, frozen, baked'
        }, {
                value: 'DIGIORNO Pizza, pepperoni topping, thin crispy crust, frozen, baked'
        }, {
                value: 'DIGIORNO Pizza, supreme topping, rising crust, frozen, baked'
        }, {
                value: 'DIGIORNO Pizza, supreme topping, thin crispy crust, frozen, baked'
        }, {
                value: 'Fast Food, Pizza Chain, 14" pizza, sausage topping, thick crust'
        }, {
                value: 'Fast Food, Pizza Chain, 14" pizza, sausage topping, thin crust'
        }, {
                value: 'Fast Food, Pizza Chain, 14" pizza, sausage topping, regular crust'
        }, {
                value: 'Fast Food, Pizza Chain, 14" pizza, pepperoni topping, thin crust'
        }, {
                value: 'Fast foods, taco with beef, cheese and lettuce, soft'
        }, {
                value: 'Fast foods, taco with chicken, lettuce and cheese, soft'
        }, {
                value: 'Fast foods, quesadilla, with chicken'
        }, {
                value: 'Fast Foods, grilled chicken filet sandwich, with lettuce, tomato and spread'
        }, {
                value: 'PIZZA HUT 14" Pepperoni Pizza, THIN N CRISPY Crust'
        }, {
                value: 'DOMINOS 14" Pepperoni Pizza, Crunchy Thin Crust'
        }, {
                value: 'DOMINOS 14" Sausage Pizza, Crunchy Thin Crust'
        }, {
                value: 'DOMINOS 14" Sausage Pizza, Classic Hand-Tossed Crust'
        }, {
                value: 'DOMINOS 14" Sausage Pizza, Ultimate Deep Dish Crust'
        }, {
                value: 'PIZZA HUT 14" Sausage Pizza, THIN N CRISPY Crust'
        }, {
                value: 'PIZZA HUT 14" Sausage Pizza, Hand-Tossed Crust'
        }, {
                value: 'PIZZA HUT 14" Sausage Pizza, Pan Crust'
        }, {
                value: 'KASHI Pizza, Roasted Vegetable, frozen, unprepared'
        }, {
                value: 'KASHI Pizza, Mushroom Trio & Spinach, frozen, unprepared'
        }, {
                value: 'KASHI Pizza, Margherita, frozen, unprepared'
        }, {
                value: 'KASHI Pizza, Mediterranean, frozen, unprepared'
        }, {
                value: 'Pizza, cheese topping, thin crust, frozen, cooked'
        }, {
                value: 'BURGER KING, Double Cheeseburger'
        }, {
                value: 'WENDYS, Double Stack, with cheese'
        }, {
                value: 'WENDYS, Crispy Chicken Sandwich'
        }, {
                value: 'BURGER KING, Onion Rings'
        }, {
                value: 'WENDYS, DAVES Hot N Juicy 1/4 LB, single'
        }, {
                value: 'Fast Food, Pizza Chain, 14" pizza, cheese topping, stuffed crust'
        }, {
                value: 'PIZZA HUT 14" Cheese Pizza, Stuffed Crust'
        }, {
                value: 'KASHI Pizza, Greek Tzatziki, single serve, frozen, unprepared'
        }, {
                value: 'KASHI Pizza, Tikka Masala, single serve, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Pizza, Baja Black Bean, single serve, frozen, unprepared'
        }, {
                value: 'KASHI Pizza, Mushroom and Spinach, single serve, frozen, unprepared'
        }, {
                value: 'Fast foods, crispy chicken in tortilla, with lettuce, cheese, and ranch sauce'
        }, {
                value: 'Fast foods, grilled chicken in tortilla, with lettuce, cheese, and ranch sauce'
        }, {
                value: 'Fast foods, breakfast burrito, with egg, cheese, and sausage'
        }, {
                value: 'Fast foods, breadstick, soft, prepared with garlic and parmesan cheese'
        }, {
                value: 'Fast foods, strawberry banana smoothie made with ice and low-fat yogurt'
        }, {
                value: 'McDONALDS, Southern Style Chicken Biscuit'
        }, {
                value: 'McDONALDS, RANCH SNACK WRAP, Crispy'
        }, {
                value: 'McDONALDS, RANCH SNACK WRAP, Grilled'
        }, {
                value: 'PIZZA HUT, breadstick, parmesan garlic'
        }, {
                value: 'CHICK-FIL-A, chicken sandwich'
        }, {
                value: 'ARBYS, roast beef sandwich, classic'
        }, {
                value: 'School Lunch, pizza, cheese topping, thin crust, whole grain, frozen, cooked'
        }, {
                value: 'School Lunch, pizza, cheese topping, thick crust, whole grain, frozen, cooked'
        }, {
                value: 'School Lunch, pizza, pepperoni topping, thin crust, whole grain, frozen, cooked'
        }, {
                value: 'School Lunch, pizza, pepperoni topping, thick crust, whole grain, frozen, cooked'
        }, {
                value: 'School Lunch, pizza, sausage topping, thin crust, whole grain, frozen, cooked'
        }, {
                value: 'School Lunch, pizza, sausage topping, thick crust, whole grain, frozen, cooked'
        }, {
                value: 'School Lunch, chicken patty, whole grain breaded'
        }, {
                value: 'School Lunch, chicken nuggets, whole grain breaded'
        }, {
                value: 'MORNINGSTAR FARMS Garden Veggie Patties, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Veggie Dog, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Grillers Burger Style Recipe Crumbles, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Grillers Vegan, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Breakfast Sausage Patties, frozen, unprepared'
        }, {
                value: 'MORNINGSTAR FARMS Spicy Black Bean Burger, frozen, unprepared'
        }, {
                value: 'LOMA LINDA Big Franks, canned, unprepared'
        }, {
                value: 'Macaroni and Cheese, canned entree'
        }, {
                value: 'Spaghetti with meat sauce, frozen entree'
        }, {
                value: 'Beef macaroni with tomato sauce, frozen entree, reduced fat'
        }, {
                value: 'Pasta with Sliced Franks in Tomato Sauce, canned entree'
        }, {
                value: 'Turkey Pot Pie, frozen entree'
        }, {
                value: 'Beef Pot Pie, frozen entree, prepared'
        }, {
                value: 'HOT POCKETS, CROISSANT POCKETS Chicken, Broccoli, and Cheddar Stuffed Sandwich, frozen'
        }, {
                value: 'HOT POCKETS Ham N Cheese Stuffed Sandwich, frozen'
        }, {
                value: 'Ravioli, cheese-filled, canned'
        }, {
                value: 'Ravioli, meat-filled, with tomato sauce or meat sauce, canned'
        }, {
                value: 'Tortellini, pasta with cheese filling, fresh-refrigerated, as purchased'
        }, {
                value: 'Pizza, meat topping, thick crust, frozen, cooked'
        }, {
                value: 'Pizza, pepperoni topping, regular crust, frozen, cooked'
        }, {
                value: 'Chili con carne with beans, canned entree'
        }, {
                value: 'Beef stew, canned entree'
        }, {
                value: 'Chicken pot pie, frozen entree, prepared'
        }, {
                value: 'Beef, corned beef hash, with potato, canned'
        }, {
                value: 'Lasagna, cheese, frozen, prepared'
        }, {
                value: 'Chili, no beans, canned entree'
        }, {
                value: 'Spaghetti, with meatballs in tomato sauce, canned'
        }, {
                value: 'Pasta with tomato sauce, no meat, canned'
        }, {
                value: 'Lasagna with meat & sauce, low-fat, frozen entree'
        }, {
                value: 'Lasagna with meat & sauce, frozen entree'
        }, {
                value: 'Burrito, beef and bean, frozen'
        }, {
                value: 'Burrito, bean and cheese, frozen'
        }, {
                value: 'Macaroni and Cheese, canned, microwavable'
        }, {
                value: 'Burrito, beef and bean, microwaved'
        }, {
                value: 'SPAGHETTIOS, Mini Beef Ravioli in Meat Sauce'
        }, {
                value: 'SPAGHETTIOS, Spaghetti in Tomato & Cheese Sauce'
        }, {
                value: 'SPAGHETTIOS, SpaghettiOs Original'
        }, {
                value: 'SPAGHETTIOS, SpaghettiOs  A to Zs'
        }, {
                value: 'SPAGHETTIOS, SpaghettiOs in Meat Sauce'
        }, {
                value: 'SPAGHETTIOS, SpaghettiOs plus Calcium'
        }, {
                value: 'SPAGHETTIOS, SpaghettiOs RavioliOs Beef Ravioli in Meat Sauce'
        }, {
                value: 'SPAGHETTIOS, SpaghettiOs with Meatballs'
        }, {
                value: 'SPAGHETTIOS, SpaghettiOs with Sliced Franks'
        }, {
                value: 'SPAGHETTIOS, SpaghettiOs A to Zs with Meatballs'
        }, {
                value: 'SUPPER BAKES MEAL KITS, Cheesy Chicken with pasta (chicken not included)'
        }, {
                value: 'SUPPER BAKES MEAL KITS, Creamy Stroganoff Sauce with pasta'
        }, {
                value: 'SUPPER BAKES MEAL KITS, Garlic Chicken with pasta (chicken not included)'
        }, {
                value: 'SUPPER BAKES MEAL KITS, Herb Chicken with rice (chicken not included)'
        }, {
                value: 'SUPPER BAKES MEAL KITS, Lemon Chicken with herb rice (chicken not included)'
        }, {
                value: 'SUPPER BAKES MEAL KITS, Savory Pork Chops with herb stuffing (pork chop not included)'
        }, {
                value: 'SUPPER BAKES MEAL KITS, Southwestern-Style Chicken w/rice (chicken not included)'
        }, {
                value: 'SUPPER BAKES MEAL KITS, Traditional Roast Chicken with stuffing (chicken not included)'
        }, {
                value: 'SWANSON, Chicken A La King'
        }, {
                value: 'SWANSON, Chicken and Dumplings'
        }, {
                value: 'Egg rolls, pork, refrigerated, heated'
        }, {
                value: 'Egg rolls, chicken, refrigerated, heated'
        }, {
                value: 'Egg rolls, vegetable, frozen, prepared'
        }, {
                value: 'Lasagna, Vegetable, frozen, baked'
        }, {
                value: 'Turkey, stuffing, mashed potatoes w/gravy, assorted vegetables, frozen, microwaved'
        }, {
                value: 'Rice bowl with chicken, frozen entree, prepared (includes fried, teriyaki, and sweet and sour varieties)'
        }, {
                value: 'Macaroni and cheese dinner with dry sauce mix, boxed, uncooked'
        }, {
                value: 'Macaroni and cheese, dry mix, prepared with 2% milk and 80% stick margarine from dry mix'
        }, {
                value: 'HOT POCKETS, meatballs & mozzarella stuffed sandwich, frozen'
        }, {
                value: 'LEAN POCKETS, Ham N Cheddar'
        }, {
                value: 'Lean Pockets, Meatballs & Mozzarella'
        }, {
                value: 'SPAGHETTIOS, SpaghettiOs Original, easy open'
        }, {
                value: 'SPAGHETTIOS, SpaghettiOs  with Meatballs - Easy Open'
        }, {
                value: 'Chili with beans, microwavable bowls'
        }, {
                value: 'Macaroni and cheese, frozen entree'
        }, {
                value: 'Potato salad with egg'
        }, {
                value: 'Pulled pork in barbecue sauce'
        }, {
                value: 'Corn dogs, frozen, prepared'
        }, {
                value: 'Chicken, nuggets, dark and white meat, precooked, frozen, not reheated'
        }, {
                value: 'Chicken, nuggets, white meat, precooked, frozen, not reheated'
        }, {
                value: 'Ravioli, cheese with tomato sauce, frozen, not prepared, includes regular and light entrees'
        }, {
                value: 'Lasagna with meat sauce, frozen, prepared'
        }, {
                value: 'Chicken tenders, breaded, frozen, prepared'
        }, {
                value: 'KASHI Black Bean Mango, frozen, unprepared'
        }, {
                value: 'KASHI, Chicken and Chipotle BBQ Sauce with Mango, Frozen Entree'
        }, {
                value: 'KASHI, Chicken Enchilada with Ancho Sauce, Frozen Entree'
        }, {
                value: 'KASHI, STEAM MEAL, Chicken Fettuccine, Frozen Entree'
        }, {
                value: 'KASHI, Chicken Florentine, Frozen Entree'
        }, {
                value: 'KASHI, Chicken Pasta Pomodoro, Frozen Entree'
        }, {
                value: 'KASHI, Lemongrass Coconut Chicken, Frozen Entree'
        }, {
                value: 'KASHI Mayan Harvest Bake, frozen, unprepared'
        }, {
                value: 'KASHI Pesto Pasta Primavera, frozen, unprepared'
        }, {
                value: 'KASHI, Pilaf, 7 Whole Grain, unprepared'
        }, {
                value: 'KASHI, Red Curry Chicken, Frozen Entree'
        }, {
                value: 'KASHI, STEAM MEAL, Roasted Garlic Chicken Farfalle, Frozen Entree'
        }, {
                value: 'KASHI, STEAM MEAL, Sesame Chicken, Frozen Entree'
        }, {
                value: 'KASHI, Southwest Style Chicken, Frozen Entree'
        }, {
                value: 'KASHI Spicy Black Bean Enchilada, frozen, unprepared'
        }, {
                value: 'KASHI Spinach Artichoke Pasta, frozen, unprepared'
        }, {
                value: 'KASHI, Sweet and Sour Chicken, Frozen Entree'
        }, {
                value: 'KASHI Three Cheese Penne, frozen, unprepared'
        }, {
                value: 'KASHI, Tuscan Veggie Bake, Frozen Entree'
        }, {
                value: 'Rice and vermicelli mix, chicken flavor, unprepared'
        }, {
                value: 'Rice and vermicelli mix, chicken flavor, prepared with 80% margarine'
        }, {
                value: 'Beef, shoulder pot roast or steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, short loin, t-bone steak, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, short loin, t-bone steak, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, short loin, t-bone steak, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, short loin, t-bone steak, separable lean and fat, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, round, knuckle, tip side, steak, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, knuckle, tip side, steak, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, round, knuckle, tip side, steak, separable lean and fat , trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, round, knuckle, tip side, steak, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck, shoulder clod, shoulder top and center steaks, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck, shoulder clod, shoulder top and center steaks, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, chuck, shoulder clod, shoulder top and center steaks, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck, shoulder clod, shoulder top and center steaks, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, chuck, shoulder clod, top blade, steak, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck, shoulder clod, top blade, steak, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, chuck, shoulder clod, top blade, steak, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck, shoulder clod, top blade, steak, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, round, knuckle, tip center, steak, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, knuckle, tip center, steak, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, round, knuckle, tip center, steak, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, round, knuckle, tip center, steak, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, round, outside round, bottom round, steak, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, outside round, bottom round, steak, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, round, outside round, bottom round, steak, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, round, outside round, bottom round, steak, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, round, knuckle, tip side, steak, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, knuckle, tip side, steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, chuck, shoulder clod, shoulder top and center steaks, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, shoulder clod, shoulder top and center steaks, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, chuck, shoulder clod, top blade, steak, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, shoulder clod, top blade, steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, round, knuckle, tip center, steak, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, knuckle, tip center, steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, round, outside round, bottom round, steak, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, outside round, bottom round, steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, chuck, short ribs, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck, short ribs, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck, short ribs, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck eye Country-Style ribs, boneless, separable lean only, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck eye Country-Style ribs, boneless, separable lean only, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck eye Country-Style ribs, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck eye Country-Style ribs, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck eye Country-Style ribs, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck eye Country-Style ribs, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck eye steak, boneless, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, chuck eye steak, boneless, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, chuck eye steak, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, chuck eye steak, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck eye steak, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck eye steak, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, shoulder pot roast, boneless, separable lean only, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, shoulder pot roast, boneless, separable lean only, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, shoulder pot roast, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, mock tender steak, boneless, separable lean only, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck, mock tender steak, boneless, separable lean only, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck, mock tender steak, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, mock tender steak, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck, mock tender steak, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck, mock tender steak, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck for stew, separable lean and fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck for stew, separable lean and fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck for stew, separable lean and fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck for stew, separable lean and fat, all grades, raw'
        }, {
                value: 'Beef, chuck for stew, separable lean and fat, select, raw'
        }, {
                value: 'Beef, chuck for stew, separable lean and fat, choice, raw'
        }, {
                value: 'Beef, chuck, under blade steak, boneless, separable lean only, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck, under blade steak, boneless, separable lean only, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck, under blade steak, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, under blade pot roast, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, rib eye steak, boneless, lip-on, separable lean only, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, rib eye roast, bone-in, lip-on, separable lean only, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, chuck, under blade pot roast or steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, under blade pot roast or steak, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck, under blade pot roast or steak, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, shoulder pot roast or steak, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, shoulder pot roast or steak, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck eye roast, boneless, Americas Beef Roast, separable lean and fat, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, chuck eye roast, boneless, Americas Beef Roast, separable lean and fat, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, chuck eye roast, boneless, Americas Beef Roast, separable lean and fat, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, chuck, under blade steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, under blade steak, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck, under blade steak, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck, mock tender steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, mock tender steak, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck, mock tender steak, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck, mock tender steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, mock tender steak, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck, mock tender steak, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck, short ribs, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, short ribs, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck, short ribs, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck, short ribs, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, short ribs, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck, short ribs, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, shoulder pot roast, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, shoulder pot roast, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, shoulder pot roast, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck eye Country-Style ribs, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck eye Country-Style ribs, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, chuck eye Country-Style ribs, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, chuck eye Country-Style ribs, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck eye Country-Style ribs, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck eye Country-Style ribs, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, chuck eye steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, chuck eye steak, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, chuck eye steak, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, chuck eye steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, chuck eye steak, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, chuck eye steak, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, rib eye roast, bone-in, lip-on, separable lean only, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, rib eye roast, bone-in, lip-on, separable lean only, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, rib eye steak, boneless, lip-on, separable lean only, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, boneless, lip-on, separable lean only, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak/roast, bone-in, lip-on, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, rib eye steak/roast, bone-in, lip-on, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, rib eye steak/roast, bone-in, lip-on, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, rib eye steak/roast, boneless, lip-on, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, rib eye steak/roast, boneless, lip-on, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, rib eye steak/roast, boneless, lip-on, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, rib eye steak, bone-in, lip-on, separable lean only, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, bone-in, lip-on, separable lean only, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, bone-in, lip-on, separable lean only, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, rib eye roast, boneless, lip-on, separable lean only, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, rib eye roast, boneless, lip-on, separable lean only, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, rib eye roast, boneless, lip-on, separable lean only, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, plate steak, boneless, inside skirt, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, plate steak, boneless, inside skirt, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, plate steak, boneless, inside skirt, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, plate steak, boneless, inside skirt, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, plate steak, boneless, inside skirt, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, plate steak, boneless, inside skirt, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, plate steak, boneless, outside skirt, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, plate steak, boneless, outside skirt, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, plate steak, boneless, outside skirt, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, plate steak, boneless, outside skirt, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, plate steak, boneless, outside skirt, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, plate steak, boneless, outside skirt, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, rib eye steak, boneless, lip off, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, boneless, lip off, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, rib eye steak, boneless, lip off, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, boneless, lip off, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, rib eye steak, boneless, lip off, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, boneless, lip off, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, rib, back ribs, bone-in, separable lean only, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, rib, back ribs, bone-in, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, rib, back ribs, bone-in, separable lean only, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, rib, back ribs, bone-in, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, rib, back ribs, bone-in, separable lean only, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, rib, back ribs, bone-in, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, rib eye steak, bone-in, lip-on, separable lean and fat, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, bone-in, lip-on, separable lean and fat, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, bone-in, lip-on, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, rib eye roast, bone-in, lip-on, separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, rib eye roast, bone-in, lip-on, separable lean and fat, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, rib eye roast, bone-in, lip-on, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, rib eye steak/roast, bone-in, lip-on, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, rib eye steak/roast, bone-in, lip-on, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, rib eye steak/roast, bone-in, lip-on, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, rib eye steak, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, rib eye roast, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, rib eye roast, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, rib eye roast, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, rib eye steak/roast, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, rib eye steak/roast, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, rib eye steak/roast, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, plate steak, boneless, inside skirt, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, plate steak, boneless, inside skirt, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, plate steak, boneless, inside skirt, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, plate steak, boneless, inside skirt, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, plate steak, boneless, inside skirt, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, plate steak, boneless, inside skirt, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, ground, unspecified fat content, cooked'
        }, {
                value: 'Beef, plate steak, boneless, outside skirt, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, plate steak, boneless, outside skirt, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, plate steak, boneless, outside skirt, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, plate steak, boneless, outside skirt, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, plate steak, boneless, outside skirt, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, plate steak, boneless, outside skirt, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, rib eye steak, boneless, lip off, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, boneless, lip off, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, boneless, lip off, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, rib eye steak, boneless, lip off, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, rib eye steak, boneless, lip off, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, rib eye steak, boneless, lip off, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, rib, back ribs, bone-in, separable lean and fat, trimmed to 0" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, rib, back ribs, bone-in, separable lean and fat, trimmed to 0" fat, choice, cooked, braised'
        }, {
                value: 'Beef, rib, back ribs, bone-in, separable lean and fat, trimmed to 0" fat, select, cooked, braised'
        }, {
                value: 'Beef, rib, back ribs, bone-in, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, rib, back ribs, bone-in, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, rib, back ribs, bone-in, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, loin, top sirloin petite roast, boneless, separable lean only, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, loin, top sirloin petite roast/filet, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, loin, top sirloin cap steak, boneless, separable lean only, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, loin, top sirloin cap steak, boneless, separable lean only, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, loin, top sirloin cap steak, boneless, separable lean only, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, loin, top sirloin cap steak, boneless, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, loin, top sirloin cap steak, boneless, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, loin, top sirloin cap steak, boneless, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, top loin filet, boneless, separable lean only, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, top loin filet, boneless, separable lean only, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, top loin filet, boneless, separable lean only, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, top loin petite roast, boneless, separable lean only, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, top loin petite roast, boneless, separable lean only, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, top loin petite roast, boneless, separable lean only, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, top loin petite roast/filet, boneless, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, top loin petite roast/filet, boneless, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, top loin petite roast/filet, boneless, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, loin, top sirloin filet, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, loin, top sirloin filet, boneless, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, loin, top sirloin filet, boneless, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, loin, top sirloin petite roast, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, loin, top sirloin petite roast, boneless, separable lean only, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, loin, top sirloin petite roast/filet, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, loin, top sirloin petite roast/filet, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, ribeye  petite roast/filet, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, ribeye  petite roast/filet, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, ribeye  petite roast/filet, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, ribeye cap steak, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, ribeye cap steak, boneless, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, ribeye cap steak, boneless, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, ribeye cap steak, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, ribeye cap steak, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, ribeye cap steak, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, ribeye filet, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, ribeye filet, boneless, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, ribeye filet, boneless, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, ribeye petite roast, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, ribeye petite roast, boneless, separable lean only, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, ribeye petite roast, boneless, separable lean only, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, loin, top sirloin cap steak, boneless, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, loin, top sirloin cap steak, boneless, separable lean and fat, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, loin, top sirloin cap steak, boneless, separable lean and fat, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, loin, top sirloin cap steak, boneless, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, loin, top sirloin cap steak, boneless, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, loin, top sirloin cap steak, boneless, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, top loin filet, boneless, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, top loin filet, boneless, separable lean and fat, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, top loin filet, boneless, separable lean and fat, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, top loin petite roast, boneless, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, top loin petite roast, boneless, separable lean and fat, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, top loin petite roast, boneless, separable lean and fat, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, top loin petite roast/filet, boneless, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, top loin petite roast/filet, boneless, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, top loin petite roast/filet, boneless, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, ground, 85% lean / 15% fat, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, loin, tenderloin steak/roast, boneless, separable lean only, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, loin, tenderloin steak/roast, boneless, separable lean only, Aust. marble score 4/5, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed,  external fat, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, seam fat, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, external fat, Aust. marble score 4/5, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, seam fat, Aust. marble score 4/5, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, external fat, Aust. marble score 9, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, seam fat, Aust. marble score 9, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, loin, tenderloin steak/roast, boneless, separable lean and fat, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, loin, top loin steak/roast, boneless, separable lean only, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, loin, tenderloin steak/roast, boneless, separable lean and fat, Aust. marble score 4/5, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, loin, top loin steak/roast, boneless, separable lean and fat, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, loin, top sirloin cap-off steak/roast, boneless, separable lean only, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, rib, ribeye steak/roast lip-on, boneless, separable lean only, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, round, bottom round steak/roast, boneless, separable lean only, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, round, top round cap-off steak/roast, boneless, separable lean only, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, loin, tenderloin steak/roast, boneless, separable lean only, Aust. marble score 9, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, loin, top loin steak/roast, boneless, separable lean only, Aust. marble score 4/5, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, loin, top loin steak/roast, boneless, separable lean only, Aust. marble score 9, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, rib, small end rib steak/roast, boneless, separable lean only, Aust. marble score 4/5, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, rib, small end rib steak/roast, boneless, separable lean only, Aust. marble score 9, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, loin, top sirloin cap-off steak/roast, boneless, separable lean and fat, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, rib, ribeye steak/roast lip-on, boneless, separable lean and fat, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, round, bottom round steak/roast, boneless, separable lean and fat, raw'
        }, {
                value: 'Beef, Australian, imported, grass-fed, round, top round cap-off steak/roast, boneless, separable lean and fat, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, loin, top loin steak/roast, boneless, separable lean and fat, Aust. marble score 4/5, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, loin, top loin steak/roast, separable lean and fat, Aust. marble score 9, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, rib, small end rib steak/roast, boneless, separable lean and fat, Aust. marble score 4/5, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, rib, small end rib steak/roast, boneless, separable lean and fat, Aust. marble score 9, raw'
        }, {
                value: 'Beef, Australian, imported, Wagyu, loin, tenderloin steak/roast, boneless, separable lean and fat, Aust. marble score 9, raw'
        }, {
                value: 'Beef, round, top round steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, top round steak, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, top round steak, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, round, top round roast, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, top round roast, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, top round roast, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, round, eye of round roast, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, eye of round roast, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, eye of round roast, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, round, eye of round steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, eye of round steak, boneless separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, eye of round steak, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, loin, tenderloin roast, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, loin, tenderloin roast, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, loin, tenderloin roast, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip off, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip off, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip off, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, loin, tenderloin steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, loin, tenderloin steak, boneless, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, loin, tenderloin steak, boneless, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, loin, tenderloin roast, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, loin, tenderloin roast, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, loin, tenderloin roast, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, top round roast, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, round, top round roast, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, top round roast, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, round, eye of round steak, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, round, eye of round steak, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, round, top round steak, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, top round steak, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, top round steak, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, round, top round roast, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, top round roast, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, top round roast, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, round, eye of round roast, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, eye of round roast, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, eye of round roast, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, round, eye of round steak, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, eye of round steak, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, eye of round steak, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, loin, tenderloin roast, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, loin, tenderloin roast, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, loin, tenderloin roast, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip off, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip off, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip off, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, loin, tenderloin steak, boneless, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, loin, tenderloin steak, boneless, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, loin, tenderloin steak, boneless, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, loin, tenderloin roast, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, loin, tenderloin roast, boneless, separable lean only, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, loin, tenderloin roast, separable lean only, boneless, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, top round roast, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, round, top round roast, boneless, separable lean only, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, top round roast, boneless, separable lean only, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round steak, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, round, eye of round steak, boneless, separable lean only, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, round, eye of round steak, boneless, separable lean only, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip-on, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip-on, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip-on, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip-on, separable lean only, trimmed to 1/8" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip-on, separable lean only, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip-on, separable lean only, trimmed to 1/8" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, loin, top loin steak, boneless, lip-on, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, New Zealand, imported, bolar blade, separable lean only, cooked, fast roasted'
        }, {
                value: 'Beef, New Zealand, imported, bolar blade, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, brisket navel end, separable lean only, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, brisket navel end, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, brisket point end, separable lean only, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, brisket point end, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, chuck eye roll, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, chuck eye roll, separable lean only, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, cube roll, separable lean only, cooked, fast roasted'
        }, {
                value: 'Beef, New Zealand, imported, cube roll, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, eye round, separable lean only, cooked, slow roasted'
        }, {
                value: 'Beef, New Zealand, imported, eye round, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, flank, separable lean only, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, flank, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, flat, separable lean only, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, flat, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, variety meats and by-products, heart, cooked, boiled'
        }, {
                value: 'Beef, New Zealand, imported, variety meats and by-products, heart, raw'
        }, {
                value: 'Beef, New Zealand, imported, hind shin, separable lean only, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, hind shin, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, inside, raw'
        }, {
                value: 'Beef, New Zealand, imported, intermuscular fat, cooked'
        }, {
                value: 'Beef, New Zealand, imported, intermuscular fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, variety meats and by-products, kidney, cooked, boiled'
        }, {
                value: 'Beef, New Zealand, imported, knuckle, cooked, fast fried'
        }, {
                value: 'Beef, New Zealand, imported, variety meats and by-products, kidney, raw'
        }, {
                value: 'Beef, New Zealand, imported, variety meats and by-products liver, cooked, boiled'
        }, {
                value: 'Beef, New Zealand, imported, variety meats and by-products, liver, raw'
        }, {
                value: 'Beef, New Zealand, imported, manufacturing beef, cooked, boiled'
        }, {
                value: 'Beef, New Zealand, imported, manufacturing beef, raw'
        }, {
                value: 'Beef, New Zealand, imported, oyster blade, separable lean only, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, oyster blade, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, ribs prepared, cooked, fast roasted'
        }, {
                value: 'Beef, New Zealand, imported, ribs prepared, raw'
        }, {
                value: 'Beef, New Zealand, imported, rump centre, separable lean only, cooked, fast fried'
        }, {
                value: 'Beef, New Zealand, imported, striploin, separable lean only, cooked, fast fried'
        }, {
                value: 'Beef, New Zealand, imported, striploin, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, subcutaneous fat, cooked'
        }, {
                value: 'Beef, New Zealand, imported, subcutaneous fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, sweetbread, cooked, boiled'
        }, {
                value: 'Beef, New Zealand, imported, sweetbread, raw'
        }, {
                value: 'Beef, New Zealand, imported, tenderloin, separable lean only, cooked, fast fried'
        }, {
                value: 'Beef, New Zealand, imported, oyster blade, separable lean and fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, tenderloin, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, variety meats and by-products, tongue, cooked, boiled'
        }, {
                value: 'Beef, New Zealand, imported, variety meats and by-products, tongue, raw'
        }, {
                value: 'Beef, New Zealand, imported, variety meats and by-products, tripe cooked, boiled'
        }, {
                value: 'Beef, New Zealand, imported, variety meats and by-products, tripe uncooked, raw'
        }, {
                value: 'Beef, New Zealand, imported, bolar blade, separable lean and fat, cooked, fast roasted'
        }, {
                value: 'Beef, New Zealand, imported, bolar blade, separable lean and fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, brisket navel end, separable lean and fat, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, brisket navel end, separable lean and fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, brisket point end, separable lean and fat, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, brisket point end, separable lean and fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, chuck eye roll, separable lean and fat, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, chuck eye roll, separable lean and fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, cube roll, separable lean and fat, cooked, fast roasted'
        }, {
                value: 'Beef, New Zealand, imported, cube roll, separable lean and fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, eye round, separable lean and fat, cooked, slow roasted'
        }, {
                value: 'Beef, New Zealand, imported, eye round, separable lean and fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, flank, separable lean and fat, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, flank, separable lean and fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, flat, separable lean and fat, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, flat, separable lean and fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, hind shin, separable lean and fat, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, hind shin, separable lean and fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, oyster blade, separable lean and fat, cooked, braised'
        }, {
                value: 'Beef, New Zealand, imported, rump centre, separable lean and fat, cooked, fast fried'
        }, {
                value: 'Beef, New Zealand, imported, rump centre, separable lean only, raw'
        }, {
                value: 'Beef, New Zealand, imported, rump centre, separable lean and fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, striploin, separable lean and fat, cooked, fast fried'
        }, {
                value: 'Beef, New Zealand, imported, striploin, separable lean and fat, raw'
        }, {
                value: 'Beef, New Zealand, imported, tenderloin, separable lean and fat, cooked, fast fried'
        }, {
                value: 'Beef, New Zealand, imported, tenderloin, separable lean and fat, raw'
        }, {
                value: 'Beef, ground, 93% lean meat / 7% fat, raw'
        }, {
                value: 'Beef, ground, 93% lean meat / 7% fat, patty, cooked, broiled'
        }, {
                value: 'Beef, ground, 93% lean meat /7% fat, patty, cooked, pan-broiled'
        }, {
                value: 'Beef, ground, 93% lean meat / 7% fat, loaf, cooked, baked'
        }, {
                value: 'Beef, ground, 93% lean meat / 7% fat, crumbles, cooked, pan-browned'
        }, {
                value: 'Beef, ground, 97% lean meat / 3% fat, raw'
        }, {
                value: 'Beef, ground, 97% lean meat / 3% fat, patty, cooked, broiled'
        }, {
                value: 'Beef, ground, 97% lean meat /3% fat, patty, cooked, pan-broiled'
        }, {
                value: 'Beef, ground, 97% lean meat / 3% fat, loaf, cooked, baked'
        }, {
                value: 'Beef, ground, 97% lean meat / 3% fat, crumbles, cooked, pan-browned'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean only, trimmed to 1/8" fat, all grades, cooked'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef composite, separable lean only, trimmed to 1/8" fat, choice, cooked'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean only, trimmed to 1/8" fat, select, cooked'
        }, {
                value: 'Beef, composite of trimmed retail cuts, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'USDA Commodity, beef patties with VPP, frozen, cooked'
        }, {
                value: 'USDA Commodity, beef, ground bulk/coarse ground, frozen, cooked'
        }, {
                value: 'USDA Commodity, beef, patties (100%), frozen, cooked'
        }, {
                value: 'USDA Commodity, beef patties with VPP, frozen, raw'
        }, {
                value: 'USDA Commodity, beef, patties (100%), frozen, raw'
        }, {
                value: 'USDA Commodity, beef, ground, bulk/coarse ground, frozen, raw'
        }, {
                value: 'Beef, chuck, mock tender steak, separable lean only, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, chuck, top blade, separable lean only, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, chuck, clod roast, separable lean only, trimmed to 1/4" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, clod roast, separable lean only, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, chuck, clod roast, separable lean only, trimmed to 1/4" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, shoulder steak, boneless, separable lean only, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, chuck, clod steak, separable lean only, trimmed to 1/4" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, mock tender steak, separable lean and fat, trimmed to 0" fat, USDA choice, cooked, broiled'
        }, {
                value: 'Beef, chuck, mock tender steak, separable lean and fat, trimmed to 0" fat, USDA select, cooked, broiled'
        }, {
                value: 'Beef, chuck, top blade, separable lean and fat, trimmed to 0" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, chuck, top blade, separable lean and fat, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, chuck, clod roast, separable lean and fat, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, chuck, clod roast, separable lean and fat, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, shoulder steak, boneless, separable lean and fat, trimmed to 0" fat, choice, cooked, grilled'
        }, {
                value: 'Beef, shoulder steak, boneless, separable lean and fat, trimmed to 0" fat, select, cooked, grilled'
        }, {
                value: 'Beef, plate, inside skirt steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, plate, outside skirt steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, loin, bottom sirloin butt, tri-tip steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, chuck, mock tender steak, separable lean and fat, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, chuck, top blade, separable lean and fat, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, chuck, clod roast, separable lean and fat, trimmed to 0" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, shoulder steak, boneless, separable lean and fat, trimmed to 0" fat, all grades, cooked, grilled'
        }, {
                value: 'Beef, ground, 95% lean meat / 5% fat, raw'
        }, {
                value: 'Beef, ground, 95% lean meat / 5% fat, patty, cooked, broiled'
        }, {
                value: 'Beef, ground, 95% lean meat / 5% fat, patty, cooked, pan-broiled'
        }, {
                value: 'Beef, ground, 95% lean meat / 5% fat, crumbles, cooked, pan-browned'
        }, {
                value: 'Beef, ground, 95% lean meat / 5% fat, loaf, cooked, baked'
        }, {
                value: 'Beef, ground, 90% lean meat / 10% fat, raw'
        }, {
                value: 'Beef, ground, 90% lean meat / 10% fat, patty, cooked, broiled'
        }, {
                value: 'Beef, ground, 90% lean meat / 10% fat, patty, cooked, pan-broiled'
        }, {
                value: 'Beef, ground, 90% lean meat / 10% fat, crumbles, cooked, pan-browned'
        }, {
                value: 'Beef, ground, 90% lean meat / 10% fat, loaf, cooked, baked'
        }, {
                value: 'Beef, ground, 85% lean meat / 15% fat, raw'
        }, {
                value: 'Beef, ground, 85% lean meat / 15% fat, patty, cooked, broiled'
        }, {
                value: 'Beef, ground, 85% lean meat / 15% fat, patty, cooked, pan-broiled'
        }, {
                value: 'Beef, ground, 85% lean meat / 15% fat, crumbles, cooked, pan-browned'
        }, {
                value: 'Beef, ground, 85% lean meat / 15% fat, loaf, cooked, baked'
        }, {
                value: 'Beef, ground, 80% lean meat / 20% fat, raw'
        }, {
                value: 'Beef, ground, 80% lean meat / 20% fat, patty, cooked, broiled'
        }, {
                value: 'Beef, ground, 80% lean meat / 20% fat, patty, cooked, pan-broiled'
        }, {
                value: 'Beef, ground, 80% lean meat / 20% fat, crumbles, cooked, pan-browned'
        }, {
                value: 'Beef, ground, 80% lean meat / 20% fat, loaf, cooked, baked'
        }, {
                value: 'Beef, ground, 75% lean meat / 25% fat, raw'
        }, {
                value: 'Beef, ground, 75% lean meat / 25% fat, patty, cooked, broiled'
        }, {
                value: 'Beef, ground, 75% lean meat / 25% fat, patty, cooked, pan-broiled'
        }, {
                value: 'Beef, ground, 75% lean meat / 25% fat, crumbles, cooked, pan-browned'
        }, {
                value: 'Beef, ground, 75% lean meat / 25% fat, loaf, cooked, baked'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, tenderloin, steak, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, top sirloin, steak, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, short loin, top loin, steak, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 1/8" fat, select, cooked, broiled'
        }, {
                value: 'Beef, tenderloin, steak, separable lean only, trimmed to 1/8" fat, select, cooked, broiled'
        }, {
                value: 'Beef, top sirloin, steak, separable lean only, trimmed to 1/8" fat, select, cooked, broiled'
        }, {
                value: 'Beef, short loin, top loin, steak, separable lean only, trimmed to 1/8" fat, select, cooked, grilled'
        }, {
                value: 'Beef, round, bottom round , roast, separable lean only, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round, roast, separable lean only, trimmed to 1/8" fat, select, cooked, roasted'
        }, {
                value: 'Beef, round, top round, steak, separable lean only, trimmed to 1/8" fat, select, cooked, broiled'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean only, trimmed to 1/8" fat, select, cooked, braised'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, brisket, flat half, separable lean only, trimmed to 1/8" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, brisket, flat half, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, round, eye of round, roast, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, round, eye of round, roast, separable lean only, trimmed to 1/8" fat, all grades, cooked, roasted'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, tenderloin, steak, separable lean only, trimmed to 1/8" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, tenderloin, steak, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean only, trimmed to 1/8" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean only, trimmed to 1/8" fat, all grades, cooked'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean only, trimmed to 1/8" fat, all grades, cooked, braised'
        }, {
                value: 'Beef, short loin, top loin, steak, separable lean only, trimmed to 1/8" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, short loin, top loin steak, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, round, top round, steak, separable lean only, trimmed to 1/8" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, round, top round, steak, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, top sirloin, steak, separable lean only, trimmed to 1/8" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, top sirloin, steak, separable lean only, trimmed to 1/8" fat, all grades, raw'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, brisket, flat half, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean only, trimmed to 1/8" fat, choice, cooked, braised'
        }, {
                value: 'Beef, brisket, flat half, separable lean only, trimmed to 1/8" fat, choice, cooked, braised'
        }, {
                value: 'Beef, round, eye of round, roast, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, round, top round, steak, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean only, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, eye of round, roast, separable lean only, trimmed to 1/8" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, round, top round, steak, separable lean only, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, round, bottom round, steak, separable lean only, trimmed to 1/8" fat, choice, cooked, braised'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, tenderloin, steak, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, top sirloin, steak, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 1/8"fat, choice, cooked, broiled'
        }, {
                value: 'Beef, short loin, top loin, steak, separable lean only, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, tenderloin, steak, separable lean only, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, top sirloin, steak, separable lean only, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, short loin, top loin, steak, separable lean only, trimmed to 1/8" fat, choice, cooked, broiled'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, brisket, flat half, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, chuck, arm pot roast, separable lean only, trimmed to 1/8" fat, select, cooked, braised'
        }, {
                value: 'Beef, brisket, flat half, separable lean only, trimmed to 1/8" fat, select, cooked, braised'
        }, {
                value: 'Beef, round, eye of round, roast, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, round, top round, steak, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, round, bottom round, roast, separable lean only, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 1/8" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, variety meats and by-products, tripe, cooked, simmered'
        }, {
                value: 'Beef, bottom sirloin, tri-tip roast, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, bottom sirloin, tri-tip roast, separable lean only, trimmed to 0" fat, choice, cooked, roasted'
        }, {
                value: 'Beef, bottom sirloin, tri-tip roast, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, bottom sirloin, tri-tip roast, separable lean only, trimmed to 0" fat, select, cooked, roasted'
        }, {
                value: 'Beef, bottom sirloin, tri-tip roast, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, round, tip round, roast, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, round, tip round, roast, separable lean only, trimmed to 0" fat, choice, raw'
        }, {
                value: 'Beef, round, tip round, roast, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, flank, steak, separable lean only, trimmed to 0" fat, all grades, cooked, broiled'
        }, {
                value: 'Beef, flank, steak, separable lean only, trimmed to 0" fat, select, cooked, broiled'
        }, {
                value: 'Beef, flank, steak, separable lean only, trimmed to 0" fat, all grades, raw'
        }, {
                value: 'Beef, flank, steak, separable lean only, trimmed to 0" fat, select, raw'
        }, {
                value: 'Beef, brisket, flat half, separable lean and fat, trimmed to 1/8" fat, choice, raw'
        }, {
                value: 'Beef, brisket, flat half, separable lean and fat, trimmed to 1/8" fat, select, raw'
        }, {
                value: 'Beef, brisket, flat half, separable lean and fat, trimmed to 1/8" fat, choice, cooked, braised'
        }, {
                value: 'Snacks, popcorn, microwave, 94% fat free'
        }, {
                value: 'Snacks, popcorn, microwave, low fat'
        }, {
                value: 'Snacks, candy rolls, yogurt-covered, fruit flavored with high vitamin C'
        }, {
                value: 'Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON Chewy Chocolate Peanut Bar'
        }, {
                value: 'Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON MULTIGRAIN CRUNCH BAR'
        }, {
                value: 'Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON Double Chocolate Nut Bar'
        }, {
                value: 'Snacks, M&M MARS, KUDOS Whole Grain Bars, peanut butter'
        }, {
                value: 'Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON Honey Nut Oat Bar'
        }, {
                value: 'Snacks, M&M MARS, KUDOS Whole Grain Bar, M&Ms milk chocolate'
        }, {
                value: 'Formulated bar, MARS SNACKFOOD US, COCOAVIA, Chocolate Almond Snack Bar'
        }, {
                value: 'Snacks, sweet potato chips, unsalted'
        }, {
                value: 'Snacks, FRITOLAY, SUNCHIPS, Multigrain Snack, original flavor'
        }, {
                value: 'Snacks, popcorn, microwave, regular (butter) flavor, made with partially hydrogenated oil'
        }, {
                value: 'Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON Protein Performance Bar, Caramel Nut Rush'
        }, {
                value: 'Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON Energy Bar, all flavors'
        }, {
                value: 'Formulated bar, POWER BAR, chocolate'
        }, {
                value: 'Formulated bar, MARS SNACKFOOD US, COCOAVIA, Chocolate Blueberry Snack Bar'
        }, {
                value: 'Formulated bar, SLIM-FAST OPTIMA meal bar, milk chocolate peanut'
        }, {
                value: 'Formulated bar, LUNA BAR, NUTZ OVER CHOCOLATE'
        }, {
                value: 'Snacks, FRITOLAY, SUNCHIPS, multigrain, French onion flavor'
        }, {
                value: 'Snacks, FRITOLAY, SUNCHIPS, Multigrain Snack, Harvest Cheddar flavor'
        }, {
                value: 'Pretzels, soft, unsalted'
        }, {
                value: 'Snacks, soy chips or crisps, salted'
        }, {
                value: 'Popcorn, microwave, regular (butter) flavor, made with palm oil'
        }, {
                value: 'Snacks, plantain chips, salted'
        }, {
                value: 'Tortilla chips, yellow, plain, salted'
        }, {
                value: 'Snacks, vegetable chips, HAIN CELESTIAL GROUP, TERRA CHIPS'
        }, {
                value: 'Formulated bar, ZONE PERFECT CLASSIC CRUNCH BAR, mixed flavors'
        }, {
                value: 'Snacks, granola bar, KASHI GOLEAN, chewy, mixed flavors'
        }, {
                value: 'Snacks, granola bar, KASHI TLC Bar, chewy, mixed flavors'
        }, {
                value: 'Snacks, granola bar, KASHI GOLEAN, crunchy, mixed flavors'
        }, {
                value: 'Snacks, granola bar, chewy, reduced sugar, all flavors'
        }, {
                value: 'Snacks, granola bites, mixed flavors'
        }, {
                value: 'Snacks, pita chips, salted'
        }, {
                value: 'Snacks, granola bars, soft, almond, confectioners coating'
        }, {
                value: 'Snacks, granola bars, QUAKER OATMEAL TO GO, all flavors'
        }, {
                value: 'Snacks, vegetable chips, made from garden vegetables'
        }, {
                value: 'Snacks, granola bar, KASHI TLC Bar, crunchy, mixed flavors'
        }, {
                value: 'Snacks, candy bits, yogurt covered with vitamin C'
        }, {
                value: 'Formulated bar, high fiber, chewy, oats and chocolate'
        }, {
                value: 'Snacks, bagel chips, plain'
        }, {
                value: 'Snacks, NUTRI-GRAIN FRUIT AND NUT BAR'
        }, {
                value: 'Snacks, yucca (cassava) chips, salted'
        }, {
                value: 'Snacks, CLIF BAR, mixed flavors'
        }, {
                value: 'Snacks, granola bar, QUAKER, chewy, 90 Calorie Bar'
        }, {
                value: 'Snacks, granola bar, GENERAL MILLS NATURE VALLEY, SWEET&SALTY NUT, peanut'
        }, {
                value: 'Snacks, granola bar, GENERAL MILLS, NATURE VALLEY, with yogurt coating'
        }, {
                value: 'Snacks, granola bar, GENERAL MILLS, NATURE VALLEY, CHEWY TRAIL MIX'
        }, {
                value: 'Snacks, granola bar, QUAKER, DIPPS, all flavors'
        }, {
                value: 'Snacks, brown rice chips'
        }, {
                value: 'Snack, Pretzel, hard chocolate coated'
        }, {
                value: 'Snack, Mixed Berry Bar'
        }, {
                value: 'Snacks, potato chips, made from dried potatoes (preformed), multigrain'
        }, {
                value: 'Snacks, potato chips, lightly salted'
        }, {
                value: 'Snacks, Pretzels, gluten- free made with cornstarch and potato flour'
        }, {
                value: 'Snacks, peas, roasted, wasabi-flavored'
        }, {
                value: 'Formulated Bar, SOUTH BEACH protein bar'
        }, {
                value: 'Snack, BALANCE, original bar'
        }, {
                value: 'Snacks, shrimp cracker'
        }, {
                value: 'Rice crackers'
        }, {
                value: 'Soup, egg drop, Chinese restaurant'
        }, {
                value: 'Soup, hot and sour, Chinese restaurant'
        }, {
                value: 'Soup, wonton, Chinese restaurant'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, HEALTHY REQUEST Microwavable Bowls, Chicken Noodle Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, HEALTHY REQUEST Microwavable Bowls, Grilled Chicken & Sausage Gumbo Soup'
        }, {
                value: 'CAMPBELLS CHUNKY Soups, HEALTHY REQUEST New England Clam Chowder'
        }, {
                value: 'CAMPBELLS Red and White, Chicken Barley with Mushrooms Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, Italian Style Wedding Soup, condensed'
        }, {
                value: 'CAMPBELLS Red and White, PHINEAS and FERB Soup, condensed'
        }, {
                value: 'CAMPBELLS Homestyle Microwaveable Bowls, HEALTHY REQUEST Italian Wedding Soup'
        }, {
                value: 'CAMPBELLS Homestyle Microwaveable Bowls, HEALTHY REQUEST Mexican Style Tortilla'
        }, {
                value: 'CAMPBELLS Homestyle Harvest Tomato with Basil Soup'
        }, {
                value: 'CAMPBELLS Homestyle HEALTHY REQUEST Chicken with Whole Grain Pasta Soup'
        }, {
                value: 'CAMPBELLS Soup on the GO, HEALTHY REQUEST Chicken with Mini Noodles Soup'
        }, {
                value: 'CAMPBELLS Soup on the Go, HEALTHY REQUEST Classic Tomato Soup'
        }, {
                value: 'PACE, Pico De Gallo'
        }, {
                value: 'PACE, Salsa Verde'
        }, {
                value: 'PACE, Tequila Lime Salsa'
        }, {
                value: 'PACE, Triple Pepper Salsa'
        }, {
                value: 'CAMPBELLS Red and White, Lentil Soup, condensed'
        }, {
                value: 'PREGO Pasta, Heart Smart- Traditional Sauce, ready-to-serve'
        }, {
                value: 'CAMPBELLS, 98% Fat Free Cream of Mushroom Soup, condensed'
        }, {
                value: 'Soup, ramen noodle, dry, any flavor, reduced fat, reduced sodium'
        }, {
                value: 'Soup, clam chowder, new england, canned, ready-to-serve'
        }, {
                value: 'Soup, clam chowder, new england, reduced sodium, canned, ready-to-serve'
        }, {
                value: 'Soup, chicken noodle, reduced sodium, canned, ready-to-serve'
        }, {
                value: 'Soup, beef and vegetables, reduced sodium, canned, ready-to-serve'
        }, {
                value: 'Sauce, duck, ready-to-serve'
        }, {
                value: 'Sauce, salsa, verde, ready-to-serve'
        }, {
                value: 'Sauce, steak, tomato based'
        }, {
                value: 'Sauce, tartar, ready-to-serve'
        }, {
                value: 'Sauce, sweet and sour, ready-to-serve'
        }, {
                value: 'Sauce, cocktail, ready-to-serve'
        }, {
                value: 'Dip, salsa con queso, cheese and salsa- medium'
        }, {
                value: 'Dip, OLD EL PASO, Cheese n Salsa, medium'
        }, {
                value: 'Dip, TOSTITOS, salsa con queso, medium'
        }, {
                value: 'Sauce, barbecue, SWEET BABY RAYS, original'
        }, {
                value: 'Sauce, barbecue, BULLS-EYE, original'
        }, {
                value: 'Sauce, barbecue, KC MASTERPIECE, original'
        }, {
                value: 'Sauce, barbecue, OPEN PIT, original'
        }, {
                value: 'Sauce, peanut, made from peanut butter, water, soy sauce'
        }, {
                value: 'Soup, chunky vegetable, reduced sodium, canned, ready-to-serve'
        }, {
                value: 'Gravy, HEINZ Home Style, classic chicken'
        }, {
                value: 'Soup, beef barley, ready to serve'
        }, {
                value: 'Sauce, enchilada, red, mild, ready to serve'
        }, {
                value: 'Wasabi'
        }, {
                value: 'Dip, bean, original flavor'
        }, {
                value: 'Sauce, horseradish'
        }, {
                value: 'Sauce, OLD EL PASO, enchilada, red, mild, ready to serve'
        }, {
                value: 'Dip, FRITOS, bean, original flavor'
        }, {
                value: 'KELLOGGS, EGGO, Mini Muffin Tops, Chocolate Chip'
        }, {
                value: 'KELLOGGS, EGGO, NUTRI-GRAIN Frozen Fruit Pizza, Mixed Berry Granola'
        }, {
                value: 'KELLOGGS, EGGO, NUTRI-GRAIN Frozen Fruit Pizza, Strawberry Granola'
        }, {
                value: 'KELLOGGS, EGGO, Pancakes, Blueberry'
        }, {
                value: 'KELLOGGS, EGGO, Pancakes, Chocolate Chip'
        }, {
                value: 'KELLOGGS, CINNABON, Pancakes, Caramel'
        }, {
                value: 'KELLOGGS, CINNABON, Pancakes, Original'
        }, {
                value: 'KELLOGGS, EGGO, Wafflers, Brown Sugar Cinnamon Roll'
        }, {
                value: 'KELLOGGS, EGGO, Wafflers, Strawberry Strudel'
        }, {
                value: 'KELLOGGS, EGGO, Waffles, Blueberry'
        }, {
                value: 'KELLOGGS, EGGO, Waffles, Buttermilk'
        }, {
                value: 'KELLOGGS, EGGO, Waffles, Cinnamon Toast'
        }, {
                value: 'KELLOGGS, EGGO, FIBERPLUS Waffles, Buttermilk'
        }, {
                value: 'KELLOGGS, EGGO, FIBERPLUS Waffles, Chocolate Chip'
        }, {
                value: 'KELLOGGS, EGGO, Waffles, French Toast'
        }, {
                value: 'KELLOGGS, EGGO, Waffles, Homestyle'
        }, {
                value: 'KELLOGGS, EGGO Protein, Waffles, Homestyle'
        }, {
                value: 'KASHI, TLC, Pita Crisps, Sea Salt'
        }, {
                value: 'KELLOGGS, EGGO, NUTRI-GRAIN, Waffles, Blueberry'
        }, {
                value: 'KELLOGGS, EGGO, NUTRI-GRAIN, Waffles, Honey Oat'
        }, {
                value: 'KASHI, TLC, Pita Crisps, Zesty Salsa'
        }, {
                value: 'KELLOGGS, EGGO, NUTRI-GRAIN, Waffles, Original'
        }, {
                value: 'KELLOGGS, EGGO Seasons, Waffles, Pumpkin Spice'
        }, {
                value: 'KELLOGGS, SIMPLY EGGO, Original'
        }, {
                value: 'KELLOGGS, EGGO, Waffles, Strawberry'
        }, {
                value: 'KELLOGGS, EGGO, Thick & Fluffy, Waffles, Brown Sugar'
        }, {
                value: 'KELLOGGS, EGGO, Thick & Fluffy, Waffles, Original'
        }, {
                value: 'FAMOUS AMOS, Chocolate Chip Cookies'
        }, {
                value: 'FAMOUS AMOS, Chocolate Chip Pecan Cookies'
        }, {
                value: 'GIRL SCOUTS, Caramel Dulce De Leche Cookies'
        }, {
                value: 'GIRL SCOUTS, Chalet Cookies'
        }, {
                value: 'GIRL SCOUTS, Do-si-dos Cookies'
        }, {
                value: 'GIRL SCOUTS, Samoas Cookies'
        }, {
                value: 'GIRL SCOUTS, Tagalongs Cookies'
        }, {
                value: 'GIRL SCOUTS, Thank U Berry Munch Cookies'
        }, {
                value: 'GIRL SCOUTS, Thin Mints Cookies'
        }, {
                value: 'GIRL SCOUTS, Trefoils Cookies'
        }, {
                value: 'JACKSONS, Old Fashioned Lemon Jumble Cookies'
        }, {
                value: 'JACKSONS, Old Fashioned Vanilla Wafers'
        }, {
                value: 'KASHI, TLC, Happy Trail Mix Cookies'
        }, {
                value: 'KASHI, TLC, Oatmeal Dark Chocolate Cookies'
        }, {
                value: 'KASHI, TLC, Oatmeal Raisin Flax Cookies'
        }, {
                value: 'KEEBLER, ANIMALS, Cookies'
        }, {
                value: 'KEEBLER, ANIMALS, Frosted Cookies'
        }, {
                value: 'KEEBLER, ANIMALS, Iced Cookies'
        }, {
                value: 'KEEBLER, ANIMALS, Crackers'
        }, {
                value: 'KEEBLER, BAKERS TREASURES, Chocolate Chip Cookie, soft'
        }, {
                value: 'KEEBLER, BAKERS TREASURES, Oatmeal Raisin Cookie, soft'
        }, {
                value: 'KEEBLER, Cheese & Cheddar Sandwich Crackers'
        }, {
                value: 'KEEBLER, Club & Cheddar Sandwich Crackers'
        }, {
                value: 'KEEBLER, Cheese on Wheat Sandwich Crackers'
        }, {
                value: 'KEEBLER, CHIPS DELUXE, Chocolate Lovers Cookies'
        }, {
                value: 'KEEBLER, CHIPS DELUXE, Chocolate Malt Chunk Cookies'
        }, {
                value: 'KEEBLER, CHIPS DELUXE, Coconut Cookies'
        }, {
                value: 'KEEBLER, CHIPS DELUXE, Dark Chocolate Chunk Cookies'
        }, {
                value: 'KEEBLER, CHIPS DELUXE, Mini Chocolate Chip Cookies'
        }, {
                value: 'KEEBLER, CHIPS DELUXE, Oatmeal Chocolate Chip Cookies'
        }, {
                value: 'KEEBLER, CHIPS DELUXE, Original Chocolate Chip Cookies'
        }, {
                value: 'KEEBLER, CHIPS DELUXE, Peanut Butter Cups Cookies'
        }, {
                value: 'KEEBLER, CHIPS DELUXE, Rainbow Chocolate Chip Cookies'
        }, {
                value: 'KEEBLER, CHIPS DELUXE, Rainbow Chocolate Chip Cookies, bite size'
        }, {
                value: 'KEEBLER, CHIPS DELUXE, Soft n Chewy Chocolate Chip Cookies'
        }, {
                value: 'KEEBLER, CLUB, Dash of Salt Crackers'
        }, {
                value: 'KEEBLER, CLUB, Minis Original Crackers'
        }, {
                value: 'KEEBLER, CLUB, Minis Multigrain Crackers'
        }, {
                value: 'KEEBLER, CLUB, Multigrain Crackers'
        }, {
                value: 'KEEBLER, CLUB, Original Crackers'
        }, {
                value: 'KEEBLER, CLUB, Reduced Fat Crackers'
        }, {
                value: 'KEEBLER, CLUB Crackers, Snack Sticks, Honey Wheat'
        }, {
                value: 'KEEBLER, CLUB Crackers, Snack Sticks, Original'
        }, {
                value: 'KEEBLER, Country Style Oatmeal Cookies with Raisins'
        }, {
                value: 'KEEBLER, Danish Wedding Cookies'
        }, {
                value: 'KEEBLER, E.L. FUDGE, Butter Flavored Cookies'
        }, {
                value: 'KEEBLER, E.L. FUDGE, Double Stuffed Cookies'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Cheesecake Middles, Dark Chocolate'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Cheesecake Middles, Original Graham Cookies'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Mint Creme Middles, Chocolate Graham Cookies'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Coconut Dreams Cookies'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Deluxe Grahams Cookies'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Caramel Filled Cookies'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Peanut Creme Filled Cookies'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Triple Fudge Filled Cookies'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Fudge-Dipped Ice Cream Cups'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Fudge Grahams, 1/2 Dipped, Reduced Fat'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Fudge Sticks'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Fudge Stripes, Dark Chocolate'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Fudge Stripes, Holiday/Spiderman'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Fudge Stripes, Mini'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Fudge Stripes, Oatmeal'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Fudge Stripes, Original'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Grasshopper Cookies, Fudge Mint'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Jumbo Fudge Sticks, Vanilla'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Jumbo Fudge Sticks, Peanut Butter'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Magic Middles Fudge Filled Cookies, Original'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Merry Mint Patties, Holiday'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Magic Middles Fudge Filled Cookies, Peanut Butter'
        }, {
                value: 'KEEBLER, FUDGE SHOPPE, Fudge Sticks, Peanut Butter'
        }, {
                value: 'KEEBLER, Cinnamon Toast Grahams'
        }, {
                value: 'KEEBLER, GRIPZ, CHIPS DELUXE, Chocolate Chip Cookies, bite-size'
        }, {
                value: 'KEEBLER, GRIPZ, CHIPS DELUXE, Rainbow Chocolate Chip Cookies, bite-size'
        }, {
                value: 'KEEBLER, GRIPZ, Chocolate Chip Grahams, bite-size'
        }, {
                value: 'KEEBLER, GRIPZ, Cinnamon Grahams, bite-size'
        }, {
                value: 'KEEBLER, Almond Crescents Cookies, Holiday'
        }, {
                value: 'KEEBLER, Gingerbread Men Cookies, Holiday'
        }, {
                value: 'KEEBLER, Holiday Jingles Cookies'
        }, {
                value: 'KEEBLER, Iced Oatmeal Cookies'
        }, {
                value: 'KEEBLER, Toast & Peanut Butter Sandwich Crackers'
        }, {
                value: 'KEEBLER, READY CRUST, Chocolate Pie Crust'
        }, {
                value: 'KEEBLER, READY CRUST, Shortbread Pie Crust'
        }, {
                value: 'KEEBLER, 100 Calorie RIGHT BITES, CHIPS DELUXE, Chocolate Chip Cookies'
        }, {
                value: 'KEEBLER, 100 Calorie RIGHT BITES, FUDGE SHOPPE, Dark Chocolate Fudge Stripes Cookies'
        }, {
                value: 'KEEBLER, 100 Calorie RIGHT BITES, FUDGE SHOPPE, Fudge Covered Pretzels'
        }, {
                value: 'KEEBLER, 100 Calorie RIGHT BITES, FUDGE SHOPPE, Cookies N Creme'
        }, {
                value: 'KEEBLER, 100 Calorie RIGHT BITES, FUDGE SHOPPE, Mini Brownies'
        }, {
                value: 'KEEBLER, 100 Calorie RIGHT BITES, FUDGE SHOPPE, Mini Fudge Grahams Cookies'
        }, {
                value: 'KEEBLER, 100 Calorie RIGHT BITES, FUDGE SHOPPE, Mini Fudge Stripes Cookies'
        }, {
                value: 'KEEBLER, 100 Calorie RIGHT BITES, FUDGE SHOPPE, Mini Mints Grasshopper Cookies'
        }, {
                value: 'KEEBLER, 100 Calorie RIGHT BITES, Sandies Shortbread Cookies, Fudge Dipped'
        }, {
                value: 'KEEBLER, 100 Calorie RIGHT BITES, Sandies Shortbread Cookies'
        }, {
                value: 'KEEBLER, 100 Calorie RIGHT BITES, White Fudge Dipped Pretzels'
        }, {
                value: 'KEEBLER, SANDIES, Cashew Shortbread Cookies'
        }, {
                value: 'KEEBLER, SANDIES, Chocolate Chip & Pecan Shortbread Cookies'
        }, {
                value: 'KEEBLER, SANDIES, Dark Chocolate Almond Shortbread Cookies'
        }, {
                value: 'KEEBLER, SANDIES, Pecan Shortbread Cookies'
        }, {
                value: 'KEEBLER, SANDIES, Pecan Shortbread Cookies, bite size'
        }, {
                value: 'KEEBLER, SANDIES, Pecan Shortbread Cookies, Reduced Fat'
        }, {
                value: 'KEEBLER, SOFT BATCH, Chocolate Chip Cookies'
        }, {
                value: 'KEEBLER, Sweet Cremes Cookies'
        }, {
                value: 'KEEBLER, Toasted Coconut Cookies'
        }, {
                value: 'KEEBLER, TOASTEDS, Buttercrisps Crackers'
        }, {
                value: 'KEEBLER, TOASTEDS, Party Pack Cracker Assortment'
        }, {
                value: 'KEEBLER, TOASTEDS, Onion Crackers'
        }, {
                value: 'KEEBLER, TOASTEDS, Sesame Crackers'
        }, {
                value: 'KEEBLER, TOASTEDS, Wheat Crackers'
        }, {
                value: 'KEEBLER, TOWN HOUSE, Bistro Multigrain Crackers'
        }, {
                value: 'KEEBLER, TOWN HOUSE, FLIPSIDES, Pretzel Crackers, Cheese'
        }, {
                value: 'KEEBLER, TOWN HOUSE, FLIPSIDES, Pretzel Crackers, Garlic Herb'
        }, {
                value: 'KEEBLER, TOWN HOUSE, FLIPSIDES, Pretzel Crackers, Original'
        }, {
                value: 'KEEBLER, TOWN HOUSE, Original Crackers'
        }, {
                value: 'KEEBLER, TOWN HOUSE, Reduced Fat Crackers'
        }, {
                value: 'KEEBLER, TOWN HOUSE, FLIPSIDES, Pretzel Crackers, Reduced Fat'
        }, {
                value: 'KEEBLER, TOWN HOUSE, TOPPERS, Garlic Herb Crackers'
        }, {
                value: 'KEEBLER, TOWN HOUSE, TOPPERS, Multigrain Crackers'
        }, {
                value: 'KEEBLER, TOWN HOUSE, TOPPERS, Original Crackers'
        }, {
                value: 'KEEBLER, TOWN HOUSE, Wheat Crackers'
        }, {
                value: 'KEEBLER, TOWN HOUSE, FLATBREAD CRISPS, Sea Salt and Olive Oil Crackers'
        }, {
                value: 'KEEBLER, TRADITIONS, Iced Lemonade Cookies'
        }, {
                value: 'KEEBLER, TRADITIONS, Iced Oatmeal Cookies'
        }, {
                value: 'KEEBLER, Vanilla Wafers Minis, Rainbow'
        }, {
                value: 'KEEBLER, Vienna Fingers with Creme Filling'
        }, {
                value: 'KEEBLER, Vienna Fingers with Creme Filling, Reduced Fat'
        }, {
                value: 'KEEBLER, Waffle Bowls'
        }, {
                value: 'KEEBLER, Waffle Cones'
        }, {
                value: 'KEEBLER, WHEATABLES, Honey Wheat Crackers'
        }, {
                value: 'KEEBLER, WHEATABLES, Nut Crisp Crackers, Roasted Almond'
        }, {
                value: 'KEEBLER, WHEATABLES, Nut Crisp Crackers, Toasted Pecan'
        }, {
                value: 'KELLOGGS, ALL-BRAN, Garlic and Herb Crackers'
        }, {
                value: 'KELLOGGS, ALL-BRAN, Multigrain Crackers'
        }, {
                value: 'KELLOGGS, Corn Flakes Crumbs'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Apple Strudel Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Blueberry Muffin Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Chocolate Chip Cookie Dough Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Cinnamon Roll Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Confetti Cake Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Cookies & Creme Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Orange Cream Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Pumpkin Pie Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Spring Berry Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Sugar Cookie Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Waffle Cone Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Wild Fruit Fusion Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Wild Grape Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Frosted Wild Strawberry Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Ice Cream Shoppe Frosted Hot Fudge Sundae Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Ice Cream Shoppe Frosted Ice Creme Sandwich Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Ice Cream Shoppe Frosted Rainbow Chip Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Ice Cream Shoppe Frosted Strawberry Milkshake Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Ice Cream Shoppe Frosted Vanilla Milkshake Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS MINI CRISPS, Cinnamon Brown Sugar Baked Bites'
        }, {
                value: 'KELLOGGS, POP-TARTS MINI CRISPS, Frosted Chocolate Baked Bites'
        }, {
                value: 'KELLOGGS, POP-TARTS MINI CRISPS, Frosted Strawberry Baked Bites'
        }, {
                value: 'KELLOGGS, SPECIAL K, Cracker Chips, Cheddar'
        }, {
                value: 'KELLOGGS, SPECIAL K, Cracker Chips, Sea Salt'
        }, {
                value: 'KELLOGGS, SPECIAL K, Cracker Chips, Sour Cream & Onion'
        }, {
                value: 'KELLOGGS, SPECIAL K, Cracker Chips, Southwest Ranch'
        }, {
                value: 'KELLOGGS, SPECIAL K, Multigrain Crackers'
        }, {
                value: 'KELLOGGS, SPECIAL K, Savory Herb Crackers'
        }, {
                value: 'KELLOGGS, POP-TARTS, Gingerbread Toaster Pastries'
        }, {
                value: 'KELLOGGS, POP-TARTS, Yum-azing Vanilla Milkshake Toaster Pastries'
        }, {
                value: 'MOTHERS, 4th of July Circus Animal Cookies'
        }, {
                value: 'MOTHERS, Chocolate Chip Cookies'
        }, {
                value: 'MOTHERS, Circus Animal Cookies'
        }, {
                value: 'MOTHERS, Coconut Cocadas Cookies'
        }, {
                value: 'MOTHERS, Double Fudge Creme Sandwich Cookies'
        }, {
                value: 'MOTHERS, English Tea Sandwich Cookies'
        }, {
                value: 'MOTHERS, Halloween Circus Animals Cookies'
        }, {
                value: 'MOTHERS, Holiday Circus Animal Cookies'
        }, {
                value: 'MOTHERS, Iced Lemonade Cookies'
        }, {
                value: 'MOTHERS, Iced Oatmeal Cookies'
        }, {
                value: 'MOTHERS, Jungle Animal Cookies'
        }, {
                value: 'MOTHERS, Macaroon Cookies'
        }, {
                value: 'MOTHERS, Old Fashioned Chocolate Chip Cookies'
        }, {
                value: 'MOTHERS, Old Fashioned Iced Oatmeal Cookies'
        }, {
                value: 'MOTHERS, Peanut Butter Gauchos Cookies'
        }, {
                value: 'MOTHERS, Taffy Sandwich Cookies'
        }, {
                value: 'MURRAY, SUGAR FREE, Vanilla Sugar Wafer'
        }, {
                value: 'MURRAY, Chocolatey Chip Thins Cookies'
        }, {
                value: 'MURRAY, COOKIE JAR CLASSICS, Coconut Bars Cookies'
        }, {
                value: 'MURRAY, Duplex Creme Sandwich Cookies'
        }, {
                value: 'MURRAY, Lemon Creme Sandwich Cookies'
        }, {
                value: 'MURRAY, JACKS Vanilla Wafers'
        }, {
                value: 'MURRAY, Old Fashioned Iced Oatmeal Cookies'
        }, {
                value: 'MURRAY, SOUTHERN KITCHEN, Chocolate Chip Cookies'
        }, {
                value: 'MURRAY, SOUTHERN KITCHEN, Coconut Cookies'
        }, {
                value: 'MURRAY, SOUTHERN KITCHEN, Iced Oatmeal Cookies'
        }, {
                value: 'MURRAY, SUGAR FREE, Chocolate Chip & Pecan Cookies'
        }, {
                value: 'MURRAY, SUGAR FREE, Fudge Dipped Grahams'
        }, {
                value: 'MURRAY, SUGAR FREE, Fudge Dipped Mint Cookies'
        }, {
                value: 'MURRAY, SUGAR FREE, Fudge Dipped Wafers'
        }, {
                value: 'MURRAY, SUGAR FREE, Peanut Butter Cookies'
        }, {
                value: 'MURRAY, SUGAR FREE, Pecan Shortbread Cookies'
        }, {
                value: 'MURRAY, SUGAR FREE, Lemon Creme Sandwich Cookies'
        }, {
                value: 'MURRAY, SUGAR FREE, Vanilla Creme Sandwich Cookies'
        }, {
                value: 'MURRAY, SUGAR FREE, Shortbread Cookies'
        }, {
                value: 'MURRAY, SUGAR FREE, Shortbread Bites'
        }, {
                value: 'MURRAY, SUGAR FREE, Vanilla Wafer'
        }, {
                value: 'MURRAY, Vanilla Sugar Wafer'
        }, {
                value: 'MURRAY, Vanilla Wafer'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Asiago Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Baby Swiss Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, BIG Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Cheddar Jack Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Colby Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Duoz Sharp Cheddar Parmesan Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Duoz Smoked Cheddar Monterey Jack Crackers'
        }, {
                value: 'SUNSHINE, GRIPZ, Cheez-It Crackers'
        }, {
                value: 'SUNSHINE, GRIPZ, Cheez-It Mixx and Cheesy Pizza Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Hot & Spicy Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Italian Four Cheese Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Crackers (made with Whole Grain)'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Mozzarella Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Parmesan Garlic Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Pepper Jack Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, White Cheddar, Reduced Fat Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, 100 Calorie RIGHT BITES, Extra Cheesy Party Mix'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, 100 Calorie Right Bites, Reduced Fat'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Scrabble Jr. Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Snack Mix'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Snack Mix, White Cheddar'
        }, {
                value: 'KEEBLER, ZESTA, Export Sodas Crackers'
        }, {
                value: 'AUSTIN, Peanut Butter on Cheese Crackers, sandwich-type'
        }, {
                value: 'AUSTIN, Peanut Butter on Toasty Crackers, sandwich-type'
        }, {
                value: 'AUSTIN, Cheddar Cheese on Wafer Crackers, sandwich-type'
        }, {
                value: 'KELLOGGS, EGGO Minis, Pancakes, Buttermilk'
        }, {
                value: 'KELLOGGS, EGGO, Waffles, Chocolate Chip'
        }, {
                value: 'FAMOUS AMOS, Chocolate Sandwich Creme Cookies'
        }, {
                value: 'FAMOUS AMOS, Vanilla Sandwich Creme Cookies'
        }, {
                value: 'KEEBLER, Grahams, Cinnamon Crisp'
        }, {
                value: 'KEEBLER, Oatmeal Cookies'
        }, {
                value: 'KEEBLER, Cheese & Peanut Butter Sandwich Crackers'
        }, {
                value: 'KEEBLER, READY CRUST, Graham Pie Crust (10"), Reduced Fat'
        }, {
                value: 'KEEBLER, SANDIES, Simply Shortbread Cookies'
        }, {
                value: 'KEEBLER, Sugar Cones'
        }, {
                value: 'MOTHERS, Old Fashioned Oatmeal Cookies'
        }, {
                value: 'MOTHERS, Vanilla Sandwich Cookies'
        }, {
                value: 'MURRAY, COOKIE JAR CLASSICS, Butter Cookies'
        }, {
                value: 'MURRAY, Chocolate Creme Sandwich Cookies'
        }, {
                value: 'MURRAY, Vanilla Creme Sandwich Cookies'
        }, {
                value: 'MURRAY, Honey Graham'
        }, {
                value: 'MURRAY, Old Fashioned Gingersnaps Cookies'
        }, {
                value: 'MURRAY, SOUTHERN KITCHEN, Oatmeal Cookies'
        }, {
                value: 'MURRAY, SUGAR FREE, Chocolate Chip Cookies'
        }, {
                value: 'MURRAY, SUGAR FREE, Oatmeal Cookies'
        }, {
                value: 'MURRAY, SUGAR FREE, Chocolate Creme Sandwich Cookies'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Original Crackers'
        }, {
                value: 'SUNSHINE, CHEEZ-IT, Reduced Fat Crackers'
        }, {
                value: 'SUNSHINE, KRISPY, Soup & Oyster Crackers (large)'
        }, {
                value: 'KEEBLER, ZESTA, Saltines, Original'
        }, {
                value: 'KEEBLER, ZESTA, Saltines with Whole Wheat'
        }, {
                value: 'Bread, chapati or roti, whole wheat, commercially prepared, frozen'
        }, {
                value: 'Bread, paratha, whole wheat, commercially prepared, frozen'
        }, {
                value: 'Bread, naan, whole wheat, commercially prepared, refrigerated'
        }, {
                value: 'Bread, roll, Mexican, bollilo'
        }, {
                value: 'Cookie, vanilla with caramel, coconut, and chocolate coating'
        }, {
                value: 'Cookie, with peanut butter filling, chocolate-coated'
        }, {
                value: 'Cookies, animal, with frosting or icing'
        }, {
                value: 'Crackers, multigrain'
        }, {
                value: 'Cookie, butter or sugar, with chocolate icing or filling'
        }, {
                value: 'Cookie, chocolate, with icing or coating'
        }, {
                value: 'Tortillas, ready-to-bake or -fry, whole wheat'
        }, {
                value: 'Cake, snack cakes, creme-filled, chocolate with frosting, low-fat, with added fiber'
        }, {
                value: 'Cake, snack cakes, not chocolate, with icing or filling, low-fat, with added fiber'
        }, {
                value: 'Cookies, brownies, commercially prepared, reduced fat, with added fiber'
        }, {
                value: 'Cookies, chocolate sandwich, with creme filling, reduced fat'
        }, {
                value: 'Cookies, oatmeal sandwich, with creme filling'
        }, {
                value: 'Cookies, peanut butter, commercially prepared, sugar free'
        }, {
                value: 'Cookies, graham crackers, plain or honey, lowfat'
        }, {
                value: 'Crackers, cheese, whole grain'
        }, {
                value: 'Waffles, whole wheat, lowfat, frozen, ready-to-heat'
        }, {
                value: 'Pancakes, plain, reduced fat'
        }, {
                value: 'Bread, chapati or roti, plain, commercially prepared'
        }, {
                value: 'Bread, naan, plain, commercially prepared, refrigerated'
        }, {
                value: 'Crackers, standard snack-type, with whole wheat'
        }, {
                value: 'Cookies, coconut macaroon'
        }, {
                value: 'Cookies, shortbread, reduced fat'
        }, {
                value: 'Cookies, sugar wafer, chocolate-covered'
        }, {
                value: 'Rolls, hamburger or hot dog, wheat/cracked wheat'
        }, {
                value: 'Rolls, hamburger or hot dog, whole wheat'
        }, {
                value: 'Crackers, sandwich-type, peanut butter filled, reduced fat'
        }, {
                value: 'Bread, cinnamon'
        }, {
                value: 'Bread, wheat, sprouted'
        }, {
                value: 'Bread, wheat, sprouted, toasted'
        }, {
                value: 'Bread, french or vienna, whole wheat'
        }, {
                value: 'Bagels, whole grain white'
        }, {
                value: 'English muffins, whole grain white'
        }, {
                value: 'Rolls, hamburger, whole grain white, calcium-fortified'
        }, {
                value: 'Bagels, multigrain'
        }, {
                value: 'Pancakes, plain, low fat, dry mix, incomplete (includes buttermilk)'
        }, {
                value: 'Pancakes, whole wheat, dry mix, incomplete'
        }, {
                value: 'Crackers, toast thins, low sodium'
        }, {
                value: 'Crackers, whole grain, sandwich-type, with peanut butter filling'
        }, {
                value: 'Crackers, water biscuits'
        }, {
                value: 'Cookies, chocolate chip sandwich, with creme filling'
        }, {
                value: 'Cookies, chocolate, made with rice cereal'
        }, {
                value: 'Cookies, marshmallow, with rice cereal and chocolate chips'
        }, {
                value: 'Crackers, flavored, fish-shaped'
        }, {
                value: 'Cookies, gluten-free, chocolate sandwich, with creme filling'
        }, {
                value: 'Cookies, gluten-free, chocolate wafer'
        }, {
                value: 'Cookies, gluten-free, lemon wafer'
        }, {
                value: 'Cookies, gluten-free, vanilla sandwich, with creme filling'
        }, {
                value: 'Bread, gluten-free, white, made with potato extract, rice starch, and rice flour'
        }, {
                value: 'Bread, gluten-free, white, made with rice flour, corn starch, and/or tapioca'
        }, {
                value: 'Bread, gluten-free, white, made with tapioca starch and brown rice flour'
        }, {
                value: 'Bread, gluten-free, whole grain, made with tapioca starch and brown rice flour'
        }, {
                value: 'Rolls, gluten-free, white, made with brown rice flour, tapioca starch, and potato starch'
        }, {
                value: 'Rolls, gluten-free, white, made with rice flour, rice starch, and corn starch'
        }, {
                value: 'Rolls, gluten-free, white, made with brown rice flour, tapioca starch, and sorghum flour'
        }, {
                value: 'Rolls, gluten-free, whole grain, made with tapioca starch and brown rice flour'
        }, {
                value: 'Crackers, gluten-free, multigrain and vegetable, made with corn starch and white rice flour'
        }, {
                value: 'Crackers, gluten-free, multi-seeded and multigrain'
        }, {
                value: 'Waffles, gluten-free, frozen, ready-to-heat'
        }, {
                value: 'Pancakes, gluten-free, frozen, ready-to-heat'
        }, {
                value: 'Rolls, dinner, sweet'
        }, {
                value: 'Cookies, oatmeal, reduced fat'
        }, {
                value: 'Cookies, chocolate cream covered biscuit sticks'
        }, {
                value: 'Cookies, Marie biscuit'
        }, {
                value: 'Cookies, vanilla sandwich with creme filling, reduced fat'
        }, {
                value: 'ANDREAS, Gluten Free Soft Dinner Roll'
        }, {
                value: 'CRUNCHMASTER, Multi-Grain Crisps, Snack Crackers, Gluten-Free'
        }, {
                value: 'GLUTINO, Gluten Free Cookies, Chocolate Vanilla Creme'
        }, {
                value: 'GLUTINO, Gluten Free Cookies, Vanilla Creme'
        }, {
                value: 'GLUTINO, Gluten Free Wafers, Lemon Flavored'
        }, {
                value: 'GLUTINO, Gluten Free Wafers, Milk Chocolate'
        }, {
                value: 'MARYS GONE CRACKERS, Original Crackers, Organic Gluten Free'
        }, {
                value: 'PEPPERIDGE FARM, Goldfish, Baked Snack Crackers, Cheddar'
        }, {
                value: 'PEPPERIDGE FARM, Goldfish, Baked Snack Crackers, Explosive Pizza'
        }, {
                value: 'PEPPERIDGE FARM, Goldfish, Baked Snack Crackers, Original'
        }, {
                value: 'PEPPERIDGE FARM, Goldfish, Baked Snack Crackers, Parmesan'
        }, {
                value: 'PEPPERIDGE FARM, Goldfish, Baked Snack Crackers, Pizza'
        }, {
                value: 'RUDIS, Gluten-Free Bakery, Original Sandwich Bread'
        }, {
                value: 'SAGE VALLEY, Gluten Free Vanilla Sandwich Cookies'
        }, {
                value: 'SCHAR, Gluten-Free, Classic White Rolls'
        }, {
                value: 'SCHAR, Gluten-Free, Wheat-Free, Classic White Bread'
        }, {
                value: 'UDIS, Gluten Free, Classic French Dinner Rolls'
        }, {
                value: 'UDIS, Gluten Free, Soft & Delicious White Sandwich Bread'
        }, {
                value: 'UDIS, Gluten Free, Soft & Hearty Whole Grain Bread'
        }, {
                value: 'UDIS, Gluten Free, Whole Grain Dinner Rolls'
        }, {
                value: 'VANS, Gluten Free, Totally Original Pancakes'
        }, {
                value: 'VANS, Gluten Free, Totally Original Waffles'
        }, {
                value: 'VANS, The Perfect 10, Crispy Six Whole Grain + Four Seed Baked Crackers, Gluten Free'
        }, {
                value: 'PEPPERIDGE FARM, 100% Whole Wheat Hamburger Buns'
        }, {
                value: 'PEPPERIDGE FARM, Cinnamon Swirl Bread'
        }, {
                value: 'PEPPERIDGE FARM, Raisin Cinnamon Swirl Bread'
        }, {
                value: 'PEPPERIDGE FARM, Whole Grain 15 Grain Bread'
        }, {
                value: 'PEPPERIDGE FARM, Farmhouse Hearty White Bread'
        }, {
                value: 'PEPPERIDGE FARM, Farmhouse Oatmeal Bread'
        }, {
                value: 'PEPPERIDGE FARM, Whole Grain 100% Whole Wheat Bread'
        }, {
                value: 'PEPPERIDGE FARM, Farmhouse Sourdough Bread'
        }, {
                value: 'PEPPERIDGE FARM, Jewish Rye Bread (Seedless)'
        }, {
                value: 'PEPPERIDGE FARM, Pumpernickel Bread'
        }, {
                value: 'PEPPERIDGE FARM, Hamburger Buns w/Sesame'
        }, {
                value: 'PEPPERIDGE FARM, Deli Swirl Bread'
        }, {
                value: 'PEPPERIDGE FARM, White Bread'
        }, {
                value: 'PEPPERIDGE FARM, Light Style Wheat Bread'
        }, {
                value: 'PEPPERIDGE FARM, Seeded Jewish Rye Bread'
        }, {
                value: 'PEPPERIDGE FARM, Farmhouse 100% Whole Wheat Bread'
        }, {
                value: 'PEPPERIDGE FARM, White Hoagie Roll'
        }, {
                value: 'PEPPERIDGE FARM, Hamburger Bun'
        }, {
                value: 'PEPPERIDGE FARM, Whole Grain Honey Whole Wheat Bread'
        }, {
                value: 'PEPPERIDGE FARM, Whole Grain Oatmeal Bread'
        }, {
                value: 'Bread, multi-grain (includes whole-grain)'
        }, {
                value: 'Cookies, animal crackers (includes arrowroot, tea biscuits)'
        }, {
                value: 'CAMPBELLS, Tomato juice'
        }, {
                value: 'CAMPBELLS, Tomato juice, low sodium'
        }, {
                value: 'CAMPBELLS, V8 Vegetable Juice, Organic V8'
        }, {
                value: 'CAMPBELLS, Organic Tomato juice'
        }, {
                value: 'HEALTHY REQUEST Tomato juice'
        }, {
                value: 'CAMPBELLS, V8 100% Vegetable Juice'
        }, {
                value: 'CAMPBELLS, V8 Vegetable Juice, Essential Antioxidants V8'
        }, {
                value: 'CAMPBELLS, V8 Vegetable Juice, Calcium Enriched V8'
        }, {
                value: 'CAMPBELLS, V8 Vegetable Juice, Low Sodium V8'
        }, {
                value: 'CAMPBELLS, V8 Vegetable Juice, Spicy Hot V8'
        }, {
                value: 'PACE, Jalapenos Nacho Sliced Peppers'
        }, {
                value: 'PACE, Diced Green Chilies'
        }, {
                value: 'CAMPBELLS, V8 60% Vegetable Juice, V8 V-Lite'
        }, {
                value: 'CAMPBELLS, V8 Vegetable Juice, Low Sodium Spicy Hot'
        }, {
                value: 'CAMPBELLS, V8 Vegetable Juice, High Fiber V8'
        }, {
                value: 'Seaweed, Canadian Cultivated EMI-TSUNOMATA, dry'
        }, {
                value: 'Seaweed, Canadian Cultivated EMI-TSUNOMATA, rehydrated'
        }, {
                value: 'Potatoes, hash brown, refrigerated, unprepared'
        }, {
                value: 'Potatoes, hash brown, refrigerated, prepared, pan-fried in canola oil'
        }, {
                value: 'Sweet Potatoes, french fried, frozen as packaged, salt added in processing'
        }, {
                value: 'Sweet Potatoes, french fried, crosscut, frozen, unprepared'
        }, {
                value: 'Sweet Potato puffs, frozen, unprepared'
        }, {
                value: 'Potatoes, yellow fleshed, roasted, salt added in processing, frozen, unprepared'
        }, {
                value: 'Potatoes, yellow fleshed, french fried, frozen, unprepared'
        }, {
                value: 'Potatoes, yellow fleshed, hash brown, shredded, salt added in processing, frozen, unprepared'
        }, {
                value: 'Potatoes, french fried, wedge cut, frozen, unprepared'
        }, {
                value: 'Potatoes, french fried, steak cut, salt not added in processing, frozen, unprepared'
        }, {
                value: 'Potatoes, french fried, cross cut, frozen, unprepared'
        }, {
                value: 'Vegetable smoothie, NAKED JUICE, KALE BLAZER'
        }, {
                value: 'Ginger root, pickled, canned, with artificial sweetener'
        }, {
                value: 'Peppers, hot pickled, canned'
        }, {
                value: 'Vegetable juice, BOLTHOUSE FARMS, DAILY GREENS'
        }, {
                value: 'Potatoes, mashed, ready-to-eat'
        }, {
                value: 'Rice and vermicelli mix, beef flavor, unprepared'
        }, {
                value: 'Rice and vermicelli mix, beef flavor, prepared with 80% margarine'
        }, {
                value: 'Rice and vermicelli mix, rice pilaf flavor, unprepared'
        }, {
                value: 'Rice and vermicelli mix, rice pilaf flavor, prepared with 80% margarine'
        }, {
                value: 'Macaroni and cheese, box mix with cheese sauce, unprepared'
        }, {
                value: 'Macaroni and cheese, box mix with cheese sauce, prepared'
        }, {
                value: 'Taquitos, frozen, chicken and cheese, oven-heated'
        }, {
                value: 'Taquitos, frozen, beef and cheese, oven-heated'
        }, {
                value: 'Pasta mix, classic cheeseburger macaroni, unprepared'
        }, {
                value: 'Pasta mix, classic beef, unprepared'
        }, {
                value: 'Pasta mix, Italian lasagna, unprepared'
        }, {
                value: 'Yellow rice with seasoning, dry packet mix, unprepared'
        }, {
                value: 'Pizza rolls, frozen, unprepared'
        }, {
                value: 'Potsticker or wonton, pork and vegetable, frozen, unprepared'
        }, {
                value: 'Macaroni or noodles with cheese, made from reduced fat packaged mix, unprepared'
        }, {
                value: 'Turnover, cheese-filled, tomato-based sauce, frozen, unprepared'
        }, {
                value: 'Macaroni or noodles with cheese, microwaveable, unprepared'
        }, {
                value: 'Pasta mix, Italian four cheese lasagna, unprepared'
        }, {
                value: 'Spanish rice mix, dry mix, unprepared'
        }, {
                value: 'Lasagna, cheese, frozen, unprepared'
        }, {
                value: 'Chicken, thighs, frozen, breaded, reheated'
        }, {
                value: 'Spanish rice mix, dry mix, prepared (with canola/vegetable oil blend or diced tomatoes and margarine)'
        }, {
                value: 'KASHI Three Cheese Ravioli with Mediterranean Tomato Sauce, frozen, unprepared'
        }, {
                value: 'KASHI Mushroom & Asparagus Risotto, frozen, unprepared'
        }, {
                value: 'Rice mix, cheese flavor, dry mix, unprepared'
        }, {
                value: 'Dumpling, potato- or cheese-filled, frozen'
        }, {
                value: 'Turnover, chicken- or turkey-, and vegetable-filled, reduced fat, frozen'
        }, {
                value: 'Turnover, meat- and cheese-filled, tomato-based sauce, reduced fat, frozen'
        }, {
                value: 'Turnover, filled with egg, meat and cheese, frozen'
        }, {
                value: 'Rice mix, white and wild, flavored, unprepared'
        }, {
                value: 'KASHI Italian Vegetable Medley Pasta, frozen, unprepared'
        }, {
                value: 'Salisbury steak with gravy, frozen'
        }, {
                value: 'Sausage, egg and cheese breakfast biscuit'
        }, {
                value: 'HUNGRY MAN, Salisbury Steak With Gravy, frozen, unprepared'
        }, {
                value: 'BANQUET, Salisbury Steak With Gravy, family size, frozen, unprepared'
        }, {
                value: 'JIMMY DEAN, Sausage, Egg, and Cheese Breakfast Biscuit, frozen, unprepared'
        }, {
                value: 'Infant Formula, MEAD JOHNSON, ENFAMIL, Premium, Newborn, powder'
        }, {
                value: 'Infant Formula, MEAD JOHNSON, ENFAMIL, Premium LIPIL, Infant, powder'
        }, {
                value: 'Infant Formula, MEAD JOHNSON, ENFAMIL, Premium LIPIL, Infant, Liquid concentrate, not reconstituted'
        }, {
                value: 'Infant Formula, MEAD JOHNSON, ENFAMIL, Premium, Infant, Liquid concentrate, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, ENFAGROW, GENTLEASE, Toddler, LIPIL, powder'
        }, {
                value: 'Infant formula, GERBER, GOOD START, PROTECT PLUS, powder'
        }, {
                value: 'Infant Formula, GERBER GOOD START 2, GENTLE PLUS, powder'
        }, {
                value: 'Infant formula, GERBER, GOOD START 2, PROTECT PLUS, powder'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, ENFAGROW, Soy, Toddler, LIPIL, powder'
        }, {
                value: 'Infant formula, ABBOTT NUTRITION, SIMILAC, GO AND GROW, powder, with ARA and DHA'
        }, {
                value: 'Infant formula, GERBER, GOOD START 2 SOY, with iron, powder'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, NUTRAMIGEN, AA LIPIL, powder, not reconstituted'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, Premature, 20 calories ready-to-feed Low iron'
        }, {
                value: 'Infant formula, MEAD JOHNSON, ENFAMIL, Premature, 24 calories ready-to-feed Low iron'
        }, {
                value: 'Infant Formula, MEAD JOHNSON, ENFAMIL, Premium, Infant, ready-to-feed'
        }, {
                value: 'Infant Formula, MEAD JOHNSON, ENFAMIL, Premium, Infant, powder'
        }, {
                value: 'Babyfood, GERBER, Banana with orange medley'
        }, {
                value: 'Agutuk, fish/berry with seal oil (Alaskan ice cream) (Alaska Native)'
        }, {
                value: 'Agutuk, meat-caribou (Alaskan ice cream) (Alaska Native)'
        }, {
                value: 'Ascidians (tunughnak) (Alaska Native)'
        }, {
                value: 'Bear, black, meat (Alaska Native)'
        }, {
                value: 'Bear, polar, meat, raw (Alaska Native)'
        }, {
                value: 'Whale, beluga, meat, dried (Alaska Native)'
        }, {
                value: 'Whale, beluga, eyes (Alaska Native)'
        }, {
                value: 'Whale, beluga, meat, raw (Alaska Native)'
        }, {
                value: 'Whale, beluga, flipper, raw (Alaska Native)'
        }, {
                value: 'Whale, beluga, liver, raw (Alaska Native)'
        }, {
                value: 'Oil, beluga, whale (Alaska Native)'
        }, {
                value: 'Blackberries, wild, raw (Alaska Native)'
        }, {
                value: 'Fish, blackfish, whole (Alaska Native)'
        }, {
                value: 'Blueberries, wild, frozen (Alaska Native)'
        }, {
                value: 'Caribou, bone marrow, raw (Alaska Native)'
        }, {
                value: 'Caribou, eye, raw (Alaska Native)'
        }, {
                value: 'Caribou, liver, raw (Alaska Native)'
        }, {
                value: 'Stew/soup, caribou (Alaska Native)'
        }, {
                value: 'Caribou, tongue, raw (Alaska Native)'
        }, {
                value: 'Chiton, leathery, gumboots (Alaska Native)'
        }, {
                value: 'Cloudberries, raw (Alaska Native)'
        }, {
                value: 'Cockles, raw (Alaska Native)'
        }, {
                value: 'Cranberries, wild, bush, raw (Alaska Native)'
        }, {
                value: 'Cranberry, low bush or lingenberry, raw (Alaska Native)'
        }, {
                value: 'Fish, devilfish, meat (Alaska Native)'
        }, {
                value: 'Fireweed, young leaves, raw (Alaska Native)'
        }, {
                value: 'Fish, herring eggs on giant kelp, Pacific (Alaska Native)'
        }, {
                value: 'Fish, herring eggs, Pacific, dry (Alaska Native)'
        }, {
                value: 'Fish, herring eggs, Pacific, plain (Alaska Native)'
        }, {
                value: 'Fish, herring, Pacific, flesh, air-dried, packed in oil (Alaska Native)'
        }, {
                value: 'Huckleberries, raw (Alaska Native)'
        }, {
                value: 'Fish, lingcod, meat, raw (Alaska Native)'
        }, {
                value: 'Fish, lingcod, liver (Alaska Native)'
        }, {
                value: 'Stew, moose (Alaska Native)'
        }, {
                value: 'Moose, meat, raw (Alaska Native)'
        }, {
                value: 'Mashu roots, raw (Alaska Native)'
        }, {
                value: 'Moose, liver, braised (Alaska Native)'
        }, {
                value: 'Mouse nuts, roots (Alaska Native)'
        }, {
                value: 'Mouse nuts, seedlings (Alaska Native)'
        }, {
                value: 'Octopus (Alaska Native)'
        }, {
                value: 'Seal, bearded (Oogruk), meat, dried (Alaska Native)'
        }, {
                value: 'Seal, bearded (Oogruk), meat, raw (Alaska Native)'
        }, {
                value: 'Oil, bearded seal (Oogruk) (Alaska Native)'
        }, {
                value: 'Oopah (tunicate), whole animal (Alaska Native)'
        }, {
                value: 'Owl, horned, flesh, raw (Alaska Native)'
        }, {
                value: 'Fish, pike, northern, liver (Alaska Native)'
        }, {
                value: 'Rhubarb, wild, leaves (Alaska Native)'
        }, {
                value: 'Fish, salmon, tipnuk, fermented (Alaska Native)'
        }, {
                value: 'Fish, salmon, king, chinook, kippered, canned (Alaska Native)'
        }, {
                value: 'Fish, salmon, king, chinook, smoked and canned (Alaska Native)'
        }, {
                value: 'Fish, salmon, king, chinook, smoked, brined (Alaska Native)'
        }, {
                value: 'Fish, salmon, king, chinook, liver (Alaska Native)'
        }, {
                value: 'Duck, scoter, white-winged, meat (Alaska Native)'
        }, {
                value: 'Sea cucumber, yane (Alaska Native)'
        }, {
                value: 'Seal, ringed, meat (Alaska Native)'
        }, {
                value: 'Seal, ringed, liver (Alaska Native)'
        }, {
                value: 'Soup, fish, homemade (Alaska Native)'
        }, {
                value: 'Sourdock, young leaves (Alaska Native)'
        }, {
                value: 'Squirrel, ground, meat (Alaska Native)'
        }, {
                value: 'Tea, tundra, herb and laborador combination (Alaska Native)'
        }, {
                value: 'Walrus, meat, dried (Alaska Native)'
        }, {
                value: 'Deer (venison), sitka, raw (Alaska Native)'
        }, {
                value: 'Walrus, meat, raw (Alaska Native)'
        }, {
                value: 'Walrus, meat and subcutaneous fat raw (Alaska Native)'
        }, {
                value: 'Walrus, liver, raw (Alaska Native)'
        }, {
                value: 'Oil, walrus (Alaska Native)'
        }, {
                value: 'Whale, bowhead, subcutaneous fat (blubber) (Alaska Native)'
        }, {
                value: 'Whale, bowhead, skin and subcutaneous fat (muktuk) (Alaska Native)'
        }, {
                value: 'Oil, whale, bowhead (Alaska Native)'
        }, {
                value: 'Fish, whitefish, broad, liver (Alaska Native)'
        }, {
                value: 'Fish, whitefish, mixed species, raw (Alaska Native)'
        }, {
                value: 'Fish, whitefish, broad, head, eyes, cheeks and soft bones (Alaska Native)'
        }, {
                value: 'Willow, leaves in oil (Alaska Native)'
        }, {
                value: 'Willow, young leaves, chopped (Alaska Native)'
        }, {
                value: 'Mush, blue corn with ash (Navajo)'
        }, {
                value: 'Cornmeal, blue (Navajo)'
        }, {
                value: 'Melon, banana (Navajo)'
        }, {
                value: 'Chilchen (Red Berry Beverage) (Navajo)'
        }, {
                value: 'Corn, dried (Navajo)'
        }, {
                value: 'Corn, white, steamed (Navajo)'
        }, {
                value: 'Cornmeal, white (Navajo)'
        }, {
                value: 'Cornmeal, yellow (Navajo)'
        }, {
                value: 'Squash, Indian, raw (Navajo)'
        }, {
                value: 'Squash, Indian, cooked, boiled (Navajo)'
        }, {
                value: 'Bread, kneel down (Navajo)'
        }, {
                value: 'Mutton, cooked, roasted (Navajo)'
        }, {
                value: 'Frybread, made with lard (Navajo)'
        }, {
                value: 'Tortilla, includes plain and from mutton sandwich (Navajo)'
        }, {
                value: 'Stew, dumpling with mutton (Navajo)'
        }, {
                value: 'Stew, hominy with mutton (Navajo)'
        }, {
                value: 'Stew, mutton, corn, squash (Navajo)'
        }, {
                value: 'Tamales (Navajo)'
        }, {
                value: 'Stew, steamed corn (Navajo)'
        }, {
                value: 'Fish, halibut, raw, with skin (Alaska Native)'
        }, {
                value: 'Fish, salmon, coho (silver), raw (Alaska Native)'
        }, {
                value: 'Fish, salmon, sockeye (red), raw (Alaska Native)'
        }, {
                value: 'Fish, Salmon, Chum, raw (Alaska Native)'
        }, {
                value: 'Fish, salmon, king (chinook), raw (Alaska Native)'
        }, {
                value: 'Salmonberries, raw (Alaska Native)'
        }, {
                value: 'Blueberries, wild, raw (Alaska Native)'
        }, {
                value: 'Oil, spotted seal (Alaska Native)'
        }, {
                value: 'Fish, salmon, red, canned, bones removed (Alaska Native)'
        }, {
                value: 'Fish, whitefish, eggs (Alaska Native)'
        }, {
                value: 'Caribou, rump meat, half dried (Alaska Native)'
        }, {
                value: 'Caribou, shoulder meat, dried (Alaska Native)'
        }, {
                value: 'Caribou, hind quarter meat, raw (Alaska Native)'
        }, {
                value: 'Seal, bearded (Oogruk), meat, dried, in oil (Alaska Native)'
        }, {
                value: 'Fish, whitefish, dried (Alaska Native)'
        }, {
                value: 'Fish, salmon, red, (sockeye), canned, smoked (Alaska Native)'
        }, {
                value: 'Fish, salmon, red, (sockeye), kippered (Alaska Native)'
        }, {
                value: 'Fish, salmon, king, with skin, kippered, (Alaska Native)'
        }, {
                value: 'Fish, sheefish, raw (Alaska Native)'
        }, {
                value: 'Seal, bearded (Oogruk), meat, low quadrant, raw (Alaska Native)'
        }, {
                value: 'Fish, salmon, chum, dried (Alaska Native)'
        }, {
                value: 'Elk, free range, ground, cooked patties (Shoshone Bannock)'
        }, {
                value: 'Elk, free range, ground, raw (Shoshone Bannock)'
        }, {
                value: 'Buffalo, free range, top round steak, raw (Shoshone Bannock)'
        }, {
                value: 'Seal, bearded (Oogruk), meat, partially dried (Alaska Native)'
        }, {
                value: 'Buffalo, free range, top round steak, cooked (Shoshone Bannock)'
        }, {
                value: 'Elk, free range, roast, eye of round, raw (Shoshone Bannock)'
        }, {
                value: 'Elk, free range, roast, eye of round, cooked (Shoshone Bannock)'
        }, {
                value: 'Chokecherries, raw, pitted (Shoshone Bannock)'
        }, {
                value: 'Steelhead trout, dried, flesh (Shoshone Bannock)'
        }, {
                value: 'Steelhead trout, boiled, canned (Alaska Native)'
        }, {
                value: 'Acorn stew (Apache)'
        }, {
                value: 'Corn, dried, yellow (Northern Plains Indians)'
        }, {
                value: 'Smelt, dried (Alaska Native)'
        }, {
                value: 'Frybread, made with lard (Apache)'
        }, {
                value: 'Corned beef and potatoes in tortilla (Apache)'
        }, {
                value: 'Tennis Bread, plain (Apache)'
        }, {
                value: 'Fish, halibut, cooked, with skin (Alaska Native)'
        }, {
                value: 'Salmon, red (sockeye), filets with skin, smoked (Alaska Native)'
        }, {
                value: 'Agave, raw (Southwest)'
        }, {
                value: 'Agave, cooked (Southwest)'
        }, {
                value: 'Agave, dried (Southwest)'
        }, {
                value: 'Cattail, Narrow Leaf Shoots (Northern Plains Indians)'
        }, {
                value: 'Lambsquarters, raw (Northern Plains Indians)'
        }, {
                value: 'Lambsquarters, steamed (Northern Plains Indians)'
        }, {
                value: 'Prickly pears, raw (Northern Plains Indians)'
        }, {
                value: 'Prickly pears, broiled (Northern Plains Indians)'
        }, {
                value: 'Prairie Turnips, raw (Northern Plains Indians)'
        }, {
                value: 'Prairie Turnips, boiled (Northern Plains Indians)'
        }, {
                value: 'Raspberries, wild (Northern Plains Indians)'
        }, {
                value: 'Rose Hips, wild (Northern Plains Indians)'
        }, {
                value: 'Chokecherries, raw, pitted (Northern Plains Indians)'
        }, {
                value: 'Stinging Nettles, blanched (Northern Plains Indians)'
        }, {
                value: 'Plums, wild (Northern Plains Indians)'
        }, {
                value: 'Pinon Nuts, roasted (Navajo)'
        }, {
                value: 'Caribou, hind quarter, meat, cooked (Alaska Native)'
        }, {
                value: 'Agutuk, fish with shortening (Alaskan ice cream) (Alaska Native)'
        }, {
                value: 'Sea lion, Steller, liver (Alaska Native)'
        }, {
                value: 'Sea lion, Steller, kidney (Alaska Native)'
        }, {
                value: 'Sea lion, Steller, heart (Alaska Native)'
        }, {
                value: 'Sea lion, Steller, meat (Alaska Native)'
        }, {
                value: 'Sea lion, Steller, meat with fat (Alaska Native)'
        }, {
                value: 'Sea lion, Steller, fat (Alaska Native)'
        }, {
                value: 'Wocas, dried seeds, Oregon, yellow pond lily (Klamath)'
        }, {
                value: 'Hazelnuts, beaked (Northern Plains Indians)'
        }, {
                value: 'Piki bread, made from blue cornmeal (Hopi)'
        }, {
                value: 'Wocas, tuber, cooked, Oregon, yellow pond lily (Klamath)'
        }, {
                value: 'Stew, pinto bean and hominy, badufsuki (Hopi)'
        }, {
                value: 'Tamales, masa and pork filling (Hopi)'
        }, {
                value: 'Tea, herbal, brewed, Hohoysi (Hopi)'
        }, {
                value: 'Tortilla, blue corn, Sakwavikaviki (Hopi)'
        }, {
                value: 'Bread, blue corn, somiviki (Hopi)'
        }, {
                value: 'APPLEBEES, 9 oz house sirloin steak'
        }, {
                value: 'APPLEBEES, Double Crunch Shrimp'
        }, {
                value: 'APPLEBEES, french fries'
        }, {
                value: 'APPLEBEES, KRAFT, Macaroni & Cheese, from kids menu'
        }, {
                value: 'APPLEBEES, mozzarella sticks'
        }, {
                value: 'APPLEBEES, chicken tenders, from kids menu'
        }, {
                value: 'T.G.I. FRIDAYS, FRIDAYS Shrimp, breaded'
        }, {
                value: 'T.G.I. FRIDAYS, french fries'
        }, {
                value: 'T.G.I. FRIDAYS, fried mozzarella'
        }, {
                value: 'T.G.I. FRIDAYS, macaroni & cheese, from kids menu'
        }, {
                value: 'T.G.I. FRIDAYS, chicken fingers, from kids menu'
        }, {
                value: 'T.G.I. FRIDAYS, classic sirloin steak (10 oz)'
        }, {
                value: 'Restaurant, family style, fried mozzarella sticks'
        }, {
                value: 'Restaurant, family style, sirloin steak'
        }, {
                value: 'Restaurant, family style, french fries'
        }, {
                value: 'Restaurant, family style, chicken fingers, from kids menu'
        }, {
                value: 'Restaurant, family style, shrimp, breaded and fried'
        }, {
                value: 'Restaurant, family style, macaroni & cheese, from kids menu'
        }, {
                value: 'APPLEBEES, fish, hand battered'
        }, {
                value: 'APPLEBEES, chili'
        }, {
                value: 'T.G.I. FRIDAYS, chicken fingers'
        }, {
                value: 'APPLEBEES, coleslaw'
        }, {
                value: 'APPLEBEES, crunchy onion rings'
        }, {
                value: 'APPLEBEES, chicken tenders platter'
        }, {
                value: 'CRACKER BARREL, chicken tenderloin platter, fried'
        }, {
                value: 'CRACKER BARREL, coleslaw'
        }, {
                value: 'CRACKER BARREL, onion rings, thick-cut'
        }, {
                value: 'DENNYS, chicken strips'
        }, {
                value: 'DENNYS, coleslaw'
        }, {
                value: 'DENNYS, fish fillet, battered or breaded, fried'
        }, {
                value: 'DENNYS, hash browns'
        }, {
                value: 'DENNYS, onion rings'
        }, {
                value: 'DENNYS, spaghetti and meatballs'
        }, {
                value: 'Restaurant, family style, fish fillet, battered or breaded, fried'
        }, {
                value: 'Restaurant, family style, chicken tenders'
        }, {
                value: 'Restaurant, family style, coleslaw'
        }, {
                value: 'Restaurant, family style, onion rings'
        }, {
                value: 'Restaurant, family style, chili with meat and beans'
        }, {
                value: 'Restaurant, family style, spaghetti and meatballs'
        }, {
                value: 'Restaurant, family style, hash browns'
        }, {
                value: 'CRACKER BARREL, macaroni n cheese'
        }, {
                value: 'Restaurant, Italian, lasagna with meat'
        }, {
                value: 'OLIVE GARDEN, lasagna classico'
        }, {
                value: 'CARRABBAS ITALIAN GRILL, lasagne'
        }, {
                value: 'ON THE BORDER, Mexican rice'
        }, {
                value: 'ON THE BORDER, refried beans'
        }, {
                value: 'Restaurant, Italian, spaghetti with pomodoro sauce (no meat)'
        }, {
                value: 'OLIVE GARDEN, spaghetti with pomodoro sauce'
        }, {
                value: 'CARRABBAS ITALIAN GRILL, spaghetti with pomodoro sauce'
        }, {
                value: 'ON THE BORDER, cheese enchilada'
        }, {
                value: 'Restaurant, Mexican, cheese enchilada'
        }, {
                value: 'ON THE BORDER, cheese quesadilla'
        }, {
                value: 'Restaurant, Mexican, cheese quesadilla'
        }, {
                value: 'CARRABBAS ITALIAN GRILL, cheese ravioli with marinara sauce'
        }, {
                value: 'OLIVE GARDEN, cheese ravioli with marinara sauce'
        }, {
                value: 'Restaurant, Italian, cheese ravioli with marinara sauce'
        }, {
                value: 'Restaurant, Mexican, cheese tamales'
        }, {
                value: 'CARRABBAS ITALIAN GRILL, chicken parmesan without cavatappi pasta'
        }, {
                value: 'OLIVE GARDEN, chicken parmigiana without pasta'
        }, {
                value: 'Restaurant, Italian, chicken parmesan without pasta'
        }, {
                value: 'ON THE BORDER, soft taco with ground beef, cheese and lettuce'
        }, {
                value: 'Restaurant, Mexican, soft taco with ground beef, cheese and lettuce'
        }, {
                value: 'Restaurant, Latino, chicken and rice, entree, prepared'
        }, {
                value: 'Restaurant, Latino, empanadas, beef, prepared'
        }, {
                value: 'Restaurant, Latino, arroz con leche (rice pudding)'
        }, {
                value: 'Restaurant, Latino, Arroz con frijoles negros (rice and black beans)'
        }, {
                value: 'Restaurant, Latino, Arroz con habichuelas colorados (Rice And Red Beans)'
        }, {
                value: 'Restaurant, Latino, Arroz con grandules (rice and pigeonpeas)'
        }, {
                value: 'Restaurant, Latino, pupusas con frijoles (pupusas, bean)'
        }, {
                value: 'Restaurant, Latino, pupusas con queso (pupusas, cheese)'
        }, {
                value: 'Restaurant, Latino, pupusas del cerdo (pupusas, pork)'
        }, {
                value: 'Restaurant, Latino, tamale, corn'
        }, {
                value: 'Restaurant, Latino, tamale, pork'
        }, {
                value: 'Restaurant, Latino, black bean soup'
        }, {
                value: 'Restaurant, Latino, tripe soup'
        }, {
                value: 'Restaurant, Latino, arepa (unleavened cornmeal bread)'
        }, {
                value: 'Restaurant, Latino, bunuelos (fried yeast bread)'
        }, {
                value: 'Restaurant, Mexican, spanish rice'
        }, {
                value: 'Restaurant, Mexican, refried beans'
        }, {
                value: 'Restaurant, Chinese, egg rolls, assorted'
        }, {
                value: 'Restaurant, Chinese, fried rice, without meat'
        }, {
                value: 'Restaurant, Chinese, beef and vegetables'
        }, {
                value: 'CRACKER BARREL, chicken tenderloin platter, fried, from kids menu'
        }, {
                value: 'CRACKER BARREL, country fried shrimp platter'
        }, {
                value: 'CRACKER BARREL, farm raised catfish platter'
        }, {
                value: 'CRACKER BARREL, steak fries'
        }, {
                value: 'CRACKER BARREL, grilled sirloin steak'
        }, {
                value: 'CRACKER BARREL, macaroni n cheese plate, from kids menu'
        }, {
                value: 'DENNYS, french fries'
        }, {
                value: 'DENNYS, mozzarella cheese sticks'
        }, {
                value: 'DENNYS, golden fried shrimp'
        }, {
                value: 'DENNYS, macaroni & cheese, from kids menu'
        }, {
                value: 'DENNYS, chicken nuggets, star shaped, from kids menu'
        }, {
                value: 'DENNYS, top sirloin steak'
        }, {
                value: 'Restaurant, Chinese, lemon chicken'
        }, {
                value: 'Restaurant, Chinese, general tsos chicken'
        }, {
                value: 'Restaurant, Chinese, kung pao chicken'
        }, {
                value: 'Restaurant, Chinese, shrimp and vegetables'
        }, {
                value: 'Restaurant, Chinese, sweet and sour chicken'
        }, {
                value: 'Restaurant, Chinese, sweet and sour pork'
        }, {
                value: 'Restaurant, Chinese, chicken chow mein'
        }, {
                value: 'Restaurant, Chinese, vegetable chow mein, without meat or noodles'
        }, {
                value: 'Restaurant, Chinese, vegetable lo mein, without meat'
        }, {
                value: 'Restaurant, Chinese, chicken and vegetables'
        }, {
                value: 'Restaurant, Chinese, orange chicken'
        }, {
                value: 'Restaurant, Italian, spaghetti with meat sauce'
        }, {
                value: 'OLIVE GARDEN, spaghetti with meat sauce'
        }, {
                value: 'CARRABBAS ITALIAN GRILL, spaghetti with meat sauce'
        }, {
                value: 'Restaurant, Chinese, sesame chicken'
        }, {
                value: 'Syrups, grenadine'
        }, {
                value: 'Beverages, fruit-flavored drink, dry powdered mix, low calorie, with aspartame'
        }, {
                value: 'Pectin, liquid'
        }, {
                value: 'Frozen novelties, ice cream type, vanilla ice cream, light, no sugar added, chocolate coated'
        }, {
                value: 'Creamy dressing, made with sour cream and/or buttermilk and oil, reduced calorie'
        }, {
                value: 'Imitation cheese, american or cheddar, low cholesterol'
        }, {
                value: 'Babyfood, banana juice with low fat yogurt'
        }, {
                value: 'Babyfood, mixed fruit juice with low fat yogurt'
        }, {
                value: 'Turkey ham, sliced, extra lean, prepackaged or deli-sliced'
        }, {
                value: 'Bologna, beef and pork, low fat'
        }, {
                value: 'Milk dessert, frozen, milk-fat free, chocolate'
        }, {
                value: 'Whipped topping, frozen, low fat'
        }, {
                value: 'Cream substitute, powdered, light'
        }, {
                value: 'Salad dressing, peppercorn dressing, commercial, regular'
        }, {
                value: 'Mayonnaise, reduced-calorie or diet, cholesterol-free'
        }, {
                value: 'Granola bar, soft, milk chocolate coated, peanut butter'
        }, {
                value: 'Salad dressing, italian dressing, reduced calorie'
        }, {
                value: 'Cream substitute, liquid, light'
        }, {
                value: 'Candies, MARS SNACKFOOD US, M&Ms Peanut Butter Chocolate Candies'
        }, {
                value: 'Babyfood, apple yogurt dessert, strained'
        }, {
                value: 'Vegetable oil-butter spread, reduced calorie'
        }, {
                value: 'Salad dressing, blue or roquefort cheese dressing, light'
        }, {
                value: 'Cheese, monterey, low fat'
        }, {
                value: 'Creamy dressing, made with sour cream and/or buttermilk and oil, reduced calorie, fat-free'
        }, {
                value: 'Creamy dressing, made with sour cream and/or buttermilk and oil, reduced calorie, cholesterol-free'
        }, {
                value: 'Bologna, beef, low fat'
        }, {
                value: 'Salad dressing, french dressing, reduced calorie'
        }, {
                value: 'Turkey and pork sausage, fresh, bulk, patty or link, cooked'
        }, {
                value: 'Mayonnaise, made with tofu'
        }, {
                value: 'Frankfurter, beef, low fat'
        }, {
                value: 'Candies, MARS SNACKFOOD US, TWIX chocolate fudge cookie bars'
        }, {
                value: 'Frozen yogurts, chocolate, nonfat milk, sweetened without sugar'
        }, {
                value: 'Frozen yogurts, chocolate'
        }, {
                value: 'Frozen yogurts, flavors other than chocolate'
        }, {
                value: 'Milk, buttermilk, fluid, cultured, reduced fat'
        }, {
                value: 'Pork sausage rice links, brown and serve, cooked'
        }, {
                value: 'Salad dressing, blue or roquefort cheese dressing, fat-free'
        }, {
                value: 'Salad Dressing, mayonnaise-like, fat-free'
        }, {
                value: 'Candies, MARS SNACKFOOD US, MILKY WAY Midnight Bar'
        }, {
                value: 'Rice cake, cracker (include hain mini rice cakes)'
        }, {
                value: 'Cheese, pasteurized process, cheddar or American, fat-free'
        }, {
                value: 'Candies, MARS SNACKFOOD US, M&Ms Almond Chocolate Candies'
        }, {
                value: 'Salad Dressing, coleslaw dressing, reduced fat'
        }, {
                value: 'Oil, flaxseed, cold pressed'
        }, {
                value: 'Cheese, cottage, lowfat, 1% milkfat, lactose reduced'
        }, {
                value: 'Cereals ready-to-eat, frosted oat cereal with marshmallows'
        }, {
                value: 'Cereals ready-to-eat, WEETABIX whole grain cereal'
        }, {
                value: 'Cereals ready-to-eat, POST, HONEY BUNCHES OF OATS, with almonds'
        }, {
                value: 'Margarine-like, vegetable oil spread, stick or tub, sweetened'
        }, {
                value: 'Cheese product, pasteurized process, cheddar, reduced fat'
        }, {
                value: 'Snacks, popcorn, home-prepared, oil-popped, unsalted'
        }, {
                value: 'Cereals ready-to-eat, POST, GREAT GRAINS Crunchy Pecan Cereal'
        }, {
                value: 'Cereals ready-to-eat, POST, GREAT GRAINS, Raisin, Date & Pecan'
        }, {
                value: 'Babyfood, juice, apple-sweet potato'
        }, {
                value: 'Babyfood, juice, orange-carrot'
        }, {
                value: 'Beverages, Orange juice drink'
        }, {
                value: 'Snacks, granola bar, with coconut, chocolate coated'
        }, {
                value: 'Babyfood, vegetable and brown rice, strained'
        }, {
                value: 'Babyfood, peas and brown rice'
        }, {
                value: 'Frankfurter, meat and poultry, low fat'
        }, {
                value: 'Gums, seed gums (includes locust bean, guar)'
        }, {
                value: 'Snacks, potato chips, white, restructured, baked'
        }, {
                value: 'Babyfood, baked product, finger snacks cereal fortified'
        }, {
                value: 'Babyfood, cereal, brown rice, dry, instant'
        }, {
                value: 'Babyfood, green beans and turkey, strained'
        }, {
                value: 'Oil, corn and canola'
        }, {
                value: 'Milk, fluid, nonfat, calcium fortified (fat free or skim)'
        }, {
                value: 'Peanut butter, reduced sodium'
        }, {
                value: 'Cereals ready-to-eat, POST GREAT GRAINS Banana Nut Crunch'
        }, {
                value: 'Cheese, muenster, low fat'
        }, {
                value: 'Cheese, mozzarella, nonfat'
        }, {
                value: 'Margarine-like, butter-margarine blend, 80% fat, stick, without salt'
        }, {
                value: 'Margarine-like, vegetable oil-butter spread, reduced calorie, tub, with salt'
        }, {
                value: 'Babyfood, carrots, toddler'
        }, {
                value: 'Babyfood, dessert, banana pudding, strained'
        }, {
                value: 'Babyfood, fruit, tutti frutti, strained'
        }, {
                value: 'Babyfood, fruit, tutti frutti, junior'
        }, {
                value: 'Babyfood, dinner, chicken and rice'
        }, {
                value: 'Salad dressing, caesar dressing, regular'
        }, {
                value: 'Salad dressing, coleslaw'
        }, {
                value: 'Salad dressing, green goddess, regular'
        }, {
                value: 'Salad dressing, sweet and sour'
        }, {
                value: 'Salad dressing, blue or roquefort cheese, low calorie'
        }, {
                value: 'Salad dressing, caesar, low calorie'
        }, {
                value: 'Syrups, sugar free'
        }, {
                value: 'Jellies, no sugar (with sodium saccharin), any flavors'
        }, {
                value: 'Jams and preserves, no sugar (with sodium saccharin), any flavor'
        }, {
                value: 'Candies, chocolate covered, caramel with nuts'
        }, {
                value: 'Candies, nougat, with almonds'
        }, {
                value: 'Candies, gum drops, no sugar or low calorie (sorbitol)'
        }, {
                value: 'Candies, hard, dietetic or low calorie (sorbitol)'
        }, {
                value: 'Candies, chocolate covered, low sugar or low calorie'
        }, {
                value: 'Chewing gum, sugarless'
        }, {
                value: 'Fluid replacement, electrolyte solution (include PEDIALYTE)'
        }, {
                value: 'Beverage, milkshake mix, dry, not chocolate'
        }, {
                value: 'Pie fillings, cherry, low calorie'
        }, {
                value: 'Breakfast bars, oats, sugar, raisins, coconut (include granola bar)'
        }, {
                value: 'Pretzels, soft'
        }, {
                value: 'Beans, chili, barbecue, ranch style, cooked'
        }, {
                value: 'Vermicelli, made from soy'
        }, {
                value: 'Beans, liquid from stewed kidney beans'
        }, {
                value: 'Chicken, meatless'
        }, {
                value: 'Frankfurter, meatless'
        }, {
                value: 'Luncheon slices, meatless'
        }, {
                value: 'Meatballs, meatless'
        }, {
                value: 'Vegetarian fillets'
        }, {
                value: 'Sandwich spread, meatless'
        }, {
                value: 'Vegetarian meatloaf or patties'
        }, {
                value: 'Radishes, hawaiian style, pickled'
        }, {
                value: 'Cabbage, japanese style, fresh, pickled'
        }, {
                value: 'Cabbage, mustard, salted'
        }, {
                value: 'Eggplant, pickled'
        }, {
                value: 'Alcoholic beverage, wine, cooking'
        }, {
                value: 'Alcoholic beverage, wine, light'
        }, {
                value: 'Sweeteners, tabletop, saccharin (sodium saccharin)'
        }, {
                value: 'Beverage, instant breakfast powder, chocolate, not reconstituted'
        }, {
                value: 'Bacon bits, meatless'
        }, {
                value: 'Butter replacement, without fat, powder'
        }, {
                value: 'Salad dressing, buttermilk, lite'
        }, {
                value: 'Sweeteners, tabletop, fructose, dry, powder'
        }, {
                value: 'Tomato sauce, canned, no salt added'
        }, {
                value: 'Cereals ready-to-eat, ALPEN'
        }, {
                value: 'Cereals ready-to-eat, FAMILIA'
        }, {
                value: 'Cereals ready-to-eat, wheat and bran, presweetened with nuts and fruits'
        }, {
                value: 'Beverage, instant breakfast powder, chocolate, sugar-free, not reconstituted'
        }, {
                value: 'Yogurt, fruit variety, nonfat'
        }, {
                value: 'Whipped cream substitute, dietetic, made from powdered mix'
        }, {
                value: 'Frozen novelties, ice cream type, sundae, prepackaged'
        }, {
                value: 'Cheese, cottage, with vegetables'
        }, {
                value: 'Cheese, cream, low fat'
        }, {
                value: 'Cheese, pasteurized process, American, low fat'
        }, {
                value: 'Cheese spread, cream cheese base'
        }, {
                value: 'Cheese, american cheddar, imitation'
        }, {
                value: 'Quail, cooked, total edible'
        }, {
                value: 'Pheasant, cooked, total edible'
        }, {
                value: 'Eggs, scrambled, frozen mixture'
        }, {
                value: 'Dove, cooked (includes squab)'
        }, {
                value: 'Pork, oriental style, dehydrated'
        }, {
                value: 'Soybean, curd cheese'
        }, {
                value: 'Potatoes, canned, drained solids, no salt added'
        }, {
                value: 'Vegetables, mixed (corn, lima beans, peas, green beans, carrots) canned, no salt added'
        }, {
                value: 'Pork, cured, ham, boneless, low sodium, extra lean and regular, roasted'
        }, {
                value: 'Pork, cured, ham, low sodium, lean and fat, cooked'
        }, {
                value: 'Pork, cured, ham, boneless, low sodium, extra lean (approximately 5% fat), roasted'
        }, {
                value: 'Salad dressing, mayonnaise and mayonnaise-type, low calorie'
        }, {
                value: 'Salad dressing, bacon and tomato'
        }, {
                value: 'Cheese, parmesan, low sodium'
        }, {
                value: 'Jams, preserves, marmalade, reduced sugar'
        }, {
                value: 'Beverages, fruit-flavored drink, powder, with high vitamin C with other added vitamins, low calorie'
        }, {
                value: 'Frozen novelties, juice type, orange'
        }, {
                value: 'Cheese, cottage, lowfat, 1% milkfat, no sodium added'
        }, {
                value: 'Mayonnaise, low sodium, low calorie or diet'
        }, {
                value: 'Snacks, tortilla chips, unsalted, white corn'
        }, {
                value: 'Tomato and vegetable juice, low sodium'
        }, {
                value: 'Turkey, wing, smoked, cooked, with skin, bone removed'
        }, {
                value: 'Turkey, drumstick, smoked, cooked, with skin, bone removed'
        }, {
                value: 'Beverages, Chocolate-flavored drink, whey and milk based'
        }, {
                value: 'Babyfood, dinner, chicken and noodle with vegetables, toddler'
        }, {
                value: 'Pork, cured, bacon, cooked, broiled, pan-fried or roasted, reduced sodium'
        }, {
                value: 'Cheese, pasteurized process, swiss, low fat'
        }, {
                value: 'Cranberry juice, unsweetened'
        }, {
                value: 'Beef, bologna, reduced sodium'
        }, {
                value: 'Turnip greens, canned, no salt added'
        }, {
                value: 'Turkey, light or dark meat, smoked, cooked, with skin, bone removed'
        }, {
                value: 'Turkey, light or dark meat, smoked, cooked, skin and bone removed'
        }, {
                value: 'Hearts of palm, raw'
        }, {
                value: 'Cereals ready-to-eat, POST, Shredded Wheat n Bran, spoon-size'
        }, {
                value: 'Cheese, cottage, lowfat, 1% milkfat, with vegetables'
        }, {
                value: 'Cheese, pasteurized process, cheddar or American, low sodium'
        }, {
                value: 'Beverages, coffee, instant, with whitener, reduced calorie'
        }, {
                value: 'Beverages, cranberry-apple juice drink, low calorie, with vitamin C added'
        }, {
                value: 'Cheese, swiss, low sodium'
        }, {
                value: 'Yeast extract spread'
        }, {
                value: 'Babyfood, juice, pear'
        }, {
                value: 'Chicken, meatless, breaded, fried'
        }, {
                value: 'Babyfood, meat, beef with vegetables, toddler'
        }, {
                value: 'Babyfood, dinner, macaroni, beef and tomato sauce, toddler'
        }, {
                value: 'Rolls, pumpernickel'
        }, {
                value: 'Snacks, corn-based, extruded, chips, unsalted'
        }, {
                value: 'Beans, baked, canned, no salt added'
        }, {
                value: 'Frozen novelties, juice type, juice with cream'
        }, {
                value: 'Tofu yogurt'
        }, {
                value: 'Alcoholic beverage, rice (sake)'
        }, {
                value: 'Millet, puffed'
        }, {
                value: 'Cereals ready-to-eat, OAT BRAN FLAKES, HEALTH VALLEY'
        }, {
                value: 'Jellyfish, dried, salted'
        }, {
                value: 'Frozen novelties, ice cream type, chocolate or caramel covered, with nuts'
        }, {
                value: 'Frankfurter, low sodium'
        }, {
                value: 'Frozen novelties, ice type, pop, with low calorie sweetener'
        }, {
                value: 'Babyfood, mixed fruit yogurt, strained'
        }, {
                value: 'Beverages, ABBOTT, ENSURE PLUS, ready-to-drink'
        }, {
                value: 'Babyfood, rice and apples, dry'
        }, {
                value: 'Babyfood, juice, apple - cherry'
        }, {
                value: 'Babyfood, dessert, peach yogurt'
        }, {
                value: 'Babyfood, dessert, blueberry yogurt, strained'
        }, {
                value: 'Babyfood, dessert, banana yogurt, strained'
        }, {
                value: 'Ice creams, chocolate, rich'
        }, {
                value: 'Milk, imitation, non-soy'
        }, {
                value: 'Babyfood, cereal, rice with pears and apple, dry, instant fortified'
        }, {
                value: 'Babyfood, banana no tapioca, strained'
        }, {
                value: 'Babyfood, banana apple dessert, strained'
        }, {
                value: 'Snacks, tortilla chips, light (baked with less oil)'
        }, {
                value: 'Cereals ready-to-eat, POST, HONEY BUNCHES OF OATS, honey roasted'
        }, {
                value: 'Popcorn, microwave, low fat and sodium'
        }, {
                value: 'Babyfood, fruit supreme dessert'
        }, {
                value: 'Cheese, swiss, low fat'
        }, {
                value: 'Breakfast bar, corn flake crust with fruit'
        }, {
                value: 'Cheese, mozzarella, low sodium'
        }, {
                value: 'Mayonnaise dressing, no cholesterol'
        }, {
                value: 'Oil, corn, peanut, and olive'
        }, {
                value: 'Sweeteners, tabletop, fructose, liquid'
        }, {
                value: 'Cheese food, pasteurized process, American, imitation, without added vitamin D'
        }, {
                value: 'Celery flakes, dried'
        }, {
                value: 'Puddings, chocolate flavor, low calorie, instant, dry mix'
        }, {
                value: 'Babyfood, grape juice, no sugar, canned'
        }, {
                value: 'Jellies, reduced sugar, home preserved'
        }, {
                value: 'Pie fillings, blueberry, canned'
        }, {
                value: 'Beverages, Cocktail mix, non-alcoholic, concentrated, frozen'
        }, {
                value: 'Puddings, chocolate flavor, low calorie, regular, dry mix'
        }, {
                value: 'Puddings, all flavors except chocolate, low calorie, regular, dry mix'
        }, {
                value: 'Puddings, all flavors except chocolate, low calorie, instant, dry mix'
        }, {
                value: 'Vital wheat gluten'
        }, {
                value: 'Frog legs, raw'
        }, {
                value: 'Fish, mackerel, salted'
        }, {
                value: 'Mollusks, scallop, (bay and sea), cooked, steamed'
        }, {
                value: 'Syrup, Cane'
        }, {
                value: 'Mollusks, snail, raw'
        }, {
                value: 'Turtle, green, raw'
        }];

        // setup autocomplete function pulling from foodList[] array



        $('#autocomplete').autocomplete({
                lookup: foodList,
                lookupLimit: 14,
                maxHeight: 99999,
                zIndex: 2,
                onSelect: function(food) {
                        var ingredient = food.value;
                        groceries.push(ingredient);

                        groceryRef.push({
                                INGREDIENT: ingredient
                        });

                        printGroceries();
                        $('#autocomplete').val('');
                }


        });

});