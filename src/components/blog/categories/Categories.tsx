import { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_BLOGS_CATEGORIES } from '@queries'
import { Link as RouterLink } from 'react-router-dom'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import Chip from '@mui/material/Chip'
import { ChipsSkelleton, NoResults, QueryError } from '@components'
import { useTranslation } from 'react-i18next'

import {
    categoriesResponseTransformer,
    sanitizeLanguage,
    singleCategoryProps,
} from '@utils'

import type { ReactElement } from 'react'
import { styles } from './styles'

type CategoriesProps = {
    pathname: string
}

const Categories = ({ pathname }: CategoriesProps): ReactElement | null => {
    const { t } = useTranslation()
    const [categories, setCategories] = useState<singleCategoryProps[] | null>(
        null
    )
    const [getCategories, { loading, error, data }] = useLazyQuery(
        GET_BLOGS_CATEGORIES,
        {
            variables: {
                locale: sanitizeLanguage(),
            },
        }
    )

    useEffect(() => {
        if (data) {
            setCategories(categoriesResponseTransformer(data))
        }
    }, [data])

    useEffect(() => {
        getCategories()
    }, [getCategories])

    return (
        <Grid
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
            sx={styles.categoriesContainer}
        >
            {loading ? <ChipsSkelleton /> : null}
            {error ? <QueryError message={t('errorCategories')} /> : null}
            {categories?.length && !loading && !error
                ? categories.map(
                      (category: singleCategoryProps): ReactElement => (
                          <Chip
                              key={category.name}
                              label={category.name}
                              component={RouterLink}
                              sx={{
                                  backgroundColor: category.color,
                                  ...styles.categoryChip,
                              }}
                              to={`${pathname}?categories=${category.slug}`}
                              clickable
                          />
                      )
                  )
                : null}
            {categories?.length === 0 && !loading && !error ? (
                <NoResults message={t('noResultsCategories')} />
            ) : null}
        </Grid>
    )
}

export default Categories
