import React, { useState } from 'react';

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import TabMenu from '@/components/shared/TabMenuUser';
import withAuth0 from '@/hoc/withAuth0';

const Transaction = (props) => {
    return (
        <BaseLayout>
            <BasePage>
                <TabMenu />
                <div className="containerUser">
                    <h1>Riwayat Transaksi</h1>
                </div>
            </BasePage>
        </BaseLayout>
    )
}

export default withAuth0(Transaction)("user");