import { Component ,OnInit} from '@angular/core';
import { CommonModule} from '@angular/common';

interface Tab {
  id: string;
  label: string;
  code: string;
}

interface Card {
  id: string;
  title: string;
  img: string;
  shortDesc: string;
  longDesc: string;
}

@Component({
  standalone: true,
  selector: 'app-ingredients',
  imports: [CommonModule],
templateUrl: './ingrediants.component.html',
styleUrls: ['./ingrediants.component.scss'],

})
export class IngredientsComponent implements OnInit {
   
  activeTabGroup = 'Essentials';
selectedTab = 'All';
selectedLetter = 'A';
 ngOnInit(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }
alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

essentialsTabs: Tab[] = [
  { id: 'tab1', label: 'All', code: 'All' },
  { id: 'tab2', label: 'Vitamins & Minerals', code: 'VTM' },
  { id: 'tab3', label: 'Raw Superfoods, Greens, Fruits & Herbs Complex', code: 'RF' },
  { id: 'tab4', label: 'Probiotics Complex', code: 'PRO' },
  { id: 'tab5', label: 'Joint & Muscle Vitality', code: 'JMV' },
  { id: 'tab6', label: 'Hydra Electrolytes Complex', code: 'HEC' },
  { id: 'tab7', label: 'Heart Health Support', code: 'HHS' },
  { id: 'tab8', label: 'Essential Amino & Renew Complex', code: 'EAR' },
  { id: 'tab9', label: 'CRT8', code: 'CRT8' },
  { id: 'tab10', label: 'Postbiotics', code: 'POST' },
  { id: 'tab11', label: 'Digestive enzymes, adaptogens & super mushrooms complex', code: 'DESC' }
];
 ingredientCards: Card[] = [
    // Add your ingredient card data here
  ];

  selectTabGroup(group: string): void {
    this.activeTabGroup = group;
    this.selectedTab = 'All';
    this.selectedLetter = 'A';
  }

  selectMainTab(code: string): void {
    this.selectedTab = code;
    this.selectedLetter = 'A';
  }

  selectLetter(letter: string): void {
    this.selectedLetter = letter;
  }

