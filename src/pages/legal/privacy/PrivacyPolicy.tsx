import { ReactElement, useEffect, useState } from 'react'
import { PageContainer, SocialGrid } from '@components'
import ReactMarkdown from 'react-markdown'
import { Helmet } from 'react-helmet-async'
import { makeStyles } from '@mui/styles'
import { aboutContentES, aboutContentEN } from './content'
import { sanitizeLanguage } from '@utils'
import { styles } from './styles'

import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(styles)

const PrivacyPolicy = (): ReactElement => {
    const { i18n } = useTranslation()
    const [translatedContent, setTranslatedContent] = useState<string>('')
    const classes = useStyles()

    useEffect(() => {
        setTranslatedContent(
            sanitizeLanguage() === 'es' ? aboutContentES : aboutContentEN
        )
    }, [i18n.language])

    return (
        <PageContainer>
            <Helmet>
                <title>
                    🔒 Privacy Policy | Rodrigo Gross Lopez - Senior React
                    Developer
                </title>
            </Helmet>
            <ReactMarkdown
                children={translatedContent}
                className={classes.markdownContent}
            />
            <SocialGrid />
        </PageContainer>
    )
}

export default PrivacyPolicy
