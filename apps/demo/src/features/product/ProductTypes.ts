// Used https://transform.tools/json-to-typescript to generate these types from
// a sample API response
export type ProductResponse = {
  took: number
  timed_out: boolean
  _shards: {
    total: number
    successful: number
    failed: number
  }
  hits: {
    total: number
    max_score: number
    hits: {
      _index: string
      _type: string
      _id: string
      _score: number
      _source: Product
      sort: number[]
    }[]
  }
  aggregations: {
    Allergens: {
      doc_count_error_upper_bound: number
      sum_other_doc_count: number
      buckets: {
        key: string
        doc_count: number
      }[]
    }
    Categories: {
      doc_count_error_upper_bound: number
      sum_other_doc_count: number
      buckets: {
        key: string
        doc_count: number
      }[]
    }
  }
  suggest: {
    simple_phrase: {
      text: string
      offset: number
      length: number
      options: unknown[]
    }[]
  }
  searchType: string
}

export type Product = {
  ageLimit: number
  alcoholPercentage: number
  allergens: Allergen[]
  allergyDeclaration?: string
  associated?: Associated
  assortmentGroup: unknown[]
  availableInventory: unknown
  brand?: string
  calcPricePerUnit: number
  calcUnit: string
  calcUnitType: string
  categoryName: string
  comparePricePerUnit?: number
  compareUnit: string
  containsAlcohol: boolean
  countryOfOrigin: string
  coupon: unknown
  customDescription?: string
  description?: string
  ean: string
  environmentalCodes: EnvironmentalCode[]
  epdNumber: number
  guidelineDailyAmount: unknown[]
  imageGtin: string
  imagePath: string
  ingredients?: string
  isBreadAndCanSlice: boolean
  isForSale: boolean
  isFreshProduce: boolean
  isLocal: boolean
  isMedicin: boolean
  isNew: boolean
  isOffer: boolean
  isOutOfStock: boolean
  isRevoked: boolean
  leadTime: unknown[]
  measurementType: string
  measurementValue: number
  minimumDurability?: number
  mustOrderFromSupplier: boolean
  notForSaleText?: string
  nutritionalContent: NutritionalContent[]
  offerDiscountPerUnit?: number
  organic: boolean
  originAndProvenance?: string
  packageSize?: string
  pricePerUnit: number
  pricePerUnitOriginal: number
  productByWeightSoldAsItem: boolean
  productionCountry: string
  productSoldByWeight: boolean
  promotionDisplayName: string
  promotionId?: number
  promotionPriceFromPromotionId?: number
  promotions: Promotion[]
  recycleValue: number
  relevantInfo?: string
  servingSize: number
  shoppingListGroupIds: number[]
  shoppingListGroupName: string
  shoppingListGroupName1?: string
  shoppingListGroupName2?: string
  slugifiedUrl: string
  storage?: Storage
  storeId: string
  subtitle: string
  supplierId: number
  title: string
  unit: string
  unitRule: number
  unitRules: number
  unitType: string
  unitWeight?: number
  usesPromotionPrice: boolean
  vendor: string
  vitaminsMinerals: VitaminsMineral[]
  weight: number
}

export type VitaminsMineral = {
  amount: number
  unit: string
  displayName: string
  name: string
}

export type EnvironmentalCode = {
  code?: string
  displayName: string
  name: string
}

export type Storage = {
  maxTemperature: number
  minTemperature: number
}

export type NutritionalContent = {
  amount: number
  unit: string
  displayName: string
  name: string
}

export type Allergen = {
  code: string
  displayName: string
  name: string
}

export type Promotion = {
  promoMarketTextLong?: string
  marketTextLong?: string
  hasPriority: boolean
  weightProduct: boolean
  productCardTitle?: string
  promoComparePricePerUnit?: number
  type: number
  trumfCampaign: boolean
  promoProductCardTitle?: string
  promoCalcPricePerUnit?: number
  promotionId: number
  tags: string[]
  promoName: string
  alternativePrice?: number
  comparablePrice?: number
  isMarketed: boolean
  name: string
  from: string
  to: string
  status: number
  promotionPrice?: number
  promoCalcUnitType?: string
  promoCompareUnitType?: string
  promoPricePerUnit?: number
  promoCompareUnit?: string
  promoCalcUnit?: string
  promoUnit?: string
  promoUnitType?: string
  freeText?: string
  promoFreeText?: string
  promoSubtitle?: string
  subtitle?: string
  fulfillmentThreshold?: number
  mixMatchPriority?: number
  promoMarketText?: string
  marketText?: string
}

export type Associated = {
  products: string[]
  slg: string[]
}