  get filteredCards(): Card[] {
    return this.ingredientCards.filter(card =>
      card.title.charAt(0).toUpperCase() === this.selectedLetter
    );
  }
vitamins = [
  {
    title: 'Vitamin A (as Retinyl palmitate)',
    img: 'https://destina1.com/images/ingredients//Vitamins_A_C_and_E.webp',
    desc: 'Retinyl Palmitate is a highly absorbable form of Vitamin A that supports vision, skin health, immune function, and offers superior bioavailability.'
  },
  {
    title: 'Vitamin B2 (as Riboflavin)',
    img: 'https://destina1.com/images/ingredients/B_Vitamins.webp',
    desc: 'Riboflavin is a vital form of Vitamin B2 that supports energy production, promotes healthy skin, and enhances antioxidant defenses for overall wellness.'
  },
  {
    title: 'Vitamin B6 (as Pyridoxine HCl)',
    img:	'https://destina1.com/images/ingredients/Copper.webp',
    desc: 'Pyridoxine HCl supports brain function, boosts metabolism, and promotes healthy nerve and immune systems.'
  },
  {
    title: 'Vitamin B12 (as Methylcobalamin)',
    img: 'https://destina1.com/images/ingredients/Vitamin_B12.webp',
    desc: 'Methylcobalamin supports nerve health, boosts energy, and enhances cognitive function with superior absorption.'
  }
];
vitamins1 = [
  {
    title: 'Biotin',
    img: '	https://destina1.com/images/ingredients/biotin_1.webp',
    desc: 'Biotin is a key B-vitamin that supports healthy hair, skin, and nails, boosts energy metabolism, and contributes to overall metabolic health'
  },
  {
    title: 'Vitamin C (as Ascorbic acid)',
    img: 'https://destina1.com/images/ingredients/Vitamins_A_C_and_E.webp',
    desc: 'Ascorbic Acid is a pure, fast-absorbing form of Vitamin C that strengthens immunity, boosts collagen, and enhances iron absorption with high bioavailability'
 },
  {
    title: 'Calcium (as Calcium citrate and Calcium phosphate)',
    img:	'https://destina1.com/images/ingredients/Calcium.webp',
    desc: 'Calcium Citrate and Calcium Phosphate are highly bioavailable forms of Calcium that support strong bones, enhance bone density, and promote overall skeletal health..'
  },
  {
    title: 'Choline (as Choline bitartrate)',
    img: 'https://destina1.com/images/ingredients/Choline.webp',
    desc: 'Choline Bitartrate is a highly absorbable form of Choline that supports brain health, enhances cognitive function, and aids in liver function.'
  }
];

vitamins2 = [
  {
    title: 'Vitamin A (as Retinyl palmitate)',
    img: 'https://destina1.com/images/ingredients//Vitamins_A_C_and_E.webp',
    desc: 'Retinyl Palmitate is a highly absorbable form of Vitamin A that supports vision, skin health, immune function, and offers superior bioavailability.'
  },
  {
    title: 'Vitamin B2 (as Riboflavin)',
    img: 'https://destina1.com/images/ingredients/B_Vitamins.webp',
    desc: 'Riboflavin is a vital form of Vitamin B2 that supports energy production, promotes healthy skin, and enhances antioxidant defenses for overall wellness.'
  },
  {
    title: 'Vitamin B6 (as Pyridoxine HCl)',
    img:	'https://destina1.com/images/ingredients/Copper.webp',
    desc: 'Pyridoxine HCl supports brain function, boosts metabolism, and promotes healthy nerve and immune systems.'
  },
  {
    title: 'Vitamin B12 (as Methylcobalamin)',
    img: 'https://destina1.com/images/ingredients/Vitamin_B12.webp',
    desc: 'Methylcobalamin supports nerve health, boosts energy, and enhances cognitive function with superior absorption.'
  }
];

vitamins3 = [
  {
    title: 'Vitamin A (as Retinyl palmitate)',
    img: 'https://destina1.com/images/ingredients//Vitamins_A_C_and_E.webp',
    desc: 'Retinyl Palmitate is a highly absorbable form of Vitamin A that supports vision, skin health, immune function, and offers superior bioavailability.'
  },
  {
    title: 'Vitamin B2 (as Riboflavin)',
    img: 'https://destina1.com/images/ingredients/B_Vitamins.webp',
    desc: 'Riboflavin is a vital form of Vitamin B2 that supports energy production, promotes healthy skin, and enhances antioxidant defenses for overall wellness.'
  },
  {
    title: 'Vitamin B6 (as Pyridoxine HCl)',
    img:	'https://destina1.com/images/ingredients/Copper.webp',
    desc: 'Pyridoxine HCl supports brain function, boosts metabolism, and promotes healthy nerve and immune systems.'
  },
  {
    title: 'Vitamin B12 (as Methylcobalamin)',
    img: 'https://destina1.com/images/ingredients/Vitamin_B12.webp',
    desc: 'Methylcobalamin supports nerve health, boosts energy, and enhances cognitive function with superior absorption.'
  }
];


vitamins4 = [
  {
    title: 'Biotin',
    img: '	https://destina1.com/images/ingredients/biotin_1.webp',
    desc: 'Biotin is a key B-vitamin that supports healthy hair, skin, and nails, boosts energy metabolism, and contributes to overall metabolic health'
  },
  {
    title: 'Vitamin C (as Ascorbic acid)',
    img: 'https://destina1.com/images/ingredients/Vitamins_A_C_and_E.webp',
    desc: 'Ascorbic Acid is a pure, fast-absorbing form of Vitamin C that strengthens immunity, boosts collagen, and enhances iron absorption with high bioavailability'
 },
  {
    title: 'Calcium (as Calcium citrate and Calcium phosphate)',
    img:	'https://destina1.com/images/ingredients/Calcium.webp',
    desc: 'Calcium Citrate and Calcium Phosphate are highly bioavailable forms of Calcium that support strong bones, enhance bone density, and promote overall skeletal health..'
  },
  {
    title: 'Choline (as Choline bitartrate)',
    img: 'https://destina1.com/images/ingredients/Choline.webp',
    desc: 'Choline Bitartrate is a highly absorbable form of Choline that supports brain health, enhances cognitive function, and aids in liver function.'
  }
];

vitamins5 = [
  {
    title: 'Vitamin A (as Retinyl palmitate)',
    img: 'https://destina1.com/images/ingredients//Vitamins_A_C_and_E.webp',
    desc: 'Retinyl Palmitate is a highly absorbable form of Vitamin A that supports vision, skin health, immune function, and offers superior bioavailability.'
  },
  {
    title: 'Vitamin B2 (as Riboflavin)',
    img: 'https://destina1.com/images/ingredients/B_Vitamins.webp',
    desc: 'Riboflavin is a vital form of Vitamin B2 that supports energy production, promotes healthy skin, and enhances antioxidant defenses for overall wellness.'
  },
  {
    title: 'Vitamin B6 (as Pyridoxine HCl)',
    img:	'https://destina1.com/images/ingredients/Copper.webp',
    desc: 'Pyridoxine HCl supports brain function, boosts metabolism, and promotes healthy nerve and immune systems.'
  },
  {
    title: 'Vitamin B12 (as Methylcobalamin)',
    img: 'https://destina1.com/images/ingredients/Vitamin_B12.webp',
    desc: 'Methylcobalamin supports nerve health, boosts energy, and enhances cognitive function with superior absorption.'
  }
];

vitamins6 = [
  {
    title: 'Biotin',
    img: '	https://destina1.com/images/ingredients/biotin_1.webp',
    desc: 'Biotin is a key B-vitamin that supports healthy hair, skin, and nails, boosts energy metabolism, and contributes to overall metabolic health'
  },
  {
    title: 'Vitamin C (as Ascorbic acid)',
    img: 'https://destina1.com/images/ingredients/Vitamins_A_C_and_E.webp',
    desc: 'Ascorbic Acid is a pure, fast-absorbing form of Vitamin C that strengthens immunity, boosts collagen, and enhances iron absorption with high bioavailability'
 },
  {
    title: 'Calcium (as Calcium citrate and Calcium phosphate)',
    img:	'https://destina1.com/images/ingredients/Calcium.webp',
    desc: 'Calcium Citrate and Calcium Phosphate are highly bioavailable forms of Calcium that support strong bones, enhance bone density, and promote overall skeletal health..'
  },
  {
    title: 'Choline (as Choline bitartrate)',
    img: 'https://destina1.com/images/ingredients/Choline.webp',
    desc: 'Choline Bitartrate is a highly absorbable form of Choline that supports brain health, enhances cognitive function, and aids in liver function.'
  }
];


vitamins7 = [
  {
    title: 'Biotin',
    img:'https://destina1.com/images/ingredients/Acai.webp',
    desc: 'Biotin is a key B-vitamin that supports healthy hair, skin, and nails, boosts energy metabolism, and contributes to overall metabolic health'
  },
  {
    title: 'Vitamin C (as Ascorbic acid)',
    img: 'https://destina1.com/images/ingredients/Agave.jpg',
    desc: 'Ascorbic Acid is a pure, fast-absorbing form of Vitamin C that strengthens immunity, boosts collagen, and enhances iron absorption with high bioavailability'
 },
  {
    title: 'Calcium (as Calcium citrate and Calcium phosphate)',
    img:	'https://destina1.com/images/ingredients/Apple.webp',
    desc: 'Calcium Citrate and Calcium Phosphate are highly bioavailable forms of Calcium that support strong bones, enhance bone density, and promote overall skeletal health..'
  },
  {
    title: 'Choline (as Choline bitartrate)',
    img: 'https://destina1.com/images/ingredients/Artichoke.webp',
    desc: 'Choline Bitartrate is a highly absorbable form of Choline that supports brain health, enhances cognitive function, and aids in liver function.'
  }
];
//
}
